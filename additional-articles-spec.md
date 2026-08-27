# 追加文章复刻规格

## 原站链接

| 中文标题 | 英文标题 | 原始路径 |
|---|---|---|
| 计算机体系结构原理 | Principles of Computer Architecture | `/principles-of-computer-architecture` |
| 从零设计一颗芯片 | How To Design A Chip, From Scratch | `/how-to-design-a-chip` |
| 如何学习 | How to Learn | `/how-to-learn` |

三篇文章均沿用原站的轻量三栏阅读框架：左侧固定站点导航与社交链接，文章页的二级目录位于其下，主栏最大可视宽度约 720px；移动端隐藏长目录、保留单行 `CONTENTS` 折叠入口。浅色主题为默认，暗色主题由同一图标切换。

## 《计算机体系结构原理》目录

页面首部为同名斜体标题，并按以下一级内容段落组织：**性能方程**、**壁垒**、**局部性与内存层级**、**流水线与乱序执行**、**一致性与内存一致模型**、**能耗与数据移动**、**杠杆**、**大规模可靠性**、**综合**。二级目录分别覆盖铁律、Amdahl/Gustafson/Little 定律、Roofline、Dennard/功耗/内存/ILP 壁垒、AMAT、MESI、能耗表、Pollack 定律、FIT/MTBF，以及六个阅读架构问题等条目。该页包含公式块和表格，中文版本应保留公式、量纲、链接及表格列结构。

## 《从零设计一颗芯片》目录与媒体

文章依次包含：**流程**、**架构**、**微架构**、**RTL**、**设计验证**、**仿真/仿真器/FPGA 原型**、**性能**、**综合**、**物理设计**、**晶圆厂与制造**、**Bring-up**。二级目录覆盖建模、PPA、迭代、交互、状态机、UVM、约束随机、形式验证、关联闭环、时序驱动性能、楼层规划、布局、时钟树综合、布线、时序收敛、签核、硅片工艺堆栈、PDK/GDSII、晶圆厂，以及硅前/硅后 Bring-up。

原页在“流程”段落下嵌入横向流程图，将项目主线的 Architecture、Microarchitecture、RTL、Synthesis、Physical Design、Foundry、Bring-up 与横跨多阶段的 Modelling、Simulation、Verification 以两列关系呈现。其余页面包含浅色代码块、流程图及公式／表格。中文页应复用文章阅读框架，并保持等宽代码块、横向可滚动图表与公式排版。

## 《如何学习》

该文不含侧栏文章目录、图示、表格或代码块，是单一主栏的短文。文章由六段正文、**学习法则**与**学业法则**两组有序列表组成；重点术语以斜体或强调外链呈现。中文版应保持这一克制的文本密度和段间留白，并以同一语言控制按钮提供原文对照。

## 已采集内容与实现基线

三篇原文的完整 Markdown 已保存为英文对照源，分别来自：

| 文章 | 原文资源 | 中文资源 |
|---|---|---|
| 计算机体系结构原理 | `client/src/content/principles-of-computer-architecture-en.md` | `client/src/content/principles-of-computer-architecture-zh.md` |
| 从零设计一颗芯片 | `client/src/content/how-to-design-a-chip-en.md` | `client/src/content/how-to-design-a-chip-zh.md` |
| 如何学习 | `client/src/content/how-to-learn-en.md` | `client/src/content/how-to-learn-zh.md` |

原站第一篇与第二篇没有独立静态插图文件；其可视图解由页面结构和文字图形构成。中文复刻页将《从零设计一颗芯片》流程主线与跨阶段活动改建为响应式双列结构，避免在窄屏中挤压。英文原文、链接地址、代码块、数值、公式、表格数据和章节层级保留为文章级语言切换的对照依据。
