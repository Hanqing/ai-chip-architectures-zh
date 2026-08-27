# 原站实测复刻规格

来源：`https://www.jacobpeake.com/ai-chip-architectures`，在 1280×720 视口中采样。

## 页面框架

| 元素 | 原站实测值 | 实施要求 |
| --- | --- | --- |
| 外层 `.page` | 起点 x=53px、y=72px、宽 1160px | 使用居中的最大宽度容器；不再将正文直接贴左视口 |
| `.sidebar` | 180px 宽、`position: sticky`、top=0、内边距 `28px 20px 0 0` | 恢复左侧固定阅读侧栏；滚动时保持位置 |
| `.content` | 720px 正文阅读栏 | 正文位于侧栏右侧，保持约 720px 宽度 |
| 页面字体 | `Mundo Serif, Georgia, serif`、正文颜色 `rgb(74,74,74)` | 中文使用度量相近的衬线回退，颜色按原值实现 |
| 主侧栏链接 | 17px、行高 28.9px、轻字重、色值 `#888` | 按原比例复刻，不作为按钮或胶囊组件 |
| 目录 | 13px；标题 10px、600 字重、左内边距 14px、上边距/上内边距 24px | 目录条目和二级锚点需完整出现 |

## 侧边栏信息架构

1. 顶部链接：Home、Writing。
2. GitHub、LinkedIn、X 的图标链接与深浅主题切换按钮。
3. 分隔线后为 `CONTENTS` 目录。
4. 六个架构组按 NVIDIA GPU、Google TPU、AMD GPU、Cerebras WSE、AWS Trainium、Groq LPU 排列；每组有品牌小图、短标签（GPU/TPU/WSE/Trainium/LPU）和 Architecture、Scaling、Software 子锚点。
5. 尾部为 Comparison，以及 Standard Machines 标记、简介与 Get in touch 邮件链接。

## 主内容结构

开篇不含 Hero，直接是 15px 斜体粗体标题 `AI Chip Architectures`。其后为导言、细分隔线、`The Problem`，再依顺序展开六个芯片章节和 `Comparison`。主章节使用品牌图标与标题行；每个章节的 `GENEALOGY`、`ARCHITECTURE`、`SCALING`、`SOFTWARE` 是 10.5px 灰色大写标签。图示直接嵌入相应段落，图注和外链均保留。

## 原站状态与交互

原站的核心交互是链接、侧边栏目录锚点、主题切换、原生滚动、图片延迟加载以及窄屏重排。它无营销式 Hero、阅读进度条、浮动面板或多余动效。中文复刻应删除这些非参考元素，保持原生且轻量的阅读交互。

## CSS 实测补充

| 规则 | 原站实测值 | 实施要求 |
| --- | --- | --- |
| 宽屏布局 | `@media (min-width:1160px)` 下 `.layout` 为 `220px minmax(0,720px) 220px` | 使用三列栅格：左栏实际内容宽 180px、中央文章 720px、右侧保留空白/草图位 |
| 正文 | `.content` 为 `font-size:16px; line-height:1.8` | 将中文正文行高精确对齐至 1.8 |
| 目录列表 | 左边线 `#e8e8e8`；一级条目 `14px/1.4`、内边距 `8px 0 8px 14px` | 恢复左侧灰线与实时状态指示器 |
| 当前章节 | 文字 `#1a1a1a`、500 字重；已读章节 `#999`；未读 `#c8c8c8` | 由 IntersectionObserver 跟随滚动切换层级状态 |
| 二级目录 | 初始 `max-height:0`，当前主项展开至 `200px`；过渡 `0.32s cubic-bezier(.4,0,.2,1)` | 同步复刻展开与收起节奏 |
| 目录二级项 | `12px/1.35`、斜体、左内边距 28px、上下内边距 5px | 保持原站信息密度 |
| 代码样式 | `SF Mono` 类字宽、#f0efeb 背景、2px×6px 内边距、3px 圆角 | 仅在原文代码片段处使用 |
| 宽屏右区 | 原站在 1160px 以上设置右侧 220px 栅格供小型芯片草图使用 | 在对应文章位置放入原站图形，不用额外 Hero 代替 |

## 实施禁区

禁止保留原版本新增的阅读进度条、中文页脚说明、左上角几何芯片标志、非原站颜色体系、非原站主导航和非参考交互动效。主题切换、个人主页链接、社交链接、内容目录、联系方式和 Standard Machines 品牌区是原站固有元素，需以中文复刻页的结构部分重建。

## 原站媒体映射

| 文章位置 | 原站公开媒体 |
| --- | --- |
| 侧边目录 NVIDIA / NVIDIA 章节标题 | `https://github.com/NVIDIA.png` |
| 侧边目录 Google / Google 章节标题 | `https://github.com/google.png` |
| 侧边目录与标题 AMD | `https://www.amd.com/content/dam/code/images/favicon/favicon.ico` |
| 侧边目录与标题 Cerebras | `https://cdn.jsdelivr.net/gh/lobehub/lobe-icons/packages/static-svg/icons/cerebras-color.svg` |
| 侧边目录 AWS | `https://github.com/aws.png` |
| 侧边目录 Groq | 原站使用 NVIDIA 图片占位，复刻时保持同一资源 |
| Standard Machines CTA | `https://www.jacobpeake.com/images/standard_machines_mark.png` |
| NVIDIA 图示 | `diagrams/nvidia-gpu-die.png`、`nvidia-sm.png`、`nvidia-scale-up.png`、`nvidia-scale-out.png` |
| Google TPU 图示 | `diagrams/google-tpu-chip.png`、`google-tpu-tensorcore.png`、`google-tpu-scale-up.png`、`google-tpu-scale-out.png` |
| AMD 图示 | `diagrams/amd-gpu-chip.png`、`amd-cu.png`、`amd-scale-up.png`、`amd-scale-out.png` |
| Cerebras 图示 | `diagrams/cerebras-wafer-die.png`；后续继续采集核心、扩展与软件相关图示 |

所有 `diagrams/*` 媒体均以 `https://www.jacobpeake.com/diagrams/<文件名>` 拼接。实施时应通过项目托管的静态资源引用这些公共素材，保留其原始宽高、图注和文章内位置，并为中文读者提供相同语义的 `alt` 文本。

| 文章位置 | 原站公开媒体 |
| --- | --- |
| Cerebras 图示补充 | `diagrams/cerebras-core.png` |
| AWS Trainium 图示 | `diagrams/aws-trainium-chip.png`、`aws-trainium-neuroncore.png`、`aws-trainium-scale-up.png`、`aws-trainium-scale-out.png` |
| Groq LPU 图示 | `diagrams/groq-chip.png`、`groq-scale-out.png` |
| 比较表公司图标 | NVIDIA、Google、AMD、Cerebras、AWS、Groq 的同品牌徽标按两组表格重复出现 |

## 文章视觉细节补充

| 元素 | 原站实测值 | 实施要求 |
| --- | --- | --- |
| 页面布局 | 默认 `220px minmax(0,1fr)`；1160px 以上为 `220px minmax(0,720px) 220px` | 以同一栅格替换当前左对齐单栏布局 |
| 正文段落 | `margin-bottom:20px` | 所有正文段落恢复至 20px 底外边距 |
| 分隔线 | 顶边 `1px solid #e0e0e0`，上下外边距 28px | 删除现版本分隔线参数，使用原样式 |
| H3 | 15px、700、斜体、#1a1a1a、上 32px/下 8px | 章节标题需带原站品牌图标及一致的垂直对齐 |
| H4 | 10.5px、700、#999、字距 .14em、全大写、上 26px/下 10px | 用于 GENEALOGY / ARCHITECTURE / SCALING / SOFTWARE |
| 图标尺寸 | 标题 logo 18px×18px；AMD 13px 高 | 恢复实际基线、间距和透明度 |
| 数据表 | 12.5px / 1.5；上下外边距 20px / 28px；单元格 8px×10px；行悬停 #faf8f0 | 重建比较表及文本表的边界和悬停状态 |

## 暗色主题规格

原站由左侧栏 22px×22px 的无边框主题按钮切换。暗色状态根元素为 `data-theme="dark"`，实测页面背景为 `#080706`，正文为 `#b8b3a8`，标题/控件高亮为 `#e8e4d8`。图形与目录在暗色状态使用对应的暖灰描边和文字，并对单色品牌标记应用反相滤镜。实施需使用同一个主题状态驱动全页、侧边栏、表格、代码块与图形的颜色，而不是仅更改正文背景。

主题按钮返回浅色状态后，原站恢复白色背景、#4a4a4a 正文和 #1a1a1a 标题；浅色为默认初始状态。Groq 章节图除芯片平面图外还有 `https://www.jacobpeake.com/diagrams/groq-scale.png`。比较表中 Groq 图标使用 `https://github.com/groq.png`，不同于侧边栏与标题行使用的 NVIDIA 图标占位。

## 响应式与 DOM 规格

| 条件 | 原站行为 | 实施要求 |
| --- | --- | --- |
| `max-width:700px` | body 内边距 `40px 20px`；布局变为单列；侧栏脱离粘性定位 | 准确切换至单栏，不保留桌面目录 |
| 移动端目录 | 侧栏目录与侧栏 CTA 隐藏；正文前出现 `<details>` 目录，上下各有 #ececec 细线 | 复刻原生 details/summary 行为；summary 为 10px、600、.1em 字距、右侧 `▸` 箭头 |
| 移动端 CTA | 侧边 CTA 迁移到文章末尾，顶部间距 56px、顶部内边距 20px | 复刻同一内容、位置和字号 |
| `min-width:1680px` | 含谱系的架构章节扩为 720px + 48px 间距 + 380px 右侧谱系栏；谱系栏 sticky、top 24px、最大高 viewport-48px | 超宽屏重排基于原站的 `section.architecture` DOM，而非在普通桌面强行显示 |
| 文章章节 | `#the-problem`、六个 `section.architecture`、`#comparison`，比较区含 `#per-chip`、`#per-rack-pod`、`#what-this-shows` | 为所有锚点提供相同的 ID 与目录映射 |
| 比较区 | 两个 `.comparison-wrap` 表格及 `.comparison-caption` | 保持表格与说明文字的相同顺序和容器行为 |

在 1280px 视口下，原站 `.page` 与 `.layout` 的 x=52.5px、宽=1160px；`.sidebar` x=52.5px、宽=180px；`.content` x=272.5px、宽=720px；`.article-body` x=272.5px、y=127px，正文相较布局顶端有 55px 的垂直偏移。中文复刻页的桌面内容栏必须以该位置为准，不得按错误的 220px 栅格起点将正文偏移到 x≈280px 或在页面顶端直接开始正文。

## 当前回归记录

中文翻译稿中“谱系”标题与连续年份条目之间没有空行，曾导致 Markdown 井号显示为正文且所有代际被压缩为一段。实现已将标题强制分段，并以四位年份切开为独立的 `.gen-row`。翻译稿中还残留原始图片 Markdown，因此在插入托管的原站图示前清除了这些行，避免同一架构图出现两次。后续桌面和移动端回归需确认 NVIDIA 章节的“谱系”逐行显示、图示不重复、目录锚点不跳偏。

浏览验证确认两张比较表已输出为 20 行和 19 行的独立表格。发现翻译源内 AMD 的“架构”小节重复，导致 `#amd-architecture` 出现两次；后续实现应只给首次匹配的小节赋予目录 ID，重复部分保留内容但取消 ID，避免锚点歧义。因页面内容在调试服务器中会保留前次哈希滚动位置，比较页锚点需在发布版与从顶部进入的状态下再次验证。

最终从 `#comparison` 直接进入时，浏览器定位在比较区的实际标题位置（页面上方约 53,631px、剩余内容约 2,708px），两张表均在标题之后按顺序出现，第一张包含 20 行，第二张包含 19 行。表格维持 720px 主栏宽度；公司徽标按相邻同公司行的 rowSpan 垂直合并显示，与原站结构一致。重复 AMD 小节锚点已消除。

暗色模式浏览回归已验证：主题按钮使根元素进入暗色状态；页面背景为 `rgb(8,7,6)`、正文为 `rgb(184,179,168)`、标题为 `rgb(232,228,216)`、比较表公司单元为 `rgb(42,38,31)`。这与原站实测色彩体系一致，且桌面状态下移动目录保持隐藏。

最终刷新中文复刻页后，浏览器控制台无输出；此前由“段落 + 图示”组合节点造成的 React key 警告已修复。移动端首屏回归确认：在 390px 宽度下，侧栏目录切换为单行原生目录入口，首页链接、社交链接与文章开始位置均按 `40px 20px` 页面内边距重排。
