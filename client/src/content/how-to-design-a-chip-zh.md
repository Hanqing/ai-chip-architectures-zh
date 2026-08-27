如何从零开始设计一块芯片

1979 年，Carver Mead 和 Lynn Conway 向大学分发了《超大规模集成系统导论 (Introduction to VLSI Systems)》的草稿章节。直到那时，芯片设计一直是一门手艺。每一个新的超大规模集成 (VLSI) 设计都由一个小团队根据工艺节点 (process node) 的细节，逐个晶体管地定制布局。Mead 和 Conway 用一种方法学取代了这种手艺：几何设计规则将代工厂 (foundry) 抽象掉，标准单元 (standard cells) 将晶体管抽象掉，设计在抽象层次 (abstraction stack) 上升为非专业人士也能理解的东西。两年后，MOSIS 让一名研究生以课程项目的形式流片 (tape out) 了一块包含 10,000 个晶体管的芯片。

一个现代的系统级芯片 (SoC) 在单个光罩极限芯片 (reticle-limit die) 上承载 500 亿至 1,000 亿个晶体管。它们没有一个是由人放置的。从设计师的意图到那些晶体管的链条跨越十层抽象。在架构阶段捕获的错误可以在一个下午修复；而在硅 (silicon) 中发现的相同错误会导致数月的进度延误和数百万美元的掩模成本、晶圆报废以及重新表征。大多数芯片设计的工作就是在尽可能便宜的阶段发现错误。

Mead 和 Conway 奠定的结构就是现代芯片设计所遵循的结构。意图 (Intent) → 架构 (architecture) → 微架构 (microarchitecture) → 寄存器传输级 (RTL) → 门 (gates) → 布局 (layout) → 硅 (silicon).
每个阶段降低一级抽象，并将其输出交付给下一个阶段。流程在主线（脊柱）上是线性的，但在实践中是并行的：建模、仿真和验证贯穿从架构到启动/调试 (bring-up) 的每个阶段，是整个项目中寿命最长的产物。

下文将从端到端完整说明芯片设计流程。

流程

一块芯片从规格（spec）开始，最终成为晶粒（die）。在这两个端点之间有八个阶段，每个阶段都是从更高抽象层到更低抽象层的转换。这个转换有时由人完成，有时由工具完成，但始终要通过某种等价性证明与上一级校验：按规格仿真（simulation against the spec）、针对 RTL 的逻辑等价检查（LEC against the RTL）、以及网表间的 LVS 比对（LVS against the netlist）。每个层级都必须兑现对上一级的承诺。跨越层级且未被发现的缺陷，其代价会呈指数级增长。

线性阶段
并行活动
架构 (Architecture)
意图 → 规范
微架构 (Microarchitecture)
规范 → 结构
RTL（逻辑设计）
结构 → RTL
逻辑综合 (Synthesis)
RTL → 门级网表
物理设计 (Physical Design)
网表 → 几何 (GDSII)
代工与制造 (Foundry & Fabrication)
GDSII → 硅
启动与调试 (Bring-up)
硅 → 工作系统
量产 (Production)
工作系统 → 产品
建模（功能、性能、周期精确）
仿真（Hz – kHz）
仿真与 FPGA 原型（MHz – 10s MHz）
验证（设计、物理、时序）
性能关联（模型、RTL、硅）
时序收敛（STA、DRC、LVS、IR、SI）
硅前软件启动与调试 (Pre-silicon Software Bring-up)
硅后验证与表征

左侧的各个阶段是项目的主干。右侧的条带是纬线：这些活动在某个阶段开始并贯穿多个其他阶段。架构 (Architecture) 阶段编写的功能模型 (functional model) 在启动 (Bring-up) 期间仍在运行，现在作为软件验证 (software validation) 的参考。在寄存器传输级 (RTL) 之前编写的性能模型 (performance model) 在两年后与硅 (silicon) 上的实际结果进行关联验证。项目中寿命最长的工件 (artefacts) 是最先编写的那些。

此流程附带两个契约：硬件-软件契约 (hardware-software contract，指软件被允许假设的内容) 和代工厂-设计契约 (foundry-design contract，指工艺设计套件 (PDK)，即版图被允许的样式)。第一个必须在多代硅片 (silicon) 之间成立；第二个必须在一次流片 (tapeout) 中成立。

体系结构

架构阶段（architecture phase）决定芯片（chip）要做什么。起点是芯片需要良好运行的工作负载（workloads）：推理流程（inference passes）、训练内核（training kernels）、数据库查询（database queries）、编解码流水线（codec pipelines）和图形栈（graphics stacks）。基于这些工作负载，架构师（architects）会产出三项内容。

硬件-软件契约（hardware-software contract）：指令集架构（ISA）、内存模型（memory model）、特权架构（privilege architecture）、异常模型（exception model）、一致性语义（coherence semantics）。这是软件程序所面向的表面，并且被允许在该芯片系列发布的每一代硅片上依赖。

芯片的块级结构：包含哪些核心、并列存在哪些加速器、内存位于何处、互连（interconnect）如何在各块之间传输流量，以及在该结构上穿行的逻辑数据流（dataflows）。在任一模块内部，逐周期（cycle-by-cycle）的运作机制（阶段数、队列深度、转发路径、调度策略）留给微体系结构（microarchitecture）来实现。

PPA 包络（PPA envelope）：每个模块在那些工作负载上必须满足的性能（performance）、功耗（power）和面积（area）目标。架构师在快速模型上对配置进行遍历（sweep），直到包络收敛（envelope closes）；只有在那之后，任何模块（block）才会被提交到下游（committed downstream）。

该阶段的输出是一组定义芯片功能的体系结构规格说明。

这一阶段的杠杆作用巨大。应遵守的原则是：在投入任何昂贵的详细设计之前，先用快速模型花费数周或数月的时间。

建模

架构师从事软件工作，而不是寄存器传输级 (RTL). 他们使用像 C++ 这样的常规编程语言编写. 他们构建两种互补的模型，这两种模型在项目的生命周期内共存：一种用于确定程序在芯片上做什么，另一种用于确定芯片能以多快的速度完成这些操作.

功能模型 (functional model) 是针对指令集架构 (ISA) 的软件解释器，维护架构状态（PC、寄存器文件 (register file)、标志 (flags)），按照规范执行每条指令，并返回正确的结果。QEMU 和 Simics 是商用级的示例；大多数团队维护各自的专有等效实现。它没有时间的概念：没有流水线阶段、没有缓存延迟、没有争用。它回答的是：这个程序执行了哪些指令，以及按照什么顺序执行？

性能模型是周期精确（cycle-accurate）或周期近似（cycle-approximate）。它涵盖了流水线的深度和宽度（pipeline depth and width）、具有真实延迟的缓存层次结构（cache hierarchy with realistic latencies）、分支预测算法及表格大小（branch predictor algorithms and table sizes）、内存带宽与争用（memory bandwidth and contention）、功能单元延迟（functional-unit latencies）以及发射队列深度（issue-queue depths）。gem5 是典型的学术示例。它回答了一个互补的问题：在给定那条指令流（instruction stream）的情况下，所提出的该微架构（microarchitecture）能够以多快的速度处理它？

它们被分开是有原因的。性能模型 (performance model) 每周迭代数十个配置；如果每次运行都需要通过功能模拟器 (functional simulator) 启动操作系统，迭代循环就会崩溃。相反，功能模型 (functional model) 会生成轨迹 (traces)，由性能模型 (performance model) 对其重放。一次捕获，多次重放。

基于轨迹与基于执行的模拟

基于轨迹的模拟（trace-based simulation）速度快且可重复：相同的轨迹输入到不同的缓存配置中可以隔离某一参数的影响。代价是轨迹是对动态过程的静态快照，在一种微架构假设下捕获、在另一种假设下重放。真实的乱序处理器会对错误预测的路径进行推测执行，从而污染缓存；轨迹只记录已提交的路径，因此被建模的缓存看起来比真实情况更有效。自旋锁（spin-locks）、轮询循环和依赖 I/O 的代码会随时间改变迭代次数；轨迹将它们固定下来。多线程的交错依赖于相对执行速度；轨迹仅捕获一种交错方式。

基于执行的模拟（execution-driven simulation）弥补了这一差距。模拟器直接执行程序，维护体系结构状态，解析在途分支，并处理推测路径。指令流会根据被建模的微架构实时适配。代价是模拟更慢且实现更复杂。

对于在硅片上尚不存在的 ISA 扩展（新的向量指令、新的矩阵乘法、新的原子操作）上的工作负载，无法从现有硬件捕获轨迹。功能模型（functional model）成为唯一来源。这也是功能模型常作为编译器开发平台的原因之一：编译器团队可以在实际硅片出现之前很久就以其为目标进行开发。

PPA（性能、功耗、面积）

性能、功耗、面积。三者不可分割，而架构阶段是在成本最低时做出权衡的地方。

更宽的流水线换来 ILP，却付出功率-面积的代价：更多的保留站（reservation stations）、更多的重命名逻辑、更复杂的旁路网络。ILP 的墙壁限制了这种增益。
更大的缓存提升命中率，但增加硅片面积：在现代核心上，缓存主导了芯片面积。
专用单元（矩阵引擎、视频编解码器、加密模块）可以以 10–100× 加速某一工作负载，但代价是通用性下降以及构建它所需的硅片面积。

架构师会做参数扫描（sweeps）。“如果 load queue 是 48 条而不是 32 条会怎样？”在性能模型里是一个下午的工作，而在 RTL、验证和时序上会成为数周的改动。只有当在性能、每面积性能（perf-per-area）或每瓦性能（perf-per-watt）上明显获胜时，才会提交到规格。模型是你思考和试验的地方；RTL 是你承诺的地方。

微架构（Microarchitecture）

微架构阶段决定如何去实现它。微架构师逐块地消化架构契约（architecture contract），并为每块生成一个微架构规范：一个结构蓝图，详细到逻辑设计师可以仅凭此编写 RTL 而无需猜测。

在某一模块内部，该规范记录流水线（阶段数、每个阶段的功能、转发与旁路路径、停顿和清洗条件）、结构资源（队列深度、寄存器文件端口、SRAM 端口、功能单元数量）、控制（用于仲裁、调度、缓存一致性、总线协议的状态机，带有 ROB 和保留站的乱序机制）以及与邻近模块的接口（信号清单、valid/ready 握手、顺序规则、错误语义）。

每一条信号、每一个队列深度、每一条优先级规则都有名称。规范中任何未明确之处都会成为逻辑设计师必须回答的问题。

迭代（ITERATION）

微架构在性能模型中进行迭代。在编程语言中改变流水线阶段只需数小时；等价的 RTL 改动需要数日，验证更新需要数周，时序影响可能需要重新布局布线。经济性迫使微架构师在模型中探索，并且只有在有可辩护的答案时才去承诺。

被迭代的内容包括：

- 流水线深度和宽度。更深可以换频率，但在分支预测误判惩罚上付出代价；更宽可以换 IPC，但付出重命名、调度和旁路网络的成本。
- 缓存大小和相连性（associativity）。更大可以减少容量未命中；更高的相连性减少冲突未命中；两者都增加面积和访问延迟。
- 队列深度。ROB、load queue、store queue、miss queue。用利特尔定律确定容量：所需条目数 ≥ 吞吐量 × 停顿持续时间。
- 分支预测器拓扑。局部历史、全局历史、TAGE 表大小；在整数 SPEC 上约 1% 的准确率提升，就是可测量的 PPA 收益。
- 互连拓扑。网格（mesh）与环（ring）与交叉开关（crossbar）；对半切带宽（bisection bandwidth）与延迟与面积的权衡。

每一次扫描都会产出团队可辩护的数值。

交互（THE INTERACTIONS）

微架构师位于架构师与逻辑设计师之间，而与双方的交互是项目中最艰难的讨论所在。

Architect / Microarchitect（架构师 / 微架构师）。架构师在规格中定义了一个带有严格顺序保证的新原子扩展。微架构师确定这对 load-store 单元、缓存控制器和一致性协议的影响，并提出反对：“该顺序保证要求在每次原子操作时清空流水线；在工作负载 X 上这意味着 8% 的 IPC 损失。”双方反复迭代，直到规格放宽、实现找到更便宜的路径，或成本被判定为可接受。

Microarchitect / Logic Designer（微架构师 / 逻辑设计师）。微架构师指定了一个 64 条目的 load queue，并要求单周期的 store-to-load 转发。逻辑设计师发现，从一个 32 条目 store queue 做单周期转发会形成一个 27 级的组合路径，导致目标时钟周期被拖慢 200 ps。双方开始迭代：对转发做流水线化（多一个周期）、从 store queue 中减少少量条目、重构优先编码器，或改变芯片平面布局以缩短路径。反馈在双方流动，当边界是可渗透的时，最好的设计会出现。

最常见的微架构失效模式是规范里的歧义。未指明的角落案例会在实现过程中被发现，通常是在规范签发后数周或数月。

RTL（寄存器传输级）

Register-transfer level 是将计算描述为在寄存器之间传输数据加上转换这些数据的组合逻辑的抽象。同步数字电路由两类元件组成：寄存器（触发器，保存状态，在时钟边沿更新）和组合逻辑（门、复用器、加法器、比较器：输入的无状态布尔函数）。时钟是通用的时间参考：每一次状态变化都发生在时钟边沿，每两个寄存器之间的组合路径必须在一个时钟周期内稳定。

RTL 阶段将微架构翻译为可综合的 Verilog 或 SystemVerilog。

系统 / 算法
框图, SystemC, C++ 性能模型
行为级 (Behavioural)
无时序函数, HLS 源
寄存器传输级 (RTL (Register-Transfer Level))
SystemVerilog, 周期精确
门级
标准单元网表 (standard-cell netlist)
晶体管级
NMOS / PMOS 网络
版图 (Layout)
多边形, GDSII
硅
已制造的晶圆
人 ↕
工具 ↓
结构性决策
确定性变换

寄存器传输级 (RTL) 是设计本身从人工编写转变为由工具生成的分界点。在 RTL 以下，工程师指导生成下一层表示的工具：合成 (synthesis)、物理设计 (physical-design) 和时序 (timing) 工程师编写工具要针对其优化的约束（时钟周期 (clock period)、假路径 (false paths)、平面规划边界 (floorplan boundaries)、功率预算 (power budget)），并对输出反复迭代，直到签核 (signoff) 通过。

空间性，而非顺序性

芯片设计中最难的思维转变是：HDL（硬件描述语言）不是一种编程语言。软件程序描述随时间发生的顺序操作；而 HDL 描述的是存在于空间中的结构。每一个 always block、每一个 assign、每一个 module instance 都在每个时钟周期并行运行。寄存器文件的读出与算术逻辑单元（ALU）的计算并发，缓存的标签检查并发，分支预测器的更新也并发，所有这些都在同一个周期内发生。

SystemVerilog 的每一行都描述了某个物理存在的东西。An assign 是一根线。An always_ff 是一组触发器（flip-flops）。一个子模块实例化会把该电路的一个拷贝放到设计中。`if (sel) y = a; else y = b;` 不是程序中的分支；它是物理存在的多路复用器，无论条件是否为真。资源冲突必须由设计者解决：如果两个操作在同一周期都需要乘法器，你就需要两个乘法器、一个仲裁器，或引入停顿（stall）。

状态爆炸是结构上的代价。一个含有 1,000 个触发器的模块有 2¹⁰⁰⁰ 种可能状态，比可观测宇宙中的原子还多。缺陷隐藏在那些穷举仿真无法覆盖的晦涩组合中。项目其余部分（特别是验证）就是如何覆盖足够多的状态空间以达成信心的纪律和实践。

设计者决定的事项，工具决定的事项

RTL 的每一行都是工具无法推断的结构性决策。设计者固定逐周期的行为（微架构可能只会说“缓存以 3-cycle latency 返回数据”；而 RTL 则明确地在第 1 个周期做 tag-compare、第 2 个周期读 data-array、第 3 个周期做对齐和驱动）、流水线形状（深度、转发、停顿、刷新）、精确位宽（32-bit 加法器在结构上不同于 64-bit 加法器）、协议时序（valid/ready 握手逐周期指定）、复位行为（每个寄存器在复位时取何值）以及资源数量（设计中包含多少个加法器、SRAM 端口、寄存器文件端口）。

工具补充的内容包括：哪种标准单元实现每个操作（synthesis 会根据路径的时序裕量决定 ripple-carry vs carry-lookahead vs carry-select）、每个单元的大小（驱动能力、阈电压风格）、每个单元在芯片上的位置（placement）、连线如何在它们之间路由，以及设计者被允许视为理想的所有模拟效应（串扰（crosstalk）、IR drop、电迁移（electromigration）、亚稳态（metastability））。

有限状态机

几乎芯片中的每一个模块都是 datapath 与 FSM 的组合。datapath 做计算；FSM 决定做什么。在物理层面，FSM 是状态寄存器（flip-flops）加上计算下一个状态和输出的组合逻辑。

真实的芯片中到处运行着 FSM：缓存控制器（MESI / MOESI 状态转换）、总线协议控制器（AXI 的五个通道，每个通道都有自己的 VALID/READY 握手，每个通道 15–40 个状态）、仲裁器（循环轮转优先级）、UART / SPI / I²C、DMA 引擎（descriptor fetch → source read → dest write → wait completion）、DRAM 控制器（ACTIVATE → READ/WRITE → PRECHARGE → REFRESH，强制执行 tRCD / tRP / tRFC）、PCIe LTSSM（商业上最复杂的 FSM 之一，大约有 ~30–50 个子状态）、USB 链路层（50–100+ 状态）、DVFS / C-state 控制器按正确顺序对电压和频率排序。

教材中的 FSM 通常有 4–8 个状态。真实的 FSM 有 20–200+ 个状态，条件性转移基于复杂的布尔表达式，有超时、错误恢复和远超“顺利路径”的角落情况。

示例

一小段真实的寄存器传输级 (RTL)：位于简单中央处理器 (CPU) 核心的整数算术逻辑单元 (ALU)。组合逻辑 (combinational)、单周期 (single-cycle)：结果 (result) 和状态标志 (status flags) 在操作数 (operands) 有效的同一周期内稳定。对结果使用一个基于操作选择 (operation select) 的组合始终块 (always_comb) 多路复用器 (mux)，对标志线 (flag wires) 使用两个赋值语句 (assigns)。

module alu (
    input  logic [31:0] a,            // rs1 value
    input  logic [31:0] b,            // rs2 value
    input  logic [2:0]  op,           // operation select
    output logic [31:0] y,            // result
    output logic        zero,         // y == 0
    output logic        neg           // y[31] (signed-negative)
);
    localparam logic [2:0]
        OP_ADD = 3'd0,
        OP_SUB = 3'd1,
        OP_AND = 3'd2,
        OP_OR  = 3'd3,
        OP_XOR = 3'd4,
        OP_SLT = 3'd5;

always_comb begin
        unique case (op)
            OP_ADD:  y = a + b;
            OP_SUB:  y = a - b;
            OP_AND:  y = a & b;
            OP_OR:   y = a | b;
            OP_XOR:  y = a ^ b;
            OP_SLT:  y = {31'b0, $signed(a) < $signed(b)};
            default: y = '0;
        endcase
    end

assign zero = (y == 32'b0);
    assign neg  = y[31];
endmodule

大约 25 行描述着一个物理存在的结构：一个加法器、一个减法器、三个按位单元、一个比较器、一个 6-to-1 的结果多路复用器，以及两条组合逻辑的标志线。从这里开始，synthesis 会根据路径的裕量决定加法器采用 ripple-carry 还是 carry-lookahead 还是 carry-select，选择单元大小以满足驱动能力，并把这些东西打包成几百个标准单元。即便是这个二十五行的模块也有 2⁶⁷ 种可能的输入组合；穷举仿真已经不可行。

综合契约

RTL 是数字设计的单一事实来源。所有下游内容都从它派生。仿真以软件模型的形式逐周期运行 RTL；验证使用仿真（以及形式证明）来证明 RTL 在功能上是正确的。综合将 RTL 转换为门级网表；LEC 证明它们在功能上等价。物理设计采用网表并生成版图；LVS 证明它们相匹配。Emulation 和 FPGA 原型将 RTL 映射到可重构硬件。硅前软件的启动（pre-silicon software bring-up）直接在 RTL 上运行。

该链（寄存器传输级 (RTL) → 综合 (synthesis) → 门级 (gates) → 布局布线 (place-and-route) → 版图 (layout) → 掩模 (masks) → 硅片 (silicon)）在每个步骤都要进行验证。寄存器传输级 (RTL) 中的缺陷会传播到每个层级。一个晚期的寄存器传输级 (RTL) 缺陷就是要重新流片 (re-spin)。

设计验证

验证在典型芯片项目中消耗 60–70% 的工程工作量，是预算中最大的一项。原因是结构性的，分三点。硬件是高度并发的：每个信号每个周期都在运行，因此错误来自于顺序直觉无法预见的交互。状态空间是不可穷尽的：一个 32-bit 寄存器有 2³² 个状态；一个有数百个触发器的设计，其状态数比宇宙中的原子还多。并且硅无法打补丁：每一次功能逃逸都会变成金属层 ECO（一版改动）、微码变通，或者完整的重新流片（数月的延误和数百万美元的成本）。

问题不在于可证明性；而在于覆盖率。你无法穷尽地模拟每一个状态，因此信心来自对空间中一小片经过精心选择的子集的智能覆盖，这个覆盖以从规格书编写的验证计划为锚。

UVM 验证方法学

主流的测试平台方法学是 UVM：由 Accellera 标准化的 SystemVerilog 类库。UVM 将测试平台架构编码成一小套可复用的基类，使得工程师在不同项目间切换时无需重新学习测试平台的结构。

UVM 环境 (UVM environment)
序列 (Sequence)
序列器 (Sequencer)
驱动 (Driver)
被测设备 (DUT)
(你的 RTL)
监视器 (Monitor)
参考模型 (Reference Model)
计分板 (Scoreboard)
覆盖率收集器 (Coverage Collectors, covergroups, assertions)
驱动 (drive)
观察 (observe)
实际 (actual)
期望 (expected)

Sequence 定义了要发送的事务以及发送顺序。Sequencer 协调数据流，从 sequence 中拉取条目并将其提供给 driver。Driver 将抽象事务转换为遵循协议时序的引脚级信号。Monitor 被动地观察接口，从引脚活动重构事务并广播它们。Scoreboard 从输入和输出 monitor 接收事务，运行参考模型，并比较 expected 与 actual。Coverage collectors 测量规格中实际被触及的部分有多少。

在测试平台周围，代理 (agent) 将一个接口的驱动器 (driver)、监视器 (monitor) 和序列器 (sequencer) 捆绑在一起；仿真环境 (environment) 将所有代理 (agent)、计分板 (scoreboard) 和覆盖收集器 (coverage collector) 捆绑在一起；顶层的测试 (test) 配置仿真环境 (environment) 并选择要运行的序列 (sequences)。

CONSTRAINED RANDOM + COVERAGE

定向测试无法扩展。在一个状态空间超过宇宙原子数的芯片中，你不可能为每种场景写一条测试。相反，验证工程师用约束来描述合法输入空间，并让求解器生成数千个随机但合法的输入。

```systemverilog
// 1. The sequence-item: the space of legal stimulus
class cpu_instr extends uvm_sequence_item;
    `uvm_object_utils(cpu_instr)

    typedef enum {ADD, SUB, MUL, LD, ST, BR, JMP} opcode_e;

    rand opcode_e   op;
    rand bit [4:0]  rs1, rs2, rd;     // 5-bit register-file indices
    rand bit [31:0] addr;            

    // Realistic instruction mix
    constraint c_mix  { op dist { ADD := 30, SUB := 15, MUL := 10,
                                  LD  := 20, ST  := 15,
                                  BR  :=  7, JMP :=  3 }; }

    // LD/ST: word-aligned address inside the mapped region
    constraint c_addr { (op inside {LD, ST}) ->
                            addr[1:0] == 2'b00 &&
                            addr inside {[32'h0000_1000:32'h7FFF_FFFC]}; }

    function new(string name = "cpu_instr");
        super.new(name);
    endfunction
endclass

// 2. The sequence: ten thousand legal instructions, handed to the driver
class cpu_seq extends uvm_sequence #(cpu_instr);
    `uvm_object_utils(cpu_seq)

    function new(string name = "cpu_seq");
        super.new(name);
    endfunction

    task body();
        cpu_instr instr;
        repeat (10_000) begin;
            instr = cpu_instr::type_id::create("instr");
            start_item(instr);                 // request a slot on the sequencer
            assert(instr.randomize());         // solver picks op, regs, addr
            finish_item(instr);                // hand off to driver via TLM
        end
    endtask
endclass
```

sequence-item 声明了随机字段以及它们必须满足的约束；sequence 包装了生成循环。在 body() 内，每次迭代通过 factory 创建一个新条目，使用 start_item 向 sequencer 请求一个槽位，调用 randomize()（求解器一次性为 op、rs1、rs2、rd、addr 选取合法值），然后通过 finish_item 将条目移交给 driver。Driver 在被 seq_item_port.get_next_item() 阻塞时会醒来，将条目转换为 DUT 接口上的引脚级活动，并在完成后发出信号。分层约束（用于“始终合法”的基类约束、以及用于“本次测试收窄范围”的内联约束）使得同一个 item 类可以服务于数十种场景而无需代码重复。

覆盖率回答了唯一重要的问题：我测试得够多吗？

代码覆盖是结构化的：行覆盖、切换（toggle）、分支、条件、FSM。必要但不充分：100% 的代码覆盖而没有断言检查是找不出错误的。
功能覆盖是由规格驱动的：covergroups 用来计数验证计划中列出的每个功能、边角情况和组合是否被实际触及。
断言覆盖：cover property 跟踪特定的时序序列是否触发。

用于 cpu_instr 流的功能覆盖收集器，编写为 UVM 订阅者 (uvm_subscriber)，以便监视器通过分析端口 (analysis port) 将其传递：

```systemverilog
class cpu_cov extends uvm_subscriber #(cpu_instr);
    `uvm_component_utils(cpu_cov)

    covergroup cg with function sample(cpu_instr instr);

        // 1. Did every opcode actually show up?
        opcodes: coverpoint instr.op; // auto-bin per enum value
```

```
// 2. Did we exercise the register-file corners?
dest_reg: coverpoint instr.rd {
    bins zero = {0};        
    bins low  = {[1:7]};
    bins mid  = {[8:23]};
    bins high = {[24:31]};
}

// 3. Address-region coverage, but only for memory ops
addr_region: coverpoint instr.addr iff (instr.op inside {LD, ST}) {
    bins page0  = {[32'h0000_1000 : 32'h0000_1FFF]};
    bins low_mb = {[32'h0000_2000 : 32'h000F_FFFF]};
    bins mid_mb = {[32'h0010_0000 : 32'h00FF_FFFF]};
    bins rest   = default;
}

// 4. Cross: which opcode x destination-register combinations fired?
op_x_rd: cross opcodes, dest_reg;
endgroup

function new(string name, uvm_component parent);
    super.new(name, parent);
    cg = new(); // covergroups must be constructed
endfunction

// Invoked once per instruction the monitor observes on the bus
function void write(cpu_instr t);
    cg.sample(t);
endfunction
endclass
```

这四个 coverpoint（覆盖点）一同捕捉了关于激励（stimulus）重要的方面，而不是激励实际做了什么。

回归结束后，工具会按每个 bin 和每个 cross 组合报告覆盖百分比。出现 opcode 的空洞（整晚都没生成任何 JMP）、addr_region 的缺口（从未抽样到 mid_mb），或 op_x_rd 单元稀疏（MUL 从未写入 r0），就是验证工程师接下来要看的问题：收紧或放宽约束、添加定向测试，或者如果某个 bin 确实按设计无法到达就把它标记为 ignore_bins。

覆盖驱动的验证循环：从规范写出 vplan，构建 UVM testbench，使用成千上万的随机种子运行回归，合并覆盖率，分析空洞，针对缺口编写新的约束或定向测试，重复迭代。覆盖空洞通常揭示三类问题：(a) 约束过紧，无法产生场景；(b) 刺激缺失；或 (c) 无法到达的代码。

断言与形式验证

上文的 UVM testbench 驱动激励并检查端到端结果。但许多错误是协议违规，会在单个时钟沿上触发：例如 VALID 提前一个周期下降，或在握手过程中有效载荷字段发生翻转。SystemVerilog Assertions 将这类检查嵌入设计中，在每个周期持续评估，一旦契约被破坏就会立即明显失败。下面是一个针对 AXI4 写地址通道的小型检查器：

```verilog
interface axi_aw_checker (
    input  logic        clk,
    input  logic        rst_n,
    input  logic        awvalid,
    input  logic        awready,
    input  logic [31:0] awaddr,
    input  logic [7:0]  awlen,
    input  logic [2:0]  awsize
);
    default clocking cb @(posedge clk); endclocking
    default disable iff (!rst_n);

    // Valid must never be asserted during reset
    aw_reset_low: assert property (!rst_n |-> !awvalid)
        else $error("AWVALID asserted during reset");

    // Once Valid rises, it must stay high until Ready accepts
    aw_valid_stable: assert property (
        awvalid && !awready |=> awvalid
    ) else $error("AWVALID dropped before handshake");

    // While the handshake is pending, the payload must not change
    aw_payload_stable: assert property (
        awvalid && !awready |=>
            $stable(awaddr) && $stable(awlen) && $stable(awsize)
    ) else $error("AW payload changed mid-handshake @ %h", awaddr);

    // Coverage: did we ever observe a back-to-back accepted burst?
    aw_back_to_back: cover property (
        (awvalid && awready) ##1 (awvalid && awready)
    );
endinterface
```

两个蕴含操作符（|-> 表示重叠／overlapping，|=> 表示非重叠／non-overlapping）和 `$stable`（当信号在前后两个周期间未改变时为真）构成了大多数协议检查所需的少量时序习语。每个命名的 `assert property` 在触发时都会产生清晰的模拟器报文；并行的 `cover property` 则将覆盖信息送入与 `covergroups` 相同的覆盖池，记录背靠背场景是否被实际执行。整个接口只需绑定到总线一次，因此相同的属性既可在仿真中不变地运行，也可在形式工具下运行。

形式验证用数学证明替代仿真。形式工具穷尽地探索模块的每个可达状态，以证明某条断言永不会被违反，或找到反例。其力量在于对被证明属性的穷尽覆盖；局限在于状态空间爆炸。形式验证对小型、以控制为主的模块有效：仲裁器、FIFO 控制器、协议引擎、CDC 逻辑以及安全路径。但对完整的处理器内核来说不可行。

综合使用时，情形是：仿真负责广度（成千上万的测试、快速调试、对整个设计空间的覆盖）；形式验证负责深度（在可处理模块上对特定属性进行穷尽证明）；断言负责捕捉那些隐藏的协议违规。

验证工程师

现代的回归测试是在数千个 CPU 核心上每夜运行数万条测试，并将覆盖率在整个集群中合并。验证工程师的职责是保持偏执式怀疑；他们的失败模式是遗漏一个角落用例；成功衡量标准则是在 bring-up 实验室里毫无报错。

仿真、仿真（Emulation）、FPGA 原型

同一份 RTL 在项目期间会以三种速度被执行。每个层级都有其它层级无法替代的定位。

软件仿真负责模块级开发与设计验证。模拟器运行数千条测试，提供完整的调试可见性（每个信号在每个周期的前向和后向状态）。这是每天每个工程师桌面上运行的工作。行业标准的模拟器有 Synopsys VCS、Cadence Xcelium 和 Siemens Questa，开源的 Verilator 在基于周期的、可综合 RTL 仿真中是最快的选择。大约 65% 的设计缺陷在这里被捕获，而模拟器的速度常常成为限制因素。

使这种可见性可用的视图是波形：设计中每个信号随时间绘出，可向前向后导航，光标标记工程师正在检查的周期。Synopsys Verdi 是行业标准的查看器；Cadence SimVision 和开源 GTKWave 是替代选项。单次内存请求事务的典型视图：

0
1
2
3
4
5
6
7
8
9
clk
rst_n
req
addr[31:0]
state
0x0000_0100
RESET
IDLE
REQ
BUSY
DONE
IDLE
cursor: cycle 5

调试是一门在关键的单个周期内找到唯一错误信号的学问。大多数 RTL 工程师的时间都花在盯着像这样的视图上。

硬件仿真（emulation）负责系统级工作负载：启动 Linux、运行 SPEC 轨迹、进行机器学习推理，覆盖数十亿个周期。这类工作需要的实际耗时超过软件仿真所能承受的范围。寄存器传输级（RTL）被映射到运行在 1–10 MHz 的专用硬件上：Cadence Palladium 使用大量定制布尔处理器；Synopsys ZeBu 使用商用 Xilinx FPGA；Siemens Veloce 使用专为仿真设计的定制可重构芯片。它们通常以机房规模、机架式部署，每架成本达数百万美元，供跨团队共享。它们比软件仿真快得多，但编译时间长，且调试可见性有限。

FPGA 原型负责软件启动（software bring-up）：固件团队在芯片实际存在之前就在芯片上启动操作系统。这类工作需要接近本机速度并与真实外部硬件交互。Synopsys HAPS、Cadence Protium 和 Siemens Veloce Primo 将设计映射到以数十 MHz 运行的商用 FPGA 板上，速度足以与真实内存、网络和显示设备对接。代价是可见性受限（限于外部接口，就像真实芯片一样）以及更手工的映射流程；设计可能需要修改以适应可用的 FPGA。

工具	Speed (Hz of simulated clock)	容量	调试可见性	资本成本
软件仿真	1 Hz – low tens of Hz full-chip; kHz block-level	任何规模；运行在 CPU 服务器集群上	完整：每个信号、每个周期，前向和后向	商用服务器
Emulation	1–10 MHz	数十亿门级	信号必须预先选择以供跟踪	每架数百万美元
FPGA 原型	tens of MHz	受 FPGA 容量限制；设计可能需要分区	像真实芯片；仅限外部接口	每块板 100K – 1M

团队会同时使用这三种方法。这个进程对应到项目上的各个阶段：在仿真中进行模块级 RTL 开发，在仿真器上进行系统级集成，在 FPGA 原型上进行软件启动。

性能

性能工作贯穿整个项目。它沿两条轴分裂：吞吐量（一个工作负载需要多少个周期？）和频率（设计能否达到目标时钟？）。总性能是 frequency × (1/cycles)。一个时钟表现非常好但比模型多 30% 停顿的设计，与一个达到了 IPC 但无法闭合时序的设计同样是有问题的。

关联验证循环

性能模型和 RTL 都对相同的工作负载进行度量。两者都用相同的性能计数器进行了插装：l2_miss_demand_load, rob_full_stall_cycles, branch_mispredict_at_retire, queue occupancy, arbitration outcomes。名字相同、定义相同、触发条件相同。周期计数上的不一致告诉你模型和 RTL 在周期层面不同步；计数器上的不一致告诉你原因。RTL 中两倍的 L2 miss 指向预取器（prefetcher）分歧。IPC 降低但计数器没有变化指向性能模型所抽象掉的一个停顿。

该循环，持续运行：

性能模型预测某个工作负载的周期数和计数器数值。  
同一工作负载通过仿真或仿真器在 RTL 上运行。  
对比计数器数值和周期计数。  
调试任何差距。要么模型遗漏了一个真实效应（模型缺陷），要么 RTL 出现了架构师未预期的停顿（RTL 性能缺陷）。两者都要修正；问题总是“哪一方错了”。

团队会按工作负载跟踪周期差异，目标类似于“在每个关键工作负载上保持在 3% 以内”。高于阈值的偏离被视为停线问题：基于模型的每一个下游实验现在都值得怀疑。

相同的计数器常常成为硅硬件的性能监控计数器（Intel's PMC、ARM's PMU、每个现代加速器上的每块模块遥测），将 C++ 模型、RTL 与真实硬件之间的循环闭合。一旦硅片回来，模型会与硅进行关联，任何系统性差距都会影响下一项目的建模方法论。

为何关联验证重要

一个未关联的性能模型是一个假设，而不是度量。模型中的每一个抽象都有可能是谎言：也许内存控制器被建模为固定延迟队列而非真实的调度器；也许假设 store-to-load forwarding 是完美的；也许忽略了一个 3 周期的时钟域跨越。失败模式是微妙的：模型会乐于生成看起来很精确的数字，例如“特性 X 在工作负载 Y 上带来 4.2% 的 IPC 提升”，但如果模型在争用下对内存子系统系统性地错误，那么那 4.2% 在现实中可能是 0% 或 -2%。

缓慢但准确的真实基线（RTL、仿真器、最终的硅片）使得快速、近似的模型保持诚实。移除真实基线，快速模型就会漂移成虚构。在任何具有相同形态的工程领域中，这一模式（用于思考的快速模型，用于校准的缓慢真实基准）都是通用的。

时序驱动的性能

性能工作的另一半是频率。综合和静态时序分析共同报告临界路径：两个触发器之间最慢的组合逻辑路径，这些路径限制了可达成的时钟频率。工程师盯着时序报告，查看在特定端点上的负时延（negative slack）。

对于每条失败的路径：跟踪发生了什么，计算逻辑层数，识别门、线负载、模块边界，区分是 setup 还是 hold。Synopsys PrimeTime 和 Cadence Tempus 提供详细的路径分解。常见的 RTL 级修复包括：流水线化（增加一个阶段以打断长路径）、重定时（在触发器边界间移动逻辑以平衡延迟）、表达式重构（将优先多路复用改为并行、平衡加法器树、用前缀进位（carry-lookahead）替换串行进位）、预计算（在管线中更早有更多裕量的位置计算条件）、逻辑复制（切断关键网络的扇出）。

团队按模块跟踪 WNS（最差负裕量，worst negative slack）和 TNS（总负裕量，total negative slack），每天运行综合并更新仪表盘。每个失败模块都有负责人。随着流片（tapeout）临近，关注点会收窄；签核前的最后几周通常被少数顽固路径的时序收敛工作主导。

性能架构师、寄存器传输级（RTL）设计师、综合工程师和时序工程师共同协作。最困难的路径需要跨学科的修复，而不是纯粹的 RTL 修正：有时正确的答案是修改 floorplan（平面规划）以缩短线路，有时则是架构上的退让（增加一个流水级以牺牲一个周期的延迟）。

综合

逻辑综合（synthesis）将 RTL 转换为门级网表：来自代工厂标准单元库的具体逻辑单元相互连线，以实现与 RTL 相同的功能。主流工具是 Synopsys Design Compiler（典型示例，由 Aart de Geus 在 1980 年代末推向市场，并成为 RTL 革命的引擎）和 Cadence Genus。

该转换分为若干阶段。解析负责读取 RTL。与工艺无关的优化做布尔简化、常量传播、死代码消除：这些是软件编译器所做的相同类型的优化，但应用于组合逻辑锥而不是指令流。工艺映射（technology mapping）将优化后的布尔逻辑绑定到代工库中的具体标准单元；例如 `assign y = (a & b) | (~a & c)` 可能被映射为四个特定的 NAND / 反相器单元连在一起，按速度、面积和功耗的综合权衡选择。与工艺相关的优化调整门的大小（对于扇出大的网络使用更高驱动强度）、插入缓冲（长线需要放大）、替换单元变体（低阈值电压用于速度，高阈值电压用于泄漏）并在寄存器边界间应用重计时以平衡流水线级。

一个现代 SoC 的门级网表包含数亿到数十亿个单元实例。没有人会直接对其进行人工推理。等价性由逻辑等价性检查（Synopsys Formality 和 Cadence Conformal）以数学方式证明。LEC 正式证明二者对每个输入在功能上是相同的；如果无法证明等价，则该次综合运行会被拒绝并在不同约束下重新尝试。

综合工程师的工具就是约束。时钟周期、输入/输出延迟、假路径、多周期路径、最大扇出、允许的单元类型、面积预算、泄漏预算。约束构成了一整门语言（SDC），大多数综合问题都是约束问题：错误的约束要么在牺牲其他区域的情况下对某一部分过度优化，要么未能标记需要关注的一条路径。

设计人员在 RTL 开发期间增量运行综合，以便及早获得时序、面积和功耗的反馈。如果某一路径需要 2 ns 而时钟周期是 1 ns，则需要在错误积累之前进行逻辑重构。项目后期，最终的物理综合会使用真实的 floorplan 信息来估算线负载，从而缩小综合时的预测与布线后实际情况之间的差距。

物理设计

物理设计将门级网表转换为版图（layout）：代工厂将要制造的芯片上单元和连线的实际几何排列。输出是 GDSII（或其后继者 OASIS），即代工厂使用的版图数据库。它是流程中最深的流水线，也是最依赖数值优化的部分。

平面规划

对芯片进行高层次的版图划分。哪个 CPU 核放在哪里、缓存放在哪里、内存控制器连接在哪里、I/O 焊盘落在哪里、互连环在哪里。floorplan 大多是手工完成且至关重要：它决定了邻近性、通信局部性、热分布以及时钟树的可分发性。糟糕的 floorplan 会使下游的时序收敛变得不可能。floorplan 还定义电源网络：沿芯片分布供电的宽金属条，其尺寸需保证在不过大的 IR 掉电下提供电流。

布局

为所有标准单元分配物理位置，可能多达数亿个单元。优化目标包括总线长、单元密度和时序关键的邻近性。该优化问题规模巨大；运行需要数小时到数天。时序驱动的布局会对关键路径上的单元加权，使它们最终足够靠近以满足时钟周期。

时钟树综合

时钟必须在芯片上到达每个触发器并且到达时间非常接近。偏差（即所有触发器到达时间的变化）被控制在几十皮秒级别。CTS 构建一个平衡的分发树，在精心选择的节点处插入缓冲，以使从源到每个端点的路径长度大致相等。一个现代的时钟树包含数十万个缓冲器，并自身消耗显著的芯片功耗。

布线

用实际的金属线在十层或更多金属层之间连接每一个信号。较低层（M1–M3）承载单元内部和单元间的本地连接；中间层（M4–M16）承载块到块的连线；上层（M17+）承载全局信号和电源分配总线。路由必须遵守代工厂的设计规则：最小宽度、最小间距、层覆盖、密度。路由器先规划近似的全局路径，然后在详细布线阶段分配精确的轨道和通孔（vias）。

时序收敛

项目中最艰难的几周。每条从一个触发器经组合逻辑到下一个触发器的信号路径都必须在一个时钟周期内完成。时序依赖于寄生参数（每一段线的电阻和电容），寄生参数依赖于路由，路由依赖于布局，布局又依赖于时序优化。这是一个循环依赖。工具会迭代：放置 → 估算延迟 → 优化 → 路由 → 提取寄生参数 → 检查时序 → 调整 → 重新布线 → 重新检查。该循环可能需要数周才能收敛。

可用杠杆有：替换单元（更高驱动强度的变体）、晶体管尺寸调整、插入缓冲、逻辑重构、布局调整，以及（在无他法时）增加 RTL 的流水级并重新验证。后者是昂贵的杠杆。项目越接近流片（tapeout），任何 RTL 变更就越痛苦。

签核

在版图送到代工厂之前，会触发一系列检查。DRC（设计规则检查 (design rule checking)）验证版图在数百万条规则和数十亿次多边形检查下是否遵守每一条代工厂规则。LVS（版图对照原理图 (layout versus schematic)）确认版图实现了预期的网表：从多边形中提取出的拓扑必须与门级网表相匹配。ERC（电气规则检查 (electrical rule check)）会标记浮动栅、短接电源、缺失井连接、天线效应。Signoff STA（签核静态时序分析 (static timing analysis)）在多个 PVT 转角（工艺、供电电压、温度 (process, voltage, temperature)）上，使用详细提取的寄生参数运行静态时序分析。功耗分析检查功耗预算；IR-drop 分析检查电源网；信号完整性分析检查串扰。

DRC、LVS 和 ERC 被称为物理验证；Signoff STA 是时序验证。

当所有检查都通过后，项目就流片（tape-out）。GDSII 文件送到代工厂。团队松一口气。然后又要等待数月，等待首片硅（first silicon）。

晶圆代工与制造

GDSII 到达代工厂后，化学反应接管下一切。制造流水线最容易理解的方式是一个去除无序（化学杂质、晶粒边界、表面粗糙）直到剩下尽可能接近人类能制造出的完美晶体的过程。

从沙到硅晶圆

硅是地壳中第二丰富的元素。供应不是限制；纯度才是。矿山开采的石英岩矿石含有 95–99% SiO₂；半导体级硅 (semiconductor-grade silicon) 需要 99.999999999% 的纯度：十一个“9”，“11N”，十亿分之一级别的杂质。

石英岩
95–99%
冶金级
硅
98–99%
三氯硅烷 (Trichloro-silane, TCS)
ppb (gas)
多晶硅 (Polysilicon)
9N – 11N
晶锭 (CZ Ingot)
单晶
300 mm 晶圆
原子级平整
~775 μm
埋弧
炉（碳）
SiO₂ + 2C → Si + 2CO
HCl 反应 +
分馏
Si + 3HCl → SiHCl₃ + H₂
Siemens 工艺 (Siemens process)
(slim-rod CVD)
SiHCl₃ + H₂ → Si + 3HCl
Czochralski 拔晶 (Czochralski pull)
1–2 mm/min
1,414 °C 熔融
切割、研磨
蚀刻、化学机械抛光 (CMP)
<0.1 nm RMS

冶金级硅。石英岩（quartzite）被送入浸没弧炉，与碳（煤、木炭、木屑）在 1,800–2,000 °C 下反应。碳把氧夺走：SiO₂ + 2C → Si + 2CO。熔融硅在底部汇聚并以 98–99% 的纯度取出。对于芯片来说，这仍然脏了数十亿倍。

三氯硅烷。要把固体纯化到 11 个九几乎不可能通过固态方法完成；而通过蒸馏纯化气体是化工行业的强项。冶金级硅被研磨并在 300 °C 下与 HCl 反应：Si + 3HCl → SiHCl₃ + H₂。硅被从难处理的固体转成可蒸馏的液体（三氯硅烷 TCS 的沸点为 31.8 °C）。金属氯化物杂质（FeCl₃、AlCl₃、BCl₃）具有不同的沸点，这也是此法可行的唯一原因。最难分离的杂质是三氯化硼（12.6 °C）和三氯化磷（76 °C）：硼和磷后来将作为掺杂剂进入硅晶格，所以即使是 ppb 级别也很重要，它们的沸点把 TCS 包夹在中间。需要许多道蒸馏步骤才能把纯度推到 ppb 级别。

多晶硅。TCS 被送入西门子反应器：一个钟罩式腔体，内部放着加热到 1,100 °C 的细硅棒。反应在热表面上反方向进行：SiHCl₃ + H₂ → Si + 3HCl。硅一个原子一个原子地沉积到棒上，使它们从铅笔粗细的起始体长成数天到数周的粗 U 形棒。结果是 9N 到 11N 纯度的多晶硅，但晶粒取向随机。每个晶粒内部是完美晶体；晶界处充满缺陷。这就是晶体生长的原料。

Czochralski 晶锭。芯片不能建造在多晶硅上：晶界会散射电子、产生复合中心，使电学行为不可预测。解决办法是生长单晶。多晶硅块被装入石英坩埚并在 1,414 °C 下熔化。一个完美单晶硅的小种晶（取向为 (100) 面，之所以选择该取向是因为氧化后它产生的表面态密度最低）被放入熔体中，然后以 1–2 mm/min 的速度缓慢向上拉出，同时旋转，坩埚反向旋转以实现均化。每个从熔体中凝固的原子都会锁定到现有晶格决定的取向。拉取过程持续数日；现代晶锭直径为 300 mm（12 英寸），长度 1–2 米，重量超过 100 kg。作为附带好处，液—固界面起到净化的作用：大多数杂质的分配系数低于 1，因此它们更倾向于留在液相而不是固相，每一层凝固的硅都比它生长时的熔体更纯净。

晶圆精整。晶锭在车床上研磨到精确直径，端部切除，磨出一个缺口以标记晶体方向，然后用金刚石磨丝锯切成薄盘，每个晶锭产生数百片晶圆，每片厚 800–900 μm。每片晶圆的两面表面都有 10–20 μm 深的锯切损伤，需要通过粗磨（研磨浆）、化学腐蚀（HF / HNO₃ / 乙酸）和 CMP（化学机械抛光）去除，CMP 是把晶圆面朝下压在旋转抛光垫上并用胶体二氧化硅浆料，在化学软化表面的同时机械去除表面。抛光后表面达到原子级平整，粗糙度低于 0.1 nm RMS（亚埃级）。只有正面按此标准精整；背面保持蚀刻状态。晶圆经过 RCA 清洗（使用 NH₄OH + H₂O₂ 去有机物，用稀 HF 去氧化层，使用 HCl + H₂O₂ 去金属），然后通常在上面生长一层外延层：在 1,000–1,150 °C 下用硅烷气体沉积的 2–20 μm 硅层，将晶圆的晶格延伸到无缺陷的表面区域。

晶圆制造商交出的，是一片 300 mm 的圆盘，厚约 ~775 μm，表面上单晶格横跨整片不间断，抛光面的粗糙度为亚埃级，掺杂浓度精确可控，且基本无表面污染。它被装入氮气环境的 FOUPs（前开式统一容器 (front-opening unified pods)）以防本征氧化层生长，晶圆到达晶圆厂时已准备好开始晶体管制造。

金属层堆栈

芯片自下而上逐层制造：先制造晶体管，然后是由 10–15 层金属构成的金属层栈。

p-衬底（硅）
n型井
p型井
PMOS 栅极
NMOS 栅极
M1
M2
M3 …
M8
M12
顶层金属
钝化层
焊盘
器件平面之上的 10+ 金属层
晶体管构建在硅表面
S
G
D
源
栅
漏
沟道
当 VGS > VT 时形成
栅氧化层 (~1–2 nm)
多晶硅栅
n+ 源
n+ 漏
电子流：源 → 漏
p 型衬底（体）
B
体

晶体管构建在硅表面。井（n 型井、p 型井）是深度掺杂区域，用以为每种晶体管类型定义基体衬底类型。源和漏是更小、更高掺杂的异性区域，由活性/扩散层和指定掺杂类型及剂量的注入层定义。它们之间夹着一条狭窄的未掺杂沟道。沿沟道横跨一条多晶硅条，这就是栅，与硅之间隔着非常薄的栅氧化层（几纳米）。栅上无电压时，不会流动电流。施加电压；电场吸引载流子进入沟道，形成导电通路。移除电压；沟道关闭。

金属层是连线。较低层（M1–M3）处理局部布线：单元内部及单元之间的短连接。中间层（M4–M16）处理半全局布线，连接功能模块（在此处微结构在版图上可见为楼层平面）。上层（M17+）处理全局布线、时钟树（必须到达芯片上每个触发器）以及将电流分配到各处的粗大电源总线。顶层金属之上是钝化层（保护覆盖层），在焊盘上开口，供离开晶粒的线接出。

映射。体系结构在微架构中实现，被综合为标准单元，放置到硅表面，并通过金属叠层一起布线。网表中的每一根线在金属叠层中都是一个多边形。

PDK 与 GDSII

代工厂与设计者之间的工艺契约是工艺设计套件（Process Design Kit，PDK）。它定义了：

设计规则：每一层的最小宽度、间距、包覆、密度要求（DRC 验证版图是否遵守它们）。
SPICE 模型：晶体管和无源器件的模型，以便设计者能仿真模拟和时序行为。
层定义：将抽象设计层映射到物理掩膜层（代工厂的掩膜映射）。
标准单元库：预先设计、预先表征、符合设计规则的基础逻辑门布局，具有已知的时序和功耗。
参数化单元（pcells）：布局生成器，根据设计者选择的参数生成符合设计规则的晶体管、电阻、电容多边形。
天线规则：限制在制造过程中在连接到栅之前可连接到栅的金属面积（在等离子刻蚀过程中过多的面积会积累电荷，损坏栅氧）。
ERC 和 LVS 运行集：驱动电气规则检查（ERC）和版图与原理图比对（LVS）的配置文件。

GDSII 文件是交付物。它包含版图中的每一个多边形，并用映射到代工掩模的层/数据类型对进行标记。该文件是一个单元树：单元包含多边形以及对其他单元的引用（带放置变换），因此一个标准单元定义一次后通过引用（而不是复制）被实例化数千次。PDK 定义了契约；GDSII 是必须遵守该契约的东西。代工厂在接受流片（tapeout）前，会对提交的 GDSII 运行其自己的 DRC 和 LVS。

晶圆制造

GDSII 变为一组光掩模：每个掩模层一个（或多个，使用多重图案化时）掩模，每个掩模是一块石英板，其上用铬刻画该层的多边形。晶圆在制造设备中循环，针对每个掩模层重复如下步骤：沉积（一层氧化物、氮化物、金属或多晶硅薄膜）、图形化（旋涂光刻胶，通过使用深紫外或 EUV 光刻通过掩模曝光，显影）、刻蚀（去除未被掩膜的材料）、去胶、注入（引入掺杂物）、退火、化学机械平坦化（CMP，使下一层开始时平整）、清洗。每片晶圆在数周内在此循环中往返数百次。现代先进工艺节点使用波长为 13.5 nm 的 EUV 光刻；旧节点使用波长为 193 nm 的深紫外并通过多重图案化将有效分辨率推低。

制造后，对晶圆上的每个芯片进行电学探测以标记良品和次品；晶圆被切割；良品芯片被封装；封装后的器件在更高电压和温度下测试以筛除早期失效率故障。然后出货。

良率，即晶圆上通过的芯片比例，是代工厂的经济轴心。单个颗粒落在错误的层上就可能毁掉一片芯片。整个装置的存在就是为了将颗粒、污染和工艺变异维持在使得在现代特征尺寸下制造仍有经济性的阈值之下。

启动与调试

第一批硅片回来。团队聚集在实验室。一块电路板通电。逻辑分析仪接上。有人尝试读取寄存器。

这就是首片调试（bring-up）：项目从可工作的 RTL 设计过渡到可工作的芯片。两方面并行进行：在硅片到来前数月就开始的硅前软件 bring-up，以及芯片到达当天开始的硅后验证。

硅前：软件面向模型开发

软件不能等到硅片。固件、驱动、操作系统、应用栈各自都代表数月开发；如果团队在芯片返回后才开始，产品会推迟一年。解决办法是尽早针对功能模型开始，只要体系结构规范稳定即可。因为功能模型忠实实现了 ISA，模拟设备寄存器，并处理内存映射 I/O，驱动可以像对待真实硬件那样与之交互。

软件堆栈各层，按它们带起系统的顺序：

固件：复位后运行的第一段代码。配置时钟 PLL、训练内存控制器、初始化电源调节器、设置互连。裸机：下面没有操作系统。示例：x86 的 BIOS/UEFI、嵌入式 SoC 的自定义引导加载器、手机上的引导 ROM。
引导加载程序：在固件之后加载操作系统。设置系统的足够部分（内存、存储、控制台）以找到并加载内核。示例：U-Boot、GRUB。
操作系统 / 内核：虚拟内存、调度、中断、驱动框架。对于新芯片，板级支持包或平台代码描述硬件的组织。
驱动程序：使各个硬件模块可用。每个模块（GPU、网卡、存储、显示、USB、加速器）都需要理解其特定寄存器接口、编程模型和行为的驱动程序。软件中与硬件耦合最紧密的部分。

针对功能模型 (functional model) 的 bring-up 会在两个方向发现错误：软件错误（不正确的寄存器序列、缺少初始化、数据未对齐），以及硬件规范错误（缺失中断、编程序列规范不足、在某些用例下无法工作的寄存器接口）。在 RTL 仍然可以修改的仿真阶段发现规范错误，比在硅片上发现要便宜得多。功能模型 (functional model) 是一个协同开发平台，而不只是一个性能工具。

随着 RTL 成熟，软件先迁移到硬件仿真平台（emulation），然后迁移到 FPGA 原型（FPGA prototypes）。到硅片返回时，固件应该已经可以启动，内核应该已经可以运行，驱动应该已经可以工作，至少在模型上如此。首片硅的上电调试首日（the first silicon bring-up day）是设想遇上现实的时刻。

硅后（POST-SILICON）：首次启动（FIRST BOOT）

首片硅几乎从不会直接正常工作。出现的问题（那些仿真无法捕捉到的）大致落入几类。

模拟与电气效应。串扰、在重载电源轨上的 IR drop、长距离高速串行链路上的信号完整性问题、瞬态负载下的电压下降、热热点。仿真把线当成理想的；硅片不是。有些芯片只需要调整电压或降低频率。有些需要金属层 ECO (metal-layer ECO)：仅重做几层金属掩模（比完整重做便宜，~1M instead of ~10–50M）并重新制造。有些在硅片上无法修复，只能以固件变通方案出货。

大规模下的边角情况。只有在真实工作负载经历数十亿个周期后才会显现的错误：内存系统的病态行为、接近活锁的公平性问题（livelock-adjacent fairness issues）、缓存一致性竞争（cache-coherence races）、安全路径之间的相互作用。软件仿真与硬件仿真平台能发现一部分；硅片会发现剩下的。这正是上电调试团队发挥价值之处。

工艺差异。即使在同一晶圆上，不同的芯片（dies）表现也会略有不同。有些能达到目标频率；有些则不能。团队会基于测得的性能、功耗和良率来对芯片进行分档 (binning)，决定哪一批芯片进入哪个 SKU。

性能与硅片的相关性。性能模型会与实际测得的硅片进行相关性比对。任何系统性的差距都会为下一个项目的建模方法提供信息。硬件性能计数器（就是先前存在于 perf model 和 RTL 中的那些计数器）会亮起；整个项目期间跟踪的同一工作负载现在会最后一次在真实器件上测量。

当一切工作正常，当在芯片上启动一个新操作系统成为一天中最乏味的部分时，团队就会发货。然后他们开始下一个芯片的工作。
