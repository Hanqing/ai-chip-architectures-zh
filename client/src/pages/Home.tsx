/**
 * 设计提醒：本文件严格复刻 jacobpeake.com/ai-chip-architectures 的文章骨架。
 * 不加入 Hero、卡片、阅读进度或自定义品牌装饰；以原站三栏栅格、粘性目录、衬线长文和原生主题切换为准。
 */
import { Github, Languages, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { Fragment, useEffect, useMemo, useState } from "react";
import DiagramOverlay from "@/components/DiagramOverlay";
import articleMarkdownEn from "@/content/ai-chip-architectures-en.md?raw";
import articleMarkdown from "@/content/ai-chip-architectures-zh.md?raw";
import { useTheme } from "@/contexts/ThemeContext";
import { glossary } from "@/lib/glossary";
import { sitePath } from "@/lib/sitePath";

type TocItem = {
  id: string;
  label: string;
  logo: string;
  logoClass?: string;
  subitems: { id: string; label: string }[];
};

type FigureSpec = {
  src: string;
  alt: string;
  caption: string;
};

type Language = "zh" | "en";

const isGitHubPages = import.meta.env.VITE_GITHUB_PAGES === "true";
const githubMedia = (name: string) => `${import.meta.env.BASE_URL}media/${name}`;

const ASSETS = {
  nvidia: isGitHubPages ? githubMedia("nvidia-gpu-die.png") : "/manus-storage/nvidia-gpu-die_0861949d.png",
  nvidiaSm: isGitHubPages ? githubMedia("nvidia-sm.png") : "/manus-storage/nvidia-sm_ad087be0.png",
  nvidiaScaleUp: isGitHubPages ? githubMedia("nvidia-scale-up.png") : "/manus-storage/nvidia-scale-up_048229b3.png",
  nvidiaScaleOut: isGitHubPages ? githubMedia("nvidia-scale-out.png") : "/manus-storage/nvidia-scale-out_a76b43ad.png",
  tpu: isGitHubPages ? githubMedia("google-tpu-chip.png") : "/manus-storage/google-tpu-chip_e2f903f7.png",
  tpuCore: isGitHubPages ? githubMedia("google-tpu-tensorcore.png") : "/manus-storage/google-tpu-tensorcore_81f5d8b8.png",
  tpuScaleUp: isGitHubPages ? githubMedia("google-tpu-scale-up.png") : "/manus-storage/google-tpu-scale-up_d24d2673.png",
  tpuScaleOut: isGitHubPages ? githubMedia("google-tpu-scale-out.png") : "/manus-storage/google-tpu-scale-out_0d3a0b09.png",
  amd: isGitHubPages ? githubMedia("amd-gpu-chip.png") : "/manus-storage/amd-gpu-chip_96f6b02c.png",
  amdCu: isGitHubPages ? githubMedia("amd-cu.png") : "/manus-storage/amd-cu_ef44cf4b.png",
  amdScaleUp: isGitHubPages ? githubMedia("amd-scale-up.png") : "/manus-storage/amd-scale-up_0e150a1d.png",
  amdScaleOut: isGitHubPages ? githubMedia("amd-scale-out.png") : "/manus-storage/amd-scale-out_1ecf8498.png",
  cerebras: isGitHubPages ? githubMedia("cerebras-wafer-die.png") : "/manus-storage/cerebras-wafer-die_5232501d.png",
  cerebrasCore: isGitHubPages ? githubMedia("cerebras-core.png") : "/manus-storage/cerebras-core_fa8f6476.png",
  trainium: isGitHubPages ? githubMedia("aws-trainium-chip.png") : "/manus-storage/aws-trainium-chip_c5e0f2bc.png",
  trainiumCore: isGitHubPages ? githubMedia("aws-trainium-neuroncore.png") : "/manus-storage/aws-trainium-neuroncore_34245212.png",
  trainiumScaleUp: isGitHubPages ? githubMedia("aws-trainium-scale-up.png") : "/manus-storage/aws-trainium-scale-up_e3ecf526.png",
  trainiumScaleOut: isGitHubPages ? githubMedia("aws-trainium-scale-out.png") : "/manus-storage/aws-trainium-scale-out_83924b55.png",
  groq: isGitHubPages ? githubMedia("groq-chip.png") : "/manus-storage/groq-chip_0fee2536.png",
  groqScale: isGitHubPages ? githubMedia("groq-scale.png") : "/manus-storage/groq-scale_e52c13f3.png",
  standardMachines: isGitHubPages ? githubMedia("standard_machines_mark.png") : "/manus-storage/standard_machines_mark_d9bc5ffb.png",
};

const BRAND_ASSETS = {
  nvidia: isGitHubPages ? githubMedia("nvidia.png") : "/manus-storage/nvidia_4c2aa9e4.png",
  google: isGitHubPages ? githubMedia("google.png") : "/manus-storage/google_f1207df7.png",
  amd: "https://www.amd.com/content/dam/code/images/favicon/favicon.ico",
  cerebras: isGitHubPages ? githubMedia("cerebras.svg") : "/manus-storage/cerebras_ebdf0bec.svg",
  aws: isGitHubPages ? githubMedia("aws.png") : "/manus-storage/aws_b1580405.png",
  groq: isGitHubPages ? githubMedia("groq.png") : "/manus-storage/groq_026160d1.png",
};

const tocItems: TocItem[] = [
  { id: "nvidia-gpu", label: "GPU", logo: BRAND_ASSETS.nvidia, subitems: [{ id: "nvidia-architecture", label: "架构" }, { id: "nvidia-scaling", label: "扩展" }, { id: "nvidia-software", label: "软件" }] },
  { id: "google-tpu", label: "TPU", logo: BRAND_ASSETS.google, subitems: [{ id: "google-architecture", label: "架构" }, { id: "google-scaling", label: "扩展" }, { id: "google-software", label: "软件" }] },
  { id: "amd-gpu", label: "GPU", logo: BRAND_ASSETS.amd, logoClass: "is-tight", subitems: [{ id: "amd-architecture", label: "架构" }, { id: "amd-scaling", label: "扩展" }, { id: "amd-software", label: "软件" }] },
  { id: "cerebras-wse", label: "WSE", logo: BRAND_ASSETS.cerebras, subitems: [{ id: "cerebras-architecture", label: "架构" }, { id: "cerebras-scaling", label: "扩展" }, { id: "cerebras-software", label: "软件" }] },
  { id: "aws-trainium", label: "Trainium", logo: BRAND_ASSETS.aws, subitems: [{ id: "trainium-architecture", label: "架构" }, { id: "trainium-scaling", label: "扩展" }, { id: "trainium-software", label: "软件" }] },
  { id: "groq-lpu", label: "LPU", logo: BRAND_ASSETS.nvidia, subitems: [{ id: "groq-architecture", label: "架构" }, { id: "groq-scaling", label: "扩展" }, { id: "groq-software", label: "软件" }] },
];

const figures: Record<string, Record<string, FigureSpec[]>> = {
  "nvidia-gpu": {
    "nvidia-architecture": [
      { src: ASSETS.nvidia, alt: "Blackwell B200 单晶粒平面图", caption: "Blackwell B200 单晶粒平面图。" },
      { src: ASSETS.nvidiaSm, alt: "NVIDIA Streaming Multiprocessor 局部图", caption: "一个 Streaming Multiprocessor：四个子分区、共享 L1/SMEM 与 TMA。" },
    ],
    "nvidia-scaling": [
      { src: ASSETS.nvidiaScaleUp, alt: "NVL72 纵向扩展图", caption: "NVL72：72 个 Blackwell GPU 通过 NVSwitch 构成单一纵向扩展域。" },
      { src: ASSETS.nvidiaScaleOut, alt: "DGX SuperPOD 横向扩展图", caption: "DGX SuperPOD：八个 NVL72 机架通过 Quantum-X800 InfiniBand 互联。" },
    ],
  },
  "google-tpu": {
    "google-architecture": [
      { src: ASSETS.tpu, alt: "TPU Ironwood 单封装平面图", caption: "TPU Ironwood / v8t 单封装平面图。" },
      { src: ASSETS.tpuCore, alt: "TPU TensorCore 架构图", caption: "一个 TensorCore：Scalar Unit、VPU、XLU、Transpose/Permute 与 256×256 MXU。" },
    ],
    "google-scaling": [
      { src: ASSETS.tpuScaleUp, alt: "TPU Ironwood superpod 纵向扩展图", caption: "TPU Ironwood superpod：64 芯片立方体及由 Palomar OCS 组成的 ICI 域。" },
      { src: ASSETS.tpuScaleOut, alt: "TPU 8t 横向扩展图", caption: "TPU 8t 横向扩展：Virgo 承载东西向流量，Jupiter 连接南北向流量。" },
    ],
  },
  "amd-gpu": {
    "amd-architecture": [
      { src: ASSETS.amd, alt: "AMD Instinct MI355X 封装平面图", caption: "AMD Instinct MI355X（CDNA 4）封装平面图。" },
      { src: ASSETS.amdCu, alt: "AMD Compute Unit 图", caption: "一个 AMD Compute Unit：wave64、SIMD16、Matrix Core、LDS 与向量缓存。" },
    ],
    "amd-scaling": [
      { src: ASSETS.amdScaleUp, alt: "AMD Helios 纵向扩展图", caption: "AMD Helios：72 个 MI455X GPU 通过 UALink 构成内存域。" },
      { src: ASSETS.amdScaleOut, alt: "AMD 横向扩展图", caption: "AMD 横向扩展：以 UEC 和标准 Ethernet 为基础的机架间互联。" },
    ],
  },
  "cerebras-wse": {
    "cerebras-architecture": [
      { src: ASSETS.cerebras, alt: "Cerebras WSE-3 晶圆和 reticle 图", caption: "Cerebras WSE-3：晶圆尺度网格与单个 reticle 的局部放大。" },
      { src: ASSETS.cerebrasCore, alt: "Cerebras 数据流核心图", caption: "一个 Cerebras 核心：路由器、数据流任务调度器、SRAM 与 FMAC SIMD。" },
    ],
  },
  "aws-trainium": {
    "trainium-architecture": [
      { src: ASSETS.trainium, alt: "AWS Trainium2 封装图", caption: "AWS Trainium2 封装：两个计算晶粒、八个 NeuronCore-v3 与 HBM3。" },
      { src: ASSETS.trainiumCore, alt: "NeuronCore-v3 图", caption: "一个 NeuronCore-v3：128×128 Tensor Engine、SBUF、Vector 与 DMA。" },
    ],
    "trainium-scaling": [
      { src: ASSETS.trainiumScaleUp, alt: "Trn3 UltraServer 纵向扩展图", caption: "Trn3 UltraServer：通过两层 NeuronSwitch 连接为 144 芯片的全互联域。" },
      { src: ASSETS.trainiumScaleOut, alt: "AWS Trainium 横向扩展图", caption: "AWS Trainium 横向扩展：Elastic Fabric Adapter 与 Ethernet 的 UltraCluster。" },
    ],
  },
  "groq-lpu": {
    "groq-architecture": [
      { src: ASSETS.groq, alt: "Groq LPU 芯片平面图", caption: "Groq LPU 平面图：由中央 VXM 向两侧展开的 MXM、SXM 与 MEM 切片。" },
    ],
    "groq-scaling": [
      { src: ASSETS.groqScale, alt: "Groq 横向扩展图", caption: "Groq 横向扩展：LPUs 组成 Dragonfly 节点并扩展到 72 芯片机架。" },
    ],
  },
};

const diagramKeyBySrc: Record<string, string> = {
  [ASSETS.nvidia]: "nvidia-gpu-die",
  [ASSETS.nvidiaSm]: "nvidia-sm",
  [ASSETS.nvidiaScaleUp]: "nvidia-scale-up",
  [ASSETS.nvidiaScaleOut]: "nvidia-scale-out",
  [ASSETS.tpu]: "google-tpu-chip",
  [ASSETS.tpuCore]: "google-tpu-tensorcore",
  [ASSETS.tpuScaleUp]: "google-tpu-scale-up",
  [ASSETS.tpuScaleOut]: "google-tpu-scale-out",
  [ASSETS.amd]: "amd-gpu-chip",
  [ASSETS.amdCu]: "amd-cu",
  [ASSETS.amdScaleUp]: "amd-scale-up",
  [ASSETS.amdScaleOut]: "amd-scale-out",
  [ASSETS.cerebras]: "cerebras-wafer-die",
  [ASSETS.cerebrasCore]: "cerebras-core",
  [ASSETS.trainium]: "aws-trainium-chip",
  [ASSETS.trainiumCore]: "aws-trainium-neuroncore",
  [ASSETS.trainiumScaleUp]: "aws-trainium-scale-up",
  [ASSETS.trainiumScaleOut]: "aws-trainium-scale-out",
  [ASSETS.groq]: "groq-chip",
  [ASSETS.groqScale]: "groq-scale",
};

const chapterMap: Record<string, { id: string; label: string; logo: string; logoClass?: string }> = {
  "NVIDIA GPU": { id: "nvidia-gpu", label: "NVIDIA GPU", logo: BRAND_ASSETS.nvidia },
  "Google TPU": { id: "google-tpu", label: "Google TPU", logo: BRAND_ASSETS.google },
  "AMD GPU": { id: "amd-gpu", label: "AMD GPU", logo: BRAND_ASSETS.amd, logoClass: "is-tight" },
  "Cerebras WSE": { id: "cerebras-wse", label: "Cerebras WSE", logo: BRAND_ASSETS.cerebras },
  "AWS Trainium": { id: "aws-trainium", label: "AWS Trainium", logo: BRAND_ASSETS.aws },
  "Groq LPU": { id: "groq-lpu", label: "Groq LPU", logo: BRAND_ASSETS.nvidia },
};

type Company = "nvidia" | "google" | "amd" | "cerebras" | "aws" | "groq";
type ComparisonRow = { company: Company; cells: string[] };

const companyMeta: Record<Company, { label: string; logo: string; logoClass?: string }> = {
  nvidia: { label: "NVIDIA", logo: BRAND_ASSETS.nvidia },
  google: { label: "Google", logo: BRAND_ASSETS.google },
  amd: { label: "AMD", logo: BRAND_ASSETS.amd, logoClass: "is-tight" },
  cerebras: { label: "Cerebras", logo: BRAND_ASSETS.cerebras },
  aws: { label: "AWS", logo: BRAND_ASSETS.aws },
  groq: { label: "Groq", logo: BRAND_ASSETS.groq },
};

const perChipRows: ComparisonRow[] = [
  { company: "nvidia", cells: ["2023", "H100 SXM5", "80 GB HBM3", "3.4 TB/s", "1.98 PetaFLOPS FP8", "700 W", "900 GB/s"] },
  { company: "nvidia", cells: ["2024", "H200 SXM", "141 GB HBM3e", "4.8 TB/s", "1.98 PetaFLOPS FP8", "700 W", "900 GB/s"] },
  { company: "nvidia", cells: ["2024", "B200", "192 GB HBM3e", "8 TB/s", "4.5 PetaFLOPS FP8 / 9 PetaFLOPS FP4", "1,000 W", "1.8 TB/s"] },
  { company: "nvidia", cells: ["2025", "B300", "288 GB HBM3e", "8 TB/s", "7.5 PetaFLOPS FP8 / 15 PetaFLOPS FP4", "1,400 W", "1.8 TB/s"] },
  { company: "nvidia", cells: ["2026", "Rubin", "288 GB HBM4*", "~13 TB/s*", "~17 PetaFLOPS FP8* / ~50 PetaFLOPS FP4*", "~1,500 W*", "3.6 TB/s"] },
  { company: "nvidia", cells: ["2027", "Rubin Ultra", "1 TB HBM4e*", "~32 TB/s*", "~33 PetaFLOPS FP8* / ~100 PetaFLOPS FP4*", "~1,800 W*", "3.6 TB/s"] },
  { company: "google", cells: ["2023", "TPU v5p", "95 GB HBM2e", "2.8 TB/s", "0.46 PetaFLOPS BF16", "未披露", "1.2 TB/s"] },
  { company: "google", cells: ["2025", "TPU Ironwood (v7)", "192 GB HBM3e", "7.4 TB/s", "4.6 PetaFLOPS FP8", "未披露", "1.2 TB/s"] },
  { company: "google", cells: ["2026", "TPU v8t Sunfish", "216 GB HBM3e", "6.5 TB/s", "12.6 PetaFLOPS FP4", "未披露", "未披露"] },
  { company: "amd", cells: ["2023", "MI300X", "192 GB HBM3", "5.3 TB/s", "2.6 PetaFLOPS FP8", "750 W", "896 GB/s"] },
  { company: "amd", cells: ["2024", "MI325X", "256 GB HBM3e", "6.0 TB/s", "2.6 PetaFLOPS FP8", "1,000 W", "896 GB/s"] },
  { company: "amd", cells: ["2025", "MI355X", "288 GB HBM3e", "8 TB/s", "10 PetaFLOPS FP8 / 20 PetaFLOPS FP4", "1,400 W", "1,075 GB/s"] },
  { company: "amd", cells: ["2026", "MI455X", "待定", "待定", "~40 PetaFLOPS FP4*", "待定", "未披露"] },
  { company: "cerebras", cells: ["2021", "WSE-2", "40 GB SRAM（在晶圆上）", "20 PB/s（汇总）", "7.5 PetaFLOPS FP16", "23 kW（系统）", "晶圆即扩展域"] },
  { company: "cerebras", cells: ["2024", "WSE-3", "44 GB SRAM（在晶圆上）", "21 PB/s（汇总）", "~15.8 PetaFLOPS FP16*", "23 kW（系统）", "晶圆即扩展域"] },
  { company: "aws", cells: ["2022", "Trainium1", "32 GB HBM2e*", "820 GB/s", "0.19 PetaFLOPS BF16/FP8", "未披露", "未披露"] },
  { company: "aws", cells: ["2024", "Trainium2", "96 GB HBM3", "2.9 TB/s", "1.3 PetaFLOPS FP8", "~500 W*", "1.28 TB/s"] },
  { company: "aws", cells: ["2025", "Trainium3", "144 GB HBM3e", "4.9 TB/s", "2.5 PetaFLOPS FP8", "未披露", "未披露"] },
  { company: "groq", cells: ["2020", "GroqChip (1st-gen TSP/LPU)", "230 MB SRAM", "80 TB/s（片上汇总）", "0.188 PetaFLOPS FP16", "215 W", "330 GB/s（11 链路卡）"] },
  { company: "groq", cells: ["2026", "NVIDIA Groq 3 LP30", "500 MB SRAM", "150 TB/s（片上汇总）", "~1.2 PetaFLOPS FP8*", "未披露", "2.5 TB/s"] },
];

const perRackRows: ComparisonRow[] = [
  { company: "nvidia", cells: ["2023", "HGX H100", "8", "16 PetaFLOPS FP8", "640 GB", "7.2 TB/s", "400 Gbps (CX-7)", "~10 kW", "风冷"] },
  { company: "nvidia", cells: ["2024", "HGX H200", "8", "16 PetaFLOPS FP8", "1.1 TB", "7.2 TB/s", "400 Gbps", "~10 kW", "风冷"] },
  { company: "nvidia", cells: ["2024", "GB200 NVL72", "72", "360 PetaFLOPS FP8 / 720 PetaFLOPS FP4", "13.4 TB", "130 TB/s", "800 Gbps (CX-8)", "~120 kW", "液冷"] },
  { company: "nvidia", cells: ["2025", "GB300 NVL72", "72", "540 PetaFLOPS FP8 / 1,100 PetaFLOPS FP4", "20.7 TB", "130 TB/s", "800 Gbps", "~120 kW", "液冷"] },
  { company: "nvidia", cells: ["2026", "NVL144", "144", "~1.2 ExaFLOPS FP8 / ~3.6 ExaFLOPS FP4", "~21 TB", "~260 TB/s*", "1.6 Tbps (CX-9)", "~200 kW*", "液冷"] },
  { company: "nvidia", cells: ["2027", "NVL576 (Kyber)", "576", "~5 ExaFLOPS FP8 / ~15 ExaFLOPS FP4", "~144 TB", "n/d", "1.6 Tbps", "~600 kW*", "液冷"] },
  { company: "google", cells: ["2023", "TPU v5p pod", "8,960", "4.1 ExaFLOPS BF16", "852 TB", "3D 环形网", "ICI", "n/d", "液冷"] },
  { company: "google", cells: ["2025", "TPU Ironwood pod", "9,216", "42.5 ExaFLOPS FP8", "1.77 PB", "3D 环形网", "光学 OCS", "~10 MW*", "液冷"] },
  { company: "google", cells: ["2026", "TPU v8t Sunfish pod", "9,600", "121 ExaFLOPS FP4", "~2 PB", "Boardfly", "光学 OCS", "n/d", "液冷"] },
  { company: "amd", cells: ["2023", "MI300X 8-GPU OAM", "8", "21 PetaFLOPS FP8", "1.5 TB", "7.2 TB/s", "400 Gbps", "~10 kW", "风冷"] },
  { company: "amd", cells: ["2024", "MI325X 8-GPU OAM", "8", "21 PetaFLOPS FP8", "2.0 TB", "7.2 TB/s", "400 Gbps", "~12 kW*", "风冷"] },
  { company: "amd", cells: ["2025", "MI355X 8-GPU OAM", "8", "80 PetaFLOPS FP8 / 160 PetaFLOPS FP4", "2.3 TB", "8.6 TB/s", "400 Gbps", "~16 kW*", "液冷"] },
  { company: "amd", cells: ["2026", "Helios (MI455X)", "72", "1.4 ExaFLOPS FP8 / 2.9 ExaFLOPS FP4", "31 TB", "260 TB/s", "n/d", "n/d", "液冷"] },
  { company: "cerebras", cells: ["2024", "Condor Galaxy 3", "64 晶圆", "~1 ExaFLOPS FP16*", "2.8 TB SRAM + MemoryX", "以太网树形拓扑", "1.2 Tb/s Ethernet", "~1.5 MW*", "液冷"] },
  { company: "aws", cells: ["2022", "Trn1 实例", "16", "3 PetaFLOPS BF16", "512 GB", "2D 环形网", "~50 Gbps (EFA)", "n/d", "风冷"] },
  { company: "aws", cells: ["2024", "Trn2 UltraServer", "64", "83 PetaFLOPS FP8", "6.1 TB", "3D 环形网", "200 Gbps (EFAv3)", "n/d", "风冷"] },
  { company: "aws", cells: ["2025", "Trn3 UltraServer", "144", "362 PetaFLOPS FP8", "20.7 TB", "NeuronSwitch", "n/d", "n/d", "液冷"] },
  { company: "groq", cells: ["2022", "GroqRack", "64 在役（已安装 72）", "12 PetaFLOPS FP16", "14 GB SRAM", "3.2 TB/s 二等分带宽", "无每芯片 NIC", "n/d", "风冷"] },
  { company: "groq", cells: ["2026", "NVIDIA Groq 3 LPX", "256", "315 PetaFLOPS FP8", "128 GB SRAM + 12 TB DDR5", "n/d", "n/d", "n/d", "液冷"] },
];

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character] ?? character));
}

function annotateTerms(value: string) {
  const placeholders: string[] = [];
  let annotated = value;
  [...glossary].sort((a, b) => b.term.length - a.term.length).forEach((item) => {
    const escaped = item.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    annotated = annotated.replace(new RegExp(escaped, "g"), () => {
      const token = `@@GLOSSARY_${placeholders.length}@@`;
      placeholders.push(`<span class="term" tabindex="0"><span class="term-label">${item.term}</span><span class="term-tooltip" role="tooltip"><b>${item.english}</b><span>${item.definition}</span></span></span>`);
      return token;
    });
  });
  return annotated.replace(/@@GLOSSARY_(\d+)@@/g, (_match, index) => placeholders[Number(index)] ?? "");
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

function cleanMarkdown(markdown: string, language: Language) {
  const localized = markdown
    .replace(/^# .*Jacob Peake\s*\n+/m, "")
    .replace(/^\*\*链接:\*\*\s*https:\/\/www\.jacobpeake\.com\/ai-chip-architectures\s*\n\s*---\s*\n+/m, "")
    .replace(/^!\[[^\]]*\]\([^\n]*\)\s*$/gm, "")
    .replace(/^[\s\S]*?^AI Chip Architectures\s*$/m, "## AI Chip Architectures");
  const normalized = language === "zh"
    ? localized
      .replace(/^问题所在$/m, "### 问题")
      .replace(/^# 比较$/m, "### 比较")
      .replace(/^# 这说明了什么$/m, "##### 这说明了什么")
      .replace(/^每芯片$/m, "##### 每芯片")
      .replace(/^每机架 \/ pod$/m, "##### 每机架 / pod")
      .replace(/^# (计算|内存|数值表示|确定性|押注|扩展|软件)$/gm, "##### $1")
      .replace(/^## (软件|扩展)$/gm, "#### $1")
    : localized
      .replace(/^The Problem$/m, "### The Problem")
      .replace(/^(NVIDIA GPU|Google TPU|AMD GPU|Cerebras WSE|AWS Trainium|Groq LPU)$/gm, "## $1")
      .replace(/^(GENEALOGY|ARCHITECTURE|SCALING|SOFTWARE)$/gm, "### $1")
      .replace(/^(Per-chip|Per-rack \/ pod|What this shows)$/gm, "##### $1");
  return normalized
    .replace(/([^\n])\n(#{2,5}\s+)/g, "$1\n\n$2")
    .replace(/^(#{2,5}\s+.+)\n(?!\n)/gm, "$1\n\n");
}

type ArticleBlock = { kind: "heading" | "paragraph" | "rule"; level?: number; text?: string };

function parseBlocks(markdown: string, language: Language): ArticleBlock[] {
  return cleanMarkdown(markdown, language)
    .trim()
    .split(/\n{2,}/)
    .map((source) => source.trim())
    .filter(Boolean)
    .map((source) => {
      const heading = source.match(/^(#{2,5})\s+(.+)$/);
      if (heading) return { kind: "heading" as const, level: heading[1].length, text: heading[2].trim() };
      if (source === "---") return { kind: "rule" as const };
      return { kind: "paragraph" as const, text: source };
    });
}

function normalizeSubheading(text: string) {
  if (/^(架构|Architecture)$/i.test(text)) return "architecture";
  if (/^(扩展|Scaling)$/i.test(text)) return "scaling";
  if (/^(软件|Software)$/i.test(text)) return "software";
  return "";
}

function Figure({ spec, showChineseOverlay }: { spec: FigureSpec; showChineseOverlay: boolean }) {
  const diagram = diagramKeyBySrc[spec.src];
  return (
    <figure className="architecture-figure" aria-label={spec.caption}>
      <div className="diagram-shell">
        <img src={spec.src} alt={spec.alt} loading="lazy" />
        {showChineseOverlay && diagram && <DiagramOverlay diagram={diagram} />}
      </div>
    </figure>
  );
}

function ComparisonTable({ type, language }: { type: "chip" | "rack"; language: Language }) {
  const headers = type === "chip"
    ? (language === "zh" ? ["公司", "年份", "芯片", "加速器内存", "内存带宽", "旗舰密集 FLOPs", "TDP", "纵向扩展带宽"] : ["Company", "Year", "Chip", "Accelerator memory", "Memory BW", "Flagship dense FLOPs", "TDP", "Scale-up BW"])
    : (language === "zh" ? ["公司", "年份", "系统", "芯片数量", "汇聚密集 FLOPs", "加速器内存总量", "纵向扩展互连带宽", "每芯片 NIC", "功耗", "散热"] : ["Company", "Year", "System", "Chips", "Aggregate dense FLOPs", "Accelerator memory total", "Scale-up fabric BW", "Per-chip NIC", "Power", "Cooling"]);
  const rows = type === "chip" ? perChipRows : perRackRows;
  const localizeCell = (cell: string) => language === "en"
    ? cell.replace("液冷", "Liquid").replace("风冷", "Air").replace("无每芯片 NIC", "No per-chip NIC").replace("64 在役（已安装 72）", "64 active (72 installed)").replace("3D 环形网", "3D torus")
    : cell;
  const spanFor = (index: number) => {
    const company = rows[index].company;
    if (index > 0 && rows[index - 1].company === company) return 0;
    let span = 1;
    while (rows[index + span]?.company === company) span += 1;
    return span;
  };
  return (
    <div className="comparison-wrap">
      <table className="comparison-table">
        <thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
        <tbody>
          {rows.map((row, index) => {
            const meta = companyMeta[row.company];
            const span = spanFor(index);
            return <tr key={`${row.company}-${row.cells[1]}-${index}`}>
              {span > 0 && <td className="company" rowSpan={span}><img className={`company-logo ${meta.logoClass ?? ""}`} src={meta.logo} alt={meta.label} /></td>}
              {row.cells.map((cell, cellIndex) => <td key={`${cellIndex}-${cell}`}>{localizeCell(cell)}</td>)}
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

function GenealogyRow({ source, language }: { source: string; language: Language }) {
  const lines = source.split("\n").map((line) => line.trim()).filter(Boolean);
  const [year, head = "", ...description] = lines;
  return (
    <div className="gen-row">
      <div className="gen-head"><span className="gen-year">{year}</span><span>{inlineMarkdown(head, language).replace(/<[^>]+>/g, "")}</span></div>
      {description.length > 0 && <div className="gen-desc">{inlineMarkdown(description.join(" "), language).replace(/<[^>]+>/g, "")}</div>}
    </div>
  );
}

function TocList({ activeSection, activeSub, compact = false, language }: { activeSection: string; activeSub: string; compact?: boolean; language: Language }) {
  return (
    <ul className={compact ? "mobile-toc-list" : "sidebar-toc-list"}>
      {tocItems.map((item) => {
        const selected = activeSection === item.id;
        return (
          <li className={`sidebar-toc-item ${selected ? "is-current" : ""}`} key={item.id}>
            <a className={`sidebar-toc-link has-logo ${selected ? "current" : ""}`} href={`#${item.id}`}>
              <img className={`sidebar-toc-logo ${item.logoClass ?? ""}`} src={item.logo} alt="" />
              {item.label}
            </a>
            <ul className="sidebar-toc-sublist">
              {item.subitems.map((subitem) => (
                <li className="sidebar-toc-subitem" key={subitem.id}>
                  <a className={`sidebar-toc-sublink ${activeSub === subitem.id ? "current" : ""}`} href={`#${subitem.id}`}>{language === "en" ? ({ architecture: "Architecture", scaling: "Scaling", software: "Software" }[subitem.id.split("-").at(-1) ?? ""] ?? subitem.label) : subitem.label}</a>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
      <li className="sidebar-toc-item">
        <a className={`sidebar-toc-link comparison-link ${activeSection === "comparison" ? "current" : ""}`} href="#comparison">{language === "en" ? "Comparison" : "比较"}</a>
      </li>
    </ul>
  );
}

function ArticleContent({ language }: { language: Language }) {
  const source = language === "zh" ? articleMarkdown : articleMarkdownEn;
  const title = language === "zh" ? "AI 芯片架构" : "AI Chip Architectures";
  const blocks = useMemo(() => parseBlocks(source, language).filter((block) => !(block.kind === "heading" && (block.text === "AI 芯片架构" || block.text === "AI Chip Architectures"))), [source, language]);
  let currentChapter = "";
  let currentSub = "";
  let inGenealogy = false;
  const figureCursor: Record<string, number> = {};
  const assignedAnchors = new Set<string>();

  return (
    <>
      <header className="article-header">
        <h1 className="article-title">{title}</h1>
      </header>
      <article className="article-body" aria-label={language === "zh" ? "AI 芯片架构中文文章" : "AI Chip Architectures article"}>
        {blocks.map((block, index) => {
        if (block.kind === "rule") return <hr key={`rule-${index}`} />;
        if (block.kind === "heading") {
          const text = block.text ?? "";
          const chapter = chapterMap[text];
          if (chapter) {
            currentChapter = chapter.id;
            currentSub = "";
            inGenealogy = false;
            return <h3 id={chapter.id} data-observe-id={chapter.id} key={`chapter-${chapter.id}`}><img className={`heading-logo ${chapter.logoClass ?? ""}`} src={chapter.logo} alt="" />{chapter.label}</h3>;
          }
          if (text === "问题" || text === "The Problem") return <h3 id="the-problem" data-observe-id="the-problem" key={`heading-${index}`}>{text}</h3>;
          if (text === "比较" || text === "Comparison") { currentChapter = "comparison"; currentSub = ""; inGenealogy = false; return <h3 id="comparison" data-observe-id="comparison" key={`heading-${index}`}>{text}</h3>; }
          if (text === "谱系" || text === "GENEALOGY") { inGenealogy = true; return <h4 key={`genealogy-${index}`}>{language === "zh" ? "谱系" : "GENEALOGY"}</h4>; }
          const subName = normalizeSubheading(text);
          if (subName && currentChapter && currentChapter !== "comparison") {
            currentSub = `${currentChapter.split("-")[0]}-${subName}`;
            if (currentChapter === "aws-trainium") currentSub = `trainium-${subName}`;
            inGenealogy = false;
            const anchorIsNew = !assignedAnchors.has(currentSub);
            assignedAnchors.add(currentSub);
            return <h4 id={anchorIsNew ? currentSub : undefined} data-observe-id={anchorIsNew ? currentSub : undefined} key={`sub-${index}`}>{text.toUpperCase()}</h4>;
          }
          const HeadingTag = block.level && block.level >= 5 ? "h5" : "h4";
          const slug = text === "每芯片" || text === "Per-chip" ? "per-chip" : text === "每机架 / pod" || text === "Per-rack / pod" ? "per-rack-pod" : text === "这说明了什么" || text === "What this shows" ? "what-this-shows" : undefined;
          return <HeadingTag id={slug} key={`heading-${index}`}>{text}</HeadingTag>;
        }
        const paragraph = block.text?.trim() ?? "";
        if (paragraph.startsWith("公司\t年份\t芯片") || paragraph.startsWith("Company\tYear\tChip")) return <ComparisonTable key={`comparison-chip-${index}`} type="chip" language={language} />;
        if (paragraph.startsWith("公司\t年份\t系统") || paragraph.startsWith("Company\tYear\tSystem")) return <ComparisonTable key={`comparison-rack-${index}`} type="rack" language={language} />;
        if (inGenealogy && /^\d{4}\s*(?:\n|\s{2})/.test(paragraph)) {
          const rows = paragraph.split(/(?=^\d{4}\s*$)/m).map((row) => row.trim()).filter(Boolean);
          return <div className="genealogy" key={`genealogy-block-${index}`}>{rows.map((row, rowIndex) => <GenealogyRow key={`genealogy-row-${index}-${rowIndex}`} source={row} language={language} />)}</div>;
        }
        const output = <p key={`p-${index}`} dangerouslySetInnerHTML={{ __html: inlineMarkdown(paragraph, language) }} />;
        if (currentChapter && currentSub && figures[currentChapter]?.[currentSub]) {
          const cursorKey = `${currentChapter}:${currentSub}`;
          const cursor = figureCursor[cursorKey] ?? 0;
          figureCursor[cursorKey] = cursor + 1;
          const insertFigure = figures[currentChapter][currentSub][cursor];
          if (insertFigure) return <Fragment key={`figure-pair-${cursorKey}-${cursor}`}><p dangerouslySetInnerHTML={{ __html: inlineMarkdown(paragraph, language) }} /><Figure spec={insertFigure} showChineseOverlay={language === "zh"} /></Fragment>;
        }
        return output;
        })}
      </article>
    </>
  );
}

function PostCta({ ending = false, language }: { ending?: boolean; language: Language }) {
  return (
    <div className={ending ? "post-cta post-cta-end" : "post-cta"}>
      <a className="post-cta-brand" href="https://standardmachines.com/" target="_blank" rel="noreferrer">
        <img className="post-cta-mark" src={ASSETS.standardMachines} alt="" />
        <span>Standard Machines</span>
      </a>
      <p className="post-cta-body">{language === "zh" ? "用 AI 设计先进芯片。" : "Teaching AI to design advanced chips."}</p>
      <a className="post-cta-contact" href="mailto:founders@standardmachines.com?subject=From%20your%20writing"><Mail size={12} />{language === "zh" ? "联系创始团队" : "Get in touch"}</a>
    </div>
  );
}

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [language, setLanguage] = useState<Language>(() => window.localStorage.getItem("article-language") === "en" ? "en" : "zh");
  const [activeSection, setActiveSection] = useState("nvidia-gpu");
  const [activeSub, setActiveSub] = useState("");

  useEffect(() => {
    document.title = language === "zh" ? "AI 芯片架构" : "AI Chip Architectures";
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-observe-id]"));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!visible) return;
      const id = (visible.target as HTMLElement).dataset.observeId ?? "";
      if (!id) return;
      const matchingSection = tocItems.find((item) => id === item.id || item.subitems.some((subitem) => subitem.id === id));
      if (matchingSection) {
        setActiveSection(matchingSection.id);
        setActiveSub(id === matchingSection.id ? "" : id);
      } else if (id === "comparison") {
        setActiveSection("comparison");
        setActiveSub("");
      }
    }, { rootMargin: "-22% 0px -66% 0px", threshold: [0, 0.1] });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [language]);

  const toggleLanguage = () => {
    const anchor = window.location.hash;
    const scrollY = window.scrollY;
    const next = language === "zh" ? "en" : "zh";
    window.localStorage.setItem("article-language", next);
    setLanguage(next);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const target = anchor ? document.getElementById(anchor.slice(1)) : null;
      if (target) target.scrollIntoView({ block: "start" });
      else window.scrollTo({ top: scrollY });
    }));
  };

  return (
    <main className="page">
      <div className="layout">
        <nav className="sidebar" aria-label="网站和文章目录">
          <div className="sidebar-section">
            <a className="sidebar-link" href={sitePath("/")}>Home</a>
            <a className="sidebar-link" href={sitePath("/writing")}>Writing</a>
          </div>
          <div className="sidebar-social" aria-label="社交链接">
            <a href="https://github.com/jacobpeake" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href="https://www.linkedin.com/in/jacob-peake/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://x.com/jacobpeake" target="_blank" rel="noreferrer" aria-label="X"><span className="x-glyph">𝕏</span></a>
            <button type="button" aria-label="切换暗色模式" onClick={toggleTheme}>{theme === "dark" ? <Sun /> : <Moon />}</button>
            <button className="language-toggle" type="button" aria-label={language === "zh" ? "切换至英文" : "切换至中文"} onClick={toggleLanguage}><Languages /><span>{language === "zh" ? "EN" : "中"}</span></button>
          </div>
          <div className="sidebar-toc">
            <div className="sidebar-toc-title">Contents</div>
            <TocList activeSection={activeSection} activeSub={activeSub} language={language} />
          </div>
          <PostCta language={language} />
        </nav>

        <div className="content">
          <details className="mobile-toc">
            <summary>Contents</summary>
            <TocList activeSection={activeSection} activeSub={activeSub} compact language={language} />
          </details>
          <ArticleContent language={language} />
          <PostCta ending language={language} />
        </div>
      </div>
    </main>
  );
}
