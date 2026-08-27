"""Translate the three additional Jacob Peake articles into structurally equivalent Chinese Markdown."""

from __future__ import annotations

import os
import re
import time
from pathlib import Path

from openai import OpenAI


ROOT = Path("/home/ubuntu/ai-chip-architectures-zh")
SOURCE_ROOT = Path("/home/ubuntu/page_texts")
OUTPUT_ROOT = ROOT / "client" / "src" / "content"
OUTPUT_ROOT.mkdir(parents=True, exist_ok=True)

ARTICLES = {
    "principles-of-computer-architecture": SOURCE_ROOT / "www.jacobpeake.com_principles-of-computer-architecture.md",
    "how-to-design-a-chip": SOURCE_ROOT / "www.jacobpeake.com_how-to-design-a-chip.md",
    "how-to-learn": SOURCE_ROOT / "www.jacobpeake.com_how-to-learn.md",
}

SYSTEM_PROMPT = """You are a senior technical translator translating an English article into Simplified Chinese.
Return Markdown only, with no preface or commentary. Preserve every heading level, Markdown link destination,
inline code, fenced code, equations, numerical value, unit, table structure, identifier, company/model name,
and source citation exactly. Translate all prose, captions, labels and headings naturally and accurately.
Do not summarize, omit, reorder, invent content, or convert code. Retain English technical terms in parentheses
only where this improves exact technical meaning. Keep existing blank-line paragraph structure."""


def article_body(raw: str) -> str:
    raw = raw.replace("\r\n", "\n")
    # Browser extraction occasionally retains chrome before the first actual title.
    title_start = re.search(r"(?m)^(Principles of Computer Architecture|How To Design A Chip, From Scratch|How to Learn)\s*$", raw)
    if title_start:
        raw = raw[title_start.start():]
    # Remove only a standalone table of contents; article body begins after its final list item.
    raw = re.sub(r"(?s)^Contents\n\n.*?\n---\n", "", raw).strip()
    return raw + "\n"


def split_markdown(markdown: str, limit: int = 6500) -> list[str]:
    blocks = re.split(r"(\n\n+)", markdown)
    chunks: list[str] = []
    current = ""
    in_fence = False

    for block in blocks:
        prospective = current + block
        fence_count = block.count("```")
        if current and len(prospective) > limit and not in_fence:
            chunks.append(current.rstrip() + "\n")
            current = block.lstrip("\n")
        else:
            current = prospective
        if fence_count % 2:
            in_fence = not in_fence

    if current.strip():
        chunks.append(current.rstrip() + "\n")
    return chunks


def translate_chunk(client: OpenAI, chunk: str, article_key: str, part: int, total: int) -> str:
    prompt = (
        f"Article: {article_key}. Part {part}/{total}. Translate the following Markdown faithfully. "
        "The parts will be concatenated, so do not add titles or transitions not already present.\n\n"
        f"{chunk}"
    )
    for attempt in range(4):
        try:
            response = client.chat.completions.create(
                model="gpt-5-mini",
                messages=[
                    {"role": "system", "content": SYSTEM_PROMPT},
                    {"role": "user", "content": prompt},
                ],
                max_completion_tokens=9500,
            )
            text = response.choices[0].message.content or ""
            if text.strip():
                return text.strip() + "\n"
        except Exception as exc:  # retry is intentionally local to the individual chunk
            if attempt == 3:
                raise RuntimeError(f"{article_key} part {part} failed") from exc
            time.sleep(2 ** attempt)
    raise RuntimeError(f"{article_key} part {part} returned no content")


def main() -> None:
    client = OpenAI(api_key=os.environ["OPENAI_API_KEY"], base_url=os.environ["OPENAI_API_BASE"])
    for key, source_path in ARTICLES.items():
        raw = source_path.read_text(encoding="utf-8")
        chunks = split_markdown(article_body(raw))
        translated = [translate_chunk(client, chunk, key, index + 1, len(chunks)) for index, chunk in enumerate(chunks)]
        output = "\n".join(translated).replace("\n\n\n\n", "\n\n\n")
        (OUTPUT_ROOT / f"{key}-zh.md").write_text(output, encoding="utf-8")
        print(f"translated {key}: {len(chunks)} chunks, {len(output)} chars")


if __name__ == "__main__":
    main()
