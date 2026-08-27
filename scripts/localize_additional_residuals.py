"""Translate English residual prose in the supplemental Chinese article drafts."""

from __future__ import annotations

import os
import re
import time
from pathlib import Path

from openai import OpenAI


ROOT = Path("/home/ubuntu/ai-chip-architectures-zh/client/src/content")
FILES = [
    ROOT / "principles-of-computer-architecture-zh.md",
    ROOT / "how-to-design-a-chip-zh.md",
    ROOT / "how-to-learn-zh.md",
]

SYSTEM = """Translate the following English Markdown prose to Simplified Chinese. Return only the translated Markdown.
Preserve all Markdown syntax, inline links and link destinations, numerical values, equations, unit symbols, identifiers,
acronyms, chip/product names, table separators, and code exactly. Translate headings and ordinary prose, and do not add commentary.
If a technical English term is best retained, include a concise Chinese translation followed by the original in parentheses.
Do not translate fenced code or lines that are exclusively equations, variables, table delimiters, or data values."""


def english_ratio(text: str) -> float:
    letters = sum(ch.isascii() and ch.isalpha() for ch in text)
    chinese = sum("\u4e00" <= ch <= "\u9fff" for ch in text)
    return letters / max(letters + chinese, 1)


def is_translateable(block: str) -> bool:
    text = block.strip()
    if not text or text.startswith("```") or "```" in text:
        return False
    if english_ratio(text) < 0.62:
        return False
    compact = re.sub(r"[\s\d\W_]", "", text)
    if len(compact) < 6:
        return False
    if re.fullmatch(r"[A-Za-z0-9_≈=+\-×*/()., :;\[\]{}|<>^\\]+", text) and len(text) < 95:
        return False
    return True


def translate(client: OpenAI, text: str) -> str:
    for attempt in range(4):
        try:
            response = client.chat.completions.create(
                model="gpt-5-mini",
                messages=[{"role": "system", "content": SYSTEM}, {"role": "user", "content": text}],
                max_completion_tokens=6000,
            )
            result = response.choices[0].message.content or ""
            if result.strip():
                return result.strip()
        except Exception:
            if attempt == 3:
                raise
            time.sleep(2**attempt)
    return text


def main() -> None:
    client = OpenAI(api_key=os.environ["OPENAI_API_KEY"], base_url=os.environ["OPENAI_API_BASE"])
    for path in FILES:
        source = path.read_text(encoding="utf-8")
        blocks = re.split(r"(\n\n+)", source)
        changed = 0
        in_fence = False
        for index, block in enumerate(blocks):
            if block.count("```") % 2:
                in_fence = not in_fence
                continue
            if not in_fence and is_translateable(block):
                blocks[index] = translate(client, block)
                changed += 1
        path.write_text("".join(blocks), encoding="utf-8")
        print(f"localized {path.name}: {changed} residual blocks")


if __name__ == "__main__":
    main()
