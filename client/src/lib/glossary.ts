/**
 * 设计提醒：术语注解用于补足原站长文的阅读上下文，采用短定义、悬浮触发和键盘可达行为，避免把正文改造成教学卡片。
 */
export type GlossaryItem = {
  term: string;
  english: string;
  definition: string;
};

export const glossary: GlossaryItem[] = [
  { term: "矩阵乘法", english: "Matrix multiplication", definition: "将两个矩阵相乘的核心线性代数运算，是 Transformer 训练与推理中的主要计算负载。" },
  { term: "张量核心", english: "Tensor Core", definition: "面向低精度矩阵乘加优化的专用执行单元，可显著提高 AI 工作负载的吞吐。" },
  { term: "流式多处理器", english: "Streaming Multiprocessor", definition: "NVIDIA GPU 中重复部署的并行计算单元，包含线程束调度、寄存器与执行管线。" },
  { term: "线程束", english: "Warp", definition: "NVIDIA GPU 中通常由 32 个线程组成的锁步执行组。" },
  { term: "系统阵列", english: "Systolic array", definition: "以规则相邻数据流动完成矩阵乘法的计算阵列，常用于 AI 加速器。" },
  { term: "高带宽内存", english: "HBM", definition: "通过堆叠 DRAM 和宽总线提供极高带宽的封装内存，常直接连接 AI 加速器。" },
  { term: "缓存", english: "Cache", definition: "靠近计算单元的高速存储层，用于减少对更慢内存的重复访问。" },
  { term: "暂存器", english: "Scratchpad", definition: "由软件显式管理的片上存储空间，用于可预测地暂存计算所需的数据块。" },
  { term: "纵向扩展", english: "Scale-up", definition: "在一个紧耦合互连域内增加加速器数量，使其高带宽、低延迟地协作。" },
  { term: "横向扩展", english: "Scale-out", definition: "通过网络将多个服务器或机架连接成更大的计算集群。" },
  { term: "互连", english: "Interconnect", definition: "在芯片、封装、服务器或机架之间传输数据的专用连接与交换网络。" },
  { term: "推理", english: "Inference", definition: "利用训练好的模型对新输入生成预测或输出的过程。" },
  { term: "预填充", english: "Prefill", definition: "推理中将完整提示词一次送入模型、建立 KV Cache 的阶段，通常以矩阵-矩阵乘法为主。" },
  { term: "解码", english: "Decode", definition: "自回归推理中逐 token 生成输出的阶段，常受到内存访问带宽限制。" },
  { term: "KV 缓存", english: "KV Cache", definition: "Transformer 注意力机制保存的键和值状态，用于避免生成新 token 时重复计算历史上下文。" },
  { term: "稀疏性", english: "Sparsity", definition: "数据或权重中大量数值为零的特性，可用于减少计算和数据传输。" },
  { term: "DMA", english: "DMA", definition: "直接内存访问引擎，可在无需核心逐指令参与的情况下搬运数据。" },
  { term: "片上 SRAM", english: "On-chip SRAM", definition: "集成在芯片上的静态随机存取存储器，容量较小但延迟极低、带宽很高。" },
  { term: "硬件仿真", english: "Emulation", definition: "将 RTL 映射到专用硬件执行，以比软件仿真更快的速度运行系统级工作负载。" },
  { term: "逻辑综合", english: "Synthesis", definition: "将 RTL 描述转换为满足时序、面积和功耗约束的门级网表的自动化过程。" },
  { term: "时序收敛", english: "Timing closure", definition: "反复优化逻辑、布局布线与约束，使所有关键路径满足目标时钟周期的过程。" },
  { term: "上电调试", english: "Bring-up", definition: "首片硅返回后启动硬件、固件和驱动并定位软硬件问题的验证阶段。" },
];
