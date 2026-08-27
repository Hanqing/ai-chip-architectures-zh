# 架构图中文 SVG 覆层规范

## NVIDIA GPU Die

底图为 5840×4016。顶边为八个 `NVLink` 块和一个 `PCIe Gen 6` 块；四角大区均标 `GPC`，各区内为 `SM`；左右边为 `HBM3e` 及小型 `MC`；中央竖条为 `GigaThread Engine`；两条横带为 `L2 Cache`；底部为 `NV-HBI`。中文覆层采用以下映射：`GPC`→“图形处理集群”、`SM`→“流式多处理器”、`GigaThread Engine`→“千线程引擎”、`L2 Cache`→“L2 缓存”、`MC`→“内存控制器”。NVLink、PCIe Gen 6、HBM3e、NV-HBI 保留英文标准名称。

## NVIDIA SM

底图为 4160×4160。四个重复子分区均包含 `L0 Instruction Cache`、`Warp Scheduler (32 thread/clk)`、`Dispatch Unit (32 thread/clk)`、`Register File (16,384×32-bit)`、`64 KB Tensor Memory (TMEM)`、`CUDA Cores`、`Tensor Cores`、`LD/ST` 与 `SFU`；顶部为 `L1 Instruction Cache`，底部包含 `Tensor Memory Accelerator (TMA)`、`256 KB L1 Data Cache / Shared Memory` 和纹理单元 `Tex`。中文映射：L0/L1 Instruction Cache→“L0/L1 指令缓存”、Warp Scheduler→“线程束调度器”、Dispatch Unit→“发射单元”、Register File→“寄存器文件”、Tensor Memory→“张量内存”、CUDA Cores→“CUDA 核心”、Tensor Cores→“张量核心”、Tensor Memory Accelerator→“张量内存加速器”、L1 Data Cache / Shared Memory→“L1 数据缓存 / 共享内存”、Tex→“纹理单元”。LD/ST、SFU、TMEM、TMA 与容量/位宽保留为技术缩写或数值。

## NVIDIA Scaling

`nvidia-scale-up.png` 的主标题为 `NVL72 / Oberon Rack / 18 Compute Trays + 9 NVSwitch Trays`；主体包含 `2× Grace`、`GPU`、`NVSwitch ASIC`、`Spine`、`Passive Copper Backplane`、`C01–C09`、`C10–C18`，页底汇总为 `72 GPUs / 18 NVSwitch ASICs / 5,184 Cables / ~130 TB/s All-to-All`。覆层映射：Compute Trays→“计算托盘”、NVSwitch Trays→“NVSwitch 托盘”、Spine→“交换核心层”、Passive Copper Backplane→“无源铜背板”、Cables→“线缆”、All-to-All→“全互联”。产品名、GPU、NVSwitch、Grace、C01–C18 与带宽数字保留。

`nvidia-scale-out.png` 的主标题为 `DGX SuperPOD / 8 × NVL72 = 576 GPUs / Leaf–Spine Fat Tree over Quantum-X800 InfiniBand`；下一行含 `Spine Tier / Quantum-X800 Switches / All-to-All Across Racks`；网络中有 `Spine`、`Leaf`、八个 `NVL72` 机架，以及页底 `Per-GPU NIC: ConnectX-8 @ 800 Gbps / OSFP-RHS Pluggable Optics Between Racks / Microsecond Hop, 2 Switch Hops Any-to-Any`。覆层映射：Leaf–Spine Fat Tree→“叶脊胖树”、Spine Tier→“核心层”、All-to-All Across Racks→“跨机架全互联”、Leaf→“叶交换机”、Per-GPU NIC→“每 GPU 网卡”、Pluggable Optics Between Racks→“机架间可插拔光模块”、Microsecond Hop→“微秒级跳转”。

## Google TPU

`google-tpu-chip.png` 显示 `ICI`、`DCN NIC`、`Chiplet 0/1`、`SparseCore`、`TensorCore`、`Scalar Unit (VLIW Issuer)`、`VPU`、`XLU`、`T/P`、`Accumulator Queues`、`MXU 256×256`、`VMEM` 与两侧 `HBM3e`。覆层映射：Chiplet→“计算芯粒”、SparseCore→“稀疏核心”、TensorCore→“张量核心”、Scalar Unit→“标量单元”、VLIW Issuer→“VLIW 发射器”、Accumulator Queues→“累加器队列”、VMEM→“向量内存”、DCN NIC→“数据中心网卡”。ICI、VPU、XLU、T/P、MXU、HBM3e 与 256×256 维度保留。

`google-tpu-tensorcore.png` 顶部为 `Scalar Unit (322b, 8 Slots VLIW Bundle)`，左侧 `VPU`，下方 `XLU` 与 `Transpose / Permute`，右侧四个 `MXU 256×256`，底部为 `Accumulator Queues` 与 `VMEM`。覆层映射：Scalar Unit→“标量单元”、Slots VLIW Bundle→“槽位 VLIW 指令包”、Transpose / Permute→“转置 / 重排”、Accumulator Queues→“累加器队列”；VPU、XLU、MXU、VMEM、位宽与阵列尺寸保留以保障术语对照。

`google-tpu-scale-up.png` 的标题包含 `TPU 8t Superpod / 9,600 Chips / 150 Cubes (4×4×4)`；左侧为 `One Cube — 3D Torus, 6-Way Nearest-Neighbour`，右侧为 `Superpod — 150 Cubes via Palomar OCS`，底部含 `64 Chips per Cube / Direct-Attach Copper Between Neighbours / Per-Chip ICI: 2.4 TB/s Bidir / 2 PB HBM (~62 PB/s) / 121 ExaFLOPS FP4`。覆层映射：Superpod→“超级集群”、Chips→“芯片”、Cubes→“立方体”、3D Torus→“三维环形网络”、Nearest-Neighbour→“最近邻互连”、Direct-Attach Copper→“直连铜缆”、Bidir→“双向”。TPU 8t、Palomar OCS、ICI、HBM 与性能数值保留。

`google-tpu-scale-out.png` 顶部为 `TPU 8t Scale-Out / Virgo East–West + Jupiter North–South`；第二层为 `Jupiter (North–South) / All-Optical via Apollo OCS / 13 Pb/s per Building`；第三层为 `Virgo (East–West) / Flat 2-Layer Non-Blocking / Any-to-Any in 2 Switch Hops / 47 Pb/s Bisection`，主体包含 `Virgo L2`、`Virgo L1` 与六个 `Superpod (9,600 chips)`；底部为 `Per-Chip Scale-Out: ~400 Gbps (v8t) / 134,000+ TPUs per Virgo Cluster / Multislice + Pathways Orchestrate SPMD Across Pods`。覆层映射：Scale-Out→“横向扩展”、East–West→“东西向”、North–South→“南北向”、All-Optical→“全光网络”、Flat 2-Layer Non-Blocking→“两层无阻塞扁平网络”、Switch Hops→“交换跳数”、Bisection→“二分带宽”、Per-Chip Scale-Out→“每芯片横向扩展”、Cluster→“集群”。Virgo、Jupiter、Apollo OCS、L1/L2、TPU 和数值保留。

## AMD

`amd-gpu-chip.png` 显示 `PCIe Gen 5 Host Interface`、八个 `XCD`、大量 `CU`、两侧 `HBM3e`、两个 `IOD`、两条 `Infinity Cache (128 MB)`、`HBM PHYs / Infinity Fabric / PCIe Gen 5` 与底部 `Infinity Fabric AP`。覆层映射：Host Interface→“主机接口”、XCD→“加速器复合晶粒”、CU→“计算单元”、IOD→“I/O 晶粒”、Infinity Cache→“无限缓存”、HBM PHYs→“HBM 物理层”。PCIe、HBM3e、Infinity Fabric 与容量数字保留。

`amd-cu.png` 的顶部为 `Scheduler (Wave64 Issue, 4-Cycle Round-Robin)` 和 `Scalar Unit (Shared Across the CU)`；其下为 `VGPR (4×128 KB)`、`SGPR (Scalar)`、`AGPR (Accumulators)`、四个 `SIMD16`、四个 `Matrix Core (MFMA)`，底部是 `LDS (160 KB Local Data Share, Software-Managed Scratchpad)` 与 `L1 Vector Cache (32 KB)`。覆层映射：Scheduler→“调度器”、Issue→“发射”、Round-Robin→“轮询”、Scalar Unit→“标量单元”、Shared Across the CU→“CU 内共享”、VGPR→“向量通用寄存器”、SGPR→“标量通用寄存器”、AGPR→“累加器寄存器”、Matrix Core→“矩阵核心”、Local Data Share→“本地数据共享”、Software-Managed Scratchpad→“软件管理暂存器”、L1 Vector Cache→“L1 向量缓存”。Wave64、SIMD16、MFMA、LDS 与寄存器缩写保留。

`amd-scale-up.png` 的标题为 `Helios / ORW (Open Rack Wide) Chassis / 18 Compute Trays + 9 UALink Switch Trays`，主体含 `GPU`、`UALink Switch`、`C01–C09`、`C10–C18`、`Spine` 与竖向 `UALoE Backplane (Ethernet-Tunnelled)`，底部汇总为 `72 GPUs / 31 TB HBM4 / 2.9 EF FP4 / 260 TB/s Scale-Up / 43 TB/s Scale-Out`。覆层映射：Chassis→“机箱”、Compute Trays→“计算托盘”、UALink Switch Trays→“UALink 交换托盘”、Spine→“交换核心层”、Backplane→“背板”、Ethernet-Tunnelled→“以太网隧道”、Scale-Up→“纵向扩展”、Scale-Out→“横向扩展”。Helios、ORW、GPU、UALink、UALoE 与数字保留。

`amd-scale-out.png` 顶部为 `AMD Scale-Out / Ultra Ethernet Leaf–Spine / No InfiniBand`，下方含 `UEC 1.0 / UET Transport / Packet Spraying / SACK Retransmit / Modern Congestion Control` 与 `Spine Tier / Broadcom Tomahawk 6 (102.4 Tbps) / Co-Packaged Optics (Davisson)`；主体为 `Spine Tomahawk 6`、`Leaf Tomahawk 6`、`Pensando Vulcano 800 NIC per GPU / PCIe Gen 6 / 800 GbE / UEC 1.0` 与八个 Helios 机架，底部为 `AMD Owns the NIC Tier (Pensando) / Switch ASICs and Optics Are Partner Silicon (Broadcom)`。覆层映射：Scale-Out→“横向扩展”、Leaf–Spine→“叶脊网络”、No InfiniBand→“不使用 InfiniBand”、Transport→“传输层”、Packet Spraying→“分散发包”、Retransmit→“重传”、Congestion Control→“拥塞控制”、Spine Tier→“核心层”、Co-Packaged Optics→“共封装光学”、per GPU→“每 GPU”、Owns the NIC Tier→“掌控网卡层”、Partner Silicon→“合作方芯片”。所有产品名和速率保留。

## Cerebras

`cerebras-wafer-die.png` 为以 12×7 reticle 网格构成晶圆左图、单个 reticle 网格放大右图的示意，未观察到可辨识的英文文字标签。为不凭空添加标签，覆层只在左图下缘标出“整片晶圆”，并在右图下缘标出“单个 reticle”；不覆盖网格、核心方块、边界互连与晶圆轮廓。

`cerebras-core.png` 顶部为 `Fabric Router (5 Ports: N / E / S / W / Core / 32-bit Wavelets / Static Routes on 24 Colors)`，第二层为 `Dataflow Task Scheduler (8 Microthreads / A Task Fires When Its Operand Arrives)`，继而是 `GPRs (16×32-bit)`、`DSRs (44 Tensor Descriptor Registers)`、`Local SRAM (48 kB / 8×6 kB Banks / Single-Cycle)` 与 `Compute Engine`。计算引擎内部为 `FMAC SIMD / 4×FP16 (WSE-2) / 8×FP16 (WSE-3)`、`16×INT8 (WSE-3, Fixed-Point)`、`FP32 Accumulate`；底部为 `Zero Filter at the Sender (Zeros Are Never Sent and Never Multiplied: Unstructured Sparsity)` 与 `1 of ~900,000 Cores / ~38,000 μm² / ~30 mW / Half SRAM, Half Logic`。覆层映射：Fabric Router→“互连路由器”、Ports→“端口”、Wavelets→“波元”、Static Routes→“静态路由”、Dataflow Task Scheduler→“数据流任务调度器”、Microthreads→“微线程”、GPRs→“通用寄存器”、Tensor Descriptor Registers→“张量描述符寄存器”、Local SRAM→“本地 SRAM”、Banks→“存储体”、Single-Cycle→“单周期”、Compute Engine→“计算引擎”、Accumulate→“累加”、Zero Filter at the Sender→“发送端零值过滤”、Unstructured Sparsity→“非结构化稀疏性”、Cores→“核心”、Half SRAM, Half Logic→“SRAM 与逻辑各半”。

## AWS Trainium

`aws-trainium-chip.png` 中上边有三段 `NeuronLink` 及 `PCIe / EFA (Nitro)`；左右两边为 `HBM3`；两个虚线框为 `Compute Die 0/1`；每个框内有四个 `NeuronCore`，每个核心中有 `Tensor Engine 128×128` 与 `Vector / Scalar / GPSIMD`，两计算晶粒间有竖向 `NeuronLink`，底部为两段 `NeuronLink Torus Ports`。覆层映射：Compute Die→“计算晶粒”、Tensor Engine→“张量引擎”、Vector→“向量”、Scalar→“标量”、Torus Ports→“环形网络端口”。NeuronLink、PCIe、EFA、Nitro、HBM3、NeuronCore、GPSIMD 和维度数字保留。

`aws-trainium-neuroncore.png` 顶部为 `NeuronCore-v3`；下层为 `DMA Engines / Descriptor Generation / Sync Engine`；中上为 `SBUF State Buffer`；左下为 `Tensor Engine`，右侧自上而下为 `Vector Engine / Reductions`、`Scalar Engine / Pointwise`、`GPSIMD Engine / Custom C Ops`，底部为 `PSUM Partial Sum Buffer` 与 `CC-Cores to NeuronLink`。覆层映射：DMA Engines→“DMA 引擎”、Descriptor Generation→“描述符生成”、Sync Engine→“同步引擎”、State Buffer→“状态缓冲区”、Tensor Engine→“张量引擎”、Vector Engine→“向量引擎”、Reductions→“归约”、Scalar Engine→“标量引擎”、Pointwise→“逐元素”、Custom C Ops→“自定义 C 运算”、Partial Sum Buffer→“部分和缓冲区”、CC-Cores to NeuronLink→“连接 NeuronLink 的 CC 核心”。SBUF、GPSIMD、PSUM 与 NeuronLink 保留。

`aws-trainium-scale-up.png` 顶部为 `One Server / All-to-All via NeuronSwitch-v1`，其中 `NeuronSwitch-v1 (L1)` 连接多个 `Trn3`；中间为 `UltraServer / 144 Trn3 Chips`；下部两块 `NeuronSwitch-v1 (L2)` 再连接多个 `Server / 16×Trn3 + L1`。覆层映射：One Server→“单台服务器”、All-to-All→“全互联”、UltraServer→“UltraServer 超级服务器”、Chips→“芯片”、Server→“服务器”。NeuronSwitch-v1、Trn3、L1、L2 和数量关系保留。

`aws-trainium-scale-out.png` 的主体为 `Spine`、`Leaf`、`EFA (Nitro)` 与六个 `Trn2 UltraServer`。覆层映射：Spine→“核心层”、Leaf→“叶交换层”、其余 EFA、Nitro 与 Trn2 UltraServer 均作为正式产品术语保留；覆层仅替换网络层级，以免掩盖卡片与线缆拓扑。

## Groq

`groq-chip.png` 顶部左右分别为 `West Hemisphere` 与 `East Hemisphere`；从两边向中心依次是 `MXM Plane`、`SXM`、`MEM`，中心为 `VXM`，底部为 `ICU`。覆层映射：West Hemisphere→“西半区”、East Hemisphere→“东半区”、MXM Plane→“MXM 矩阵平面”、SXM→“SXM 交换切片”、MEM→“MEM 存储切片”、VXM→“VXM 向量切片”、ICU→“指令控制单元”。保留 MXM / SXM / MEM / VXM / ICU 缩写以便中英文对照。

`groq-scale.png` 左侧标题为 `Node`，由 8 个 `LPU` 全互联；右侧标题为 `Rack`，逐行列出 `Node 1–8 / 8 LPUs`，以及虚线框 `Node 9 / Hot Spare`。覆层映射：Node→“节点”、Rack→“机架”、Hot Spare→“热备节点”。LPU 保留为产品类别缩写。
