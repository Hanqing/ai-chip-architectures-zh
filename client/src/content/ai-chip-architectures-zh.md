# AI 芯片架构 - Jacob Peake

**链接:** https://www.jacobpeake.com/ai-chip-architectures

---

## AI 芯片架构

在 2018 年国际计算机架构研讨会上，John Hennessy 和 David Patterson 做了他们的图灵演讲：“A New Golden Age for Computer Architecture”。

在 1980 年代，当 Hennessy 和 Patterson 做出他们的图灵奖获奖研究时，单线程 CPU 性能每年增长 52%。到 2018 年，随着 Moore's Law 和 Dennard Scaling 的终结，增速降为 3%。

有必要出现领域专用架构（DSAs）。他们的示例工作是 Google 的 TPU v1，已经在生产中：在神经网络推理上比 CPU 提供 29× 的吞吐量，能效提升 80×。他们的结论预测是：“下一个十年将见证计算机架构的寒武纪式爆发。”

这个预测成真了。今天，有数十种架构正在积极开发：GPU、TPU、LPU、NPU、DPU、ASIC、晶圆级引擎（wafer-scale engines）、可重构数据流（reconfigurable dataflow）、神经形态（neuromorphic）、光子（photonic）与模拟计算（analog）。它们尤其聚焦于 AI 计算。

到目前为止，真正实现部署并取得成效的架构包括：GPU（NVIDIA、AMD）、脉动阵列加速器（systolic-array accelerators；TPU、Trainium）、Cerebras 晶圆级引擎（Wafer-Scale Engine），以及 Groq LPU。

NVIDIA 是明显的领跑者；AMD 紧随其后，OpenAI 和 Meta 均已对两者作出 6 GW 规模的部署承诺。TPU 用于训练 Gemini，并将以多达一百万颗芯片的规模为 Anthropic 提供服务；Anthropic 也在超过一百万颗 Trainium 芯片上运行 Claude。Cerebras 目前为 OpenAI 提供推理服务；Groq LPU 则通过一笔 200 亿美元、以吸纳团队为目的的收购（acquihire）并入 NVIDIA。

本文旨在调查这些不同的方法——它们的理念、架构、扩展方法（纵向扩展和横向扩展），以及软件 栈（如何为芯片编程）。

问题所在

AI 计算由矩阵乘法主导。一个 Transformer 由一系列矩阵乘法（matmul）组成：Q/K/V 投影、注意力（attention）、输出投影与前馈网络（FFN）；其间穿插归一化（normalisation）、激活（activation）和残差相加（residual add）等逐元素操作。训练一个前沿模型会执行
10
25
10
25
 乘-加 操作（矩阵乘法是乘-加操作的序列）。

这些矩阵乘法的形状取决于工作负载。训练会将一批序列前向通过每一层、反向传播损失并更新权重，成千上万个令牌（token）同时流经同一权重矩阵。预填充（prefill）是推理中的提示词摄取阶段：完整输入序列会在第一个输出令牌产生前一次性投影通过模型。训练和预填充都会将许多令牌堆叠到同一个权重矩阵上，因此每层的数学运算是具有高算术强度、受计算约束的大型矩阵—矩阵乘法（GEMM）。解码（decode）则是自回归的：模型每次输出一个令牌，每个令牌都以前序所有令牌为条件，令牌 N+1 必须等到令牌 N 生成后才能开始。每一步只投影一个令牌，因此每次矩阵乘法会变成矩阵—向量乘法（GEMV）。生成一个令牌需要完整遍历模型中的每个权重，并完整读取注意力机制的 KV 缓存（KV Cache）。与预填充相比，算术强度会下降几个数量级。

推理系统通过批处理令牌来恢复部分算术强度，并将这些 GEMV 提升回 GEMM：连续批处理（continuous batching）将许多用户的解码步骤堆叠；推测解码（speculative decoding）为每个请求草拟 K 个令牌并在一次前向传播中验证；多令牌预测（multi-token prediction）则将同一思路内置于模型。这会提高矩阵乘法单元的利用率，并提升每字节操作数（Ops/B）。在连续批处理中，每位用户仍需读取自己的 KV 缓存，因此长上下文解码会从受权重带宽限制转向受 KV 缓存带宽限制。

这里的架构问题是要足够快地把数据移动到矩阵乘法发生的地方。这就是所谓的 内存墙：计算 呈指数增长，而 内存 带宽没有。

每种架构提出了在数据移动比赛中取胜的不同策略。理解一块芯片归结为四个问题：数据在哪里驻留，如何移动到 计算 单元， 计算 单元长什么样，以及芯片在大规模下如何相互通信。

## NVIDIA GPU

NVIDIA GPU 是一个面向吞吐的大规模并行处理器。其理念是：由主机 CPU 协调并通过 CUDA 暴露、拥有数千线程的可编程芯片，才是运行可并行工作负载的正确机器。每一代都在可编程的 流式多处理器（Streaming Multiprocessors, SM）上加入加速原语而不改变编程模型。同一块芯片既能训练 transformers、提供推理、渲染图形，又能运行科学模拟（加速计算）。

### 谱系
2006  
TeslaG80  
首款支持 CUDA 的 GPU；统一着色器与 SIMT 执行模型。  
2010  
FermiGF100  
首个真正的通用计算架构：统一 L1/L2 缓存、双 warp 调度器、IEEE-754 FP64。  
2012  
KeplerK20, K40  
SMX、动态并行、Hyper-Q；GPU 可自行发起工作。  
2014  
MaxwellM40  
重设计的 SM，相比 Kepler 约 2× 的每瓦性能。  
2016  
PascalP100  
NVLink 1.0、HBM2、原生 FP16 吞吐；首款为深度学习显式设计的 GPU。  
2017  
VoltaV100  
首代 Tensor Cores；独立线程调度。  
2018  
TuringT4  
第二代 Tensor Cores，支持 INT8/INT4；首代 RT Cores。  
2020  
AmpereA100  
第三代 Tensor Cores，支持 TF32 与结构化稀疏性；Multi-Instance GPU 分区。  
2022  
HopperH100, H200, GH200  
第四代 Tensor Cores、FP8、Transformer Engine；HBM3、TMA、线程块簇、异步 wgmma。  
2024  
BlackwellB100, B200, GB200  
第五代 Tensor Cores，支持 FP4、Tensor Memory (TMEM)、双晶粒 chiplet GPU、NVLink 5。  
2025  
Blackwell UltraB300, GB300  
中期升级：~1.5× FP4 吞吐、288 GB HBM3e。为长上下文推理调优。  
2026  
RubinRubin, VR200, Rubin CPX  
HBM4、第三代 Transformer Engine、与 Vera CPU 配对、通过 Rubin CPX 实现解耦的 prefill。  
2027  
Rubin UltraRubin Ultra  
四晶粒 GPU 封装，每包 1 TB HBM4e。在 600 kW 的 NVL576 Kyber 机架中部署，每颗 GPU 达到 100 PetaFLOPS 的 FP4 性能。

### 架构

一颗 NVIDIA GPU 是一组面向吞吐的内核、一条深层次的内存层级以持续供给它们，以及恰到好处的调度逻辑以让数千线程同时在飞行。内核是 流式多处理器（SM），在封装内复用 100+ 次：V100 为 80 个，A100 为 108 个，H100 为 132 个，B200 为 148 个，B300 为 160 个，Rubin 为 224 个。在每个 SM 内部都有同一套配方：四个 SM 子分区，每个都有各自的 warp（线程束）调度器、发射单元、16k×32-bit 寄存器文件、标量 CUDA Core 通道、用于超越函数的 Special Function Unit，以及通往该 SM 的 Tensor Cores 的私有端口。四个分区共享一个 L1/共享内存（shared memory）模块，以及 TMA。线程按 32 个为一组组成线程束（warp），以 SIMT 锁步执行；每个分区常驻数十个线程束，调度器通过在它们之间切换来隐藏内存/算术停顿。

计算

CUDA Cores 是最早的计算吞吐来源，并且在 AI 中仍承担除 matmul 之外的所有事务：activation、residual add、normalization、地址算术。但一个 transformer 块的 ~99% FLOPs 来自 matmul，因此压倒性的计算吞吐来自 Tensor Cores。

这些内核在小矩阵 tile 上执行融合的矩阵乘-加运算， 
𝐷
=
𝐴
⋅
𝐵
+
𝐶
D=A⋅B+C 完整的矩阵乘法会被分解为输出 tiles：为了产生一个输出 tile，kernel 沿共享的内层维度 
𝐾
K 迭代，从左侧输入矩阵的行条带中取 
𝐴
A，从右侧输入矩阵的列条带中取 
𝐵
B，并将每个部分积折叠进一个持续累加器。 
𝐶
C 保存当前的部分和， 
𝐷
D 是带入下一步的更新值。完成内层循环后， 
𝐷
D 就是完整输出矩阵的一个已完成 tile；整个矩阵乘法由许多这样的 tile MMA 构成。

Tile 形状写作 M × N × K， 
𝑀
×
𝑁
M×N 是输出 tile 的尺寸， 
𝐾
K 是该指令在一次发射中沿内层维度收缩的大小；矩阵乘法其余的 
𝐾
K 轴由 kernel 的内层循环遍历。累加器在该循环中保持“黏性”：每次 MMA 的输出 
𝐷
D 会成为下一次 MMA 的输入 
𝐶
C，因此该等式本质上是就地的 
𝐶
←
𝐴
⋅
𝐵
+
𝐶
C←A⋅B+C：连续的指令将它们的部分积折叠进同一存储，直到 K 轴被完全走完。

V100 的第一代单元（每个 SM 8 个）在一个线程束范围内运行 16×16×16 的 FP16 MMA。A100 的第三代单元新增了 TF32、BF16、FP64 matmul，以及 2:4 结构化稀疏。H100 的第四代单元新增原生 FP8，并将抽象从单个线程束提升到线程束组：128 个协作线程发射一个 64×256×16 形状的异步 wgmma，它在后台运行，而发射的线程束加载下一块 tile。B200 的第五代单元更进一步：跨两个 SM 的 256×256×16 MMA，操作数在一对 SM 之间拆分，原生 FP4，并为每个 SM 配备一个专用的 256 KB Tensor Memory (TMEM) 暂存存储器，用于承载累加器 tiles，而不是侵占寄存器文件。Rubin 的第六代单元扩展了 FP4 吞吐，新增原生 FP6，并配套第三代 Transformer Engine，在硬件中执行自适应 NVFP4 微块缩放，将每 tile 的量化元数据保留在 Tensor Core 路径上，而不是经由 CUDA Cores。

在所有六代中保持不变的是：matmul 生活在 线程/线程束 层级之内，但发射一次所需的线程数量在缩减，且发射本身正在与执行解耦。Volta 的 mma.sync 是线程束协作且同步的：一个线程束内的全部 32 条线程共同执行，每条通道持有 A、B 和累加器 D 的寄存器碎片，并且该线程束会阻塞直至完成。Hopper 的 wgmma.mma_async 将发射主体扩展到 128 线程的线程束组，将 B 移入共享内存描述符（A 变为可选：寄存器或描述符，kernel 自行选择），并立即返回：matmul 在后台运行，而线程束组排队下一块 tile，完成则通过 wgmma.commit_group / wgmma.wait_group 跟踪。

Blackwell 的 tcgen05.mma 完成了迁移：A 与 B 一起进入共享内存描述符（或 A 直接来自 TMEM），而累加器 D 落在 TMEM 而非寄存器文件。随着所有操作数都离开了线程通道，发射无需协调逐线程状态，因此单个线程即可发射该指令并立即返回，完成由消费者线程束等待的 mbarrier 信号标记。其余线程束成员以及发射线程本身都可在此期间处理其他工作。一个 CTA 配对变体将同一模型扩展到两个 SM：成对簇中的每个 SM 各由一个线程发射协同的 MMA，在这对 SM 之间共享操作数，在同样的异步/mbarrier 完成机制下组合出 256×256×16 的双 SM tile，只是屏障被提升为簇级屏障以保持两者步调一致。

matmul 在变得更“大”的同时，也对发射线程更“轻”：一条最初由 32 条通道锁步执行的指令，如今更像是一条由描述符驱动的命令，从线程束模型内部发出，但已不再由它执行。

这种解耦正是让 transformer attention kernel 在 GPU 上高效的原因。在线程束等待 matmul 期间，它可以运行 softmax、应用掩码，或预加载下一块 tile；matmul 与其周围逐元素工作的交叠，构成了每个现代 attention kernel（FlashAttention-3、FA4）的结构，且依赖于矩阵指令不阻塞线程束。

内存

片上层级在每一层都是硬件管理的缓存，并在其上叠加软件提示。片外是 HBM：V100 为 32 GB HBM2，H100 为 80 GB HBM3，B200 为 192 GB HBM3e，B300 为 288 GB，Rubin 为 288 GB HBM4。芯片级 L2 Cache 位于 HBM 与 SM 之间：V100 为 6 MB，A100 为 40 MB，H100 为 50 MB，B200 为 60 MB（在双晶粒封装上分为两个 30 MB 分区，具备感知局部性的驻留控制，可将热点 tiles 固定在近端晶粒）。在每个 SM 内，256 KB 的统一 L1/SMEM 在 kernel 启动时在硬件管理的 L1 与程序员控制的共享内存（作为暂存存储器）之间进行分区。寄存器文件每个 SM 约 ~256 KB，按四个子分区切片。

Blackwell 增加了第五层：TMEM，每个 SM 256 KB，专用于 MMA 累加器，仅由 Tensor Core 寻址，将操作数驻留压力从通用寄存器文件中抽离。

层级之间的移动已逐代从线程束中解耦。Ampere 之前，加载一个 tile 是同步的：每条线程各自发起全局加载，线程束阻塞直至所有碎片落入寄存器，然后第二遍拷贝到共享内存；每个 tile 都要消耗线程束通道做地址算术并等待。Ampere 引入 cp.async：逐线程的异步拷贝 HBM → SMEM，完全绕过寄存器，线程束仅在消费者需要数据时提交在飞拷贝组并等待。Hopper 用 TMA（专用 DMA 引擎）取代：单个线程提交一个多维 tile 描述符（基地址、行领先维度、置换模式），引擎处理全部地址算术并写入共享内存，完成则由 mbarrier 发信号。整个线程束从加载发射与地址计算中解放；kernel 只需排队描述符。TMA 还支持簇级多播：一次 HBM 读取扇出到线程块簇中的每个 SM，将原本 N 次独立加载变为一次。Blackwell 进一步扩展 TMA：直接加载进 TMEM，使累加器 tiles 流入时无需经由 SMEM 中转。演进轨迹是：每代都让线程束在每个 tile 上少做一件事。

Warp 专门化

Hopper 时代的编程习语是 warp（线程束）专门化：在同一线程块内，部分线程束作为生产者，背靠背发射 TMA 加载；其他线程束作为消费者，在新到达的 tiles 上发射 wgmma。它们之间的同步不再是老式的 SM 级 __syncthreads() 屏障；而是 mbarrier（驻于共享内存中的内存屏障）和附着在 TMA 完成事件上的异步事务屏障，允许在线程束粒度而非线程块粒度进行细粒度的生产者/消费者握手。已经成为每个现代 attention kernel（FlashAttention-3、CUTLASS 乒乓 GEMM、Blackwell 的 FA4 kernel）参考范式的模式有相同配方：由 TMA 驱动的生产者流水线通过共享内存与 TMEM 供给 wgmma 消费者流水线，借助 mbarrier 握手与线程块簇（Hopper+）把多个 SM 绑成一个协同的 计算 单元，从而让 Blackwell 的双 SM MMA 自然地在其上组合。

数值表示

FP32 曾是历史默认；Volta 带来 FP16（FP32 累加）以及让其可训练的 loss-scaling 技巧；Ampere 新增 TF32（FP32 动态范围、FP16 尾数，可直接替换 FP32 matmul）、BF16，以及 2:4 结构化稀疏（在剪枝权重上使有效吞吐翻倍）。Hopper 引入原生 FP8（E4M3 与 E5M2），并配套 Transformer Engine，按层自动缩放 activations 以保持在 FP8 动态范围内。Blackwell 再次将精度减半至 FP4，并推出 microscaling MX 格式（块级共享指数，找回在 FP4 下流失的大部分精度），同时配套第二代 Transformer Engine 将自动缩放流水线重定向到 FP4。Rubin 的第三代 Transformer Engine 新增 NVFP4（NVIDIA 收紧约束的 FP4 变体）与原生 FP6，并配合更激进的稀疏性。芯片版图本身如今也是数值故事的一部分：B100/B200/B300 是两块达到光罩极限的晶粒，由 ~10 TB/s 的 NV-HBI 链接缝合，并以一个逻辑 GPU 呈现给软件，封装上配有 8 叠 HBM；Rubin 将 chiplet 配方扩展为双晶粒，约 ~336 B 个晶体管并配 8 叠 HBM4。每一代大致通过将位宽减半并用更细粒度的缩放方案恢复精度来实现约 2× 的每瓦吞吐，同时越来越多地通过将更多硅片绑定进封装实现这一点。

押注
押注 1：可编程性。工作负载在不断变化（attention 变体、新颖的模型架构），因此保持每个模块可编程，并让开发者编写 CUDA。即便是专用单元，也通过这一模型暴露，而不是作为固定功能模块。  
押注 2：用海量多线程隐藏延迟。延迟不可预测且与数据相关，因此不是用静态调度，而是用海量线程超额提交来隐藏它，每个 SM 最多 64 个常驻线程束，由硬件 warp 调度器每个周期挑选就绪线程束。  
押注 3：由线程束“包裹”的 matmul。矩阵单元是压倒性的计算吞吐来源，但它必须处于与其他一切相同的 线程束/线程 抽象之后，因此用 mma.sync → wgmma → tcgen05.mma 来封装——而不是将其暴露为固定功能流水线。这样单个 kernel 就能在一次通过中融合 matmul、softmax 与逐元素操作。  
押注 4：异步内存层级。让内存层级显式且由程序员管理，而非隐式且由 编译器 调度。保留 L2 cache，但将 SMEM 与 TMEM 暴露为具名暂存存储器，并在其上分层异步机制：用于批量拷贝的 TMA、用于 matmul 累加器的 TMEM、用于生产者/消费者握手的 mbarrier。该层级在可编程 kernel 内以软件流水的方式运作，而不是由 编译器 针对已知延迟的暂存存储器静态调度。  
押注 5：摊销的 SIMT 税负。每一颗花在 warp 调度器、寄存器文件或一致性缓存上的晶体管，都是没有花在 MAC 上的晶体管；接受这笔税，并以两种方式摊销它：如今的 Tensor Core 足够大，使 SIMT 机制被摊销在更庞大的 MAC 数量之上；同时像 TMEM 这样的单元用牺牲部分通用灵活性来换取更高的 MAC 密度。

### 扩展

扩展有两种范式：纵向扩展 与 横向扩展。

纵向扩展  
将多块 GPU 绑定为一个一致内存域。任何 GPU 都能以纳秒级延迟通过 NVLink 直接加载或存储其他 GPU 的 HBM：一个地址空间，无需显式传输。  
横向扩展  
在机架与集群层级将这些域联网。数据通过显式 RDMA 以微秒级延迟跨越：地址空间分离，但每个集群可达数万片芯片。

AI 基础设施同时使用两者：带宽饥渴的集合通信（张量并行、MoE expert 路由）停留在 纵向扩展 域内；数据并行与流水线并行则跨越 横向扩展 互连。

纵向扩展

纵向扩展栈由 NVLink 与 NVSwitch 构成。NVLink 实现 GPU 之间的 cache-coherent 互连，因此一块 GPU 上的加载或存储可以以硬件处理地址翻译与一致性的方式指向另一块 GPU 的 HBM。但 NVLink 本身是点对点的：一条链路只连接两颗芯片。NVSwitch 是一颗专用交叉开关芯片，所有 GPU 都连接到它上面，由它路由流量，使每块 GPU 都能在满 NVLink 带宽下同时与每一块其他 GPU 通信，非阻塞且全互联。

二者共同定义了 HGX 8-GPU baseboard，将八个 H100 SXM 模块通过 PCIe Gen5 与 x86 主机（AMD EPYC 或 Intel Xeon）配对。Hopper 还发布了 Grace 配对形态：GH200 Grace Hopper Superchip 通过 900 GB/s 的 NVLink-C2C 将一颗 Grace ARM CPU 与一颗 H100 绑定，消除了主机-设备之间的 PCIe 跳跃。模块进一步扩展为 GH200 NVL2 配对与机架级 GH200 NVL32。Blackwell 将这种配对设为默认。GB200 模块通过 NVLink-C2C 将一颗 Grace 与两颗 B200 融合，NVL72 则将其中的 36 个缝合为一个单一液冷的 纵向扩展 域：72 颗 GPU、36 颗 Grace CPU、13.5 TB 的 HBM 与 17 TB 的 LPDDR5X 构成一个平坦的一致地址空间。Rubin 将此分两步推进。NVL144 将在 2026 年作为 Rubin 世代在同一 Oberon 级机架内的刷新推出：72 个 Rubin 封装，在 NVIDIA 新的按晶粒计数命名法下标记为 144 GPUs，并以 HBM4 与 NVLink 6 将每封装带宽翻倍。真正的机架级飞跃是 2027 年的 Rubin Ultra：NVL576 在新的 Kyber 机箱中整合 144 个四晶粒 Rubin Ultra 封装，在一个一致域中实现 576 颗 GPU 晶粒。

如此的密度由无源铜缆维系。NVL72 的 NVLink 结构经由 5,184 根电缆穿透背板盲插（每个机架约 ~2 英里的布线，无需线缆内重定时器，SerDes 位于 GPU 与交换 ASIC 本体），在 72 颗 GPU 间承载约 ~130 TB/s 的全互联带宽。NVIDIA 估计，与需要在每条链路上配插拔式收发器的光方案相比，选择铜缆大约每机架可节省 20 kW。正是铜缆让“机架即一块 GPU”在经济上可行：在不足 2 米的距离内，它依然在功耗、成本与单位美元的信号完整性上占优；超出该距离，位才需要上玻璃（光纤）。

NVL144 仍置于 Oberon 内，且由于封装数量（72）与 NVL72 相同，铜缆继续奏效；布线无需加长，只需在第 6 代 SerDes 上以更高速传输。Rubin Ultra 的 NVL576 通过重塑机架外形维持相同的铜缆策略：新的 Kyber 形态大约是 Oberon 的两倍高，并将全部 576 颗 GPU 晶粒装入同一机箱，其尺寸专为确保即便在 144 个四晶粒封装与数万根电缆下，每一条 NVLink 路径仍保持在被动铜缆的可达范围内。

横向扩展

横向扩展栈来自他们对 Mellanox 的收购。不同于 NVLink，横向扩展互连网络不是一致性的：节点保持独立的地址空间，数据仅通过由软件发起的显式 RDMA 跨越，通常封装在 NCCL 的集合通信中，如全规约或全到全。参考集群是 DGX SuperPOD：八个 NVL72 机架通过 Quantum-X800 InfiniBand 互连，在单一调度器下提供 576 个 Blackwell GPU；训练集群通过平铺 SuperPOD 进一步扩展。2026 年的 Rubin SuperPOD 维持相同的 8 机架模式，采用 NVL144（每个 SuperPOD 提供 1,152 个 GPU，而非 576 个）。2027 年的 Rubin Ultra 将该方案按数量级放大：每个 Kyber 机架包含 576 个 GPU 裸片，通过 Quantum-X Photonics CPO 互连，使数千个 GPU 置于同一调度器之下。

每个 GPU 都有它自己的 ConnectX NIC 连接到该互连网络。Blackwell 节点在每个 GPU 上运行 ConnectX-8，带宽为 800 Gbps，每 GPU 的横向扩展带宽比每 GPU 的 NVLink 少一个数量级，延迟也从纳秒级上升到微秒级。Rubin 则将每 GPU 的带宽提升到 1.6 Tbps 的 ConnectX-9，使每 GPU 的横向扩展带宽翻倍，同时每机架的纵向扩展域从 72 个 GPU 扩展到 576 个 GPU。每个 NIC 旁边都有一个 BlueField DPU，增加了 ARM cores 和加速器，以将存储、网络和安全的负载从主机 CPU 上卸载出来。对于偏好以太网而非 InfiniBand 的客户，Spectrum-X 是针对 AI 流量调优的无损以太网替代方案。

铜到光纤的跨越发生在机架边界。在 NVL72 内部，骨干是铜缆；一旦链路必须以 800 Gbps 跨机架传输，就必须使用光学链路。被动铜缆 DAC 在 200 G/lane 下的大约 1.5–2 米处达到极限，远不能跨越机架，因此今天的 SuperPOD 骨干通过 OSFP-RHS 可插拔式收发器传输，每个模块都携带自己的激光器、调制器、光电探测器和 DSP。从光学角度来看，一个向数千个 GPU 放射的 SuperPOD 骨干意味着成千上万的可插拔模块，仅收发器激光器就消耗数十千瓦。

在 Rubin 中，这一光学层被折叠进了交换机 ASIC。Quantum-X Photonics（InfiniBand）和 Spectrum-X Photonics（Ethernet）用共封装光学器件取代了可插拔模块：通过 TSMC COUPE 将激光器、调制器和光电探测器键合到交换芯片封装上。NVIDIA 声称与 OSFP 插拔等效方案相比，激光器数量减少约 4×，链路功耗降低约 3.5×。曾经把 GPU 变成双芯片封装并把 HBM 堆叠到其旁边的 chiplet 逻辑现在出现在了网络层面：在同一基板上实现计算、内存和光子学的纵向集成。

NVLink Fusion 最近打开了纵向扩展互连网络本身：第三方 CPU 和 XPU 现在可以加入 NVLink 域，允许超大规模云提供商在不必从头设计自己的一致性互连网络的前提下，围绕 NVIDIA 的互连构建半定制机架。

## 软件

CUDA 是面向大规模并行处理器的自然编程模型。你编写一个核函数（每个线程执行一次的那段代码），并在成千上万的线程上启动它，这些线程被组织成线程块和线程束；程序员决定它们共享什么、何时同步，以及每个线程处理问题的哪一部分。这就是为什么这个抽象在十八年里几乎没有改变，以及为什么自 2007 年以来编写的每一个 CUDA 核函数都仍然可以在 Blackwell 上编译并运行。

这种连续性既是护城河也是约束。每一代新硬件都会在相同的 核函数-与-线程束 模型上引入新硬件（Tensor Cores、TMA、TMEM），并以 PTX 和 SASS 中的内建函数的形式暴露：mma.sync、wgmma.mma_async 等。NVIDIA 无法对 SM 进行彻底的重新设计，因为太多代码依赖于它；作为回报，对 CUDA 软件的每一项投资都会跨代复合增长。

在 PTX 之上是一个构建了二十多年的软件栈。用于数学和 DNN 原语的 cuBLAS 和 cuDNN；将数十年 GEMM 专业知识编码为模板化 C++ 的 CUTLASS；用于分页注意力、在飞行批处理和推测解码的 TensorRT-LLM；通过 PyTorch、Triton 和 JAX 的框架绑定。

FlashAttention，这是现代 AI 中最重要的算法重写之一，将 attention 切片以避免物化那块 O(N^2) 矩阵。它的四代（FA1 到 FA4）每一代都针对最新的 NVIDIA 硅片进行了手工优化（FA3 针对 Hopper 的异步流水线，FA4 针对 Blackwell），移植到其他硬件的版本通常滞后数月或数年。

这个大部分软件栈是由 NVIDIA 不付薪酬的人编写的。护城河不是 CUDA 本身；而是两十年的第三方核函数、库和工具，以及沿途学会该 API 的数百万开发者。

NVIDIA 还在硅片之外一起交付人类的专业知识。他们将数十名自己的工程师嵌入前沿实验室和超大规模云团队，针对每一种新模型架构编写核函数，并针对每一代新硅片进行调优。一个实验室下个月想要训练的东西通常在 NVIDIA 平台上运行得比其他平台快得多。因此，关闭对 NVIDIA 的依赖并不仅仅是重写核函数和库。这意味着要重新训练整个工程团队的心理模型，并且会失去今天坐在客户大楼内的 NVIDIA 工程师。

## Google TPU

TPU 是一台矩阵乘法机。其理念不是一个可编程的芯片能运行任何大规模并行的工作负载，而是专注于单一原语（在大型脉动阵列上的稠密矩阵乘法），并让 XLA 编译器提前规划好每一个周期和每一个字节的内存。没有硬件调度器、没有缓存、没有线程/线程束。每一代都会扩大 pod，数千颗芯片通过 ICI 互连布线成为一台一致性机器。TPU 无志于渲染图形或运行科学仿真；它的存在是为了以比任何通用替代方案更高的每瓦效率来训练和服务 Google 的工作负载（搜索、翻译、推荐、Gemini）。

### 谱系
2015  
TPU v1v1  
首款量产深度学习 ASIC；仅支持通过 PCIe 的 INT8 推理。

2017  
TPU v2v2  
首款支持训练的 TPU；将 MXU 从 INT8 切换到 BF16，确立双 TensorCore + HBM。

2018  
TPU v3v3  
首款液冷 TPU；相较 v2 将 MXU 和 HBM 翻倍；1,024 芯片 pod。

2020  
TPU v4v4, v4i  
首批可重构光路交换机（Palomar）；SparseCores；同时支持 BF16 与 INT8；4,096 芯片 pod。

2023  
TPU v5v5e, v5p  
v5e 追求效率，v5p 追求性能；v5p 具有 v4 的 3.3× INT8 FLOPs 与 2.2× HBM 带宽，8,960 芯片 pod。

2024  
Trilliumv6e  
首个 256×256 MXU；在相近功耗下实现 v5e 峰值 FLOPS 的 4.7×；用于训练 Gemini 2.0。

2025  
Ironwoodv7  
为推理型推理模型而构建；新增原生 FP8；42.5 ExaFLOPS FP8 的 9,216 芯片 superpod。

2026  
TPU v88t, 8i  
8t 用于训练，8i 用于推理；新增原生 FP4；9,600 芯片 superpod，121 ExaFLOPS FP4（8t）。

### 架构

一颗 TPU 芯片是一台被恰到好处的硅片所包裹、以确保其数据供给的矩阵乘法引擎。计算单元是 TensorCore：自 v2 起的旗舰芯片每封装携带两个；面向效率调优的芯片（v4i、v5e、v6e）携带一个。在每个 TensorCore 内部都存在相同的五组件配方：一个或多个用于矩阵运算的 MXU、用于元素级运算的 VPU、负责全局控制的 Scalar Unit、用于跨通道归约的 XLU，以及一个附带的 Transpose/Permute Unit，外加为 MXU 提供输入/输出的累加器队列。从 v4 开始，每颗芯片还在 TensorCore 之外携带专用的 SparseCore 数据流引擎（v4、v5p 和 Ironwood 每芯片 4 个；Trillium 每芯片 2 个），明确划出以吸收对嵌入查找这种脉动阵列形状不匹配的工作负载。每个模块都位于由 Core Sequencer 驱动的单一 VLIW 发射平面上，该调度器在每个周期填满一个 322-bit 包的全部 8 个功能槽位。没有指令缓存未命中、没有线程束调度器、没有乱序引擎、没有分支预测：编译器就是调度器，节省下来的硅面积用于放更多的 MAC。

#### TensorCore

MXU 是脉动阵列。v1 提供一个 256×256 的 INT8 推理阵列；v2 首次支持训练，并引入 128×128 单元，执行 BF16 乘法并以 FP32 累加（自 v4 起 INT8 以等效吞吐回归 MXU）。每个 TensorCore 的单元数量从此增长：v2 上为 1 个 MXU → v3 上为 2 个 → v4/v5e/v5p 上为 4 个。Trillium 回到 256×256（每阵列每周期 65,536 个乘加单元），而 Ironwood、8t 与 8i 都保持 256×256 的形状。

要计算 C=A×B，矩阵 B 的值按每个单元一个权值的方式预加载：权值驻留数据流，这是将 TPU 与其他输出驻留阵列区分开的选择。激活从左边缘进入，每周期传播一列，在每个单元与其常驻权值相乘，部分和向下流入底部的累加器队列。一旦数据进入阵列，就不再发生内存访问：每个权值会对通过的每个激活重复使用，每个激活会在一行中被复用 128（或 256）次。数据复用是以硅中硬连线的方式实现的，而非由缓存仲裁。计算中的主导成本不是乘法本身（几皮焦耳），而是读写内存（每次访问高 100–1000× 的能耗）；脉动阵列通过构造直接删除了这部分成本。权衡在于填充不足：当在 256×256 阵列上做 128×128 矩阵乘时有 75% 的硅处于浪费状态，因此 XLA 会将维度分块、填充并调度到 128 的整数倍（v6e+ 上为 256），模型代码也以这些量化单元为前提来编写。

VPU 是第二主角的计算引擎，但在很多方面更有趣：每台 TPU 都是一台二维向量机，而不是一维 SIMD 机器。VPU 的寄存器文件保存二维 VREG。v4/v5p 上的形状为（8，128）：宽 128 个通道、深 8 个子通道，每核寄存器数量在 v4 为 32、v5p 为 64，每个（通道、子通道）上有 4 个独立的浮点 ALU。通道轴与脉动阵列的输入宽度相匹配，因此在 Trillium 和 Ironwood 上通道数大概随 MXU 一起加宽到 256；Google 并未公布 v5p 之后的 VPU 规格。子通道轴让 VPU 能以每 X 个时钟一个矩阵乘的速率将分块流经 MXU（其中 X 为子通道维度）。现代 TPU 程序的大部分加速来自 VPU/MXU 的重叠：量化、层归一化、softmax、激活和加偏置都在 VPU 上运行，同时 MXU 在其背后并行运行矩阵乘。跨通道归约（对任何二维向量 ISA 而言都是棘手场景）由 XLU 处理：更慢、更昂贵，也是已知的编译器热点。与二维形状不对齐的布局变换由专用的 Transpose/Permute Unit 吸收，从而避免往返内存。

Scalar Unit 是最小但可能最关键的模块：一个单线程、双发射的整数 ALU，带有 32 个 32-bit 寄存器和 4 KiB 的 SMEM 控制状态，并配有保存程序的 Imem。它是唯一进行指令提取的模块；每个周期拉取一个 322-bit 的 VLIW 包，本地执行自己的两个标量槽位（地址运算、循环计数器、分支、同步寄存器检查），并将其余六个槽位分派给芯片的其他部分：2 个向量 ALU（VPU）、2 个向量装/存（HBM↔VMEM 的 DMA）、2 个矩阵（压入/弹出 MXU 队列）。模块间同步是显式的：同步标志跟踪 MXU 和 VPU 管线是否繁忙，编译器插入屏障检查，而不是由硬件跟踪依赖关系。正是 Scalar Unit 让其余 TensorCore 看起来像固定功能的数据流：每个周期有一个地方决定发生哪八件事，且没有动态重排序缓冲来撤销一个糟糕的决定。

#### 内存

片上内存层次与计算侧是同一理念：没有缓存，每一层都由软件管理。片外是 HBM（v2/v5e 为 16 GB，v3/v4/v6e 为 32 GB，v5p 为 95 GB，Ironwood 为 192 GB，v8 代为 216–288 GB），片上是显式可寻址的分层暂存存储器。最靠近计算的是 VMEM，这个向量暂存存储器同时为 VPU 和 MXU 输入队列供数，v4 为 32 MiB，v5e 为 128 MiB，面向推理调优的 v8i 拉长到 384 MiB，目的正是将整个 KV 缓存装入片上。其上是 CMEM，于 v4 引入、容量 128 MiB：一个更慢更大的 SRAM 过渡区，位于 HBM 与 VMEM 之间，吸收融合算子的中间结果。Scalar Unit 有自己专用的 SMEM（v4 上约 10 MiB 用于控制状态）和一个很小的标量寄存器文件。程序中的每个张量在编译时被固定到某一层；XLA 的缓冲区分配通道会调度层间的 DMA，使数据在被消耗的前一个周期恰好到达。硬件不做预取、不做驱逐、不做一致性；当编译器做对时，阵列从不停顿；当做错时，没有后备路径。

#### SparseCore

位于 TensorCore 之外、打破脉动阵列模式的模块是 SparseCore，自 v4 引入。推荐与排序模型依赖嵌入查找（对庞大表进行数十亿次索引），其访问模式与稠密矩阵乘相反：不规则、间接、全到全。一个 256×256 的脉动阵列恰恰是错误的形状。SparseCore 是一个数据流处理器，带有 16 个计算小片与专用 SPMEM 暂存存储器，旁路部署在 TensorCore 侧边，吸收散射、聚集和分段归约原语，以及分片嵌入表产生的数据相关全到全通信。这样在仅约 5% 的芯片面积与功耗下，实现了嵌入密集型模型 5–7× 的加速。v4 每芯片提供 4 个 SparseCore，v5p 维持同等数量，Trillium 降至 2 个，Ironwood 回到 4 个（其双裸片封装中每个 chiplet 2 个）。v8i（Zebrafish）推理芯片完全移除了 SparseCore，并在 I/O chiplet 上以 CAE（集合通信加速引擎）取而代之：问题不同（自回归解码过程中的集合规约），思路相同（从主核剥离一个小型加速器来吸收脉动阵列形状不匹配的工作负载）。

#### 数值

TPU v1 仅支持 INT8 推理；v2 将标准训练格式切换为 BF16：与 FP32 相同的动态范围、占用一半内存、无需损失缩放技巧。v4 重新引入原生 INT8 支持。随后 Ironwood 新增原生 FP8 支持（E4M3 与 E5M2），在相同面积下实现约 BF16 的 2× 吞吐。v8 新增原生 FP4，并在 MXU 内部加入分块尺度乘法，从而删除 Ironwood 仍需在 VPU 上支付的反量化开销。现代每个 TensorCore 都在硬件上支持随机舍入：由较低位尾数作为概率来做舍入决策，这在长时间训练中保持低精度累加的期望值，是让 BF16/FP8 缩小与 FP32 准确率差距的细节之一。

在芯片边界处是 ICI 端口本身（二维环面芯片 v2/v3/v5e/v6e 为 4 个端口，三维环面旗舰 v4/v5p/v7/8t 为 6 个），以及用于横向扩展的 DCN NIC。从芯片层面看，ICI 端口就像是 Core Sequencer 可以在 VLIW 包内指向的另一组 DMA 引擎：远端张量发送与一次 VMEM→HBM 传输属于同一类指令，编译器将集合通信视作其为计算与本地内存构建的整体调度的一部分。

#### 赌注
赌注 1：脉动阵列。矩阵乘主导工作负载，因此把硅面积花在脉动阵列上。  
赌注 2：软件管理的暂存存储器。计算便宜而内存昂贵，因此在阵列的连线上复用数据，并用软件管理的暂存存储器取代缓存。  
赌注 3：编译器调度。工作负载是静态可预测的，因此把调度移入编译器：VLIW 发射、无推测、无乱序、无动态调度器。  
赌注 4：只做 MAC 的硅。功耗比峰值更重要，因此删除每一个不执行乘加的晶体管：每个缓存标签、每个分支预测器、每个重排序缓冲。  
赌注 5：阵列外专用引擎。稠密矩阵乘阵列对某些真实工作负载（嵌入、集合通信）是错误的形状，因此剥离小型专用引擎（SparseCore、CAE），而不是扭曲主核去适配它们。

### 扩展

TPU 的纵向扩展故事与 NVIDIA 的相反。NVLink + NVSwitch 让其他每颗 GPU 的 HBM 看起来像本地内存（硬件管理的一致性地址空间），而 Google 的 ICI 是消息传递。没有远程加载语义、没有缓存一致性、没有交叉开关。每个多芯片操作都是由 XLA 编译的显式集合通信。纵向扩展域不是由交换互连织起来，而是由环面（芯片直接与邻居连线，且边缘回绕）系在一起，并在机架边界由光路交换机缝合。

#### 纵向扩展
通过 ICI 将芯片直接按二维或三维环面连线。XLA 发出 SPMD 集合通信，将数千个 TPU 严密编排为一个程序。无一致性，但在低延迟下具备巨大的截面带宽。

#### 横向扩展
通过数据中心互连网络将多个 pod 连接起来：芯片数量远超一个 ICI 域所能容纳，但每芯片带宽更低。当前：Virgo 处理东西向 TPU 流量（v8t+），Jupiter 处理南北向。Multislice + Pathways 在多个 pod 上编排 SPMD。

#### 纵向扩展

ICI 链路直接从 TPU 裸片引出：高速串行通道，在一个 64 芯片立方体内使用直连铜缆（一个 4×4×4 的排列，位于单个液冷机架内），立方体之间使用光链路。每芯片聚合 ICI 带宽从 v2 上的约 250 GB/s 演进到 Ironwood 上的 1.2 TB/s 双向，在 v8t 上再翻一番。拓扑按代际交替：面向效率调优的芯片（v2、v3、v5e、v6e）为二维环面，旗舰（v4、v5p、v7、v8t）为三维环面。

没有 NVIDIA 对应物的组件是 Palomar OCS：一种位于立方体之间的 3D-MEMS 光路交换机。微小镜面通过物理转动将任意输入光纤映射到任意输出。一个 v4 superpod 使用 48 台 Palomar 交换机将 64 个立方体（4,096 颗芯片）连成一台三维环面机器；v5p 和 Ironwood 按同一方案放大。重配置是毫秒级的，而非纳秒级，但这没有问题，因为 OCS 是电路交换：在作业启动时选择一种拓扑，运行一周，然后为下一个工作负载重配置。三个问题被折叠到一个组件里：按工作负载进行拓扑重配置（扭曲环面可带来最高 70% 的截面带宽提升）、按需进行子 pod 切分，以及容错（当一颗芯片故障时，OCS 以光学方式切入一颗备用立方体，训练即可在不丢失 ICI 域的情况下继续）。

这使 superpod 成为纵向扩展的单位：在角色上等同于 NVIDIA 的 NVL72，但大两个数量级。v4 为 4,096 颗芯片；v5p 为 8,960；Ironwood（TPU v7）为 9,216 颗芯片，按 144 个 64 芯片立方体排列，作为一个一致的 ICI 域呈现 1.77 PB 的 HBM（约 68 PB/s）与 42.5 ExaFLOPS FP8。

TPU 8t（Sunfish）将其扩展到 9,600 颗芯片、2 PB 的 HBM（约 62 PB/s）和 121 ExaFLOPS FP4。TPU 8i（Zebrafish）为 1,024 颗芯片，约 295 TB 的 HBM（8.8 PB/s），约 10 ExaFLOPS FP4。8i 用一种称为 Boardfly 的新型分层高径数拓扑取代了环面（4 芯片环 → 8 块板卡组成的组 → 最多 36 个组由 OCS 连接），将全到全延迟减半。这是为 MoE 推理而设计。三维环面在集合通信是近邻模式时表现出色（环形全规约每个周期都会使用每条链路），但 MoE 专家路由恰恰相反，是全到全：每颗芯片向每一颗其他芯片发送独一无二的分片，往返延迟受最长跳数那对端点所限。一个 1,024 芯片的三维环面直径为 16 跳；Boardfly 的“环 → 组 → OCS”层级将其压缩到 7。

#### 横向扩展

直到 TPU v7，横向扩展都运行在一张互连网络上：Jupiter，自 2022 年起在骨干层通过 Apollo OCS 实现全光，与 Palomar 属于同一 3D-MEMS 家族，并扩展至整栋楼。Google 在从机架到数据中心骨干的每一层都使用同一种原语（光路交换）；这是别人所没有的体系结构签名。今天的 Jupiter 在单栋楼内提供 13 Pb/s 的截面带宽。

在 TPU 8t 上，横向扩展被拆分为两张互连网络。东西向 TPU 间流量迁移到专用加速器互连 Virgo；Jupiter 保留南北向角色：存储访问、通用计算与跨站点扩展。Virgo 是一个基于高径数交换机构建的扁平两层无阻塞拓扑：任意两颗 TPU 之间至多两级交换机。一套 Virgo 集群以 47 Pb/s 的截面带宽互连了 134,000+ 颗 TPU 8t（相较上一代 DCN，每芯片带宽提升 4×，空载延迟降低 40%），具备多平面故障隔离与亚毫秒级遥测，使调度器能在掉队者破坏一个步次之前将其终止。体系结构上的收益是各层现在可以独立演进：纵向扩展、东西向横向扩展与前端可以以不同节奏迭代，而无需重布线其他层。

每芯片的横向扩展带宽在 Ironwood 上约为 100 Gbps，在 v8t 上为其 4×，但仍比每芯片 ICI 低两个数量级。这个带宽鸿沟决定了划分方式：张量并行与 MoE 专家路由保留在 ICI 内；数据并行与流水线并行跨越横向扩展互连网络。

Google 的 Multislice 框架已接入 XLA，使一个 SPMD 程序能跨多个 pod 中的不同 slice 运行；编译器发出分层集合通信（在每个 slice 内进行环形全规约，在更高层级上进行跨 slice 归约）。其结构正是用来掩盖 ICI/DCN 带宽差距的技巧：尽可能多的工作保留在 slice 内通过快速 ICI 完成，只将跨 slice 的剩余部分支付给慢速互连网络。

在其之上是 Pathways。对于由 NCCL + Slurm + Megatron 风格的调度器在多控制端推动 SPMD 的体系，Pathways 则由单个客户端驱动整个作业，并将通过 DCN 互联的多个“孤岛”（各自拥有独立 ICI 域的 pod）虚拟化为一体。它支持 gang 调度、弹性训练（当某个切片失败时，OCS 重新塑形拓扑，Pathways 在新形状上从最新检查点恢复），以及跨区域编排。Gemini Ultra 是第一个跨多个数据中心训练的前沿模型；Pathways 将它们缝合为一个同步的 SPMD 作业。

其理念是：编译器就是调度器，环形网（torus）就是拓扑，光交换机是在从机架到数据中心每一层上的通用可重构基底。

## 软件

TPU 堆栈是以编译器驱动为核心，而 CUDA 则是以内核驱动为核心。在 GPU 上，开发者编写内核，框架将内核串联起来；编译器的职责主要是局部性的。在 TPU 上，开发者用 JAX 编写数值程序，XLA 负责其下的一切：决定哪些操作融合、每个张量放在哪里、如何在二维向量寄存器上布局、何时从 HBM 到 VMEM 发起 DMA、如何调度 322-bit VLIW 捆绑、以及如何将程序在成千上万片芯片上分片。没有硬件兜底：没有 warp 调度器、没有缓存、没有乱序引擎来掩盖糟糕的调度。编译器就是系统。本架构的核心权衡在于：XLA 在无需手工调优的情况下更接近理论上限，但要抹平剩余差距更难。

TPU 堆栈是以编译器驱动为中心的，而 CUDA 则是以内核驱动为中心。在 GPU 上，开发者编写内核，框架将内核串联在一起；编译器的工作主要是局部性的。在 TPU 上，开发者用 JAX 编写数值程序，XLA 负责其下方的一切：哪些操作融合、每个张量驻留在哪里、如何在二维向量寄存器上布局、何时发起从 HBM 到 VMEM 的 DMA、如何调度 322-bit VLIW 捆绑、程序如何在成千上万片芯片上分片。没有硬件回退机制：没有 warp 调度器、没有缓存、没有乱序引擎来掩盖糟糕的调度。编译器就是系统。本架构的关键权衡在此：XLA 在不手工调优的情况下更接近理论上限，但要缩小剩余差距更困难。

编译路径为 JAX → JAXpr → StableHLO → HLO → LLO → VLIW bundles。JAX 在 jit 下将 Python 函数追踪为带类型的函数式 IR（JAXpr），再降低到 StableHLO（OpenXLA 标准化、版本化的操作集，约 100 个静态形状原语，现所有前端都发出该集），XLA 将其作为 HLO 摄入并通过其 pass 流水线：操作融合（将逐点运算 + 归约 + 矩阵乘法 合并为一个内核，使中间结果不落入 HBM）、布局分配（决定每个张量的二维平铺，使其无需转置即可流入 MXU：比一维 SIMD 机器难得多，因为寄存器和脉动输入都是二维的）、缓冲区分配（将每个张量固定到 VMEM、CMEM 或 HBM，并预先计算重叠窗口）、SPMD 分区，最后由 VLIW 调度器填满每个 VLIW 捆绑的全部八个槽位。HLO 降低为 LLO（Low-Level Optimizer，TPU 特定 IR），LLO 发出最终的 VLIW 流。编译良好的程序可以在每个周期的同一捆绑中重叠 MXU 脉动执行、VPU 元素级计算和 HBM↔VMEM 的 DMA。

编译路径是 JAX → JAXpr → StableHLO → HLO → LLO → VLIW bundles。JAX 在 jit 下将一个 Python 函数追踪为带类型的函数式中间表示（JAXpr），将其降低为 StableHLO（OpenXLA 标准化、版本化的操作集，约有 100 个静态形状原语，现所有前端都发出该集），XLA 将其作为 HLO 接受并通过其 pass 管道：操作融合（将逐点运算 + 归约 + 矩阵乘法 合并为一个内核，使中间结果不落入 HBM）、布局分配（决定每个张量的二维平铺，使其无需转置即可流入 MXU：比一维 SIMD 机器难得多，因为寄存器和脉动输入都是二维的）、缓冲区分配（每个张量固定到 VMEM、CMEM 或 HBM 之一，并预计算重叠窗口）、SPMD 分区，最后是填满每个 VLIW 捆绑八个槽位的 VLIW 调度器。HLO 降低为 LLO（Low-Level Optimizer，TPU 特定 IR），LLO 发出最终的 VLIW 流。编译良好的程序在每个周期的同一捆绑内重叠 MXU 波动执行、VPU 元素级数学和 HBM↔VMEM 的 DMA。

多芯片执行采用 SPMD：单一程序、分片数据、分层 collective，由 GSPMD 发出（现正由 Shardy 取代，Shardy 为原生 MLIR 的继任者，将在 2026 年初成为默认）。用户通过在少数关键张量上以 Mesh + PartitionSpec 注解的方式声明分片；编译器将分片传播至图中其余部分，并在布局发生变化处插入 all-reduces、all-gathers 和 reduce-scatters。若编译器选择了错误的 collective，shard_map 会让用户进入手工 SPMD（每设备代码，带显式本地形状和显式 collective），并可在 jit 内组合，这样单个内核可以手工分片，而不放弃其余部分的自动分区。这与 PyTorch 的惯用方式相反：FSDP 与 DeepSpeed 在运行时包裹模型，并在模块边界发出 collectives；GSPMD/Shardy 则将整个图作为编译器问题来做分区。

多芯片执行是 SPMD：一个程序、分片的数据、分层的 collective，由 GSPMD 发出（现正被 Shardy 替代，Shardy 是一个原生 MLIR 的继任者，计划在 2026 年初成为默认）。用户通过在少数关键张量上使用 Mesh + PartitionSpec 注解以声明式表达分片；编译器将分片传播到图的其余部分，并在布局变化处插入 all-reduces、all-gathers 和 reduce-scatters。当编译器选择了错误的 collective 时，shard_map 会把用户放入手工 SPMD（每设备代码，带显式本地形状和显式 collective），可在 jit 内组合，这样单个内核可以手工分区，而不放弃其它地方的自动分区。这与 PyTorch 的惯用法相反：FSDP 和 DeepSpeed 在运行时将模型包裹起来，在模块边界发出 collectives；GSPMD/Shardy 把整个图作为一个编译器问题来分区。

Pallas 是“逃生口”：JAX 的内核编写语言，大体相当于 GPU 上的 Triton。Pallas 内核以带有 JAX 风格的 Python 编写，通过 Mosaic（基于 MLIR 的 TPU 后端）降低到 LLO，并作为自定义操作嵌回 HLO。其存在的原因是 XLA 并非总能为新型 attention 变体、融合的 MoE 分发，或任何需要手动 VMEM 平铺与 DMA 调度的场景综合出最优解：这是一类如 FlashAttention 级别的优化，其优势在于调度而非代数。Pallas:Mosaic-GPU 以相同前端面向 H100/Blackwell，因此内核作者可一次编写并降低到任一底层。其之上的库层统一为 JAX 原生：Flax NNX 用于模块，Optax 用于优化器，Orbax 用于异步分布式检查点，Grain 用于输入管线，Tunix 用于后训练/RL，Qwix 用于量化。Google 的参考训练堆栈（用于 LLM 的 MaxText，包含类 DeepSeek-V3 的 MoE，以及用于 Flux、Wan 2.1 的 MaxDiffusion）位于顶层，纯 JAX；Pathways 位于其下，以 pathwaysutils 暴露给用户，使单个 Python 客户端可在数千片芯片与若干 pod-islands 上驱动作业，同时不放弃 JAX 编程模型。

Pallas 是逃生口：JAX 的内核编写语言，大体上相当于 GPU 上的 Triton。Pallas 内核用带有 JAX 风味的 Python 编写，通过 Mosaic（基于 MLIR 的 TPU 后端）降低到 LLO，再作为自定义操作嵌回 HLO。它的存在是因为 XLA 并不总能为新颖的 attention 变体、融合的 MoE 分发，或任何需要手动 VMEM 平铺和 DMA 调度的东西合成出最优解：一种 FlashAttention 级别的优化，其胜利在于调度而非代数。Pallas:Mosaic-GPU 用相同前端面向 H100/Blackwell，因此内核作者可以一次编写并降低到任一底层。其之上的库层均为 JAX 原生：Flax NNX 用于模块，Optax 用于优化器，Orbax 用于异步分布式检查点，Grain 用于输入管线，Tunix 用于后训练/RL，Qwix 用于量化。Google 的参考训练堆栈（用于 LLM 的 MaxText，包括类 DeepSeek-V3 的 MoE，以及用于 Flux 的 MaxDiffusion，Wan 2.1）位于顶层，纯 JAX；Pathways 位于其下，以 pathwaysutils 暴露给用户，因此单个 Python 客户端可以在数千片芯片和若干 pod-islands 上驱动作业，同时不放弃 JAX 编程模型。

相较于 CUDA，PyTorch 路径是存在的，但属于次等体验。torch_xla 采用 LazyTensor 机制：每个 PyTorch 操作都会记录到一个 HLO 图中，并在下一次“屏障”处进行编译，编译产物按图形形状哈希进行缓存。PyTorch/XLA 2.x 增加了 GSPMD 风格的分片注解、通过 XLA 后端的 torch.compile 集成、一个 JAX 桥接，以及在 PyTorch/XLA 2.7 中提供 C++11-ABI 构建，显著提升追踪速度。与 JAX 的差距是客观存在的（JAX 的原语更自然地映射到 StableHLO，且对复杂并行策略的覆盖更完善），因此 vLLM TPU（由 Cloud Next 2025 上宣布的 tpu-inference 插件驱动）会将每个模型——无论由 JAX 定义还是由 PyTorch 定义——统一经由 JAX→XLA 路径降低。TorchTPU（于 2026 年 4 月宣布）是 Google 的回应：在 XLA 之上提供原生 PyTorch 体验，支持 eager 模式、torch.distributed 与 torch.compile，并将取代 torch_xla。

PyTorch 路径确实存在但属于次等体验。torch_xla 使用 LazyTensor 机制：每个 PyTorch 操作都记录到一个 HLO 图中，该图在下一个屏障处编译，编译产物按图形形状哈希缓存。PyTorch/XLA 2.x 添加了 GSPMD 风格的分片注解、通过 XLA 后端的 torch.compile 集成、一个 JAX 桥，并且（在 PyTorch/XLA 2.7 中）提供了显著更快追踪的 C++11-ABI 构建。与 JAX 的差距是真实的（JAX 的原语更清晰地映射到 StableHLO，复杂并行策略覆盖更好），这就是为什么 vLLM TPU（由 Cloud Next 2025 上宣布的 tpu-inference 插件提供动力）将每个模型——无论是 JAX 定义的还是 PyTorch 定义的——都通过统一的 JAX→XLA 路径降低。TorchTPU（2026 年 4 月宣布）是 Google 的回应：在 XLA 之上提供原生 PyTorch 体验，支持 eager 模式、torch.distributed 和 torch.compile，有望取代 torch_xla。

与 CUDA 相比，TPU 生态是集中式而非分散蔓延。框架之下的几乎所有组件（XLA、JAX、Flax、Optax、Pallas、MaxText、Pathways、Shardy、Mosaic）几乎均由 Google 自行开源，并与硅片节奏同步演进。第三方内核远少于 CUDA 数十年的积累；当工作负载形态较“怪”时护城河更薄，而当工作负载更像 Gemini 时护城河更深。近期的 Ironwood（v7）“协同设计 AI 堆栈”这一表述给出了明确框架：chip、ICI fabric、OCS、XLA、Pathways、Pallas、MaxText、vLLM 与 Pathways 作为一个产品共同发布，v8t/v8i 在单一 tpu-inference 降低路径下延续相同模式。Triton 和 torch.compile 缩小了 NVIDIA 一侧的差距（内核驱动与编译器驱动正在收敛），但理念上的两极仍然存在：在 TPU 上，编译器是唯一重要的接口；在 GPU 上，编译器只是若干接口之一。

与 CUDA 相比，TPU 生态是集中化的，而非遍地开花。框架下方的几乎所有东西（XLA、JAX、Flax、Optax、Pallas、MaxText、Pathways、Shardy、Mosaic）几乎全部由 Google 自行开源，并与硅片同步演化。第三方内核远少于 CUDA 那几十年的积累；当工作负载看起来奇怪时护城河更薄，而当工作负载看起来像 Gemini 时护城河更深。最近的 Ironwood (v7) “协同设计 AI 堆栈”表述就是明确的框架：chip、ICI fabric、OCS、XLA、Pathways、Pallas、MaxText、vLLM 和 Pathways 作为一个产品共同发布，v8t/v8i 在单一 tpu-inference 降低路径下继续相同模式。Triton 和 torch.compile 缩小了 NVIDIA 方面的差距（内核驱动与编译器驱动正在收敛），但哲学上的极端仍然存在：在 TPU 上，编译器是唯一重要的接口；在 GPU 上，编译器只是多个接口之一。

## AMD GPU

AMD Instinct GPU 基于与 NVIDIA 不同的押注：NVIDIA 每一代都在扩展每个流式多处理器（SM）的能力，而 AMD 自 GCN（2012）以来始终对计算单元（Compute Unit, CU）保持保守，并将投资转向封装：自 2021 年起的每一代在 HBM 容量上匹配或超越同时代的 NVIDIA 旗舰；首款 3D 堆叠数据中心 GPU（CDNA 3）；首款具备 CPU+GPU 一致性的 APU（MI300A）；以及开放生态（ROCm、HIP、OCP MX、UALink）。

AMD Instinct GPU 建立在与 NVIDIA 不同的押注上：当 NVIDIA 每代都在扩展每个 SM 能做的事情时，AMD 自 GCN (2012) 起对 Compute Unit 保持保守，并将资源再投资到封装上：自 2021 年起每代在 HBM 容量上匹配或超越同时代的 NVIDIA 旗舰；首款 3D 堆叠数据中心 GPU（CDNA 3）；首款具备一致性 CPU+GPU 的 APU（MI300A）；以及一个开放的生态系统（ROCm、HIP、OCP MX、UALink）。

### 谱系
2018
Vega 20MI50, MI60
首款 7 nm GPU；1:2 FP64 向量吞吐率。CDNA / RDNA 之前的最后一代 GCN 系列 Instinct。
2020
CDNAMI100
首批引入 MFMA 矩阵核心；彻底移除图形固定功能硅；原生支持 BF16。
2021
CDNA 2MI210, MI250, MI250X
通过双 GCD 封装实现首个 MCM Instinct；全速率 FP64 矩阵。
2023
CDNA 3MI300A, MI300X
首款 3D 堆叠 chiplet GPU：XCDs 通过 TSV 与 IODs 实现混合键合；FP8；Infinity Cache；MI300A 上实现 CPU+GPU 一致性 APU；为 El Capitan 提供算力。
2024
CDNA 3 refreshMI325X
计算能力相同，HBM3E 更新：256 GB、6.0 TB/s。
2025
CDNA 4MI350X, MI355X
原生 FP4 / FP6，并支持 OCP MX 微缩放；每 CU 的 FP64 大致减半；首代更倾向 AI 密度而非 HPC。
2026
CDNA NextMI430X, MI440X, MI455X
HBM4；Helios 机架（发布时通过 UALoE 的 72-GPU MI455X 旗舰，2027 年起原生 UALink）：AMD 对 NVL72 的首次回应。

### 谱系
2018  
Vega 20MI50, MI60  
首款 7 nm GPU；1:2 FP64 向量吞吐率。CDNA / RDNA 之前的最后一代 GCN 系列 Instinct。  
2020  
CDNA MI100  
首个 MFMA 矩阵核；完全放弃图形固定功能硅。原生 BF16。  
2021  
CDNA 2 MI210, MI250, MI250X  
通过双 GCD 封装实现首个 MCM Instinct；全速率 FP64 矩阵。  
2023  
CDNA 3 MI300A, MI300X  
首款 3D 堆叠 chiplet GPU：XCDs 通过 TSV 混合键合（hybrid-bonded）到 IODs；FP8；Infinity Cache；MI300A 上的 CPU+GPU 一致性 APU；为 El Capitan 提供算力。  
2024  
CDNA 3 刷新 MI325X  
相同的计算单元，HBM3E 刷新：256 GB，6.0 TB/s。  
2025  
CDNA 4 MI350X, MI355X  
原生 FP4 / FP6，采用 OCP MX 微缩放；每 CU 的 FP64 吞吐大致减半；第一代更偏向 AI 密度而非 HPC。  
2026  
CDNA Next MI430X, MI440X, MI455X  
HBM4；Helios 机架（发布时通过 UALoE 的 72-GPU MI455X 旗舰，2027 起原生 UALink）：AMD 对 NVL72 的首个回应。

### 架构
#### 术语

AMD	NVIDIA
计算单元（CU）	流式多处理器（SM）
SIMD	SM 子分区
SIMD 通道	CUDA Core (FP32 ALU)
波前（wave64）	warp（warp32）
Matrix Core	Tensor Core
MFMA	mma.sync / wgmma / tcgen05.mma
VGPR / SGPR	寄存器文件
LDS (Local Data Share)	SMEM (Shared Memory)
Infinity Fabric	NVLink

### 架构
#### 术语

| AMD | NVIDIA |
|---|---|
| 计算单元（CU） | 流式多处理器（SM） |
| SIMD | SM 子分区 |
| SIMD 通道 | CUDA Core (FP32 ALU) |
| 波前（wave64） | warp（warp32） |
| Matrix Core | Tensor Core |
| MFMA | mma.sync / wgmma / tcgen05.mma |
| VGPR / SGPR | 寄存器文件 |
| LDS (Local Data Share) | SMEM (Shared Memory) |
| Infinity Fabric | NVLink |

在 NVIDIA 中，架构雄心主要体现在每个 SM 内（每一代都会引入新的张量原语、新的异步机制、新的操作数存储），而 AMD 的雄心体现在 CU 之间——也就是能将多少个 CU 绑定为一个单一一致的封装。CU 自身保持保守：四个 16-lane SIMD、一个共享标量单元、64 KB 的 Local Data Share、一个 L1 向量缓存、每个 SIMD 各自的 VGPR 文件与一个 CU 共享的 SGPR 池，以及（自 CDNA 1 起）运行 MFMA 的 Matrix Core。自 2012 年 GCN 以来其形态几无本质变化；扩展的是数量（MI100 上 120 个 CU、MI250X 上 220 个、MI300X 上 304 个、MI355X 上 256 个）以及将它们绑定在一起的封装。一个包含 64 线程的 wavefront 会在 4 个周期内跨越 16 条 SIMD lane 流动，每个 SIMD 内会驻留多个 wavefront，调度器在它们之间切换以隐藏停顿。这里没有什么离奇之处；CDNA 的有趣之处都在 CU 之外。

在 NVIDIA 中，架构雄心体现在每个 SM 内（每代都有新的张量原语、新的异步机制、新的操作数存储）；而 AMD 的雄心则体现在 CU 之间，即能将多少 CU 绑定成单一一致封装。CU 本身很保守：四个 16-lane 的 SIMD、一个共享的标量单元、64 KB 的 Local Data Share、一个 L1 向量缓存、每 SIMD 的 VGPR 文件和一个 CU 共享的 SGPR 池，以及（自 CDNA 1 起）运行 MFMA 的 Matrix Core。自 2012 年 GCN 以来其形态没有发生实质性变化；可扩展的是数量（MI100 上 120 个 CUs，MI250X 上 220 个，MI300X 上 304 个，MI355X 上 256 个）以及将它们绑定起来的封装。一个 64 线程的 wavefront 在 4 个周期内在 16 条 SIMD lane 上流动，每个 SIMD 中驻留多个 wavefront，调度器在它们之间切换以隐藏停顿。这里没有什么奇特之处；CDNA 有趣之处在于 CU 之外的一切。

#### 计算

在 CU 内部，SIMD 与 Matrix Core 并行运行。四个 SIMD 负责所有逐元素操作：激活、归一化、残差、地址算术。Matrix Core 负责矩阵乘法。这个分工与 NVIDIA 的 CUDA Cores / Tensor Cores 的分工一致，但“矩阵”的抽象演进路径非常不同。

在 CU 内，SIMD 与 Matrix Core 并行运行。四个 SIMD 处理所有逐元素操作：激活、归一化、残差、地址算术。Matrix Core 处理矩阵乘法。这个分工与 NVIDIA 的 CUDA Cores / Tensor Cores 的分工相同，但矩阵抽象沿着非常不同的路径演化。

NVIDIA 的 Tensor Core 沿着线程层级一路上探：Volta 为 32 线程 warp，Hopper 为 128 线程 warp-group，Blackwell 则为单线程加可选的双 SM 集群。AMD 的 Matrix Core 则始终未动。自 2020 年的 MI100 到 2025 年的 MI355X，每一代 MFMA 都以 wavefront 为作用域：一个 wave64 发出单条矩阵指令（V_MFMA_*），四个 SIMD 协作驱动，操作数来自该 wavefront 的寄存器文件：A 与 B 来自 VGPR，C 与 D 通常来自专用 AGPR 文件。指令本身变得更快、格式集更宽，但发射者与作用域从未改变。在供给端唯一的让步出现在 CDNA 4：提供从 LDS 的专用 MFMA 转置加载，让操作数以 Matrix Core 所需布局直接供给；其精神与 NVIDIA 的 TMA 相似，但矩阵操作本身仍由 wave 发出。

NVIDIA 的 Tensor Core 在线程层次结构上向上演进：Volta 上的 32 线程 warp、Hopper 上的 128 线程 warp-group、Blackwell 上的单线程加可选的双 SM 集群。AMD 的 Matrix Core 则保持原位。每一代 MFMA（从 2020 年的 MI100 到 2025 年的 MI355X）都是以 wavefront 为作用域：一个 wave64 发出单个矩阵操作（V_MFMA_*），四个 SIMD 协作驱动它，操作数来自该 wavefront 的寄存器文件：A 和 B 来自 VGPRs，C 和 D 通常来自专用的 AGPR 文件。指令变快了，格式集也扩大了，但发射者和作用域没有改变。唯一的饲料端让步出现在 CDNA 4：从 LDS 的专用 MFMA 转置加载，直接以 Matrix Core 想要的布局将操作数交给它，精神上类似于 NVIDIA 的 TMA，但矩阵操作本身仍由 wave 发出。

吞吐量数字直接讲述了数据格式的演进。CDNA 1 于 2020 年发布，FP32 / FP16 / BF16 / INT8 的单 CU 单周期 FLOPs 分别为 256 / 1024 / 512 / 1024，并与 A100 一样原生支持 BF16。CDNA 2 将 FP64 路径加倍，达到每 CU 每周期 256 FLOPs 的全速率矩阵：这是一项 AMD 独有的押注，也让 MI250X 成功入驻 Frontier。CDNA 3 在 FP8（E4M3 + E5M2）上达到与 H100 的同等水平（4,096 FLOPs），加入 2:4 结构化稀疏，并新增一条等效 TF32 的路径，通过截断尾数以 FP64 矩阵速率运行 FP32 矩阵乘法。CDNA 4 再次翻倍，FP4 达到 16,384 FLOPs，并引入带 OCP MX 块缩放的 FP6，同时在单条 MFMA 中允许 A/B 精度混合，例如 FP8 × FP4。同一代将每 CU 的 FP64 吞吐大致减半，成为 AMD 首次为 AI 密度而取舍 HPC 密度、而非两者兼顾的一代。

吞吐量数字直接讲述了格式的演化故事。CDNA 1 在 2020 年推出时，FP32 / FP16 / BF16 / INT8 分别为 256 / 1024 / 512 / 1024 FLOPs 每 CU 每周期，并且与 A100 一样支持原生 BF16。CDNA 2 将 FP64 路径加倍为每 CU 每周期 256 FLOPs 的全速率矩阵：这是 AMD 的独特押注，使 MI250X 进入 Frontier。CDNA 3 在 FP8（E4M3 + E5M2）上达到与 H100 的同等水平，为 4,096 FLOPs，增加了 2:4 的结构化稀疏，并增加了一条等效 TF32 的路径，通过截断尾数以 FP64 矩阵速率运行 FP32 矩阵乘法。CDNA 4 再次翻倍到 FP4 的 16,384 FLOPs，并通过 OCP MX 块缩放支持 FP6，并在单个 MFMA 中加入可混合的 A/B 精度：例如 FP8 × FP4。同一代将每 CU 的 FP64 吞吐减半，是 AMD 首次为 AI 密度而牺牲 HPC 密度，而非同时兼顾两者。

以 wavefront 为作用域的抉择带来两点代价。

分支发散（Divergence）。一个半空的 wave64 会浪费 32 条 lane，而半空的 warp32 只浪费 16 条。对于控制流大体一致的负载这是小代价；对不规则负载则很受伤。

重叠（Overlap）。NVIDIA 的异步、描述符驱动的矩阵乘法将发射与执行解耦：发射线程启动指令后即可继续；Tensor Core 在后台运行；warp 可以在上一轮矩阵乘法仍在飞行时执行 softmax、应用掩码或预取下一块 tile。AMD 的 wavefront 集合式 MFMA 没有等效机制：发出矩阵乘法的同一 wave 在其挂起期间无法同时进行有意义的向量计算。跨不同 wavefront 可以实现重叠，但需用软件分阶段并显式设置 wavefront 屏障，更脆弱且消耗更多 wave 槽位与寄存器。

wavefront 作用域的决定表现为两种代价。

分支发散（Divergence）。一个半空的 wave64 浪费 32 条 lane，而一个半空的 warp32 浪费 16 条。对于控制流大体一致的工作负载这是小代价；对于不规则的工作负载则很吃亏。

重叠（Overlap）。NVIDIA 的异步、描述符驱动的矩阵乘法将发射与执行解耦：发射线程触发指令然后继续前进；Tensor Core 在后台运行；warp 可以在前一次矩阵乘法仍在进行时运行 softmax、应用掩码或预加载下一个 tile。AMD 的波前集合式 MFMA 并没有等效机制：发出矩阵乘法的同一 wave 在其挂起期间不能同时做有意义的向量工作。重叠可以在不同的 wavefront 之间实现，但必须通过软件分阶段并使用显式的 wavefront 屏障，这更脆弱并消耗更多的 wave 槽位和寄存器。

这一点的重要性取决于工作负载。纯稠密 GEMM（DGEMM，大批量训练的内环）在矩阵乘法期间没有可做的有用工作；两种引擎都能打满；异步收益有限。这正是 AMD 历史上在百亿亿次 HPC 场景领先的负载类型（Frontier 基于 MI250X，El Capitan 基于 MI300A）。而 Transformer attention（FlashAttention-3、FA4）会在矩阵乘法间穿插 softmax、掩码和 KV-cache 读取，异步重叠是这些内核的整体结构。AMD 必须手工重建该流水线，落后于 NVIDIA 的硬件级支持。MoE 分发、分页式 attention、推测式解码也在同一阵营：这类地址不规则工作希望与矩阵乘法并行运行。

这有多重要取决于工作负载。纯密集 GEMM（DGEMM，大批量训练的内循环）在矩阵乘法期间没有可以做的有用工作；两个引擎都能饱和；异步带来的收益很小。这正是 AMD 历来在百亿次级 HPC（如 MI250X 上的 Frontier、MI300A 上的 El Capitan）中领先的工作负载。Transformer attention（FlashAttention-3, FA4）将矩阵乘法与 softmax、掩码和 KV-cache 读取交织在一起，异步重叠构成了这些内核的整个结构。AMD 必须手工重建该流水线，这落后于 NVIDIA 的硬件级支持。MoE 分发、分页 attention、推测性解码也属于同一类：地址不规则的工作希望能在矩阵乘法旁边同时运行。

NVIDIA 的矩阵指令抽象在跨代上走得更远（warp → warp-group → 单线程异步 + 集群），而 AMD 并未跟进。

NVIDIA 的矩阵指令抽象跨代演进更远（warp → warp-group → 单线程异步 + 集群），而 AMD 并未跟进。

#### 内存

AMD 的内存层次结构的通用层级比 NVIDIA 更少，而且有一个 NVIDIA 根本没有的巨大缓存。从 CU 向外：64 KB 的 LDS 暂存存储器（软件管理，32 银行，AMD 对 NVIDIA SMEM 的类比）、一个向量 L1（早期 CDNA 为 16 KB，自 MI300X 起为 32 KB）、每个 XCD 几 MB 的 L2。然而 L2 并不在 XCD 之间保持一致性；一致性发生在比 L2 更高的一层。

#### 内存

AMD 的内存层次比 NVIDIA 的通用级别更少，而且有一个 NVIDIA 根本没有的巨大缓存。从 CU 向外：64 KB 的 LDS scratchpad（软件管理，32 银行，AMD 对 NVIDIA SMEM 的类比）、一个向量 L1（早期 CDNA 为 16 KB，自 MI300X 起为 32 KB）、每个 XCD 几 MB 的 L2。然而 L2 并不在 XCD 之间保持一致性；一致性发生在比 L2 更高的一层。

那一层就是 Infinity Cache：MI300X 上为 256 MB，分布在四个 IOD 上，16 路组相联，实测约 ~12 TB/s，超过 MI300X 的 5.3 TB/s HBM3 带宽的两倍多。它起源于 RDNA 游戏 GPU，用以弥补窄 GDDR 总线；AMD 在 CDNA 3 上将该 IP 复用于 AI，在 attention 的 KV 重用和权重重用场景下，大型 LLC 出奇地合适。NVIDIA 则押注更大的 HBM 带宽（B200 的 8 TB/s，随着 Rubin 上的 HBM4 伸缩），而 AMD 押注缓存。

那一层就是 Infinity Cache：MI300X 上为 256 MB，分布在四个 IOD 上，16 路组相联，实测约 ~12 TB/s，超过 MI300X 的 5.3 TB/s HBM3 带宽的两倍多。它起源于 RDNA 游戏 GPU，用以弥补窄 GDDR 总线；AMD 在 CDNA 3 上将该 IP 复用于 AI，在 attention 的 KV 重用和权重重用场景下，大型 LLC 出奇地合适。NVIDIA 则押注更大的 HBM 带宽（B200 的 8 TB/s，随着 Rubin 上的 HBM4 伸缩），而 AMD 押注缓存。

在片外，HBM 容量增长迅猛：在 MI100 / MI210 / MI250X / MI300X / MI325X / MI350X 上分别为 32 → 64 → 128 → 192 → 256 → 288 GB，从 2021 年起在每一代均匹配或超越同时代的 NVIDIA 旗舰。AMD 的赌注是推断工作负载越来越受容量约束，拥有更多内存的芯片会获胜。

在片外，HBM 容量增长迅猛：在 MI100 / MI210 / MI250X / MI300X / MI325X / MI350X 上分别为 32 → 64 → 128 → 192 → 256 → 288 GB，从 2021 年起在每一代均匹配或超越同时代的 NVIDIA 旗舰。AMD 的赌注是推断工作负载越来越受容量约束，拥有更多内存的芯片会获胜。

#### 数值

格式演化遵循所有 AI 硅片都共享的精度减半路径：FP32 → FP16 → FP8 → FP4，并在每一步用更细粒度的缩放恢复精度。AMD 特有的一条轴是开放性。CDNA 4 的 FP4 和 FP6 使用 OCP MX 块尺度乘法：与 Blackwell 的 MXFP4 和 TPU v8 的 MXU 相同的数值格式，但由一个开放联盟（AMD、NVIDIA、Intel、Meta、Microsoft、Qualcomm、ARM）指定，AMD 参与创建该联盟，而非由任何单一厂商指定。MI355X 出厂的格式与 B200 和 TPU v8 上出厂的格式相同。

#### 数值

格式演化遵循所有 AI 硅片都共享的精度减半路径：FP32 → FP16 → FP8 → FP4，并在每一步用更细粒度的缩放恢复精度。AMD 特有的一条轴是开放性。CDNA 4 的 FP4 和 FP6 使用 OCP MX 块尺度乘法：与 Blackwell 的 MXFP4 和 TPU v8 的 MXU 相同的数值格式，但由一个开放联盟（AMD、NVIDIA、Intel、Meta、Microsoft、Qualcomm、ARM）指定，AMD 参与创建该联盟，而非由任何单一厂商指定。MI355X 出厂的格式与 B200 和 TPU v8 上出厂的格式相同。

CDNA 4 的转折值得单独指出：每 CU 的 FP64 吞吐减半。MI300X 服务于训练、HPC 和推理三者；MI355X 首要是 AI 芯片。支撑 Frontier 的全速率 FP64 矩阵押注并未被取消，但它不再承担主要负重。

CDNA 4 的转折值得单独指出：每 CU 的 FP64 吞吐减半。MI300X 服务于训练、HPC 和推理三者；MI355X 首要是 AI 芯片。支撑 Frontier 的全速率 FP64 矩阵押注并未被取消，但它不再承担主要负重。

#### 芯粒

封装是 CDNA 不再像 NVIDIA 而开始展现差异化之处的地方。

包封是 CDNA 停止像 NVIDIA 并开始有别于其之处的地方。

CDNA 1 的 MI100 是单片 7 nm。CDNA 2 的 MI250X 是 AMD 的首款多芯片 GPU：两个 Aldebaran GCD 并列在 2.5D EFB 有机基板上，通过 4 条封装内 Infinity Fabric 链接（合计 400 GB/s）连接，但对软件呈现为两个独立的 GPU。

CDNA 1 的 MI100 是单片 7 nm。CDNA 2 的 MI250X 是 AMD 的首款多芯片 GPU：两个 Aldebaran GCD 并列在 2.5D EFB 有机基板上，通过 4 条封装内 Infinity Fabric 链接（合计 400 GB/s）连接，但对软件呈现为两个独立的 GPU。

CDNA 3 是改变一切的举措。八个 XCD（TSMC N5， ~115 mm²/个）通过 TSMC SoIC 混合键合（亚微米间距的 TSV，无微凸点）在 3D 上堆叠到下面的四个 I/O die（TSMC N6）上。IOD 携带 Infinity Cache、HBM3 PHY、Infinity Fabric 链接和 PCIe Gen 5；每个 IOD 上方寄宿两个 XCD，旁边放两个 HBM 堆栈。四个 IOD 通过 Infinity Fabric AP 在 4.8 TB/s 的对半带宽下缝合，因此这个 1530 亿晶体管的封装在内核看来像一个 GPU：在 IOD 层实现缓存和地址空间的统一。NVIDIA 在 H100 之前一直保持单片，直到 B200 才通过 2.5D CoWoS-L 转向两个掩模极限 die。AMD 提前一代实现了 3D 堆叠，且每片面积更小：在相同封装前沿上做出了不同的押注。

CDNA 3 是改变一切的举措。八个 XCD（TSMC N5， ~115 mm²/个）通过 TSMC SoIC 混合键合（亚微米间距的 TSV，无微凸点）在 3D 上堆叠到下面的四个 I/O die（TSMC N6）上。IOD 携带 Infinity Cache、HBM3 PHY、Infinity Fabric 链接和 PCIe Gen 5；每个 IOD 上方寄宿两个 XCD，旁边放两个 HBM 堆栈。四个 IOD 通过 Infinity Fabric AP 在 4.8 TB/s 的对半带宽下缝合，因此这个 1530 亿晶体管的封装在内核看来像一个 GPU：在 IOD 层实现缓存和地址空间的统一。NVIDIA 在 H100 之前一直保持单片，直到 B200 才通过 2.5D CoWoS-L 转向两个掩模极限 die。AMD 提前一代实现了 3D 堆叠，且每片面积更小：在相同封装前沿上做出了不同的押注。

在 CDNA 4 的 MI355X 上，八个 XCD 仍通过 SoIC 在下面的基底上 3D 堆叠，但 XCD 转移到 TSMC N3P，每个 XCD 具有 32 个活跃 CU（共 256 个，vs MI300X 的 304 个；每 XCD 的计数下降以腾出面积给更大的 Matrix Core 和 160 KB 的 LDS）。四个 MI300X 的 IOD 合并为两个，每个在 TSMC N6 上宽度加倍，上方承载四个 XCD，旁边承载四个 HBM3E 堆栈。每个 IOD 现在携带其自身 128 MB 的 256 MB Infinity Cache 切片、一半的 HBM PHY、其份额的 Infinity Fabric 链接和 PCIe Gen 5。两 IOD 之间的 Infinity Fabric AP 以 5.5 TB/s 的对半带宽运行（约比 CDNA 3 高出 ~15%），八个堆栈转向 12-Hi HBM3E，实现 288 GB、8 TB/s，在相同引脚数下容量比 MI300X 提高 50%。该封装总计 1850 亿晶体管，仍然向内核呈现为一个 GPU。

在 CDNA 4 的 MI355X 上，八个 XCD 仍通过 SoIC 在下面的基底上 3D 堆叠，但 XCD 转移到 TSMC N3P，每个 XCD 具有 32 个活跃 CU（共 256 个，vs MI300X 的 304 个；每 XCD 的计数下降以腾出面积给更大的 Matrix Core 和 160 KB 的 LDS）。四个 MI300X 的 IOD 合并为两个，每个在 TSMC N6 上宽度加倍，上方承载四个 XCD，旁边承载四个 HBM3E 堆栈。每个 IOD 现在携带其自身 128 MB 的 256 MB Infinity Cache 切片、一半的 HBM PHY、其份额的 Infinity Fabric 链接和 PCIe Gen 5。两 IOD 之间的 Infinity Fabric AP 以 5.5 TB/s 的对半带宽运行（约比 CDNA 3 高出 ~15%），八个堆栈转向 12-Hi HBM3E，实现 288 GB、8 TB/s，在相同引脚数下容量比 MI300X 提高 50%。该封装总计 1850 亿晶体管，仍然向内核呈现为一个 GPU。

#### 押注
押注 1：先 HPC 然后 AI。HPC 和 AI 在一段时间内是相同的押注，直到不是：从 CDNA 2 到 CDNA 3 交付全速率 FP64 矩阵，然后当推理的经济性明确偏向低精度时，在 CDNA 4 出现分岔。  
押注 2：内存容量。从 2021 年起每一代在 HBM 容量上匹配或超越同时代的 NVIDIA 旗舰，并增加一个 256 MB 的最后级 Infinity Cache，吸收 H100 必须访问 HBM 的重用。  
押注 3：及早 3D 堆叠。在 NVIDIA 之前对缓存和 I/O 进行 3D 堆叠：2023 年在 IOD 上使用 TSMC SoIC 混合键合 XCD，而 NVIDIA 直到 2025 年仍保持单片。  
押注 4：一致性 CPU+GPU。MI300A APU 是有史以来最激进使用芯粒的产品，El Capitan 的部署就是证明。  
押注 5：开放的纵向扩展互连。UALink 和 OCP MX 相对于 NVLink 和专有 FP4 的开放路线。

#### 押注
押注 1：先 HPC 然后 AI。HPC 和 AI 在一段时间内是相同的押注，直到它们不再相同：在 CDNA 2 到 CDNA 3 间交付全速率 FP64 矩阵，然后一旦推理经济性明确倾向低精度，在 CDNA 4 出现分岔。  
押注 2：内存容量。从 2021 年起每一代在 HBM 容量上匹配或超越同时代的 NVIDIA 旗舰，并增加一个 256 MB 的最后级 Infinity Cache，吸收 H100 必须访问 HBM 的重用。  
押注 3：及早 3D 堆叠。在 NVIDIA 之前对缓存和 I/O 进行 3D 堆叠：2023 年在 IOD 上使用 TSMC SoIC 混合键合 XCD，而 NVIDIA 直到 2025 年仍保持单片。  
押注 4：一致性 CPU+GPU。MI300A APU 是有史以来最激进使用芯粒的产品，El Capitan 的部署就是证明。  
押注 5：开放的纵向扩展互连。UALink 和 OCP MX 作为对 NVLink 和专有 FP4 的开放替代。

## 扩展

内存押注带来了扩展性的后果：当 8 个 MI300X 芯片容纳 1.5 TB HBM，8 个 MI350X 芯片容纳 2.3 TB 时，你可以将一个 405B 参数的模型以 FP8 放入单个 8-GPU 机箱（包括权重、KV cache，以及用于更长上下文和更大批次的余量），而同一模型在 8× H100（640 GB）上则需要小心分片。对于 2024–2025 年间的推理工作负载，AMD 的纵向扩展不需要在机架级匹配 NVL72 就能在机箱级具有竞争力。对于前沿训练，则确实需要，而 AMD 在 2026 年之前没有答案。

内存押注带来了扩展性的后果：当 8 个 MI300X 芯片容纳 1.5 TB HBM，8 个 MI350X 芯片容纳 2.3 TB 时，你可以将一个 405B 参数的模型以 FP8 放入单个 8-GPU 机箱（包括权重、KV cache，以及用于更长上下文和更大批次的余量），而同一模型在 8× H100（640 GB）上则需要小心分片。对于 2024–2025 年间的推理工作负载，AMD 的纵向扩展不需要在机架级匹配 NVL72 就能在机箱级具有竞争力。对于前沿训练，则确实需要，而 AMD 在 2026 年之前没有答案。

### 纵向扩展
通过 Infinity Fabric 将 GPU 绑定为一个一致的内存域。在 MI355X 之前，这止步于 8-GPU 的 OAM 机箱（每 GPU 具有 896 GB/s 的网格带宽）。Helios 通过 UALink 将纵向扩展扩展到 72-GPU 的机架，在发布时通过以太网隧道（UALoE），并从 2027 年起支持原生 UALink。
### 横向扩展
通过以太网将这些域联网。不使用 InfiniBand。Pensando 的 NIC（Pollara 400、Vulcano 800）实现了 Ultra Ethernet Consortium 的 UET RDMA 传输；Broadcom Tomahawk 6 提供交换机 ASIC 和 CPO。

### 纵向扩展
通过 Infinity Fabric 将 GPU 绑定为一个一致的内存域。在 MI355X 之前，这止步于 8-GPU 的 OAM 机箱（每 GPU 具有 896 GB/s 的网格带宽）。Helios 通过 UALink 将纵向扩展扩展到 72-GPU 的机架，在发布时通过以太网隧道（UALoE），并从 2027 年起支持原生 UALink。  
### 横向扩展
通过以太网将这些域联网。不使用 InfiniBand。Pensando 的 NIC（Pollara 400、Vulcano 800）实现了 Ultra Ethernet Consortium 的 UET RDMA 传输；Broadcom Tomahawk 6 提供交换机 ASIC 和 CPO。

纵向扩展

在 MI355X 之前，AMD 的纵向扩展意味着在 Infinity Fabric 上的 8-GPU OAM 平台。每个 MI300X 拥有 7 条 IF 链接（对机箱内的每个对等体各一条），每条为 128 GB/s 双向，在全连通的 all-to-all 拓扑中为每 GPU 提供 896 GB/s 的网格带宽。MI350X 将每条链路提高到 153.6 GB/s（约每 GPU ~1,075 GB/s），但保留 8-GPU 的形态。该平台符合 OCP 的 UBB 2.0：与 NVIDIA HGX 基板使用相同的机械插槽，因此服务器厂商可以在相同机箱上交付 AMD 或 NVIDIA，而无需重新设计系统。

纵向扩展

在 MI355X 之前，AMD 的纵向扩展意味着在 Infinity Fabric 上的 8-GPU OAM 平台。每个 MI300X 拥有 7 条 IF 链接（对机箱内的每个对等体各一条），每条为 128 GB/s 双向，在全连通的 all-to-all 拓扑中为每 GPU 提供 896 GB/s 的网格带宽。MI350X 将每条链路提高到 153.6 GB/s（约每 GPU ~1,075 GB/s），但保留 8-GPU 的形态。该平台符合 OCP 的 UBB 2.0：与 NVIDIA HGX 基板使用相同的机械插槽，因此服务器厂商可以在相同机箱上交付 AMD 或 NVIDIA，而无需重新设计系统。

AMD 在 MI355X 之前没有交付一个相当于 NVL72 的机架级纵向扩展。运行更大模型的客户在 MI300X 集群上通过以太网跨多个 8-GPU 机箱扩展，为此付出了横向扩展的延迟，而 NVIDIA 用户可以将这些保持在纵向扩展内部。这是对训练至关重要的差距，也是 Helios 致力于弥补的差距。

AMD 在 MI355X 之前没有交付一个相当于 NVL72 的机架级纵向扩展。运行更大模型的客户在 MI300X 集群上通过以太网跨多个 8-GPU 机箱扩展，为此付出了横向扩展的延迟，而 NVIDIA 用户可以将这些保持在纵向扩展内部。这是对训练至关重要的差距，也是 Helios 致力于弥补的差距。

Helios 是 AMD 的首个机架级纵向扩展域，将在 2026 年下半年与 MI455X 一起出货。每机架 72 GPUs、约 31 TB 的 HBM4、1.4 PB/s 的汇总 HBM 带宽、2.9 ExaFLOPS FP4 / 1.4 ExaFLOPS FP8、260 TB/s 的纵向扩展带宽、43 TB/s 的横向扩展带宽。形态尺寸为 Open Rack Wide (ORW)（Meta 于 2025 年提交给 OCP 的规格，双宽且液冷），而非 AMD 专有机箱。在 Meta 的参考设计基础上构建而不是从零设计机架是 AMD 的有意押注：任何标准化采用 ORW 的超大规模运营商都可以在不进行定制数据中心设施改造的情况下部署 Helios。

Helios 是 AMD 的首个机架级纵向扩展域，将在 2026 年下半年与 MI455X 一起出货。每机架 72 GPUs、约 31 TB 的 HBM4、1.4 PB/s 的汇总 HBM 带宽、2.9 ExaFLOPS FP4 / 1.4 ExaFLOPS FP8、260 TB/s 的纵向扩展带宽、43 TB/s 的横向扩展带宽。形态尺寸为 Open Rack Wide (ORW)（Meta 于 2025 年提交给 OCP 的规格，双宽且液冷），而非 AMD 专有机箱。在 Meta 的参考设计基础上构建而不是从零设计机架是 AMD 的有意押注：任何标准化采用 ORW 的超大规模运营商都可以在不进行定制数据中心设施改造的情况下部署 Helios。

该互连为 UALink：Ultra Accelerator Link，一个开放联盟标准，AMD 与 Apple、AWS、Cisco、Google、HPE、Intel、Meta、Microsoft 和 Synopsys 一起帮助发起。UALink 200G 1.0（2025 年 4 月）定义了 200 GT/s 的 lane 和每方向 800 Gbps，交换式拓扑可扩展到每个 pod 1024 个加速器。其承诺是提供一个可与 NVLink 相比的缓存一致性互连，但不归任何单一厂商所有：任何厂商都可以构建 UALink 交换机，任何加速器都可以使用 UALink，该标准属于联盟而非最强势的卖方。

该互连为 UALink：Ultra Accelerator Link，一个开放联盟标准，AMD 与 Apple、AWS、Cisco、Google、HPE、Intel、Meta、Microsoft 和 Synopsys 一起帮助发起。UALink 200G 1.0（2025 年 4 月）定义了 200 GT/s 的 lane 和每方向 800 Gbps，交换式拓扑可扩展到每个 pod 1024 个加速器。其承诺是提供一个可与 NVLink 相比的缓存一致性互连，但不归任何单一厂商所有：任何厂商都可以构建 UALink 交换机，任何加速器都可以使用 UALink，该标准属于联盟而非最强势的卖方。

问题在于：原生 UALink 交换硅片要到 2027 年才能大规模出货。Astera Labs 的 Scorpio，以及 Auradine、Enfabrica、Xconn 的竞争芯片，均瞄准 2026 年末 / 2027 年部署。Helios 在发布时使用 UALoE（将 Infinity Fabric 隧道化在标准以太网上）作为权宜之计，在等待原生 UALink 织物的同时保留编程模型。原生 UALink 交换将在 2027 年随 MI500 到来。发布时，Helios 更接近一个快速以太网隧道化的一致性集群，而非 NVL72 那种真正的缓存一致性 NVLink 域：在时间线上作出了实实在在的让步，以换取在 2026 年下半年交付有竞争力的产品。

问题在于：原生 UALink 交换硅片要到 2027 年才能大规模出货。Astera Labs 的 Scorpio，以及 Auradine、Enfabrica、Xconn 的竞争芯片，均瞄准 2026 年末 / 2027 年部署。Helios 在发布时使用 UALoE（将 Infinity Fabric 隧道化在标准以太网上）作为权宜之计，在等待原生 UALink 织物的同时保留编程模型。原生 UALink 交换将在 2027 年随 MI500 到来。发布时，Helios 更接近一个快速以太网隧道化的一致性集群，而非 NVL72 那种真正的缓存一致性 NVLink 域：在时间线上作出了实实在在的让步，以换取在 2026 年下半年交付有竞争力的产品。

### 横向扩展

AMD 不出货 InfiniBand。整个横向扩展栈基于以太网，依托另一个开放标准：Ultra Ethernet Consortium (UEC)。

UEC 1.0（2025 年 6 月发布）定义了 Ultra Ethernet Transport (UET)：一种在标准以太网上的新 RDMA 传输，具有 packet spraying、基于 SACK 的选择性重传和现代拥塞控制。UET 不是 RoCEv2（RoCEv2 在以太网帧中封装 InfiniBand 传输）；它是针对横向扩展 AI 织物对 RDMA 语义的全新设计。AMD 与 Broadcom、Cisco、Meta 和 Microsoft 一同为创始成员。策略与 UALink 相同：掌握标准，而非实现。

### 横向扩展

AMD 不出货 InfiniBand。整个横向扩展栈基于以太网，依托另一个开放标准：Ultra Ethernet Consortium (UEC)。

UEC 1.0（2025 年 6 月发布）定义了 Ultra Ethernet Transport (UET)：一种在标准以太网上的新 RDMA 传输，具有 packet spraying、基于 SACK 的选择性重传和现代拥塞控制。UET 不是 RoCEv2（RoCEv2 在以太网帧中封装 InfiniBand 传输）；它是针对横向扩展 AI 织物对 RDMA 语义的全新设计。AMD 与 Broadcom、Cisco、Meta 和 Microsoft 一同为创始成员。策略与 UALink 相同：掌握标准，而非实现。

NIC 来自 Pensando，这是 AMD 在 2022 年收购的网络创业公司。Pollara 400 是当前的 AI NIC：400 GbE、P4 可编程、UEC 就绪、PCIe Gen 5，与 MI300X / MI355X 搭配。Vulcano 800 将在 2026 年与 MI455X 一同出货：符合 UEC 1.0、PCIe Gen 6、原生 UALink 接口，提供是 Pollara 每 GPU 横向扩展带宽的 8×。Salina 400 是前端 DPU（16× Arm Neoverse-N1，双 400 GbE），用于存储 / SDN / 防火墙，等同于 NVIDIA 的 BlueField，与 AI 后端 NIC 区分开来。

不过，交换芯片并非来自 AMD。Helios 的 43 TB/s 横向扩展织物运行在 Broadcom Tomahawk 6 上：一颗 102.4 Tbps 的以太网交换机 ASIC，配备共封装光学器件（“Davisson”）。AMD 没有自研 CPO，也没有自研交换机 ASIC；光学层来自合作方硅片。NVIDIA 拥有其完整栈：InfiniBand、Spectrum-X 以太网、ConnectX、BlueField、Quantum-X Photonics CPO，全部自研。AMD 拥有其中一层（通过 Pensando 拥有 NIC + DPU），并押注开放标准加上最佳伙伴硅片能跑赢垂直一体化。

行业已朝 AMD 的方向转变。Dell'Oro 报告称，以太网在 2025 年承担的 AI 横向扩展织物出货量是 InfiniBand 的两倍多；AWS、Microsoft、Meta、Oracle 和 xAI 都已在其基于 AMD 的 AI 集群上标准化采用以太网。剩下的问题不在于以太网能否在 RDMA 语义上匹配 InfiniBand（UEC 已弥合该差距），而在于 Helios 能否足够快地弥合与 NVL72 在机架级的差距，从而赢得当下默认选择 NVIDIA 的前沿训练工作负载。

## 软件

ROCm 是与 CUDA 相对的开源栈。NVIDIA 的软件栈是专有且垂直一体化的（cuBLAS、cuDNN、TensorRT-LLM 以由 NVIDIA 独家维护的二进制 blob 形式发布），而 ROCm 原生于 GitHub，并押注开放标准（PyTorch、Triton、vLLM、OCP MX），而非围墙花园式的库集合。与 NVIDIA 的软件差距是客观存在的，但 AMD 的策略是通过开源社区来弥合，而不是从零构建一套平行的 CUDA 栈。

该栈的底层是 HIP，这是 AMD 的与 CUDA 兼容的 C++ 运行时。hipify 会自动将 CUDA 源码转换为 HIP。大量 HPC 代码（HACC、Laghos、QMCPack）可以开箱即用地以 80–95% 的比例完成移植：这是 CORAL-2 的数据。现代 AI 内核的移植则较差：凡是使用 Hopper 或 Blackwell 特定原语（TMA descriptors、wgmma、tcgen05.mma）的部分在 ROCm 中没有干净的一一对应，不得不手工重写。

在 HIP 之上是一层按名称一一对应映射到 NVIDIA 的库层：rocBLAS 对应 cuBLAS；hipBLASLt 对应 cuBLASLt；MIOpen 对应 cuDNN；RCCL 对应 NCCL；Composable Kernel（及其现代的 ck-tile DSL）对应 CUTLASS；rocprofv3 / rocprof-sys / rocprof-compute 对应 Nsight 系列。不过，没有与 TensorRT-LLM 对应的一方原生组件。AMD 的答案是支持 vLLM 作为开源服务引擎，并提供可插入其中的 AMD 特定算子（AITER）；面向 vLLM 的专用 ROCm CI 在 2026 年初将测试通过率从 37% 提升到 93%。

PyTorch 路径是一等公民。Eager 模式的 PyTorch 自 2018 年起即可在 ROCm 上运行；torch.compile 通过 Triton 下沉，而 Triton 的 ROCm 后端（配合用于预编译数学内核的 AOTriton）已合入上游。没有类似 XLA 的中间 IR；ROCm 直接编译到 HIP / Triton / CK。随着 Triton 成为 PyTorch 的默认内核路径，移植成本大幅消散：凡是经由 torch.compile 运行的内核，在 CUDA 与 ROCm 上无需改动源码即可工作。这是 AMD 开放战略之下的架构层面押注：Triton 的 Python DSL 成为跨厂商的通用语，绕开了对 CUDA 等效内核生态的需求。

FlashAttention 是承重用例。FA2 已通过 Composable Kernel 在 MI300X 上投入生产；在 ROCm 上，PyTorch 默认采用 CK 或 AOTriton。FA3（针对 Hopper 调优）通过 AITER + CK 获得部分支持，但 Dao-AILab 的规范实现仍然仅支持 CUDA。FA4（Blackwell，2026 年 3 月）完全没有 ROCm 移植。HipKittens，即 Hazy Research 在 2025 年 11 月推出的 ThunderKittens 的 MI355X 移植，宣称用约 500 行代码就实现了与手工调优 AITER 前向等效。模式清晰：开源学术内核在 NVIDIA 之后以数月而非数年的滞后补上 AMD 的长尾。

生产部署已验证了这一策略。Microsoft Azure 的 ND MI300X v5 实例在 2024 年 5 月进入 GA；OpenAI 在其上运行 GPT 推理。Meta 通过 Grand Teton 平台在 MI300X 上交付 Llama 3 / Llama 4 推理。Oracle OCI 的 BM.GPU.MI300X.8 在 2024 年 9 月进入 GA，MI355X 于 2026 年跟进。这些是在超大规模云商水平上的真实推理集群，而非试点。

坦诚地说，差距仍然存在。独立基准（Phoronix，2026 年 3 月）显示，在标准 PyTorch / vLLM / SGLang 工作负载上，等精度且等级别硅片条件下，ROCm 7.2 比等效 CUDA 慢约 10–25%。ROCm 7 在特性上达成等价，但在性能上未达等价。FlashAttention-4 的长尾（利用 Blackwell 最新原语的研究代码）是 NVIDIA 最稳固的护城河所在；其在 ROCm 上没有干净的对应，正等待手写 AITER 内核或 HipKittens 级别的社区移植。NVIDIA 将工程师派驻前沿实验室；AMD 通过 GitHub 发布内核。两者在通用工作负载（Llama 推理、注意力、稠密 Transformer 训练）上收敛，但新颖研究代码的长尾仍然让 MI300X / MI355X 部署付出 NVIDIA 用户不需要支付的工程时间。

## Cerebras WSE

Cerebras 打造了有史以来出货规模最大的芯片。其哲学是：内存墙源于对晶圆的切割。晶圆厂在 300 mm 硅片上曝光数十个裸片并将其锯开；随后行业用最复杂的工程手段（HBM、NVLink、CoWoS、每机架 5,184 根铜缆）把这些碎片以片上带宽一小部分的速率重新连回去。Cerebras 跳过了锯片这步。Wafer-Scale Engine 是一整片硅：84 个掩模场、46,225 mm²、900,000 个数据流核心，且片上每一字节 SRAM 距离一个计算单元仅 1 个时钟周期。

### 谱系
2019
WSE-1CS-1
首款出货的晶圆级处理器：1.2T 晶体管、400,000 个核心、18 GB 晶圆内 SRAM。
2021
WSE-2CS-2
7 nm：850,000 个核心、40 GB SRAM。Weight streaming 将权重移出晶圆进入 MemoryX。
2023
Condor GalaxyCG-1
与 G42 构建的 64 机系统集群；训练了 Jais Arabic LLM 家族。
2024
WSE-3CS-3
5 nm：4T 晶体管、900,000 个核心、44 GB SRAM；每核心 FP16 SIMD 从 4 宽翻倍到 8 宽；集群规格上限至 2,048 台系统。
2024
Inference
将权重停驻于 SRAM 而非流式传输：业界最快的独立测得解码性能，并成为如今定义公司的转折点。

### 架构

GPU 是一个层级体系：线程在 warp 内、warp 在流式多处理器（SM）内、裸片在封装内、封装在机架内；每个边界都有其带宽、时延和编程抽象；凡由多个裸片构成的加速器都会继承某种版本的这种层级。WSE 是一片平面：900,000 个相同核心在 2D 网格中密铺，无共享缓存、无全局内存，任意两个核心之间没有任何边界。每个核心都很小，在 WSE-2 上约 ~38,000 µm²，约一半 SRAM、一半逻辑，峰值 30 mW：48 kB 本地 SRAM、16 个通用寄存器、6 级流水线、4 宽 FP16 FMAC SIMD（WSE-3 为 8 宽），以及一条五端口路由器接入织构。执行方式是数据流：核心在 wavelet 抵达前保持空闲，wavelet 中的控制位选择触发哪个处理任务，当张量操作数到达与耗尽时，8 个硬件微线程逐周期切换。无 warp、无 warp 调度器、无可错失的缓存、无重排序缓冲：数据的到达即是调度。

晶圆

步进机每次以一个掩模对晶圆曝光，单次面积约 ~850 mm²，这也是为何常规芯片都受此上限约束（以及为何当 NVIDIA 顶到上限时，B200 立刻变成了双裸片）。Cerebras 与其他 TSMC 客户一样，在 12×7 的网格中重复打印同一个约 ~550 mm² 裸片 84 次，然后与 TSMC 共同开发的工艺会在通常锯缝的 <1 mm 划片线上铺设额外的高层金属。网格通过源同步并行接口跨越每条接缝（WSE-3 上每裸片 2,880 GB/s），而整个片间层仅耗 ~97 W。对软件而言，这些接缝不存在：一个统一的网格，一颗芯片。

晶圆级方案曾被尝试且因良率失败：一片单体晶圆计算机上的单个缺陷会毁掉整个晶圆，这也是 20 世纪 80 年代埋葬该设想的原因。Cerebras 的答案是粒度。H100 上的一个缺陷会让一整个约 ~6 mm² 的 SM 失效；WSE 上同样的缺陷只会让一个 0.05 mm² 的核心失效。WSE-3 实际制造 ~970,000 个核心并出货 900,000 个：约 ~7% 的冗余池加上冗余织构链路，使硬件能够绕开每一个缺陷并恢复完整的逻辑网格。

核心

这个核心不同寻常之处不在数据通路，而在于“指令”的含义。除了 16 个通用寄存器外，还有 44 个数据结构寄存器（DSR），每个都保存一个张量描述符：基地址、范围与步幅，最高四维。指令通过 DSR 指定其操作数，因此一条 FMAC 指令即可表达：将到达的数据流与此处常驻张量相乘，并累加到彼处张量中，且硬件会在张量持续期间持续流送元素。乘法周围没有软件循环，每个元素也无需取指；循环就存在于描述符里。NVIDIA 用了五代 Tensor Core 才把矩阵乘法推进到由单一描述符驱动的命令；在 WSE 核心上，张量指令别无他法。

时序由织构负责。color 是静态路由的虚拟通道，编译时绑定一个处理任务，因此在某个 color 上发送一个 wavelet 就是在目标核心上调用代码：16 个控制位是调用，16 个数据位是参数。任务调度器在核心的 8 个微线程中保持在途的张量操作，并按操作数可用性逐周期切换。这与 warp 调度器用 64 个常驻 warp 隐藏停顿相同的工作，只是用 8 个上下文即可，因为所要隐藏的延迟是一条繁忙的 SRAM 银行或一次邻居跳点，而非一次 HBM 往返。

48 kB 本地 SRAM 的组织方式服务于数据通路而非局部性：8 个单端口 6 kB 银行每周期提供 2 次 64 位读与 1 次 64 位写，恰好对应两个 4 元素 FP16 操作数输入和一个结果输出，匹配 WSE-2 FMAC 的宽度。一个 256 字节的软件管理缓存（WSE-3 为 512 B）把最热点的值留在流水线身边。这台机器的论点在微缩尺度上显而易见：在每个核心上，内存带宽与计算精确匹配，而晶圆将这种平衡复制了 900,000 遍。

### 计算

晶圆上没有矩阵单元。NVIDIA、Google 与 AMD 都把其 FLOPs 聚焦在专用的矩阵乘引擎（Tensor Core、MXU、Matrix Core）上，主要区别在于如何为该引擎供数；Cerebras 则从织构中“组装”矩阵乘法。一次 GEMM 是一次覆盖整片晶圆的编舞：每个到达的权重沿着持有激活的核心行进行广播，每个核心对其常驻切片执行乘加（每个权重做一次 AXPY），并在网格上完成部分和的归约。Tensor Core 从寄存器块获得的数据复用，MXU 从其线网获得的数据复用，WSE 则从几何结构获得：激活从不移动，因此在途的唯一操作数就是被乘的那个。

需要谨慎解读 FLOPs 台账，因为 Cerebras 打出的数字并非对比用的数字。WSE-3 的头条 125 PFLOPS 是稀疏 FP16：它假定硬件在理想稀疏张量上的约 8× 零跳过收益。稠密 FP16 约为 15.8 PFLOPS（推导：900,000 cores × 8-wide FMAC × 1.1 GHz；Cerebras 未公布官方稠密数值）。这是真实的算力，但不是重点：在每瓦能效上，晶圆的稠密 FLOPs 不如所有同期 GPU。晶圆从来不是 FLOPs 机器。它是带宽机器，而 FLOPs 的存在是为了跟上 SRAM。

零跳过是数据流物尽其用之处。由于计算由到达的数据触发，零值永不触发任何事：零在发送端被过滤，接收核心不会看到它，也不会消耗周期。这是非结构化、到元素粒度的稀疏性，是 NVIDIA 2:4 结构化稀疏仅能采样到的一般情形。但这至今还是一个尚未被充分行使的选项。Cerebras 自己的稀疏预训练结果（SPDF：1.3B 参数下 75% 稀疏；后续在 6.7B）由厂商撰写且规模低于 7B，且尚无旗舰客户模型披露为稀疏训练：在该硬件上最大规模的 Jais 2 是稠密的。唯一能收割非结构化稀疏性的硅片，尚未交付任何采用它的头条模型。

### 内存

内存层级只有一层：在核心内部以 48 kB 切片存在的 44 GB SRAM，且晶圆上不再有其他任何东西。无 HBM、无 L2、无淘汰策略；每一字节距一次 FMAC 仅一个周期。标称带宽为 21 PB/s，这个数字值得特别说明：它是 900,000 个本地 SRAM 端口的总和，是晶圆内聚合值，而不是点到点链路，不能与 HBM 的数字直接比较。诚实的比较是每 FLOP 字节数：晶圆可为稠密 FP16 每 FLOP 提供约 ~1.3 字节，而 B200 从 HBM 获得约 ~0.002。在这一轴上，每一款 GPU 和 TPU 都是“饥饿”的；WSE 是唯一达到平衡的机器。解码阶段是纯粹的带宽问题（每个 token 对权重进行一次完整读取），也是晶圆恰好擅长的阶段。

这一层级的另一面，就是它的边界。晶圆与外界的连接是 12×100 GbE：1.2 Tb/s，勉强略高于一块 Blackwell GPU 所配单个 ConnectX-8 NIC。晶圆内 SRAM 与晶圆外 Ethernet 之间横亘着 5 个数量级。NVIDIA 的层级是缓慢下行的，每一层的速度只是上一层的几分之一；WSE 只有两个层级，且两者之间是悬崖。晶圆是一座孤岛，而这座孤岛的超能力与它的牢笼，源于同一事实。

而这座孤岛并未增长。在领先制程上，SRAM 密度事实上已基本停止缩放：尽管跨越了一个完整制程节点、晶体管数增长 54%，WSE-3 的 SRAM 只比 WSE-2 多 10%。逻辑仍在缩小；六晶体管 SRAM 单元并没有。该架构最稀缺的资源，正是下一代制程节点不再能带来的那一项。

### Weight Streaming

在晶圆上训练，颠倒了其他人习以为常的流向：在 GPU 或 TPU 上，权重常驻，激活流过；而在 WSE 上，激活常驻，权重流过。主权重驻留在 MemoryX，这是一台位于集群旁边的 DRAM 与闪存一体机。按层推进，权重跨晶圆流动，触发对驻留在 SRAM 中的激活进行乘加，然后离开；反向传播时梯度流出，而优化器步骤在 MemoryX 内的 CPU 上运行（权重更新是 O(parameters) 的逐元素工作，没有复用，因此 CPU 级计算即可跟上）。晶圆从不存储权重，“哪怕是临时也不存储”（Cerebras 原话）。模型规模受制于 MemoryX，而非 44 GB；44 GB 约束的是激活与 batch。

这带来的是编程模型的变革。一片晶圆即可容纳一层完整的激活，因此无需张量并行、无需流水并行、无需 FSDP 切分：一个 70B 模型被写成一台设备的程序，而多系统扩展则通过 SwarmX 进行纯数据并行，这是一棵广播/归约树，将同一条权重流扇出到 N 片晶圆，并在回程中汇总它们的梯度。主宰 GPU 训练的并行策略表格，根本没有 Cerebras 这一页。

代价则体现在规模上，并由市场的偏好所揭示。规格表标称 2,048 台 CS-3；迄今披露过的最大集群是 64 台（Condor Galaxy 3）。在该平台上披露过的最大“从零训练”模型是由核心客户 G42 在嵌入 Cerebras 工程师的协助下完成的 Jais 2，规模为 70B 参数、2.6T token。自 CS-1 推出七年以来，没有任何人训练出超过 70B 的模型。而 GPU 实验室习惯性公开、通常为 35–45% 的 MFU（利用率），在任何 Cerebras 任务上都从未被披露。

### 数值

数值体系一句话即可概括：FP16 与 BF16（FP32 累加），再加上（自 WSE-3 起）一条 16 宽 8 位整数路径，Hot Chips 披露将其标为定点。无 FP8、无 FP4、无 microscaling。其他厂商每代都将精度减半，并用分块缩放把精度买回来；Cerebras 仍以 16 位进行计算，并将其作为质量差异化卖点（“the original 16-bit weights”）。张力显而易见：SRAM 容量是该架构最紧缺的资源，8 位权重可将模型所需晶圆数减半。16 位唯一是否出于数值信念，还是数据通路路线图上的空白，尚无定论；没有任何一份 Cerebras 的一手资料显示晶圆上存在 floating-point 8。

下注
下注 1：不要切割晶圆。裸片边界是行业其余部分所缴的税：SerDes、中介层、HBM 堆栈、电缆、交换机。用金属把 84 个掩模场缝合，竞争系统中带宽最高的边界在这里根本不存在。
下注 2：SRAM 是唯一的内存。以业界最陡峭的比例，用容量换带宽：44 GB，晶圆内聚合 21 PB/s。让机器本身达到平衡，而不是把不平衡藏在层级结构后面。
下注 3：数据流核心，无矩阵单元。900,000 个由 wavelet 抵达触发的微小核心，矩阵乘法由广播、FMAC 与网格归约“拼装”而成：跳过零是天然免费的，而非一种特殊模式。
下注 4：权重动，激活留。Weight streaming 将模型规模（MemoryX）与晶圆内存（44 GB）解耦，并把集群扩展折叠为纯数据并行。
下注 5：卖延迟，不卖吞吐。晶圆以比任何基于 HBM 的系统更快的速度，在每个 token 上重读整个模型；按高端产品对这份速度定价，而非在每 token 成本上竞争。

## 扩展

纵向扩展 与 横向扩展 在这里意味着不同的事情。NVIDIA 的纵向扩展难题（让 72 个封装表现为一台设备）在 WSE 上由光刻直接解决：一致性域从晶圆厂以一整块的形式出货。剩下的，全是晶圆边界之外的事情，而没有其他机器会像它这样如此早、如此猛烈地触及自己的边界。

### 纵向扩展
晶圆本体。900,000 个核心置于一张 2D 网格上：32 位链路、单周期跳转、在 24 个 color 上静态路由、原生广播、214 Pbit/s 的织构聚合带宽。受 300 mm 晶圆尺寸所限，固定为 46,225 mm²。

### 横向扩展
直接是以太网：每台系统 12×100 GbE（1.2 Tb/s）。训练通过 SwarmX 扩展（基于 RoCE 的数据并行广播/归约）；推理在层边界上跨系统切分模型，采用流水并行。

### 纵向扩展

晶圆内部织构没有 SerDes、没有电缆、没有收发器，也没有每条链路的边际成本：路由由编译完成，每一跳都是一个周期，广播是原生织构原语而非交换机特性。NVL72 需要 5,184 根铜缆和一整托盘 NVSwitch ASIC 让 72 块 GPU 获得 130 TB/s 的全互连；WSE 的等效域则是一个单一的光刻对象。问题在于，这个域的大小是常数。NVIDIA 的纵向扩展域每代都在增长（三年间从 NVL72 到 NVL576）；晶圆自 2019 年以来一直是 46,225 mm²，且将保持如此。300 mm 是业界运行的最大晶圆（450 mm 的转型在十年前已夭折），因此 Cerebras 的纵向扩展路线图只能来自下一节点的密度提升：没有更多的面积可拿。

### 横向扩展

训练的横向扩展是 SwarmX，而且它只做一件事：复制。将权重流广播到 N 片晶圆，在回程上归约它们的梯度；batch 随系统数量增长，模型规模不变。标称上限 2,048 台系统（“256 exaFLOPS”，稀疏）尚未落地；64 台已落地。

推理则完全放弃 weight streaming；算术账本是致命的。以 ~150 GB/s 的通道为每个解码 token 从 MemoryX 流 70B 模型的 140 GB，会带来约一秒每 token 的代价。因此推理将权重停驻于 SRAM，并在层边界上跨晶圆切分模型：Llama 70B 在“少至四台” CS-3 上运行，经以太网进行流水并行，每增加一片晶圆就贡献 44 GB 的“权重 + KV”容量与 23 kW 的负载。

速度是真实且经独立验证的。Artificial Analysis 在 2024 年 8 月的发布时测得 Llama 3.1 8B 为 1,850 tokens/s，70B 为 446，Llama 405B 为 969（首 token 延迟 240 ms），2025 年 Llama 4 Maverick 为 2,522，约为当时已公布最佳 Blackwell 数字的 ~2.4×。厂商引用的峰值更高（70B 配合推测解码达 2,100；GPT-OSS-120B 达 3,000，而独立在线测量更接近 2,000）。在单用户解码速度上，没有 GPU 提供商能接近。

经济性是锋利的边缘。每片晶圆 44 GB 意味着前沿规模模型要消耗整片舰队：SemiAnalysis 估算，1.6T 参数量级的模型需 ~24 台 CS-3，而这类模型能装进寥寥几个 GPU 机架；每台系统的物料成本约 ~$450k，标价约 $2–3M（官方从未披露）。在解码期间，晶圆巨大的 FLOPs 大多闲置；Cerebras 拒绝披露 batch 大小，也从未公布过每系统吞吐。相同开源模型的每 token API 定价大约是基于 GPU 提供商的 3–5×，而 Llama 405B 已从 API 中悄然下线，SemiAnalysis 的解读是其服务经济性未能过关。固定的 SRAM 也给上下文定价：KV cache 与权重共用同一片 44 GB，因此长上下文会侵占容量并迫使每副本需要更多系统；该 API 上限为 131K tokens，而前沿提供商已能提供 256K–1M。MoE 也能被服务（Qwen3-235B 约 ~1,500 tokens/s，厂商引用），但它是这种形态的最坏情况：巨大的参数占用，一次只触达少数专家，且驻留在最昂贵的内存中。

市场对此定价诚实。Mistral 的 Le Chat（~1,100 tokens/s）、Perplexity Sonar 与 Meta 的 Llama API 都为延迟付费；在 2026 年 1 月，OpenAI 签下了 750 MW 的 CS-3 容量，持续到 2028 年，签约时报道超过 $10B，随后增长到超过 $20B，这是 wafer-scale 有史以来收到的最大背书。首个在该容量上交付的旗舰是 GPT-5.6 Sol，于 2026 年 7 月发布，标称 750 tokens/s。

## 软件

该栈像 TPU 一样以编译器为驱动，但通过一个更窄的孔径：Cerebras 的编译器是一个内核匹配器，而不是通用代码生成器。cerebras.pytorch 通过惰性张量将训练步骤追踪到 Torch-MLIR 和图 IR，然后将子图与手写内核库进行匹配，对于没有匹配的算子回退到较慢的自动生成内核。按 GPU 标准记录下来的约束非常严苛：仅静态图，不支持动态形状，不支持数据依赖的控制流，不支持步骤中途的即时张量访问，并且 PyTorch 版本被锁在上游之后。最佳的独立实践者报告（SURF，荷兰国家计算中心）指出存在不受支持的层类型，并且没有将标准 PyTorch 代码 1:1 移植的路径。

而且没有内核逃逸通道。CUDA 对新注意力变体的回答是编写一个内核；TPU 的回答是 Pallas；ROCm 的回答是 Triton。Cerebras ML 栈完全没有用户内核路径：当匹配器严重失配时，修复方法是由 Cerebras 工程师来完成。一个单独的 SDK 语言 CSL 暴露了裸机（tasks、wavelets、colors），并产生了显著的 HPC 结果（TotalEnergies 的 stencil 代码在 ~228× A100，48 个 CS-2 的 Gordon Bell 入围），但它是一个独立的世界，与 PyTorch 流无连接。平台上的每个旗舰模型（Jais、BTLM、Med42）都是与嵌入的 Cerebras 员工共同开发的。

这里存在一种奇特的免疫性。FlashAttention，GPU 时代决定性的内核谱系，是通过内存层次结构对注意力进行平铺的方案，而 WSE 没有层次结构可供平铺：花费 AMD 多年移植滞后的那类优化根本不适用。但这种免疫性和贫乏性是同一个事实。叠加在 CUDA 上的第三方内核生态在这里没有附着点；平台历史上的每一次内核改进都有且只有一个作者。

那片晶圆留在何处？它诚实地占有一个真正的利基：经过独立验证的 batch-one decode 速度，由将延迟定价置于成本之上的客户付费。在利基周围是硬墙：3–5× 的 per-token 定价，七年内的 70B 训练上限，收入在 2025 年仍约有 ~86% 集中于两个与阿布扎比相关的客户（根据其 2026 年 5 月 IPO 附近的 S-1 报告），以及一种最稀缺的资源，SRAM 密度，在模型继续增长时停止了缩放。Hennessy 和 Patterson 曾承诺一次寒武纪大爆发；WSE 是其最极端的体型，它决定内存墙（memory wall）是一个封装选择，并在 46,225 mm² 的硅片上花费空间以拒绝去做妥协。

## AWS Trainium

Annapurna Labs，构建 AWS Nitro 卡和 Graviton CPU 的团队，作为快速跟随者打造了 Trainium。计算核心采用了 TPU 验证过的剧本（一个 128×128 的 weight-stationary 脉动阵列、软件管理的暂存存储器、整程序编译），并直接共享了 Google 的 XLA 编译器。纵向扩展（scale-out）互连是已承载 AWS 其余部分的 Nitro 卸载网络。真正属于 Amazon 的部分狭窄且深思熟虑：专用的集合通信硅（collective-communication silicon）钉在借用的核心上，以及将芯片定价为只需在 AWS 内击败 NVIDIA 的纵向整合。

### 谱系
2015  
Annapurna Labs  
Amazon 以约 $350M 收购这家以色列芯片创业公司；它成为 AWS 的内部硅团队。  
2018  
Graviton + Nitro  
Arm 服务器 CPU 和 DPU 卸载网络。  
2019  
InferentiaNeuronCore-v1  
首款 AWS ML 芯片，仅推理：4 NeuronCores、8 GB DRAM、三台固定引擎。  
2022  
Trainium1Trn1, v2  
首款训练芯片：2 NeuronCore-v2、一个可编程 GPSIMD engine、32 GB HBM、NeuronLink 2D torus。  
2023  
Inferentia2v2  
与 Trn1 共享 NeuronCore-v2：推理和训练谱系在一个微架构上汇合。  
2024  
Trainium2Trn2, v3  
8 NeuronCore-v3，首个真正的 FP8 加速，96 GB HBM3；64 芯片 UltraServer。为 Project Rainier 提供算力。  
2025  
Trainium3Trn3, v4  
首款 3 nm AWS 芯片（TSMC N3P）；OCP MXFP8/MXFP4；NeuronSwitch 全互联（all-to-all fabric）替代了 torus。144 芯片 UltraServer。

### 架构

另一则闭环硅（captive-silicon）的故事属于 Google，而 Trainium 最好被理解为在另一个云内部重建的 TPU 论点。其下注的基础相同（一个 weight-stationary 的脉动阵列，由软件管理的 SRAM 供给，编译器提前调度，无缓存且无线程调度器），但单元的组装方式不同。一个 Trainium 芯片携带少量 NeuronCores（Trn1 为 2 个，Trn2 和 Trn3 为 8 个），每个 NeuronCore 并不是一个单一整体的 matmul 引擎，而是若干解耦的、专用的引擎簇：一个 Tensor Engine（128×128 的脉动阵列）、一个用于归约的 Vector Engine、一个用于逐点计算的 Scalar Engine，以及一个由八个 512-bit 向量处理器组成的可编程 GPSIMD Engine，用于任何不适合其他三者的任务。它们周围是数据搬运器：128 个 DMA 引擎、一个序列化传输的 Sync Engine，以及（自 Trn2 起）用于集合操作的专用 CC-Cores。没有线程束和波前；这些引擎作为静态调度的数据流流水线运行，承重的设计决策关于的是围绕脉动阵列的部分，而不是数组本身。

#### 计算

Tensor Engine 占有 matmul 的 FLOPs；其他三者负责所有其余工作。它是一个 128×128 的处理单元网格（16,384 MACs），以 weight-stationary 方式运行：一个操作数块被加载到数组中并保持原位（LoadStationary），另一个在其间流动（MultiplyMoving），部分和（partial sums）落在 PSUM 上，PSUM 是一个小型的 accumulator SRAM，引擎可以对其进行读-加-写，因此沿着 𝐾 K 轴比 128 更长的收缩可以分折地完成。这是每个 matmul 加速器核心处的相同 𝐷 = 𝐴⋅𝐵 + 𝐶 的分块 MMA；但当 NVIDIA 将其包裹在线程束层级中并由 Google 以 VLIW 指令束发出时，Trainium 将其作为针对命名暂存存储器的一对显式指令来暴露。

该数组在三代中物理尺寸均固定为 128×128；变化在于每个单元可处理多少乘积。Trn1 的 NeuronCore-v2 以 BF16/FP16 运行并使用 FP32 累加，并仅在 BF16 速率下提供 FP8（无加速）。Trn2 的 v3 将 FP8 双泵（double-pumps）以呈现有效的 256×128 数组，是首个在 8-bit 上有真正 2× 的 Trainium。Trn3 的 v4 将微缩标量（microscaling）操作数打包以在 4× BF16 速率下呈现有效 512×128。物理乘加单元的计数从未改变；数据通路只是向它们送入更窄的数值。

其他三台引擎是保持数组繁忙的关键。Vector Engine 处理跨元素归约（layernorm、softmax、pooling）；Scalar Engine 处理一入一出的逐点算子（activations、GELU）；GPSIMD Engine，八个完全可编程的向量处理器，运行 C 语言，用于承载任何无法映射到上述专用引擎的任务。一个良好编译的步长会重叠所有四者：Tensor Engine 持续计算一个 matmul，而 Vector Engine 在运行前一个 tile 的 softmax，DMA 引擎将下一个 tile 预排好，这与 TPU 和 GPU 的注意力内核高效的生产者/消费者重叠相同，只是在此以独立的物理引擎而不是独立的线程束或 VLIW 槽位来表达。当一个层干净地分解到这四类引擎上时，设计回报丰厚；在边界处付出代价：不适配任何专用引擎的算子落到可编程的 GPSIMD 路径，较慢，并且这是最可能成为新颖架构瓶颈的机器部分。这是每个非 GPU 加速器携带的长尾成本的 Trainium 版本。

#### 内存

内存层次是将计算哲学应用到存储上：三层，全部由软件管理，硬件上没有任何缓存。AWS 自己的文档作了对比，指出与 CPU 或 GPU 不同，NeuronCore 没有缓存，并且“所有内存移动在程序中是显式的。”片外是 HBM（Trn1 为 32 GB，Trn2 为 96 GB HBM3，Trn3 为 144 GB HBM3e）。片上，最靠近引擎的是 State Buffer (SBUF)：主暂存存储器，带宽约为 HBM 的 20 倍，分为 128 个分区，按 NeuronCore 大小为 24 MiB（v2）、28 MiB（v3）、32 MiB（v4）。数组与 SBUF 之间是 PSUM，一个 2 MiB 的 accumulator 专用于 matmul 输出。数据移动路径为 HBM → SBUF → Tensor Engine → PSUM → SBUF，每一步由编译器发出；没有硬件预取或硬件驱逐。

这正是 Google 的 VMEM 赌注，一个显式暂存存储器，编译器必须完美调度，不能依赖缓存来掩盖错误，与 NVIDIA 的硬件管理的 L2 和 L1 正好相反。Trainium 继承了随之而来的天花板和脆弱性：当调度正确时，引擎永不停顿；当调度错误时没有后备路径。该设计对比适度的峰值 FLOPs 提供了慷慨的 HBM 预算，因此按单位计算，Trainium 拥有比可比较的 NVIDIA 芯片更多的内存。但在绝对容量上，它落后：Trn2 的 96 GB 低于 H200 和 B200，Trn3 的 144 GB（2025）低于其对位出货的 192 GB B200 和 288 GB B300。因此 AWS 在论证服务大型模型的经济性时真正拉动的杠杆不是内存领先，而是价格：每单位计算和 HBM 的成本，在其自行构建并出租的硅上。

#### 数值

Trainium 遵循与其他人相同的精度减半曲线（FP32 → BF16 → FP8 → FP4），并有两个 Trainium 特有的皱褶。第一个是可配置的 FP8：与 Hopper 那样固定 E4M3 和 E5M2 不同，Tensor Engine 接受可调的 exponent bias，并支持 E5M2、E4M3 和 E3M4，让编译器可以对每个 tensor 在范围与精度之间权衡。第二个是 Trn3 的 FP4 不带来额外吞吐：OCP MXFP4 操作数在到达数组之前被上转换为 MXFP8，因此 FP4 以 FP8 速率运行，仅节省内存和带宽，而非计算。两代都依赖行业的准确性恢复技巧：Trn3 的微缩标量块指数（microscaling block exponents），以及每代的硬件随机舍入。最不可信的一个数字是稀疏峰值：AWS 宣传 4× 的 FP8 数字，但其自身架构页面将其标为相对于密集 FP8 的 2×（4× 是相对密集 BF16），所以市场化的加速与数据通路并不完全一致。

#### 硅上的集合通信

在 GPU 上没有干净类比的模块是集合通信核心（collective-communication core）。分布式训练和推理在墙钟时间上有很大一部分花在集合通信上：每个梯度步都是一次 all-reduce，每个 MoE 层都是一次 all-to-all。在 GPU 上，这些集合通信作为 NCCL 内核在做数学运算的相同 SMs 上运行，因此通信和计算争夺相同的硅，重叠必须在软件中赢得。Trainium 将该功能剥离为专用硬件：每个 Trn2 芯片有 20 个 CC-Cores，直接连到 NeuronLink 端口，执行 all-reduce、all-gather、reduce-scatter 和 all-to-all，同时 Tensor 和 Vector 引擎继续运行。这与 Google 的 SparseCore 和 Cerebras 的 off-core zero filter 所做的动作相同：找到一个主引擎形状不适合的工作负载，在其旁边花一点面积做一个专用块，而不是从核心窃取周期。通信成为芯片并行执行的事情，而不是它暂停去做的事情。

#### 赌注
赌注 1：云是产品，芯片是组件。Annapurna 将芯片、服务器、机架、Nitro 网络和云 API 作为一个栈设计，因此 Trainium 只需在 AWS 内部在价格-性能上获胜，而无需在商用硅的规格表上取胜。  
赌注 2：借用计算论点，不必重造它。一个 128×128 的 weight-stationary 阵列、软件管理的 SBUF/PSUM 暂存存储器和整程序编译是 TPU 的下注，被复用到连共享 Google 的 OpenXLA。节省下来的努力投入到网络和机架上。  
赌注 3：集合通信属于硅中。专用 CC-Cores 在硬件中与计算叠加 all-reduce 和 all-to-all，而不是以窃取 matmul 单元 FLOPs 的内核形式运行。  
赌注 4：重用云自有的网络。纵向扩展使用 EFA 和 SRD 传输：相同的 Nitro 卸载、分包路径的 RDMA，已经运行 AWS 的其余部分。没有 InfiniBand。  
赌注 5：将拓扑移动到工作负载。Trn1 和 Trn2 复制了 TPU 的 torus；Trn3 的 NeuronSwitch 用一个交换式的 all-to-all fabric 取代它，因为 MoE 流量超出了最近邻。老实说，这是在遵循剧本：先是 Google 的，现在是 NVIDIA 的。

### 扩展

Trainium 的扩展继承了它与 AWS 其余部分的分离：一个紧耦合的 NeuronLink 域用于必须作为一个整体行动的芯片，以及云的通用 EFA fabric 用于其之外的所有事情。纵向扩展域不是像 NVLink 那样的缓存一致性共享内存；AWS 将 UltraServer 宣传为一个池化的多 TB 内存，但其底层是基于点对点链路的消息传递，更贴近 TPU 的 ICI 而非 NVSwitch 交叉开关。

#### 纵向扩展
NeuronLink 将芯片绑定成一个 UltraServer。在 Trn2 之前拓扑是一个 torus（每实例 16 芯片，4×4 的 2D torus，UltraServer 在 4×4×4 的 3D torus 中为 64 芯片）；Trn3 用 NeuronSwitch 的 all-to-all fabric 取代了它。消息传递，而非一致性加载/存储。  
#### 横向扩展
Elastic Fabric Adapter 通过以太网卸载到 Nitro。SRD 传输将每个流喷撒在许多路径上并可靠地但乱序地传递；UltraClusters 在 10p10u 网络上可达数十万芯片。

#### 纵向扩展

NeuronLink 是 Trainium 的芯片间互连（chip-to-chip fabric），在 NVIDIA 中的角色由 NVLink 承担，在 TPU 中由 ICI 承担。通过 Trn2 它将芯片连成 torus，正是 TPU 的选择：单个 trn2 实例为 16 芯片的 4×4 2D torus，每芯片约 ~1.28 TB/s，Trn2 UltraServer 将四个实例合并为 4×4×4 的 64 芯片，作为一个纵向扩展域展现 83 dense FP8 PetaFLOPS 和约 ~6 TB 的 HBM。第三个 torus 轴被刻意做薄（实例间环路每芯片运行约 ~256 GB/s，而实例内部为 1.28 TB/s），这是 torus 的典型权衡：廉价的布线和巨大的最近邻带宽，以直径上多跳为代价。AWS 将 64 芯片 UltraServer 与 NVIDIA 的 72-GPU NVL72 相比；聚合计算处于同一等级，但 torus 不是交叉开关，并且在非最近邻流量上两者表现截然不同。

正是这种权衡促使 Trn3 放弃 torus。NeuronSwitch-v1 是一个交换式的 all-to-all fabric，大致将片间带宽翻倍，更重要的是平坦化了直径，使得任何芯片通过一个交换跳即可到达另一个。Trn3 UltraServer 可扩展到 144 芯片，达到 362 dense FP8 PetaFLOPS 和 20.7 TB 的 HBM3e。动机与推动 Google 采用高基数（high-radix）拓扑以用于 MoE 推理相同：专家路由是 all-to-all，对 torus 来说是最坏情况，而交换机能将最长跳对变成单一穿越。Trainium 的互连路线图是行业的压缩重演：在工作负载为最近邻时采用 torus，当不是最近邻时切换到交叉开关。

#### 横向扩展

横向扩展并非定制；它是 AWS 已运行的相同 fabric。每个 Trainium 实例将一个 Elastic Fabric Adapter NIC 带入数据中心网络（Trn2 实例为 3.2 Tbps），传输为 SRD（Scalable Reliable Datagram），卸载到 Nitro 卡而不是在加速器上运行。SRD 是 AWS 对 RDMA 的全新设计：不是像 RoCE 或 InfiniBand 的单一有序流，而是将每条消息喷撒到最多 64 条并行路径上并可靠地但乱序地交付，将重组上推到集合库，从而规避单一路径拥塞造成的队头阻塞。它是 AWS 为其云通用地构建的传输，被复用于加速器 fabric。

层级顶部是由 10p10u 网络（AWS 对跨数据中心 ~10 petabits/s 带宽且延迟低于 10 微秒的简称）拼接在一起的 UltraCluster，可扩展到数十万芯片。一个证明点是 Project Rainier：约半百万个 Trainium2 芯片在多个美国数据中心上线，为 Anthropic 在 2025 年末提供服务；到 2026 年初，Claude 在超过一百万芯片上运行，这是任何外部实验室对非 NVIDIA 训练平台的最大承诺。它之所以存在是因为端到端的经济学闭合。AWS 声称 Trainium2 相对于其 Hopper 级 GPU 实例提供 30–40% 更好的价格-性能（AWS 的数字，相对于上一代 NVIDIA 而非 Blackwell 测量），并且因为 Amazon 拥有从 Nitro 卡到 API 的每一层，这个差额由 Amazon 来设定。

### 软件

Trainium 的软件明确地显示出借用：Neuron SDK 是一个以编译器为先的栈，建立在与 TPU 相同的 OpenXLA 基础之上。Neuron 编译器（neuronx-cc）接受 XLA HLO 图并将其下放为一个 NEFF 二进制，Neuron 运行时将其加载到 NeuronCores；前端 IR 来自 Google，Google 自己的 OpenXLA 公告将 Trainium 列为与 TPU 并列的一等 PJRT 设备。torch-neuronx 通过 PyTorch/XLA 的 LazyTensor 跟踪 PyTorch（记录 ops，在步骤边界编译图），jax-neuronx 通过 StableHLO 下放 JAX。在从以内核为驱动的 CUDA 到以整程序 XLA 为另一极的谱线上，Trainium 几乎位于 TPU 的顶端：编译器即系统，并且大体上是同一个编译器。

分歧处在于逃逸舱口。XLA 本身不能总是为新颖的注意力变体或融合的 MoE 分发合成最优解，因此 Neuron 提供 NKI（Neuron Kernel Interface），一种 Python 层面、tile 级别的内核语言，直接暴露四个引擎和 SBUF/PSUM 暂存存储器。它是 Trainium 的 Pallas（或其 Triton）：同样的 tile DSL 思想，当内核的胜利在于调度而不是代数时，它下降到整程序编译器之下。在其下面，一个集合通信库将 all-reduce 和 all-to-all 映射到 CC-Cores 和 NeuronLink 拓扑（NCCL 的类比），而 NeuronX Distributed 提供分片训练层。

与 CUDA（甚至 TPU 的栈）的差距是成熟度，而非设计。NKI、JAX 路径和分布式库在 2024 年末仍处于 beta；移植的模型只能在 AWS 上运行，且没有跨厂商的回退；vLLM 后端落后于上游项目。最明显的证据是锚定租户的工作方式：Anthropic 不仅仅通过 PyTorch 针对 Trainium，它与 Annapurna 深度嵌入，编写自己的低级 NKI 内核，并将修复上游到 Neuron 栈。Trainium 在前沿是可投入生产的，但在前沿它是协同工程的，而非交钥匙：编译器是继承而优秀的，但周边生态年轻。

## Groq LPU

Groq LPU 是一台确定性机器。其他所有芯片都花硅来容忍不确定性：缓存以隐藏内存延迟，调度器以填充停顿，仲裁器以解析它无法预测的争用。LPU 将这些都删除。剥离每一个反应性组件（无缓存、无分支预测、无仲裁器、无重排序缓冲，甚至没有片上交叉开关），并将整个调度问题交给编译器，编译器将每条指令和每个字节精确放置到具体周期。剩下的是一块在运行前其延迟就已知的芯片。TPU 将调度移入编译器但保留了 HBM 和动态网络，而 Groq 则移除了最后的非确定性来源：内存全部为 SRAM，网络也被调度，因此数百个芯片作为一个时钟精确的程序运行。

### 谱系
2016  
创立  
Jonathan Ross（曾以 20% 项目启动 Google 的 TPU）离开以构建一个确定性的推理芯片。  
2020  
TSPGroqChip 1  
首个硅（ISCA 2020，Think Fast）：单个功能切片核心，14 nm，无 HBM，无缓存。  
2022  
多处理器  
ISCA 2022：软件调度网络通过已编译的蜻蜓拓扑将确定性调度扩展到数千芯片。  
2023  
Samsung 4 nm  
第二代 LPU 在 Samsung SF4X 上宣布；它未曾出货（据报道 tapeout 失败）。  
2024  
LPU / GroqCloud  
TSP 更名为 Language Processing Unit；公司从卖卡转向卖 token，按记录解码速度销售。  
2025  
NVIDIA 许可  
NVIDIA 获取 LPU 技术的非独占许可并雇佣 Ross 及大部分团队。  
2026  
NVIDIA Groq 3 LPULP30 / LPX  
该技术在 GTC 2026 以延迟协处理器形式在 Rubin NVL72 旁重新出现，通过 Attention-FFN 解耦（disaggregation）。

### 架构

该领域其余部分由复制的核心构建：在芯片上平铺一个 SM、TensorCore、CU 或数据流核心，并将工作外放到这些复制体。LPU 则反其道而行。它取一个常规核心并将其拆开：指令控制、向量 ALU、矩阵单元、内存和网络各自成为一个功能切片，一个全高度的相同硬件列，这些列并排立在芯片上。每列在纵向上同质，芯片横向上异质。数据不在寄存器文件中等待被发到某个单元；它像装配线上的零件那样横向流经切片，东西向，每周期一次寄存器跳转，同时 VLIW 指令自控制切片向北发出与之相遇。数据通路中的任何东西都不作出反应：编译器知道每个操作数在每个周期的位置，而硬件只是走时钟。流式传输就是其身份：这个设计以 Tensor Streaming Processor (TSP) 为名诞生，并在 2024 年更名为 Language Processing Unit（LPU）。

纵轴是 SIMD 宽度。芯片高度为 320 条通道，组织为 20 个每个包含 16 条通道的超通道（第 21 个为备用，为良率熔断并对软件不可见），每个 slice 同时对所有 320 条通道起作用。横轴是时间。每条通道有 64 个逻辑流寄存器，32 个向东流动，32 个向西流动，在每个时钟周期每个流向其方向前进一个 slice，直到被消耗或从晶片边缘掉落。一个 slice 从经过的流中读取操作数，进行计算，并将结果写回到面向下一个 slice 的流中。晶片绕着中央向量单元在两个半球中镜像摆放，因此一次产生的一个值可以被任一侧的 slices 消费。

# 计算

LPU 保持与其它设计相同的劳动分工，矩阵工作在专用单元上，其它工作在向量引擎上，但将两者都安排为流中的 slices。矩阵路径是 MXM：四个独立的 320×320 乘加平面（每个半球两个），共有 409,600 个乘法器，接受 INT8 或 FP16 操作数进入 INT32 或 FP32 累加器。权重在一个平面上安装（在不到 40 个周期内全部装入），随后激活值流过并进行累加。在 900 MHz 时，这大约是 750 INT8 TOPS 和 188 FP16 TFLOPS，且不同寻常的是，这个数字没有稀疏性星号：TSP 完全拒绝跳过零，因为基于数据的跳过会使执行时间依赖于数据，而确定性是它不会用来交换的唯一属性。

向量路径是位于芯片中心的 VXM：每条通道有 16 个 ALU，排列为 4×4 网格，共 5,120 个 32-bit ALU，运行激活、归一化、量化和残差相加。由于计算是空间化的，而不是被发配到共享单元，一个操作数可以在连续的周期内穿过一连串的 VXM ALU 并直接进入 MXM 平面而不触及内存：GPU 内核手工构建的操作融合在这里只是 slices 的物理顺序。第三种 slice 类型，SXM，处理直线流无法表达的移动：通道移位、320 通道置换、转置以及芯片到芯片的链路都在此实现，所以跨通道重排数据是一级操作，而不是通过 SRAM 的往返。

# 内存

没有 HBM、没有 DRAM，也没有缓存。片上是 MEM slices：88 个 slice（每半球 44 个），共 230 MB SRAM，从任一计算 slice 访问每字节单周期，汇总约 ~80 TB/s。这就是整个层级：一层，扁平，软件寻址，没有会引入可变延迟访问的逐出、预取或一致性机制。

其结果是架构的决定性约束。230 MB 不能容纳一个模型。Llama-2 70B 以 FP16 为 140 GB，因此必须在数百个芯片上分片，其权重分布在一个机架或更多的聚合 SRAM 上：部署配置约为 ~576 个 LPU。GPU 将模型停放在少数封装的 HBM 中并将标记流过它，而 LPU 将模型分布在集群的 SRAM 中并将标记流经集群。芯片数量由容量决定，而非计算：权重必须能够适配。这与 Cerebras 做出的相同权衡（仅 SRAM，无 HBM）从相反方向达到：Cerebras 保持一个巨大的晶片并在晶圆上放弃容量；Groq 保持常规大小的晶片并放弃在单片上容纳整个模型的可能性。

# 数值表示

数值表示是未走之路。此处的每个其它供应商在每一代中都在减半精度，FP16 → FP8 → FP4，并通过分块缩放来换回精度。TSP 停留在 FP16 和 INT8，并使用 FP32 累加，从未在硅上发布 FP8 或 FP4。它的一个数值想法是 TruePoint：一个 320 元点积在带有 FP32 累加的一次合并舍入步骤中完成，因此 FP16 乘法器阵列在约约束减缩上接近 FP32 的准确度（Groq 报告相对于 FP32 基线约 ~0.05% 的最大误差）。

16-bit 是否出于信念还是由于数据路径未得到其低精度刷新与第二代芯片从未出货这一事实难以分开。SRAM 容量是该架构最稀缺的资源，而 8-bit 权重将使模型所需芯片数减半；一个如此受容量约束的机器完全有理由需要 FP8 却在硅上未得到它。这与笼罩在 Cerebras 的 16-bit 唯一路径之上的未决问题相同，和同样的张力：最缺乏容量的厂商以最宽精度进行计算。

# 确定性

每个其它加速器都隐藏延迟；LPU 暴露延迟。ISA 带有每条指令的执行延迟，数据路径按构造为固定延迟，因此编译器提前计算每个结果出现的确切周期。硬件中没有任何东西可以扰乱该调度：没有可能丢失的缓存、没有会造成阻塞的仲裁器、没有错误预测的分支、没有需要展开的推测。Groq 自己的测量就是证明：24,240 次 BERT-Large 运行返回时间落在约 ~75 µs 带宽内，编译器预测的延迟与测量值相差在 2% 以内。

这是 TPU 的本能（将调度转移到编译器，删除那些试图二次猜测它的硬件）更进一步的一步。TPU 编译器为一颗芯片调度；LPU 编译器为一个系统调度，因为确定性也跨网络成立。而这与 Cerebras 恰好相反，后者的核心是数据流，任意操作数到达时就触发：WSE 对数据做出反应，LPU 则按时钟对其进行定时。两台机器都删除了调度器；一台以到达替代，另一台以时钟替代。

# 押注
押注 1：确定性超过容错。删除每个反应式组件（缓存、仲裁器、预测器、乱序缓冲）并让编译器掌控每一个周期。  
押注 2：空间功能切片。将核心解构为切片并将操作数通过它们流动，使融合成为楼层平面，并且数据重用存在于连线中，而非寄存器文件的舞蹈。  
押注 3：SRAM 是唯一的内存。无 HBM，不惜任何容量代价。以单周期、固定延迟访问为代价放弃在芯片上容纳模型的能力，接受模型必须跨越数百个芯片。  
押注 4：也调度网络。让芯片同时作为路由器并在编译时逐周期调度通信，这样千芯片集群就是一个确定性的程序，没有交换机且无拥塞。  
押注 5：出售延迟，而非吞吐量。针对批次 1 下每用户每秒标记优化，这是 GPU 最差的区域，并将该速度作为产品来定价，而不是在每标记成本上竞争。

# 扩展

扩展 LPU 与此处其它任何东西都不同，因为不存在一个单独的纵向扩展结构可供构建：芯片本身已经是一个交换机。每个 LPU 携带最多 16 个芯片间 RealScale 链路（卡上暴露 11 个）并同时充当计算端点和路由器。直接将芯片互相连线，集群就是一个无胶片多处理器：无 NIC、无交换 ASIC、无机架顶交换机。并且因为确定性跨这些链路成立，整个集群运行在一个编译时调度上。

## 纵向扩展

节点：8 个 LPU 通过 RealScale C2C 完全互联，形成一个蜻蜓拓扑组，呈现为单个高基数虚拟路由器。软件调度，无交换机，无一致性。

## 横向扩展

相同的结构，向外扩展。节点的蜻蜓拓扑：每机架 9 个节点（72 芯片，1 个节点为热备），扩展到指定的 10,440 芯片，任意两者之间仍不超过六跳。每跳仍在编译好的、确定性的调度上。

## 纵向扩展

节点由 8 个 LPU 组成，完全互联：每颗芯片的 7 条链路将其连到其它七颗，因此节点中每颗芯片到每颗其它芯片都是一跳。每颗芯片剩余的四条链路（节点内共 32 条）捆绑成 ISCA 论文所称的 32 端口虚拟路由器，作为节点进入更大结构的上联。没有基板交换机也没有一致性地址空间；远程操作数不是被加载，而是被调度到达，由源芯片在编译器选择的周期注入，并由目的地在其到达的周期消费。

## 横向扩展

超出节点范围，节点连成一个蜻蜓拓扑：9 个节点构成一个 72 芯片的机架（第九个为热备，所以 64 个激活），拓扑可扩展到指定的 10,440 芯片，任意两者相距六跳以内。该结构由软件调度：路由和流控转到编译时，该论文的表述是直白的、已调度的，而非路由式的。没有反压也没有动态仲裁，因为编译器已经证明接收端已准备好；链路携带前向纠错而非重传，因为重试会扰乱调度。将一机架独立时钟的芯片保持锁步本身就是一个问题：链路是近同步（plesiochronous），并且该结构通过在一棵生成树上每 256 个周期交换 Hardware-Aligned Counters 来维持全局一致时间，并用周期性的 deskew 指令让每颗芯片回到对齐。Groq 报告的回报是：一个 8 路 all-reduce 在大张量上能匹配 A100/NVSwitch 节点，在小张量上击败它，因为已调度的结构不付出动态握手延迟的代价。

代价写入了内存押注的物理学。一个模型副本不是一台机器，而是一个机架（或八台）：据一项分析，Llama-2 70B 在 ~576 芯片上承载时伴随约 144 个主机 CPU 和 144 TB 的主机内存，与 8-GPU 服务器所需的两颗 CPU 比较。每颗芯片下的晶圆便宜（GlobalFoundries 14 nm，据报道低于 $6k，相对于 H100 级部件约 $16k），但你需要数百片，并且在解码时期其巨大的计算多数处于空闲状态，而 SRAM 在做实际工作。SemiAnalysis 直言不讳：当你针对延迟优化时，LPU 在每标记的物料清单上胜出，但一旦你进行批量处理，它在按每美元吞吐量上大约被 GPU 打败一个数量级。该架构不是在成本上竞争。它在速度上竞争。

# 软件

编程模型是“编译器即机器”的最纯粹表达。没有内核。你把一个来自 PyTorch、TensorFlow 或 ONNX 的模型交给 Groq 编译器；它降低到一组小的张量操作集合并静态调度每条指令、每个流和每次芯片间传输。没有人编写 wgmma 或手动调优一个 tile，因为没有动态硬件可供手工调优。Groq 的演示是在不到十人的团队用四天时间部署 LLaMA，而同一模型在 GPU 上调优需要数月的手工内核工作。围绕编译器的栈（分析器、运行时、GroqFlow 启动路径）小且封闭，GroqFlow 在 2025 年封存，因为公司停止销售卡片并开始出售标记。

这一转向说明了该架构的用途。LPU 在构造上仅用于推理（Ross 的表述是训练是局部博弈而推理是全局博弈），并且在一件事上无可匹敌：单用户解码延迟。独立测量支持此主张，Artificial Analysis 将 Groq 评为开放模型中每秒标记最快的提供者之一。它与其它场景严重不匹配：一个无法适配在一机架 SRAM 中的模型、一个希望用大批量来换取每美元吞吐量的工作负载，或一个静态调度无法表达的动态控制流。MoE 可以被服务，但其基于数据的专家路由与一个希望事先知道一切的编译器显得不太协调，Groq 对如何调和两者公布甚少。

结局是这些技术的买家是 NVIDIA。在 2025 年 12 月 NVIDIA 获得了 LPU 技术的非排他许可并雇佣了 Ross 及大部分团队。这并非一次收购：根据 NVIDIA 自己的 10-K，没有产品、客户合同或股权发生变更，尽管成交时约 $130 亿的支付导致媒体将其称为收购。在 GTC 2026 上该技术以 NVIDIA Groq 3 LPU 的形式重现，一个由 256 个仅含 SRAM 的推理芯片构成的机架并置于 Rubin NVL72 旁并在它们之间拆分 transformer：GPU 运行 attention，LPU 运行 feed-forward 和 MoE 层，Dynamo 协调交接。最确定性的 AI 架构最终成为最可编程架构中的延迟协处理器。与此同时，GroqCloud 仍在原始 14 nm 硅片上提供标记服务。

# 比较

所有算术数据均为在所述精度下的峰值；条目为密集除非供应商未公布依据。内存带宽为显示的原生层级：GPU、TPU 和 Trainium 使用 HBM；Cerebras 和 Groq 使用片上汇聚 SRAM。这些数字不可直接比较。纵向扩展带宽遵循每个供应商的惯例，可能表示每芯片汇总、机架汇总，或真实二分带宽。

每芯片
公司	年份	芯片	加速器内存	内存带宽	旗舰密集 FLOPs	TDP	纵向扩展带宽
	2023	H100 SXM5	80 GB HBM3	3.4 TB/s	1.98 PetaFLOPS FP8	700 W	900 GB/s
2024	H200 SXM	141 GB HBM3e	4.8 TB/s	1.98 PetaFLOPS FP8	700 W	900 GB/s
2024	B200	192 GB HBM3e	8 TB/s	4.5 PetaFLOPS FP8 / 9 PetaFLOPS FP4	1,000 W	1.8 TB/s
2025	B300	288 GB HBM3e	8 TB/s	7.5 PetaFLOPS FP8 / 15 PetaFLOPS FP4	1,400 W	1.8 TB/s
2026	Rubin	288 GB HBM4*	~13 TB/s*	~17 PetaFLOPS FP8* / ~50 PetaFLOPS FP4*	~1,500 W*	3.6 TB/s
2027	Rubin Ultra	1 TB HBM4e*	~32 TB/s*	~33 PetaFLOPS FP8* / ~100 PetaFLOPS FP4*	~1,800 W*	3.6 TB/s
	2023	TPU v5p	95 GB HBM2e	2.8 TB/s	0.46 PetaFLOPS BF16	未披露	1.2 TB/s
2025	TPU Ironwood (v7)	192 GB HBM3e	7.4 TB/s	4.6 PetaFLOPS FP8	未披露	1.2 TB/s
2026	TPU v8t Sunfish	216 GB HBM3e	6.5 TB/s	12.6 PetaFLOPS FP4	未披露	未披露
	2023	MI300X	192 GB HBM3	5.3 TB/s	2.6 PetaFLOPS FP8	750 W	896 GB/s
2024	MI325X	256 GB HBM3e	6.0 TB/s	2.6 PetaFLOPS FP8	1,000 W	896 GB/s
2025	MI355X	288 GB HBM3e	8 TB/s	10 PetaFLOPS FP8 / 20 PetaFLOPS FP4	1,400 W	1,075 GB/s
2026	MI455X	待定	待定	~40 PetaFLOPS FP4*	待定	未披露
	2021	WSE-2	40 GB SRAM（在晶圆上）	20 PB/s（汇总）	7.5 PetaFLOPS FP16	23 kW（系统）	（域=整片晶圆）
2024	WSE-3	44 GB SRAM（在晶圆上）	21 PB/s（汇总）	~15.8 PetaFLOPS FP16*	23 kW（系统）	（域=整片晶圆）
	2022	Trainium1	32 GB HBM2e*	820 GB/s	0.19 PetaFLOPS BF16/FP8	未披露	未披露
2024	Trainium2	96 GB HBM3	2.9 TB/s	1.3 PetaFLOPS FP8	~500 W*	1.28 TB/s
2025	Trainium3	144 GB HBM3e	4.9 TB/s	2.5 PetaFLOPS FP8	未披露	未披露
	2020	GroqChip (1st-gen TSP/LPU)	230 MB SRAM	80 TB/s（片上汇总）	0.188 PetaFLOPS FP16	215 W	330 GB/s（11 链路卡）
2026	NVIDIA Groq 3 LP30	500 MB SRAM	150 TB/s（片上汇总）	~1.2 PetaFLOPS FP8*	未披露	2.5 TB/s

每机架 / pod
公司	年份	系统	芯片数量	汇聚稠密 FLOPs	加速器内存总量	纵向扩展互连带宽	每芯片 NIC	功耗	散热
	2023	HGX H100	8	16 PetaFLOPS FP8	640 GB	7.2 TB/s	400 Gbps (CX-7)	~10 kW	风冷
2024	HGX H200	8	16 PetaFLOPS FP8	1.1 TB	7.2 TB/s	400 Gbps	~10 kW	风冷
2024	GB200 NVL72	72	360 PetaFLOPS FP8 / 720 PetaFLOPS FP4	13.4 TB	130 TB/s	800 Gbps (CX-8)	~120 kW	液冷
2025	GB300 NVL72	72	540 PetaFLOPS FP8 / 1,100 PetaFLOPS FP4	20.7 TB	130 TB/s	800 Gbps	~120 kW	液冷
2026	NVL144	144	~1.2 ExaFLOPS FP8 / ~3.6 ExaFLOPS FP4	~21 TB	~260 TB/s*	1.6 Tbps (CX-9)	~200 kW*	液冷
2027	NVL576 (Kyber)	576	~5 ExaFLOPS FP8 / ~15 ExaFLOPS FP4	~144 TB	n/d	1.6 Tbps	~600 kW*	液冷
	2023	TPU v5p pod	8,960	4.1 ExaFLOPS BF16	852 TB	（3D 环形网）	（ICI = 纵向扩展 + 横向扩展）	n/d	液冷
2025	TPU Ironwood pod	9,216	42.5 ExaFLOPS FP8	1.77 PB	（3D 环形网）	光学 OCS	~10 MW*	液冷
2026	TPU v8t Sunfish pod	9,600	121 ExaFLOPS FP4	~2 PB	（Boardfly）	光学 OCS	n/d	液冷
	2023	MI300X 8-GPU OAM	8	21 PetaFLOPS FP8	1.5 TB	7.2 TB/s	400 Gbps	~10 kW	风冷
2024	MI325X 8-GPU OAM	8	21 PetaFLOPS FP8	2.0 TB	7.2 TB/s	400 Gbps	~12 kW*	风冷
2025	MI355X 8-GPU OAM	8	80 PetaFLOPS FP8 / 160 PetaFLOPS FP4	2.3 TB	8.6 TB/s	400 Gbps	~16 kW*	液冷
2026	Helios (MI455X)	72	1.4 ExaFLOPS FP8 / 2.9 ExaFLOPS FP4	31 TB	260 TB/s	n/d	n/d	液冷
	2024	Condor Galaxy 3	64 晶圆	~1 ExaFLOPS FP16*	2.8 TB SRAM + MemoryX	（以太网树形拓扑）	1.2 Tb/s 以太网	~1.5 MW*	液冷
	2022	Trn1 实例	16	3 PetaFLOPS BF16	512 GB	（2D 环形网）	~50 Gbps (EFA)	n/d	风冷
2024	Trn2 UltraServer	64	83 PetaFLOPS FP8	6.1 TB	（3D 环形网）	200 Gbps (EFAv3)	n/d	风冷
2025	Trn3 UltraServer	144	362 PetaFLOPS FP8	20.7 TB	（NeuronSwitch）	n/d	n/d	液冷
	2022	GroqRack	64 在役（已安装 72）	12 PetaFLOPS FP16	14 GB SRAM	3.2 TB/s 二等分带宽	（RealScale；无每芯片 NIC）	n/d	风冷
2026	NVIDIA Groq 3 LPX	256	315 PetaFLOPS FP8	128 GB SRAM + 12 TB DDR5	n/d（640 TB/s 聚合 C2C）	n/d	n/d	液冷

* 标注表示分析师推导、时代推断或供应商聚合推导的数值；n/d 表示供应商未披露的规格。

# 这说明了什么
每芯片的 FP8 已趋于一致。B200 (4.5 PF)、Ironwood (4.6 PF) 和 MI355X (10 PF) 彼此相距约 ~2×。每芯片的军备竞赛相当接近；机架和 pod 是各架构分歧之处。  
HBM 容量是 AMD 的持续胜利。2023–2025 年间 192 → 256 → 288 GB 每代都与或超过 NVIDIA。NVIDIA 仅在 B300（2025 年晚期）以 288 GB 追平；Rubin Ultra 在 2026 年以每封装 1 TB 重新夺回领先。  
机架级纵向扩展直到 2026 年都是 NVIDIA 的胜利。GB200 / GB300 NVL72 是 2024–2025 年间唯一发货的一致性机架域；AMD 在机箱级别纵向扩展并直到 Helios 才达到机架级。TPU 回避了这个问题：其环形网同时就是机架和集群。  
TPU pod 在芯片数量上远超任何 NVIDIA 机架。Ironwood pod = 9,216 芯片以达 42.5 ExaFLOPS FP8；NVL576 = 576 GPUs 约 ~5 ExaFLOPS FP8。TPU 的“每芯片固定率 × 大型 pod”配方在系统级上产出更多的汇聚计算，但代价是每芯片带宽。  
每芯片功耗上升迅速。700 W (Hopper) → 1,000 W (Blackwell, MI325X) → 1,400 W (B300, MI355X) → ~1,800 W (Rubin Ultra, 分析师)。液冷在 ~1,000 W 以上变为必须；空气冷却在 Hopper 后几乎结束。  
横向扩展 NIC 带宽随 NVIDIA 每代翻倍。400 Gbps (CX-7, Hopper) → 800 Gbps (CX-8, Blackwell) → 1.6 Tbps (CX-9, Rubin)。AMD 落后一代（Pollara 400 → Vulcano 800），反映 Pensando 的较小部署基础和较晚整合。  
Cerebras 打破了表格的轴。完全无 HBM：片上 SRAM 为 44 GB，汇聚为 21 PB/s，约为每个稠密 FLOP ~1.3 字节，而 GPU 行接近 0.002。代价在同一行可见：总内存少于单个 H200，每瓦密集 FLOPs 落后于任何当代 GPU，并且纵向扩展列为空，因为一致性域即为晶圆本身。  
Trainium 在经济性上竞争，而非规格表。每芯片它落后（Trn2 的 1.3 PF FP8 约为 MI355X 的四分之一），但 Trn2 UltraServer 在 2024 年与 NVL72 一同达到了 64 芯片的机架级纵向扩展，作为一条消息传递环形网而非一致性交叉开关，并且 Trn3 转向了交换式 NeuronSwitch 结构。AWS 拥有从 Nitro 卡到 API 的每一层，并且一个锚租户（Anthropic，超过一百万颗 Trainium2 芯片）在前沿规模上验证了它。  
Groq 以 SRAM 带宽换取容量，然后用芯片数扩展内存池。第一个 GroqRack 在 64 个激活芯片上仅暴露 14 GB；Groq 3 LPX 将其扩展到 256 芯片上的 128 GB，汇聚 SRAM 带宽为 40 PB/s。它的 12 TB DDR5 层及与 Rubin 的配对表明 LPU 是对大型内存 GPU 机架的补充，而非替代。
