# 计算机体系结构原理

1990年，John Hennessy 和 David Patterson 出版了《计算机体系结构：定量方法 (Computer Architecture: A Quantitative Approach)》。这本书用以公式设计 (design-by-formula) 取代了凭直觉设计 (design-by-intuition)。这些方程使设计师能够把数字代入并得到一个可辩护的答案。体系结构变得定量化。

这些原则自那时起没有改变。 Roofline (2009) 是目前常用方程中最年轻的； Little's Law (1961) 是最古老的。 Amdahl's Law 于 1967 年发表，同年 Tomasulo 描述了每个现代 CPU 仍在使用的乱序（out-of-order）机制。 计算机体系结构的大部分就是同样的几条方程，应用于不同的数值。

当然，数字在承担主要工作。丹纳德缩放（Dennard Scaling）大约在2006年结束。摩尔定律（Moore's Law）大约在2015年结束。单线程性能增长率从 52%/year (1986–2003) 降至 3%/year (2015 onward)。这些原则所描述的每一个瓶颈，现在都成了该领域正在积极规避的问题。面向人工智能 (AI) 的硅的大量涌现，是该领域在收集这些原则一直指向的答案：把能量用在重要之处，把硅资源放到工作负载所在之处，不要与物理规律作对。

以下是计算机体系结构的经典原理。

## 性能方程

四个方程承担了大部分要点。本文中的其他原则都是这些方程的推论、经验性修正或由它们之一导致的结果。

### 铁律

𝑇
program
=
Instructions
Program
×
Cycles
Instruction
×
Time
Cycle
T
program

=
程序
说明

×
指令 (Instruction)
周期 (Cycles)

×
周期
时间
	​


Time = Instruction Count × Cycles Per Instruction × Cycle Time

IC (指令数 (instruction count)) 由算法、ISA (指令集架构 (instruction set architecture)) 和编译器决定。  
CPI (每条指令的周期数 (cycles per instruction)) 由微架构 (microarchitecture) 决定：流水线 (pipelining)、指令级并行 (ILP)、缓存 (caches)、乱序执行机制 (out-of-order machinery)。  
CT (周期时间 (cycle time)) 由工艺节点 (process node) 和锁存器之间最长的组合逻辑路径 (longest combinational path between latches) 决定。

由 Clark 和 Emer 在数字设备公司（DEC）于 1980s 年代早期提出；在 1990 年被 H&P（Hennessy & Patterson）确立。问题不在于这个方程是否难（它很简单）；关键是每次优化都必须在某个方面落地或有所取舍。增大的发射宽度（issue width）旨在降低每条指令平均周期数（CPI）；向量指令集架构（vector ISA）旨在降低指令数（IC）；更深的流水线则针对时钟周期时间（CT）（通常以牺牲每条指令平均周期数（CPI）为代价）。在不改变这三项之一的情况下，你无法加速一个程序。

现代超标量整数核心在紧密循环中能维持 0.25–0.5 每条指令的时钟周期数 (CPI)（对应每周期指令数 (IPC) 2–4）；而指针追踪代码 (pointer-chasing code) 的每条指令的时钟周期数 (CPI) 超过 5。Apple's M4 和 Intel's Lion Cove 在手工调优的内核上每周期指令数 (IPC) 的峰值约为 8。过去三十年 CPU 微架构的发展史就是一场在真实代码上把每条指令的时钟周期数 (CPI) 压低到 0.5 以下的渐近性竞赛，而这一进程已在该点陷入停滞。

### 阿姆达尔定律 (AMDAHL'S LAW)

𝑆
(
𝑁
)
=
1
(
1
−
𝑝
)
+
𝑝
/
𝑁
S(N)=
(1−p)+p/N
1


其中 
𝑝
p 是程序中可并行化的部分，且 
𝑁
N 是处理器数量。串行尾部在 
𝑁
→
∞
N→∞ 时占主导：最大加速比被限制在 
1
/
(
1
−
𝑝
)
1/(1−p) 无论你投入多少处理器来解决该问题。

该领域被引用次数最多的方程，也是为把常见情况（common case）做快这一整项工作提供正当理由的方程，因为再多为优化少见情况（rare case）所付出的努力也无法克服它所留下的串行部分（serial fraction）。

如果 95% 的代码可并行化，最大可能的加速是 20×。如果是 99%，则为 100×。对于在 100,000+ 芯片上进行前沿 AI（frontier-AI）训练，即使 0.01% 的串行部分也会把你限制在 10,000×，远低于线性。实际系统比阿姆达尔（Amdahl）预测的情况更糟，因为该公式忽略了通信和同步开销。阿姆达尔（Amdahl）是一个上界，而不是目标。

### 古斯塔夫森定律 (Gustafson's Law)

𝑆
(
𝑁
)
=
𝑁
−
𝛼
(
𝑁
−
1
)
S(N)=N−α(N−1)

其中
𝛼
α 是扩展工作负载的串行部分。

对阿姆达尔（Amdahl）的反驳。阿姆达尔（Amdahl）假设问题规模固定，在更多处理器上求解（强扩展性（strong scaling））；古斯塔夫森（Gustafson）假设问题规模随处理器数量增长（弱扩展性（weak scaling））。实际上，超级计算机并不会在昨天的问题上缩短实际运行时间（wallclock）；它们在相同的实际运行时间内处理更大的问题。Frontier 模型训练（Frontier-model training）是弱扩展性：模型规模（model size）和批量大小（batch size）随集群（cluster）增长，因此阿姆达尔的悲观预期显得过于夸张。

### 利特尔定律 (Little's Law)

𝐿
=
𝜆
𝑊
L=λW

平均并发数 = 吞吐量 (throughput) × 平均延迟 (average latency).

系统中事物的平均数量 = 到达速率 (the rate at which they arrive) × 平均停留时间 (the average time they stay).

整个领域中最通用的原则。每当你问“我需要多少在途 (in flight) 才能使这个东西饱和？”时，你就是在问利特尔定律 (Little's Law)。

它用于确定芯片中每个缓冲区的大小。任何保存正在传输（in-flight）工作的缓冲区至少要有 L = λW 个条目；把它做得更浅，它就会被填满，对生产者施加背压，并且吞吐量会降到低于你期望的峰值。

重排序缓冲区大小 (ROB Sizes): ROB ≥ IPC × stall latency
内存级并行度 (MLP): outstanding misses ≥ bandwidth × latency / line size
TCP 窗口 (TCP Windows): window ≥ bandwidth × RTT
GPU 线程束数量 (GPU Warp Counts): resident warps ≥ memory latency / arithmetic latency + 1

同一条方程，一再地被应用在技术栈的不同层级。

一个演算示例：1 TB/s 高带宽内存 (HBM) 在 80 ns 延迟并使用 64-byte 缓存行时，需要约 ~1,250 个挂起的未命中请求 (outstanding misses) 才能饱和。正因为如此，H100 和 B200 极力提升未命中状态寄存器 (MSHR) 数量和挂起加载容量 (outstanding-load capacity)；没有这些，规格表上的带宽无法达到。

### 屋顶线模型 (Roofline Model)

𝑃
attainable
=
min
⁡
(
𝜋
peak
,
  
𝐼
⋅
𝛽
peak
)
P
attainable

=min(π
峰值

,I⋅β
峰值

)

𝑃
可达成的
P
可达成的

= 可达到的性能 (attainable performance) (FLOP/s)
𝜋
π = 峰值计算能力 (peak compute) (FLOP/s)
𝛽
β = 峰值内存带宽 (peak memory bandwidth) (B/s)
𝐼
I = 算术强度 (arithmetic intensity) (FLOPs per byte loaded)

一个核（kernel）的运行速度不会超过两个上限中的较低者：硬件的峰值浮点运算速率（FLOP），或者内存向其提供操作数的速率，而核的算术强度（arithmetic intensity）决定哪个成为瓶颈。

脊点（内核（kernel）由受内存限制（memory-bound）转为受计算限制（compute-bound）的地方）位于 
𝐼
∗
=
𝜋
/
𝛽
I
∗
=π/β. 在其下方，性能随带宽线性增长： 
𝑃
=
𝛽
⋅
𝐼
P=β⋅I. 在其上方，性能在峰值处饱和： 
𝑃
=
𝜋
P=π.

这是现代加速器设计中最有用的一张图。

π = 4.5 PF/s
P = β · I
受内存带宽限制 (memory-bound)
受计算能力限制 (compute-bound)
I* ≈ 563
GEMV (I ≈ 2)
GEMM (I ≈ 2,731)
1
10
100
1k
10k
1
10
100
1k
10k
算术强度 (FLOP/B, log)
算术强度 (FLOP/B, log)
性能 (TFLOP/s, log)
性能 (TFLOP/s, log)

现代 AI 屋顶线（稠密 FP8）：

H100 SXM5: 1,979 TF/s, 3.35 TB/s. 
𝐼
∗
≈
591
I
∗
≈591 FLOP/B.
B200: 4,500 TF/s, 8 TB/s. 
𝐼
∗
≈
563
I
∗
≈563 FLOP/B.
MI300X: 2,610 TF/s, 5.3 TB/s. 
𝐼
∗
≈
492
I
∗
≈492 FLOP/B.

LLM 内核的算术强度揭示了推理性能的本质：

方阵矩阵乘法（GEMM） (M = N = K = 4096) FP8: 
𝐼
≈
2
𝐾
/
3
≈
2,731
I≈2K/3≈2,731 FLOP/B, 受计算限制。
矩阵-向量乘法（GEMV）（single-token decode step） FP8: 
𝐼
≈
2
I≈2 FLOP/B, 受内存带宽限制。

单一比率解释了为什么预填充和训练受计算限制，为什么解码受带宽限制，以及为什么精度减半（FP32 → FP16 → FP8 → FP4）即使在峰值 FLOPs 不变时也有帮助：每次将每元素字节数减半会使得 
𝐼
I 翻倍。每一代加速器将 
𝜋
π 推高的速度快于 
𝛽
β，因此屋脊向右迁移；在 H100 上受计算限制的工作负载可能在 Rubin 上成为带宽限制，而不需改动一行代码。

The Walls

这些“墙”是物理与经济学上的渐近线。它们不是定理；而是该领域在过去二十年里反复撞上的经验极限。

THE END OF DENNARD SCALING

Robert Dennard 的 1974 年论文给了摩尔定律本应带来的礼物。将线性尺寸缩小 
1
/
𝑘
1/k，你会得到：面积 
↓
𝑘
2
↓k
2
，电压 
↓
𝑘
↓k，频率 
↑
𝑘
↑k，单晶体管功耗 
↓
𝑘
2
↓k
2
，功率密度：不变。每一代工艺在相同面积内晶体管数量翻倍，功耗不变，频率更高，几乎是白送的。

这一规律一直保持到约 2006 年。随后阈值电压无法继续下降而不会导致亚阈值泄漏呈指数级上升；供电电压卡在约 1V；时钟频率停滞在约 3–4 GHz。

多核转向是被迫的，而非自愿。没有了 Dennard，性能的唯一剩余杠杆就是并行性，自 2006 年以来的每一次架构发展（多核、GPU、TPU、chiplet、DSA）都是其必然结果。

THE POWER WALL

𝑃
dyn
=
𝛼
⋅
𝐶
⋅
𝑉
𝑑
𝑑
2
⋅
𝑓
P
dyn

=α⋅C⋅V
dd
	​

⋅f

𝑃
dyn
P
dyn
	​

= 动态功率
𝛼
α = 活动因子
𝐶
C = 总切换电容
𝑉
𝑑
𝑑
V
dd

= 电源电压
𝑓
f = 时钟频率

动态（切换）功耗关于电压是二次的，关于频率是线性的。将 
𝑉
𝑑
𝑑
V
dd
	​

 对半将使功耗下降 4×：这是 DVFS 的全部基础。但 
𝑉
V 和 
𝑓
f 是耦合的（更快的晶体管需要更高的 
𝑉
V 才能满足时序），因此在甜点点以上，功耗随频率大致呈三次方增长。

泄漏会增加一个指数项： 
𝑃
leak
∝
𝑉
𝑑
𝑑
⋅
𝑒
−
𝑉
𝑇
/
𝑛
𝑉
𝑡
ℎ
𝑒
𝑟
𝑚
P
leak
	​

∝V
dd
	​

⋅e
−V
T
	​

/nV
热量单位 (therm)
\t\u200b

 (𝑉
𝑇
V
T
	​

 = 阈值电压； 
𝑉
𝑡
ℎ
𝑒
𝑟
𝑚
V
therm
	​

 ≈ 26 mV（室温）； 
𝑛
n ≈ 1–1.5)。为了缩放而降低阈值电压会使得泄漏激增。这正是扼杀 Dennard 的原因。

硬上限不是总功率，而是功率密度。大约在 2004 年，单芯片的热通量在 100–150 W/cm² 附近饱和，可与电热板相提并论。散热受芯片面积限制，而非总瓦数；在固定面积芯片上推动更多功率，冷却成本会呈指数上升。

现代加速器的功耗大致为 700 W (H100) → 1,000 W (B200) → 1,400 W (B300) → ~1,800 W (Rubin Ultra)。空气冷却在 Hopper 世代实际已走到尽头。单芯片功率超过约 1 kW 时液冷成为必需；在那之后的下一代沉浸式冷却也将被考虑。

THE MEMORY WALL

表述很简单：CPU 性能每年增长约 ~60%，DRAM 延迟每年仅约 ~7%。两个指数在分叉。下游某处，平均内存访问时间将接近未命中惩罚，而与命中率无关。

今天：一次 DRAM 未命中花费约 ~200–300 个周期。一个没有缓存的现代 CPU 将几乎持续停顿。

对于加速器，内存墙呈现不同的形态。HBM 带宽每年增长约 ~30%；峰值计算能力每年增长约 ~60–100%。要变为受计算限制所需的算术强度每代都在提高；roofline 的屋脊向右迁移。屋脊位于工作负载强度范围内的芯片赢得性能优势。这就是为什么在现代 AI 硅片中 HBM 容量和带宽比峰值 FLOPs 更受争夺：峰值很便宜，驱动它（供给数据）才昂贵。

THE ILP WALL

即使有神谕级预测和无限资源，可实现的 ILP 也在约 7–60 之间平台化，取决于工作负载，而大多数 SPEC 基准远低于 10。在现实的预测器下，实际天花板约为 ~5。

原因：

分支。约 20% 的指令是分支，即便使用最先进的 TAGE-SC-L，仍有 3–5% 的误预测率，每次误预测带来约 20 周期的气泡。
真实的数据依赖。硬件无法消除；重命名只能处理伪依赖（WAW、WAR）。
内存别名。歧义迫使保守的串行化。

真实核心在整数 SPEC 上的持续 IPC 约为 ~3–4，尽管重排序缓冲（ROB）大小远超 500。宽度超过 8 的尝试（Power、Itanium）已被试验，边际收益迅速变平。指令发射宽度与持续 IPC 之间的差距就是 ILP 墙的具体体现。

LATENCY LAGS BANDWIDTH

Patterson 的经验法则：在带宽翻倍的时间里，延迟仅改善约 1.2–1.4×。等价地，带宽的改善大约是延迟的平方。跨越 25 年的微处理器、DRAM、网络和磁盘，这一模式是一致的：带宽扩展了 100–1000×，而延迟仅改善了 4–40×。

这是本文中最重要的实用原则。你可以“购买”带宽：更多通道、更宽的总线、更多通道、更多芯片。你无法超越物理极限“购买”延迟。每一个获胜的架构，都是通过并发来隐藏延迟而不是减少延迟来取胜。Warp 隐藏 GPU 的 DRAM 延迟。ROB 隐藏 CPU 的 L2/L3 未命中。TMA 在 Hopper 上把全局内存延迟隐藏在矩阵乘法后面。Patterson 定律是所有这些技巧存在的原因。

THE SPEED OF LIGHT

在真空中，≈30 cm/ns。在铜制 PCB 走线中，≈15 cm/ns（≈2/3 c）。实际下限：

1 mm 片上导线：物理传播时间约 5 ps，实际约 200 ps（在亚毫米尺度上 RC 延迟主导，超越传播时延）。
1 m 电缆：单向约 7 ns，往返约 14 ns。
机架到机架（机房内）：单向约 100 ns。
跨越一个大陆：约 50 ms。

你可以缩短路径。这正是 chiplet（20 mm 跨芯片 → 1 mm 混合键合）、HBM（DRAM 毫米级地靠近计算，而非厘米级）、以及将机架视为单个 GPU 域所做的事情。但你无法超越物理定律。

这也是为什么 NVL72 的被动铜背板最大可达约 ~2 m，而 NVL576 需要重新设计机箱（Kyber）以保持每条 NVLink 路径在铜距离内。超出该距离，数据就要上光纤，且可插拔光学器件将主导功耗预算。

局部性与存储层次结构
局部性原理

经验性的，而非可证明的。程序在大部分时间只使用很小一部分内存。

两种形式：

时间局部性。现在被引用的数据很可能很快会再次被引用（循环、工作集）。
空间局部性。紧邻刚被引用的数据很可能很快也会被引用（数组、顺序访问）。

90/10 规则：90% 的执行时间花在 10% 的代码上。局部性是缓存能够起作用的唯一原因。没有它，缓存的命中率将接近 (cache size / memory size)，基本为零。有了局部性，通用工作负载中 95–99% 的命中率是常态。

局部性也是每种领域专用架构比 CPU 更积极利用的原理。波动（systolic）阵列将时间重用直接布线到硅片：每个权重在行上被重复使用 128–256 次而无需重新抓取。当访问模式足够可预测、硬件预测会浪费硅面积时，擦写板（scratchpad）会替代缓存。专用化部分是识别你的工作负载具有哪种局部性模式并将其“烘焙”到拓扑中的艺术。

AMAT: AVERAGE MEMORY ACCESS TIME

AMAT
=
𝑡
hit
+
MR
⋅
𝑡
miss
AMAT=t
hit

+MR⋅t
错过


𝑡
击中
t
击中
	​

= 此层的命中延迟 (hit latency at this tier)
MR = 未命中率 (miss rate)（未命中该层的访问所占比例）
𝑡
miss
t
miss

 = miss penalty (time to satisfy the miss from the next tier)

跨层递归： 
𝑡
miss
,
𝐿
1
=
𝑡
hit
,
𝐿
2
+
MR
𝐿
2
⋅
𝑡
miss
,
𝐿
2
t
miss,L1

=t
hit,L2
	​

+MR
L2
	​

⋅t
未命中（miss）,L2
	​

, and so on through L3 and DRAM.

现代数据中心 AI 层级（B200 / GB200 NVL72 时代），从 GPU 视角按延迟排序：

层级 (Tier)	容量 (Capacity)	延迟 (Latency)	带宽 (Bandwidth)	能耗 (Energy)
寄存器文件 (Register file)	~256 KB / SM	<1 ns	~20 TB/s / SM	~0.03 pJ/B
静态随机存取存储器 (SRAM (SMEM / L1))	~228 KB / SM	~17 ns	~33 TB/s	~0.3 pJ/B
L2 缓存 (L2 cache)	50–126 MB	~150 ns	~5 TB/s	~2 pJ/B
高带宽内存 (HBM (local GPU))	80–192 GB	~280 ns	3.4–8 TB/s	~40 pJ/B
通过 NVLink 的高带宽内存 (HBM via NVLink (NVL72))	~13.8 TB 池 (pool)	~1 µs	130 TB/s 总计 (aggregate)	~50 pJ/B
主机 DRAM (Host DRAM (PCIe Gen5))	~1 TB / node	~1–2 µs	~55 GB/s	~100 pJ/B
NVMe 固态硬盘 (NVMe SSD (Gen5))	10s TB / node	~100 µs	~14 GB/s	~600 pJ/B
跨机架 RDMA (Cross-rack RDMA (XDR))	数据中心级别 (datacentre-scale)	~2 µs	800 Gb/s / NIC	~225 pJ/B

该层级在容量上跨越约 ~7 个数量级，在延迟上跨越约 ~5 个数量级。每字节能耗随距离增长的速度甚至比延迟更快。

三个 C

每一次缓存未命中属于以下三种之一：

Compulsory（冷缺失）。首次引用。通过更大的行或预取（prefetching）来减少。
Capacity（容量）。工作集超过缓存。通过更大的缓存来减少。
Conflict（冲突）。相连性（associativity）不足。通过更高的相连性来减少。（在全相连缓存中不存在）

一个有用的第四类是 Coherence，用于多处理器的失效（invalidations）。

这个分类比看起来更有用。它告诉你该拉哪根杠杆：强制性缺失不会因为更大的缓存而减少，容量性缺失不会因为预取而减少，冲突性缺失不会因为更长的行而减少。

贝拉迪的最优（Belady's MIN）

定理：驱逐下一次引用在未来最远的那一行能最小化总未命中次数。最优，但仅适用于离线，因为它需要未来信息。

LRU 及其近似（RRIP、NRU、Hawkeye、Mockingjay）试图从过去预测未来。经验上 LRU 与 MIN 之间的差距在典型工作负载上约为 ~1.5–2× 的更多未命中。Hawkeye（Jain & Lin, ISCA 2016）通过在过去的轨迹上学习 MIN 的决策并将其作为预测重放，弥合了该差距的大约 80%。这是现代微架构中较为漂亮的结果之一：最优策略不可计算，但可以通过在其自身历史上训练来近似。

流水线（Pipelining）与乱序执行（Out-of-Order）  
流水线加速（Pipelining Speedup）

𝑆
=
𝑁
1
+
(
𝑁
−
1
)
/
𝑘
⋅
1
1
+
CPI
stall
S=
1+(N−1)/k
N

⋅
1+CPI
停顿 (stall)

1
	​


𝑆
S = 相对于非流水线版本的加速比
𝑁
N = 流水线深度（阶段数）
𝑘
k = 执行的指令数
CPI
停顿 (stall)
CPI
停顿 (stall)

 = average stall cycles per instruction (from hazards)

对于长程序， 
𝑆
→
𝑁
/
(
1
+
CPI
stall
)
S→N/(1+CPI
stall

)。吞吐率接近每周期一条指令；延迟不变。流水线是一种纯粹的吞吐量优化。

三类冒险（hazard）会使流水线停顿：

Structural（结构）：两条指令需要相同资源。解决：复制或对资源做流水化。
Data（数据）：指令间的寄存器依赖（RAW、WAW、WAR）。解决：对 RAW 使用转发（forwarding）或停顿；对假依赖（WAW、WAR）使用寄存器重命名（register renaming）。
Control（控制）：分支。解决：预测并在错误预测时支付惩罚。

OPTIMAL PIPELINE DEPTH

性能最优深度：约 50 级，约每级 ~18 FO4。考虑功耗的最优：约 7 级，每级 ~22.5 FO4。当你优化 BIPS³/W 而不是纯吞吐量时，答案就会收敛到更浅的流水线。

Pentium 4 为追求峰值频率而走得很深（20–31 级），并直面功耗墙。从 Core 2 开始退回到约 ~14 级流水线：这是有架构理由的回应。每级的闩锁开销、分支错预测惩罚（与深度成正比）以及内存停顿阻塞，共同在硅片极限之前就限制了深度。

托马苏洛算法 (TOMASULO'S ALGORITHM)

通过通过预留站（reservation-station）标签的寄存器重命名解决 WAW 和 WAR 冒险。它将发射（issue）与执行解耦：指令在预留站中等待，直到操作数在公共数据总线（common data bus）上到达，然后按程序顺序之外执行。Smith 和 Pleszkun 在 1985 年加入了按序提交（in-order commit）通过重排序缓冲区（reorder buffer），赋予 Tomasulo 精确异常（precise exceptions）和干净的分支错预测恢复：指令乱序执行但按程序顺序退役，所以故障或投机回滚会使体系结构状态保持在一致点。

该机制已有六十年历史。每一款现代乱序（out-of-order）CPU 都是它的改进。更宽、更深、更快，但算法相同。

重排序缓冲区 (ROB) 大小 — 按 Little 定律 (Little's Law)

ROB
≥
IPC
target
⋅
𝑡
stall
ROB≥IPC
target

⋅t
停顿 (stall)


ROB 必须容纳所有飞行中的指令。为隐藏一次停顿，ROB 必须至少为 吞吐率 × 停顿时长：将 Little's Law 应用于发射队列。IPC 为 4 时的 300 周期 DRAM 未命中意味着要完全隐藏需要 1,200 条目（entry）的 ROB。没有真实核心有那么大。

现代数值：Intel Lion Cove (2024): 576。AMD Zen 5: 448。AMD Zen 3: 256。

真实核心在规模上小约一个数量级，无法单靠乱序来隐藏 DRAM，因此它们依赖缓存层级来吸收大多数停顿，并用乱序来隐藏 L1/L2 的延迟。教训是 ROB 和缓存是同一延迟隐藏预算的两半。单方面在某一端投入更多而忽视另一端是浪费硅片。

BRANCH PREDICTION

分支 CPI 惩罚：
CPI
branch
=
𝑓
branch
⋅
𝑝
mispredict
⋅
penalty
CPI
branch

=f
分支 (branch)
‌

⋅p
错误预测 (mispredict)

⋅惩罚

每条指令周期 (CPI)
分支 (branch)
每条指令周期 (CPI)
分支 (branch)
	​

= 每条指令因分支预测错误而额外增加的周期数
𝑓
branch
f
branch

= 是分支的指令的比例
𝑝
mispredict
p
mispredict

= 预测器分支预测错误的概率
penalty = 每次错误预测导致的流水线清空代价（周期，∝ 流水线深度）

今天：
𝑓
branch
≈
0.20
f
branch

≈0.20, 
𝑝
错误预测 (mispredict)
≈
0.03
p
错误预测 (mispredict)

≈0.03, 延迟 ≈ 20 cycles → 增加 ~0.12 每条指令周期 (CPI).

预测器演进：

两级 (Two-level) (Yeh & Patt 1991): 局部 + 全局 历史.
感知器 (Perceptron) (Jiménez & Lin, HPCA 2001): 用于 AMD Zen.
TAGE (Seznec & Michaud 2006): 几何历史长度, 带标签.
TAGE-SC-L (Seznec, CBP-4 2014): 当前最先进, ~3–5 MPKI 在 SPEC 上.

剩余那些依赖数据的分支（分支结果依赖于输入值而不是控制状态）的错误预测，是现代乱序（OoO）核心中主导的流水线开销。它们也是最难处理的：按定义，预测器不能仅从程序状态中学习到它们。

Coherence and Consistency

MESI

经典的缓存一致性协议。每个缓存行处于以下四种状态之一：

Modified: 这里是脏的，其他地方都是过时的；当另一个核心远程读取时，写回该行到内存并降级为 Shared。
Exclusive: 干净，仅由此缓存持有；在本地写时可以静默地转换为 Modified。
Shared: 干净，可能被其他缓存共享；本地写必须先广播失效给其他缓存，然后再转换为 Modified。
Invalid: 不存在。

读取命中于 M/E/S。写入需要独占所有权：M 和 E 已经拥有它（静默写入 (silent write)）；S 必须先广播失效（invalidation）来升级为 M。四态机 (four-state machine) 保证一致性 (coherence)：每个地址的所有缓存副本最终会就其值达成一致。

M
已修改（Modified）
E
独占（Exclusive）
S
共享（Shared）
I
无效（Invalid）

● read hit     ● read miss     ● write hit     ● write miss
实线 = 本地处理器动作     虚线 = 监听（另一个核心的总线流量）

一致性（Consistency）才是更难的问题（程序员看到的是跨多个地址、多个处理器的内存操作怎样的排序？），这是内存模型（顺序、一致性事务顺序（TSO）、释放一致性（release-consistent）、弱一致性（weak））的研究对象，和缓存一致性（coherence）是不同的概念。

缓存一致性的成本随着 
𝑁
N 核心扩展：

Snooping bus: 带宽 
∝
𝑁
∝N。超过大约 16 个核心后就会失效。
Directory: 存储 
∝
log
⁡
𝑁
∝logN，但有间接延迟。用于现代的 mesh 和 ring NoC。

这就是为什么向上扩展（scale-up）有上限。NVL72 将 72 个 GPU 绑定为一个一致性结构。NVL576 扩展到 576 个芯片。再往上，维护一致性的成本会超过工作负载的容忍度，唯一的出路是放弃一致性并改用消息传递。大多数架构在机架边界处这样做（即通过 InfiniBand 的 RDMA）；Google 的 TPU 更进一步，在 scale-up 内部就放弃了一致性（ICI 在整个 9,216 片超 pod 中通过消息传递）。每种架构都必须选择一个一致性边界，而这个选择定义了自然的 scale-up 单位。

Energy and Data Movement

THE HOROWITZ ENERGY TABLE

在 45 nm CMOS 工艺下测得。

操作	能量
8 位整数加法 (8-bit int ADD)	0.03 pJ
32 位整数加法 (32-bit int ADD)	0.1 pJ
16 位浮点加法 (16-bit FP ADD)	0.4 pJ
32 位浮点加法 (32-bit FP ADD)	0.9 pJ
8 位整数乘法 (8-bit int MUL)	0.2 pJ
32 位浮点乘法 (32-bit FP MUL)	3.7 pJ
32 位寄存器读取 (32-bit register read)	~0.1 pJ
8 KB SRAM 读取 (8 KB SRAM read)	~10 pJ
1 MB SRAM 读取 (1 MB SRAM read)	~100 pJ
DRAM 访问 (DRAM access (64 b))	~640 pJ

一次 DRAM 访问的代价约为一次 32-bit 加法的 ~6,400 倍。内存在能耗上比计算高出两个到三个数量级。在 7 nm 及以下制程上，芯片内的能耗大致减半；DRAM 的能耗/比特几乎不变。随着制程节点推进，这个差距越拉越大。HBM 可以达到 ~5 pJ/bit（HBM3）、~4 pJ/bit（HBM3E）、~2.5 pJ/bit（HBM4 预测值），优于 DDR5，但仍然是片上 ALU 操作能耗的约 50 倍。

THE COST OF DISTANCE

每次数据移动的能耗随距离增长。现代工艺下的近似数值如下：

移动	能量
本地寄存器	~0.1 pJ
1 mm 片上	~6 pJ
20 mm 片上 (cross-die)	~50 pJ
片外 (DRAM)	~640 pJ
跨机架 (optical)	~10 nJ 每字

这是现代 AI 硅设计中最根本的原则。每一个架构选择都是在与数据移动能耗作战。把计算搬到数据附近，而不是把数据搬到计算那里。

具体来说：

Systolic arrays (TPU MXU, MI300X Matrix Cores): 每个权重在离开阵列之前被重用 128–256×。数据重用被直接布线到硅片中。
3D-stacked memory (HBM; MI300X's hybrid-bonded SoIC): 将内存放到距离计算 < 1 mm，而不是以 cm 为单位。
On-package HBM vs DDR DIMMs: 约低 ~5× pJ/bit，带宽约高 ~10×。
Chiplets: 将跨芯片的路径从 cm 级封装布线缩短到 mm 级互连层（interposer）。
Wafer-scale (Cerebras): 在片上的互连是“免费的”：相同的硅片，无封装穿越、无 PCB 迹线、无电缆。
The Levers

MAKE THE COMMON CASE FAST

这是 Amdahl 的推论的直接 corollary：你无法把程序速度提升超过 
1
/
(
1
−
𝑝
)
1/(1−p)，因此你必须减少那部分不会从加速中受益的代码，通过优化最常执行的部分来实现。

90/10 规则将其操作化：静态代码的 10% 占动态执行的 90%。进行剖析，优化热路径，忽略其余。听起来显而易见，但也是这个领域最被忽视的原则：几代架构师为几乎从不执行的情况构建了巧妙的支持，为未被使用的能力支付了面积和功耗。这个原则提醒我们先度量。

波拉克法则（Pollack's Rule）

性能
∝
面积
性能∝
面积

把核心面积翻倍大约能换来 ~1.4× 的性能。许多小核在每单位面积性能上胜过一个大核。Pollack 加上 Amdahl 几乎可以预测出现代异构芯片的整体现状：少数大核处理串行部分（Amdahl），大量小核处理并行部分（Pollack）。ARM big.LITTLE、苹果的 E-cores + P-cores、GPU 的 SM 与 CPU 的划分：这些都源自同样的两个方程。

SPECIALISATION

在一个 64-bit 乱序核中，实际的 ALU 操作约消耗 ~1% 的能量。剩下的 99% 用在指令取指、译码、重命名、调度、ROB、寄存器文件，以及为它们供能的缓存层次结构。通用 CPU 将 99% 的能量花在了开销上。

领域专用架构剥离了这些开销。静态调度 → 无需取指/译码/重命名。可预测的访问模式 → 由 scratchpad 替代缓存。以单精度为目标 → 无需混合精度流水线。Hennessy-Patterson 在 2018 年的图灵演讲中指出：通过专用化约有 ~100× 的效率可得，代价是通用性的损失。

THROUGHPUT VS LATENCY

两者是不同的目标；几乎总是会有权衡。

Throughput = ops/second（总吞吐量）。通过并行性、流水线、批处理获得。
Latency = time per op（单个请求的时延）。通过缓存、推测、预取来减少（在命中时）。

CPU 优化延迟：深度乱序执行 (OoO)、大缓存、分支预测、线程较少。GPU 优化吞吐：大规模线程并行、SIMT、通过 warp 切换隐藏延迟。相同的工作负载在两者上看起来完全不同。

推理沿着这条轴线分裂。Prefill 是受吞吐限制的（将大量 token 批量通过 GEMM）。Decode 是受延迟限制的（一次一个 token，受权重约束）。分离式服务（分别的 prefill 和 decode 池）之所以胜出，正是因为这两种运行模式需要不同的机器。

SURFACE-TO-VOLUME SCALING

对于在 
𝑃
P 处理器上划分的工作负载，其计算量 
∝
𝑉
/
𝑃
∝V/P 且通信量 
∝
𝑆
/
𝑃
(
𝑑
−
1
)
/
𝑑
∝S/P
(d−1)/d
 在 
𝑑
d 维度中：

通信 (Comm)
计算 (Comp)
∝
1
𝐿
其中
𝐿
=
(
𝑉
𝑃
)
1
/
𝑑
计算 (Comp)
通信 (Comm)

∝
L
1
	​

其中 L=(
P
V
	​

)
1/d

𝑃
P = 处理器数量（划分数）
𝑉
V = 问题总体积（例如网格点、矩阵元素）
𝑆
S = 表面积，每步在相邻子域之间交换的总数据量
𝑑
d = 划分的维度（网格为 2，立方体为 3）
𝐿
L = 每个处理器子域的线性尺寸

每个处理器的块越大 → 相对通信越少。这就是强缩放（strong-scaling）的代价。H&P 的民间经验；规范参考见 Foster 的 Designing and Building Parallel Programs (1995)。

THE BANDWIDTH-DELAY PRODUCT

BDP
=
bandwidth
⋅
round-trip-delay
BDP=bandwidth⋅round-trip-delay

填满链路所需的未决字节数。形式上与 Little's Law 相同；它是 Little's Law 在网络上的应用。

一个 400 Gbps 链路，RTT 为 5 µs，需要约 ~250 KB 的飞行数据才能饱和。对于集合通信（collectives）：ring all-reduce 实现带宽最优模式；bisection bandwidth 约束稳态吞吐。

大规模可靠性
失效率（FIT）和平均无故障时间（MTBF）

MTBF
=
10
9
FIT
per device
⋅
𝑁
devices
  
hours
MTBF=
FIT
per device

⋅N
设备
	​

10
9
	​

hours

MTBF = 平均故障间隔（Mean Time Between Failures），指在含有 
𝑁
N 个设备的系统中任意两次故障之间的平均实时时间。
FIT = Failures In Time：每 
10
9
10
9
 设备小时内的故障数。现代 SRAM 在海平面大约为 ~100–1,000 FIT/Mbit（依供应商和工艺节点而异；除非有 JEDEC JESD89 测试报告支持，否则对任何具体数值都应持怀疑态度）。

在 100,000-GPU 规模下，集群因任一单一硬件故障的 MTBF 大约为 ~30 分钟。架构在某种程度上由发生故障时的应对方式来定义。

防御措施：

- ECC (SEC-DED)：单错误纠正，双错误检测。约 ~12.5% 存储开销。
- ChipKill：容忍整个 DRAM 芯片故障。
- 异步检查点（Asynchronous checkpointing）：每 N 步保存状态，发生故障时回滚。以计算换取可靠性。Orbax-style 的检查点现在已成为前沿 AI 训练栈的标准。
- 冗余计算、复制、热备件：在 AI 集群规模中越来越相关。

100,000 芯片的训练运行是可靠性不再仅仅是硬件问题而成为系统设计问题的规模。每一个 ExaFLOPS 级别的部署（NVL72 SuperPODs、TPU Ironwood pods、Helios racks）都将恢复方案作为软件的一部分随发行包一起交付。

Synthesis
阅读任何体系结构：六个问题
工作的负载是什么？决定算术强度（roofline）、控制复杂度、局部性。
数据在哪里？存储层次、scratchpad vs cache、容量、带宽。
数据如何到达计算单元？DMA、prefetch、async copy、TMA、systolic dataflow。
计算是什么样的？宽度、深度、精度、可编程性、标量/向量/矩阵。
芯片如何组合？scale-up、scale-out、fabric 拓扑。
焦耳（能量）都去哪儿了？几乎总是：数据移动。

THE DEEPER POINT

这里的每一条原则都在 2010 年之前就已存在。Iron Law 仍然成立。Amdahl 的法则仍然成立。Little's Law 在 1961 年是真实的，在 2061 年也将真实。墙并没有消失；这个领域通过并行、缓存、专用化和 chiplets 绕过了它们。

变化的只是数字和工作负载。Dennard 缩放结束；多核转向是被迫的。摩尔定律（Moore）不复往昔；chiplets 和 3D 堆叠出现了。内存墙变糟而非变好；HBM 与封装内存绕过了它。ILP 的天花板依旧；面向吞吐的架构（GPUs、TPUs）通过放弃串行延迟以换取并行并发而规避它。计算与内存之间的能量差距扩大；整个领域围绕最小化数据移动进行组织。

每一种架构都是同一组方程的不同参数化。
