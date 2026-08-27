/**
 * 设计提醒：该组件是原站架构图之上的可编辑中文矢量注解层。
 * 标签使用百分比 viewBox 与半透明纸色底，保持原图构图和数据不变，不做营销性图形改造。
 */
type OverlayLabel = {
  x: number;
  y: number;
  text: string;
  width?: number;
  tone?: "light" | "dark";
};

const diagramLabels: Record<string, OverlayLabel[]> = {
  "nvidia-gpu-die": [
    { x: 50, y: 3.5, text: "PCIe Gen 6 主机接口", width: 25, tone: "dark" },
    { x: 8, y: 29, text: "HBM3e", width: 10 },
    { x: 27, y: 18, text: "图形处理集群", width: 18 },
    { x: 50, y: 44, text: "千线程引擎", width: 16 },
    { x: 50, y: 58, text: "L2 缓存", width: 11 },
    { x: 50, y: 96, text: "NV-HBI 桥接", width: 15 },
  ],
  "nvidia-sm": [
    { x: 50, y: 4, text: "L1 指令缓存", width: 15, tone: "dark" },
    { x: 17, y: 28, text: "线程束调度器", width: 16 },
    { x: 35, y: 28, text: "发射单元", width: 12 },
    { x: 66, y: 28, text: "张量内存", width: 13 },
    { x: 50, y: 87, text: "L1 数据缓存 / 共享内存", width: 28 },
    { x: 50, y: 96, text: "张量内存加速器", width: 20 },
  ],
  "nvidia-scale-up": [
    { x: 50, y: 2.5, text: "NVL72 / Oberon 机架", width: 25 },
    { x: 50, y: 15, text: "18 个计算托盘", width: 22 },
    { x: 50, y: 50, text: "NVSwitch 交换托盘", width: 24 },
    { x: 92, y: 52, text: "无源铜背板", width: 18 },
    { x: 50, y: 97, text: "72 GPU / 全互联", width: 22 },
  ],
  "nvidia-scale-out": [
    { x: 50, y: 4, text: "DGX SuperPOD 横向扩展", width: 31 },
    { x: 50, y: 15, text: "叶脊胖树 / Quantum-X800", width: 33 },
    { x: 50, y: 42, text: "核心层", width: 10 },
    { x: 50, y: 61, text: "叶交换机", width: 12 },
    { x: 50, y: 88, text: "NVL72 机架", width: 14 },
  ],
  "google-tpu-chip": [
    { x: 50, y: 5, text: "ICI 互连 / 数据中心网卡", width: 29 },
    { x: 16, y: 17, text: "计算芯粒", width: 15 },
    { x: 35, y: 35, text: "稀疏核心", width: 13 },
    { x: 50, y: 56, text: "张量核心", width: 13 },
    { x: 50, y: 82, text: "向量内存 / 累加器队列", width: 28 },
    { x: 94, y: 50, text: "HBM3e", width: 10 },
  ],
  "google-tpu-tensorcore": [
    { x: 50, y: 5, text: "标量单元（322 位，8 槽 VLIW）", width: 35, tone: "dark" },
    { x: 20, y: 27, text: "VPU", width: 8 },
    { x: 25, y: 62, text: "XLU", width: 8 },
    { x: 39, y: 62, text: "转置 / 重排", width: 15 },
    { x: 76, y: 28, text: "MXU 256×256", width: 17 },
    { x: 50, y: 86, text: "累加器队列 / VMEM", width: 25 },
  ],
  "google-tpu-scale-up": [
    { x: 50, y: 4, text: "TPU 8t 超级集群 / 9,600 芯片", width: 37 },
    { x: 24, y: 13, text: "单个立方体：三维环形网络", width: 31 },
    { x: 76, y: 13, text: "150 个立方体，经 Palomar OCS", width: 36 },
    { x: 50, y: 92, text: "每立方体 64 芯片 / 邻居间直连铜缆", width: 42 },
    { x: 50, y: 98, text: "每芯片 ICI：2.4 TB/s 双向", width: 34 },
  ],
  "google-tpu-scale-out": [
    { x: 50, y: 4, text: "TPU 8t 横向扩展", width: 23 },
    { x: 50, y: 12, text: "Jupiter：南北向，全光网络", width: 31 },
    { x: 50, y: 20, text: "Virgo：东西向，两层无阻塞网络", width: 37 },
    { x: 50, y: 41, text: "Virgo 核心层", width: 17 },
    { x: 50, y: 61, text: "Virgo 叶交换层", width: 18 },
    { x: 50, y: 96, text: "每芯片横向扩展 / 跨 Pod SPMD", width: 38 },
  ],
  "amd-gpu-chip": [
    { x: 50, y: 3, text: "PCIe Gen 5 主机接口", width: 26, tone: "dark" },
    { x: 26, y: 15, text: "加速器复合晶粒", width: 18 },
    { x: 8, y: 50, text: "HBM3e", width: 10 },
    { x: 24, y: 73, text: "I/O 晶粒 / 无限缓存", width: 23, tone: "dark" },
    { x: 50, y: 94, text: "无限互连 AP", width: 16 },
  ],
  "amd-cu": [
    { x: 50, y: 4, text: "调度器（Wave64 发射，四周期轮询）", width: 38, tone: "dark" },
    { x: 50, y: 13, text: "标量单元（CU 内共享）", width: 26 },
    { x: 18, y: 25, text: "向量通用寄存器", width: 19 },
    { x: 80, y: 43, text: "矩阵核心（MFMA）", width: 19 },
    { x: 50, y: 82, text: "本地数据共享 / 软件管理暂存器", width: 38 },
    { x: 50, y: 96, text: "L1 向量缓存", width: 16 },
  ],
  "amd-scale-up": [
    { x: 50, y: 3, text: "Helios / 开放宽机架机箱", width: 29 },
    { x: 50, y: 7, text: "18 个计算托盘 + 9 个 UALink 交换托盘", width: 44 },
    { x: 50, y: 47, text: "UALink 交换机", width: 18 },
    { x: 91, y: 51, text: "UALoE 以太网隧道背板", width: 29 },
    { x: 50, y: 97, text: "72 GPU / 纵向扩展 260 TB/s", width: 34 },
  ],
  "amd-scale-out": [
    { x: 50, y: 4, text: "AMD 横向扩展 / Ultra Ethernet 叶脊网络", width: 46 },
    { x: 50, y: 12, text: "传输层 / 分散发包 / 重传 / 拥塞控制", width: 45 },
    { x: 50, y: 19, text: "核心层 / 共封装光学", width: 27 },
    { x: 50, y: 31, text: "核心交换机", width: 14 },
    { x: 50, y: 52, text: "叶交换机", width: 13 },
    { x: 50, y: 60, text: "每 GPU：Pensando Vulcano 800 网卡", width: 39 },
  ],
  "cerebras-wafer-die": [
    { x: 27, y: 93, text: "整片晶圆", width: 15 },
    { x: 78, y: 93, text: "单个 reticle", width: 18 },
  ],
  "cerebras-core": [
    { x: 50, y: 5, text: "互连路由器 / 5 端口 / 静态路由", width: 39, tone: "dark" },
    { x: 50, y: 15, text: "数据流任务调度器 / 8 个微线程", width: 37 },
    { x: 23, y: 32, text: "通用寄存器", width: 14 },
    { x: 76, y: 32, text: "张量描述符寄存器", width: 21 },
    { x: 28, y: 58, text: "本地 SRAM / 单周期存储体", width: 29 },
    { x: 75, y: 58, text: "计算引擎", width: 14 },
    { x: 50, y: 86, text: "发送端零值过滤 / 非结构化稀疏性", width: 43 },
  ],
  "aws-trainium-chip": [
    { x: 50, y: 5, text: "NeuronLink 互连 / PCIe-EFA（Nitro）", width: 39 },
    { x: 20, y: 15, text: "计算晶粒 0", width: 16 },
    { x: 80, y: 15, text: "计算晶粒 1", width: 16 },
    { x: 50, y: 44, text: "张量引擎 128×128", width: 20 },
    { x: 50, y: 93, text: "NeuronLink 环形网络端口", width: 29 },
  ],
  "aws-trainium-neuroncore": [
    { x: 50, y: 5, text: "NeuronCore-v3", width: 18, tone: "dark" },
    { x: 50, y: 15, text: "DMA 引擎 / 描述符生成 / 同步引擎", width: 41 },
    { x: 50, y: 27, text: "SBUF 状态缓冲区", width: 21 },
    { x: 31, y: 67, text: "张量引擎", width: 15 },
    { x: 77, y: 53, text: "向量引擎 / 归约", width: 19 },
    { x: 77, y: 81, text: "GPSIMD 引擎 / 自定义 C 运算", width: 30 },
    { x: 50, y: 95, text: "PSUM 部分和缓冲区", width: 21 },
  ],
  "aws-trainium-scale-up": [
    { x: 50, y: 4, text: "单台服务器 / 通过 NeuronSwitch-v1 全互联", width: 45 },
    { x: 50, y: 18, text: "NeuronSwitch-v1（L1）", width: 24 },
    { x: 50, y: 52, text: "UltraServer / 144 个 Trn3 芯片", width: 35 },
    { x: 50, y: 64, text: "NeuronSwitch-v1（L2）", width: 24 },
    { x: 50, y: 91, text: "服务器：16×Trn3 + L1", width: 25 },
  ],
  "aws-trainium-scale-out": [
    { x: 50, y: 8, text: "核心层", width: 10, tone: "dark" },
    { x: 50, y: 36, text: "叶交换层", width: 12 },
    { x: 50, y: 51, text: "EFA（Nitro）", width: 14, tone: "dark" },
    { x: 50, y: 62, text: "Trn2 UltraServer", width: 22 },
  ],
  "groq-chip": [
    { x: 15, y: 5, text: "西半区", width: 10 },
    { x: 85, y: 5, text: "东半区", width: 10 },
    { x: 15, y: 49, text: "MXM 矩阵平面", width: 16 },
    { x: 35, y: 49, text: "SXM 交换切片", width: 15 },
    { x: 50, y: 49, text: "VXM 向量切片", width: 15 },
    { x: 50, y: 89, text: "指令控制单元", width: 16, tone: "dark" },
  ],
  "groq-scale": [
    { x: 23, y: 6, text: "节点", width: 8 },
    { x: 77, y: 6, text: "机架", width: 8 },
    { x: 23, y: 93, text: "8 个 LPU 全互联", width: 19 },
    { x: 77, y: 88, text: "节点 1–8：各 8 个 LPU", width: 27 },
    { x: 77, y: 96, text: "节点 9：热备", width: 16 },
  ],
};

export default function DiagramOverlay({ diagram }: { diagram: string }) {
  const labels = diagramLabels[diagram];
  if (!labels) return null;
  return (
    <svg className="diagram-overlay" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      {labels.map((label, index) => {
        const width = label.width ?? Math.max(12, label.text.length * 1.6);
        const fill = label.tone === "dark" ? "rgba(33,32,29,.9)" : "rgba(255,253,247,.9)";
        const color = label.tone === "dark" ? "#fffdf7" : "#292824";
        return <g key={`${diagram}-${index}`}>
          <rect x={label.x - width / 2} y={label.y - 2.2} width={width} height="4.4" rx="0.75" fill={fill} />
          <text x={label.x} y={label.y + 0.75} textAnchor="middle" fill={color} className="diagram-overlay-text">{label.text}</text>
        </g>;
      })}
    </svg>
  );
}
