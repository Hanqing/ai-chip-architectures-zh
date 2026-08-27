/**
 * 设计提醒：沿用 jacobpeake.com 的安静三栏文章系统。
 * 不增加卡片或营销元素；正文、目录、代码块与表格均服从 720px 衬线阅读栏及低干扰双语切换。
 */
import { Github, Languages, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "wouter";
import architectureEn from "@/content/principles-of-computer-architecture-en.md?raw";
import architectureZh from "@/content/principles-of-computer-architecture-zh.md?raw";
import chipDesignEn from "@/content/how-to-design-a-chip-en.md?raw";
import chipDesignZh from "@/content/how-to-design-a-chip-zh.md?raw";
import learningEn from "@/content/how-to-learn-en.md?raw";
import learningZh from "@/content/how-to-learn-zh.md?raw";
import { useTheme } from "@/contexts/ThemeContext";
import { glossary } from "@/lib/glossary";
import { sitePath } from "@/lib/sitePath";

type Language = "zh" | "en";
type ArticleId = "principles" | "chip-design" | "learning";
type MarkdownBlock = { type: "heading" | "paragraph" | "list" | "code" | "table" | "rule"; value: string; level?: number; id?: string };

const PLAIN_HEADINGS: Record<string, { zh: string; en: string; level: number }> = {
  "The Performance Equations": { zh: "性能方程", en: "The Performance Equations", level: 2 },
  "THE IRON LAW": { zh: "性能铁律", en: "THE IRON LAW", level: 3 },
  "AMDAHL'S LAW": { zh: "阿姆达尔定律", en: "AMDAHL'S LAW", level: 3 },
  "GUSTAFSON'S LAW": { zh: "古斯塔夫森定律", en: "GUSTAFSON'S LAW", level: 3 },
  "LITTLE'S LAW": { zh: "利特尔定律", en: "LITTLE'S LAW", level: 3 },
  "THE ROOFLINE MODEL": { zh: "屋顶线模型", en: "THE ROOFLINE MODEL", level: 3 },
  "The Walls": { zh: "性能之墙", en: "The Walls", level: 2 },
  "THE END OF DENNARD SCALING": { zh: "丹纳德缩放的终结", en: "THE END OF DENNARD SCALING", level: 3 },
  "THE POWER WALL": { zh: "功耗墙", en: "THE POWER WALL", level: 3 },
  "THE MEMORY WALL": { zh: "内存墙", en: "THE MEMORY WALL", level: 3 },
  "THE ILP WALL": { zh: "指令级并行墙", en: "THE ILP WALL", level: 3 },
  "LATENCY LAGS BANDWIDTH": { zh: "延迟落后于带宽", en: "LATENCY LAGS BANDWIDTH", level: 3 },
  "THE SPEED OF LIGHT": { zh: "光速", en: "THE SPEED OF LIGHT", level: 3 },
  "Locality and the Memory Hierarchy": { zh: "局部性与存储层次结构", en: "Locality and the Memory Hierarchy", level: 2 },
  "THE PRINCIPLE OF LOCALITY": { zh: "局部性原理", en: "THE PRINCIPLE OF LOCALITY", level: 3 },
  "AMAT: AVERAGE MEMORY ACCESS TIME": { zh: "AMAT：平均内存访问时间", en: "AMAT: AVERAGE MEMORY ACCESS TIME", level: 3 },
  "THE THREE C'S": { zh: "三个 C", en: "THE THREE C'S", level: 3 },
  "BELADY'S MIN": { zh: "贝拉迪最优策略", en: "BELADY'S MIN", level: 3 },
  "Pipelining and Out-of-Order": { zh: "流水线与乱序执行", en: "Pipelining and Out-of-Order", level: 2 },
  "PIPELINING SPEEDUP": { zh: "流水线加速比", en: "PIPELINING SPEEDUP", level: 3 },
  "OPTIMAL PIPELINE DEPTH": { zh: "最优流水线深度", en: "OPTIMAL PIPELINE DEPTH", level: 3 },
  "TOMASULO'S ALGORITHM": { zh: "托马苏洛算法", en: "TOMASULO'S ALGORITHM", level: 3 },
  "ROB SIZING AS LITTLE'S LAW": { zh: "以利特尔定律确定 ROB 容量", en: "ROB SIZING AS LITTLE'S LAW", level: 3 },
  "BRANCH PREDICTION": { zh: "分支预测", en: "BRANCH PREDICTION", level: 3 },
  "Coherence and Consistency": { zh: "一致性与内存模型", en: "Coherence and Consistency", level: 2 },
  "MESI": { zh: "MESI 协议", en: "MESI", level: 3 },
  "Energy and Data Movement": { zh: "能耗与数据移动", en: "Energy and Data Movement", level: 2 },
  "THE HOROWITZ ENERGY TABLE": { zh: "Horowitz 能耗表", en: "THE HOROWITZ ENERGY TABLE", level: 3 },
  "THE COST OF DISTANCE": { zh: "距离的成本", en: "THE COST OF DISTANCE", level: 3 },
  "The Levers": { zh: "设计杠杆", en: "The Levers", level: 2 },
  "MAKE THE COMMON CASE FAST": { zh: "让常见情况更快", en: "MAKE THE COMMON CASE FAST", level: 3 },
  "POLLACK'S RULE": { zh: "Pollack 定律", en: "POLLACK'S RULE", level: 3 },
  "SPECIALISATION": { zh: "专用化", en: "SPECIALISATION", level: 3 },
  "THROUGHPUT VS LATENCY": { zh: "吞吐量与延迟", en: "THROUGHPUT VS LATENCY", level: 3 },
  "SURFACE-TO-VOLUME SCALING": { zh: "表面积与体积缩放", en: "SURFACE-TO-VOLUME SCALING", level: 3 },
  "THE BANDWIDTH-DELAY PRODUCT": { zh: "带宽时延积", en: "THE BANDWIDTH-DELAY PRODUCT", level: 3 },
  "Reliability at Scale": { zh: "规模化可靠性", en: "Reliability at Scale", level: 2 },
  "FIT AND MTBF": { zh: "FIT 与 MTBF", en: "FIT AND MTBF", level: 3 },
  "Synthesis": { zh: "综合", en: "Synthesis", level: 2 },
  "READING ANY ARCHITECTURE: THE SIX QUESTIONS": { zh: "阅读任何体系结构：六个问题", en: "READING ANY ARCHITECTURE: THE SIX QUESTIONS", level: 3 },
  "THE DEEPER POINT": { zh: "更深层的观点", en: "THE DEEPER POINT", level: 3 },
  "The Flow": { zh: "流程", en: "The Flow", level: 2 },
  "Architecture": { zh: "体系结构", en: "Architecture", level: 2 },
  "MODELLING": { zh: "建模", en: "MODELLING", level: 3 },
  "TRACE-BASED VS EXECUTION-DRIVEN": { zh: "基于轨迹与基于执行的模拟", en: "TRACE-BASED VS EXECUTION-DRIVEN", level: 3 },
  "Microarchitecture": { zh: "微体系结构", en: "Microarchitecture", level: 2 },
  "ITERATION": { zh: "迭代", en: "ITERATION", level: 3 },
  "THE INTERACTIONS": { zh: "协作关系", en: "THE INTERACTIONS", level: 3 },
  "ITERATION (Chinese)": { zh: "迭代（ITERATION）", en: "ITERATION", level: 3 },
  "INTERACTIONS (Chinese)": { zh: "交互（THE INTERACTIONS）", en: "THE INTERACTIONS", level: 3 },
  "Microarchitecture (Chinese)": { zh: "微架构（Microarchitecture）", en: "Microarchitecture", level: 2 },
  "RTL (Register-Transfer Level)": { zh: "RTL（寄存器传输级）", en: "RTL (Register-Transfer Level)", level: 2 },
  "RTL": { zh: "RTL（寄存器传输级）", en: "RTL", level: 2 },
  "Spatial, Not Sequential": { zh: "空间，而非顺序", en: "Spatial, Not Sequential", level: 3 },
  "Spatial, Not Sequential (Chinese)": { zh: "空间性，而非顺序性", en: "Spatial, Not Sequential", level: 3 },
  "What the Designer Decides, What the Tools Decide": { zh: "设计师决定什么，工具决定什么", en: "What the Designer Decides, What the Tools Decide", level: 3 },
  "Designer and Tools (Chinese)": { zh: "设计者决定的事项，工具决定的事项", en: "What the Designer Decides, What the Tools Decide", level: 3 },
  "Finite State Machines": { zh: "有限状态机", en: "Finite State Machines", level: 3 },
  "Example": { zh: "示例", en: "Example", level: 3 },
  "An Example": { zh: "示例", en: "An Example", level: 3 },
  "THE SYNTHESIS CONTRACT": { zh: "综合契约", en: "THE SYNTHESIS CONTRACT", level: 3 },
  "The Gate-Level Netlist": { zh: "门级网表", en: "The Gate-Level Netlist", level: 3 },
  "Physical Design": { zh: "物理设计", en: "Physical Design", level: 2 },
  "Floorplanning": { zh: "平面规划", en: "Floorplanning", level: 3 },
  "Floorplan": { zh: "平面规划", en: "Floorplan", level: 3 },
  "Placement": { zh: "布局", en: "Placement", level: 3 },
  "Clock Tree Synthesis": { zh: "时钟树综合", en: "Clock Tree Synthesis", level: 3 },
  "Routing": { zh: "布线", en: "Routing", level: 3 },
  "Signoff": { zh: "签核", en: "Signoff", level: 3 },
  "The Verification Engineer": { zh: "验证工程师", en: "The Verification Engineer", level: 3 },
  "Foundry & Fabrication": { zh: "代工与制造", en: "Foundry & Fabrication", level: 2 },
  "Bring-up": { zh: "启动与调试", en: "Bring-up", level: 2 },
  "PRE-SILICON: SOFTWARE AGAINST THE MODEL": { zh: "硅前：软件面向模型开发", en: "PRE-SILICON: SOFTWARE AGAINST THE MODEL", level: 3 },
  "POST-SILICON: FIRST BOOT": { zh: "硅后：首次启动", en: "POST-SILICON: FIRST BOOT", level: 3 },
  "Design Verification": { zh: "设计验证", en: "Design Verification", level: 2 },
  "UVM": { zh: "UVM 验证方法学", en: "UVM", level: 3 },
  "CONSTRAINED RANDOM + COVERAGE": { zh: "约束随机与覆盖率", en: "CONSTRAINED RANDOM + COVERAGE", level: 3 },
  "Assertions and Formal": { zh: "断言与形式验证", en: "Assertions and Formal", level: 3 },
  "Verification Engineers": { zh: "验证工程师", en: "Verification Engineers", level: 3 },
  "Simulation, Emulation, and FPGA Prototyping": { zh: "仿真、仿真器与 FPGA 原型", en: "Simulation, Emulation, and FPGA Prototyping", level: 2 },
  "Simulation, Emulation, FPGA Prototyping": { zh: "仿真、仿真器与 FPGA 原型", en: "Simulation, Emulation, FPGA Prototyping", level: 2 },
  "Simulation, Emulation, and FPGA Prototyping (Chinese)": { zh: "仿真、仿真（Emulation）、FPGA 原型", en: "Simulation, Emulation, and FPGA Prototyping", level: 2 },
  "PPA": { zh: "PPA（性能、功耗、面积）", en: "PPA", level: 3 },
  "Performance": { zh: "性能", en: "Performance", level: 2 },
  "THE CORRELATION LOOP": { zh: "关联验证循环", en: "THE CORRELATION LOOP", level: 3 },
  "WHY CORRELATION MATTERS": { zh: "为何关联验证重要", en: "WHY CORRELATION MATTERS", level: 3 },
  "TIMING-DRIVEN PERFORMANCE": { zh: "时序驱动的性能", en: "TIMING-DRIVEN PERFORMANCE", level: 3 },
  "TIMING CLOSURE": { zh: "时序收敛", en: "TIMING CLOSURE", level: 3 },
  "SAND TO SILICON WAFER": { zh: "从沙到硅晶圆", en: "SAND TO SILICON WAFER", level: 3 },
  "THE LAYER STACK": { zh: "金属层堆栈", en: "THE LAYER STACK", level: 3 },
  "PDK AND GDSII": { zh: "PDK 与 GDSII", en: "PDK AND GDSII", level: 3 },
  "WAFER FAB": { zh: "晶圆制造", en: "WAFER FAB", level: 3 },
  "Rules for Learning": { zh: "学习法则", en: "Rules for Learning", level: 2 },
  "Rules for Academics": { zh: "学业法则", en: "Rules for Academics", level: 2 },
};

const ARTICLE_MAP: Record<ArticleId, { path: string; title: Record<Language, string>; source: Record<Language, string>; hasToc: boolean }> = {
  principles: {
    path: "/principles-of-computer-architecture",
    title: { zh: "计算机体系结构原理", en: "Principles of Computer Architecture" },
    source: { zh: architectureZh, en: architectureEn },
    hasToc: true,
  },
  "chip-design": {
    path: "/how-to-design-a-chip",
    title: { zh: "如何从零开始设计一块芯片", en: "How To Design A Chip, From Scratch" },
    source: { zh: chipDesignZh, en: chipDesignEn },
    hasToc: true,
  },
  learning: {
    path: "/how-to-learn",
    title: { zh: "如何学习", en: "How to Learn" },
    source: { zh: learningZh, en: learningEn },
    hasToc: false,
  },
};

function articleForPath(path: string): ArticleId {
  if (path.includes("how-to-design-a-chip")) return "chip-design";
  if (path.includes("how-to-learn")) return "learning";
  return "principles";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character] ?? character));
}

function annotateTerms(value: string) {
  const placeholders: string[] = [];
  let annotated = value;
  [...glossary].sort((a, b) => b.term.length - a.term.length).forEach((item) => {
    const escaped = item.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    annotated = annotated.replace(new RegExp(escaped, "g"), () => {
      const token = `@@TERM_${placeholders.length}@@`;
      placeholders.push(`<span class="term" tabindex="0"><span class="term-label">${item.term}</span><span class="term-tooltip" role="tooltip"><b>${item.english}</b><span>${item.definition}</span></span></span>`);
      return token;
    });
  });
  return annotated.replace(/@@TERM_(\d+)@@/g, (_match, index) => placeholders[Number(index)] ?? "");
}

function inlineMarkdown(value: string, language: Language) {
  const parsed = escapeHtml(value)
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*\*([^*]+)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/ {2}\n/g, "<br />")
    .replace(/\n/g, " ");
  return language === "zh" ? annotateTerms(parsed) : parsed;
}

function slugify(value: string, index: number) {
  const ascii = value.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-").replace(/^-|-$/g, "");
  return `${ascii || "section"}-${index}`;
}

function normalise(markdown: string) {
  return markdown
    .replace(/^[\s\S]*?(?=^(?:Principles of Computer Architecture|How To Design A Chip, From Scratch|How to Learn)\s*$)/m, "")
    .replace(/^Home Writing\s*\n+/, "")
    .replace(/^Contents\n[\s\S]*?(?=^# |^## |^### |^How to Learn$)/m, "")
    .replace(/^# (Principles of Computer Architecture|How To Design A Chip, From Scratch)\s*$/m, "")
    .replace(/^(Principles of Computer Architecture|How To Design A Chip, From Scratch|How to Learn)\s*$/m, "")
    .replace(/\n{3,}/g, "\n\n");
}

function parseBlocks(markdown: string, language: Language): MarkdownBlock[] {
  let headingIndex = 0;
  return normalise(markdown).trim().split(/\n{2,}/).map((section) => section.trim()).filter(Boolean).map((section) => {
    const heading = section.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const value = heading[2].trim();
      headingIndex += 1;
      return { type: "heading", level, value, id: slugify(value, headingIndex) };
    }
    const headingKey = section.toLocaleLowerCase();
    const plainHeading = Object.values(PLAIN_HEADINGS).find((candidate) => candidate.en.toLocaleLowerCase() === headingKey || candidate.zh === section);
    if (plainHeading) {
      headingIndex += 1;
      const value = plainHeading[language];
      return { type: "heading", level: plainHeading.level, value, id: slugify(value, headingIndex) };
    }
    if (section === "---" || section === "* * *") return { type: "rule", value: section };
    if (section.startsWith("```")) return { type: "code", value: section.replace(/^```[\w-]*\n?/, "").replace(/\n?```$/, "") };
    const lines = section.split("\n");
    if (lines.length > 1 && lines[0].includes("|") && /^\|?\s*:?-{3,}/.test(lines[1])) return { type: "table", value: section };
    if (lines.every((line) => /^\s*(?:[-*]|\d+\.)\s+/.test(line))) return { type: "list", value: section };
    return { type: "paragraph", value: section };
  });
}

function RenderTable({ markdown, language }: { markdown: string; language: Language }) {
  const rows = markdown.split("\n").filter((line) => line.includes("|"));
  const cells = (line: string) => line.replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
  const [header, , ...body] = rows;
  if (!header) return null;
  return <div className="generic-table-wrap"><table><thead><tr>{cells(header).map((cell, index) => <th key={`${cell}-${index}`} dangerouslySetInnerHTML={{ __html: inlineMarkdown(cell, language) }} />)}</tr></thead><tbody>{body.map((row, rowIndex) => <tr key={rowIndex}>{cells(row).map((cell, cellIndex) => <td key={`${cellIndex}-${cell}`} dangerouslySetInnerHTML={{ __html: inlineMarkdown(cell, language) }} />)}</tr>)}</tbody></table></div>;
}

function FlowDiagram({ language }: { language: Language }) {
  const stages = language === "zh" ? ["架构", "微架构", "RTL（逻辑设计）", "逻辑综合", "物理设计", "代工与制造", "启动与调试", "量产"] : ["Architecture", "Microarchitecture", "RTL", "Synthesis", "Physical Design", "Foundry & Fabrication", "Bring-up", "Production"];
  const lanes = language === "zh" ? ["建模（功能、性能、周期精确）", "仿真（Hz – kHz）", "仿真与 FPGA 原型（MHz – 10s MHz）", "验证（设计、物理、时序）", "性能关联（模型、RTL、硅）"] : ["Modelling (functional, performance, cycle-accurate)", "Simulation (Hz – kHz)", "Emulation & FPGA prototyping (MHz – 10s MHz)", "Verification (design, physical, timing)", "Performance correlation (model, RTL, silicon)"];
  return <div className="chip-flow" role="img" aria-label={language === "zh" ? "芯片设计流程图" : "Chip design flow"}><div className="chip-flow-spine">{stages.map((stage) => <span key={stage}>{stage}</span>)}</div><div className="chip-flow-lanes">{lanes.map((lane) => <span key={lane}>{lane}</span>)}</div></div>;
}

function GenericToc({ entries, active, onJump }: { entries: MarkdownBlock[]; active: string; onJump: (id: string) => void }) {
  return <ul className="generic-toc-list">{entries.map((entry) => <li key={entry.id} className={`toc-level-${entry.level}`}><button className={active === entry.id ? "current" : ""} type="button" onClick={() => onJump(entry.id ?? "")}>{entry.value}</button></li>)}</ul>;
}

function PostCta({ language }: { language: Language }) {
  return <div className="post-cta"><a className="post-cta-brand" href="https://standardmachines.com/" target="_blank" rel="noreferrer"><span>Standard Machines</span></a><p className="post-cta-body">{language === "zh" ? "用 AI 设计先进芯片。" : "Teaching AI to design advanced chips."}</p><a className="post-cta-contact" href="mailto:founders@standardmachines.com?subject=From%20your%20writing"><Mail size={12} />{language === "zh" ? "联系创始团队" : "Get in touch"}</a></div>;
}

export default function AdditionalArticle() {
  const [location, navigate] = useLocation();
  const articleId = articleForPath(location);
  const article = ARTICLE_MAP[articleId];
  const { theme, toggleTheme } = useTheme();
  const [language, setLanguage] = useState<Language>(() => window.localStorage.getItem("article-language") === "en" ? "en" : "zh");
  const [active, setActive] = useState("");
  const blocks = useMemo(() => parseBlocks(article.source[language], language).filter((block) => block.value.trim() !== article.title[language]), [article, language]);
  const tocEntries = useMemo(() => blocks.filter((block) => block.type === "heading" && (block.level === 2 || block.level === 3)), [blocks]);

  useEffect(() => { document.title = article.title[language]; document.documentElement.lang = language === "zh" ? "zh-CN" : "en"; }, [article, language]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]; if (current) setActive((current.target as HTMLElement).id); }, { rootMargin: "-20% 0px -70% 0px", threshold: [0, 0.1] });
    document.querySelectorAll<HTMLElement>("[data-generic-heading]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [blocks]);

  const jumpTo = (id: string) => document.getElementById(id)?.scrollIntoView({ block: "start" });
  const toggleLanguage = () => { const y = window.scrollY; const next = language === "zh" ? "en" : "zh"; window.localStorage.setItem("article-language", next); setLanguage(next); requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo({ top: y }))); };
  const sourceFlow = articleId === "chip-design";

  return <main className="page"><div className="layout"><nav className="sidebar" aria-label="网站和文章目录"><div className="sidebar-section"><a className="sidebar-link" href={sitePath("/")}>Home</a><a className="sidebar-link" href={sitePath("/writing")} onClick={(event) => { event.preventDefault(); navigate("/writing"); }}>Writing</a></div><div className="sidebar-social" aria-label="社交链接"><a href="https://github.com/jacobpeake" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/jacob-peake/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href="https://x.com/jacobpeake" target="_blank" rel="noreferrer" aria-label="X"><span className="x-glyph">𝕏</span></a><button type="button" aria-label="切换暗色模式" onClick={toggleTheme}>{theme === "dark" ? <Sun /> : <Moon />}</button><button className="language-toggle" type="button" aria-label={language === "zh" ? "切换至英文" : "切换至中文"} onClick={toggleLanguage}><Languages /><span>{language === "zh" ? "EN" : "中"}</span></button></div>{article.hasToc && <div className="sidebar-toc"><div className="sidebar-toc-title">Contents</div><GenericToc entries={tocEntries} active={active} onJump={jumpTo} /></div>}<PostCta language={language} /></nav><div className="content">{article.hasToc && <details className="mobile-toc"><summary>Contents</summary><GenericToc entries={tocEntries} active={active} onJump={jumpTo} /></details>}<header className="article-header"><h1 className="article-title">{article.title[language]}</h1></header><article className="article-body" aria-label={article.title[language]}>{blocks.map((block, index) => { if (block.type === "rule") return <hr key={index} />; if (block.type === "heading") { const Heading = block.level && block.level <= 2 ? "h3" : block.level === 3 ? "h4" : "h5"; return <Heading id={block.id} data-generic-heading key={block.id}>{block.value}</Heading>; } if (block.type === "code") return <pre key={index}><code>{block.value}</code></pre>; if (block.type === "table") return <RenderTable key={index} markdown={block.value} language={language} />; if (block.type === "list") return <ol className="article-list" key={index}>{block.value.split("\n").map((line, lineIndex) => <li key={lineIndex} dangerouslySetInnerHTML={{ __html: inlineMarkdown(line.replace(/^\s*(?:[-*]|\d+\.)\s+/, ""), language) }} />)}</ol>; if (sourceFlow && /(线性阶段|Linear stages)/.test(block.value)) return <FlowDiagram key={index} language={language} />; return <p key={index} dangerouslySetInnerHTML={{ __html: inlineMarkdown(block.value, language) }} />; })}</article><div className="post-cta post-cta-end"><PostCta language={language} /></div></div></div></main>;
}
