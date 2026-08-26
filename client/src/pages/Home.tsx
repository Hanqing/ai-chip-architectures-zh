/**
 * 设计提醒：忠实复刻原站的数字学术杂志体验——720px 窄栏、白色纸面、低干扰阅读；
 * 互动只提供阅读位置感，不以卡片或营销式组件打断长文。
 */
import { useEffect, useState } from "react";
import articleMarkdown from "@/content/ai-chip-architectures-zh.md?raw";

const formattedArticle = articleMarkdown
  .replace(/^# .*Jacob Peake\s*\n+/m, "")
  .replace(/^\*\*链接:\*\*\s*https:\/\/www\.jacobpeake\.com\/ai-chip-architectures\s*\n\s*---\s*\n+/m, "")
  .replace(/^问题所在$/m, "## 问题");

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[character] ?? character));
}

function inlineMarkdown(value: string) {
  return escapeHtml(value)
    .replace(/!\[([^\]]*)\]\((https?:[^)\s]+)\)/g, '<img alt="$1" src="$2" loading="lazy" />')
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/ {2}\n/g, "<br />")
    .replace(/\n/g, " ");
}

function renderArticle(markdown: string) {
  return markdown
    .trim()
    .split(/\n{2,}/)
    .map((block) => {
      const content = block.trim();
      const heading = content.match(/^(#{2,4})\s+(.+)$/);
      if (heading) {
        const level = Math.min(5, heading[1].length + 1);
        return `<h${level}>${inlineMarkdown(heading[2])}</h${level}>`;
      }
      if (content === "---") return "<hr />";
      return `<p>${inlineMarkdown(content)}</p>`;
    })
    .join("\n");
}

const articleHtml = renderArticle(formattedArticle);

function ChipMark() {
  return (
    <svg
      aria-hidden="true"
      className="chip-mark"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="7" y="7" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="1.45" />
      <path d="M10 4v3m4-3v3m4-3v3M10 21v3m4-3v3m4-3v3M4 10h3m-3 4h3m-3 4h3m14-8h3m-3 4h3m-3 4h3" stroke="currentColor" strokeWidth="1.35" />
      <path d="M10.5 14h7m-3.5-3.5V17.5" stroke="currentColor" strokeWidth="1.35" />
    </svg>
  );
}

export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.title = "AI 芯片架构｜中文翻译版";
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="academic-page">
      <div className="reading-progress" aria-hidden="true" style={{ transform: `scaleX(${progress / 100})` }} />
      <main id="article-start" className="content" aria-label="AI 芯片架构中文文章">
        <article className="article-prose" dangerouslySetInnerHTML={{ __html: articleHtml }} />
      </main>

      <footer className="article-footer">
        <ChipMark />
        <p>
          原文：<a href="https://www.jacobpeake.com/ai-chip-architectures" target="_blank" rel="noreferrer">Jacob Peake — AI Chip Architectures</a>。本页为中文阅读版；品牌、型号、代码与外部资料链接保留原始标识。
        </p>
      </footer>
    </div>
  );
}
