/** 设计提醒：复刻原站写作索引的极简单栏清单，不加入卡片、摘要或营销式视觉元素。 */
import { Github, Linkedin, Moon, Sun } from "lucide-react";
import { useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import { sitePath } from "@/lib/sitePath";

const articles = [
  { path: "/", label: "AI 芯片架构" },
  { path: "/principles-of-computer-architecture", label: "计算机体系结构原理" },
  { path: "/how-to-design-a-chip", label: "如何从零开始设计一块芯片" },
  { path: "/how-to-learn", label: "如何学习" },
];

export default function Writing() {
  const [, navigate] = useLocation();
  const { theme, toggleTheme } = useTheme();
  return <main className="page"><div className="layout"><nav className="sidebar" aria-label="网站导航"><div className="sidebar-section"><a className="sidebar-link" href={sitePath("/")}>Home</a><a className="sidebar-link" href={sitePath("/writing")} onClick={(event) => { event.preventDefault(); navigate("/writing"); }}>Writing</a></div><div className="sidebar-social"><a href="https://github.com/jacobpeake" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/jacob-peake/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href="https://x.com/jacobpeake" target="_blank" rel="noreferrer" aria-label="X"><span className="x-glyph">𝕏</span></a><button type="button" aria-label="切换暗色模式" onClick={toggleTheme}>{theme === "dark" ? <Sun /> : <Moon />}</button></div></nav><div className="content writing-index" aria-label="文章列表">{articles.map((article) => <a href={sitePath(article.path)} key={article.path} onClick={(event) => { event.preventDefault(); navigate(article.path); }}>{article.label}</a>)}</div></div></main>;
}
