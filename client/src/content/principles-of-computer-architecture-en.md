# Principles of Computer Architecture - Jacob Peake

**URL:** https://www.jacobpeake.com/principles-of-computer-architecture

---

Home
Writing
CONTENTS
The Performance Equations
The Iron Law
Amdahl's Law
Gustafson's Law
Little's Law
The Roofline Model
The Walls
The End of Dennard Scaling
The Power Wall
The Memory Wall
The ILP Wall
Latency Lags Bandwidth
The Speed of Light
Locality and the Memory Hierarchy
The Principle of Locality
AMAT: Average Memory Access Time
The Three C's
Belady's MIN
Pipelining and Out-of-Order
Pipelining Speedup
Optimal Pipeline Depth
Tomasulo's Algorithm
ROB Sizing as Little's Law
Branch Prediction
Coherence and Consistency
MESI
Energy and Data Movement
The Horowitz Energy Table
The Cost of Distance
The Levers
Make the Common Case Fast
Pollack's Rule
Specialisation
Throughput vs Latency
Surface-to-Volume Scaling
The Bandwidth-Delay Product
Reliability at Scale
FIT and MTBF
Synthesis
Reading Any Architecture: The Six Questions
The Deeper Point
Standard Machines

Teaching AI to design advanced chips. Get in touch.

Principles of Computer Architecture

In 1990, John Hennessy and David Patterson published Computer Architecture: A Quantitative Approach. The book replaced design-by-intuition with design-by-formula. Equations a designer could plug numbers into and get a defensible answer. Architecture became quantitative.

The principles haven't changed since. Roofline (2009) is the youngest equation in regular use;
Little's Law (1961) is the oldest. Amdahl's Law was published in 1967, the same year Tomasulo described the out-of-order mechanism every modern CPU still uses. Most of computer architecture is the same handful of equations, applied to different numbers.

The numbers, of course, are doing the heavy lifting. Dennard Scaling ended around 2006.
Moore's Law ended around 2015. The single-threaded performance growth rate dropped from 52%/year (1986–2003) to 3%/year (2015 onward). Every wall the principles describe is now what the field is actively routing around. The explosion of silicon for AI is the field collecting the answer the principles always pointed to: spend energy on what matters, spend silicon where the workload lives, and don't fight physics.

What follows is the computer architecture canon.

The Performance Equations

Four equations carry most of the weight. Every other principle in this post is a corollary, an empirical refinement, or a consequence of one of these.

THE IRON LAW

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
	​

=
Program
Instructions
	​

×
Instruction
Cycles
	​

×
Cycle
Time
	​


Time = Instruction Count × Cycles Per Instruction × Cycle Time

IC (instruction count) is set by the algorithm, the ISA, and the compiler. CPI (cycles per instruction) is set by the microarchitecture: pipelining, ILP, caches, out-of-order machinery. CT (cycle time) is set by the process node and the longest combinational path between latches.

Coined by Clark and Emer at DEC in the early 1980s; canonised by H&P in 1990. The point isn't that the equation is hard (it's trivial); it's that every optimisation has to land somewhere. A wider issue width attacks CPI; a vector ISA attacks IC; a deeper pipeline attacks CT (often at the cost of CPI). You cannot speed up a program without changing one of the three terms.

Modern superscalar integer cores sustain 0.25–0.5 CPI on tight loops (IPC 2–4); pointer-chasing code sits at CPI > 5. Apple's M4 and Intel's Lion Cove peak around IPC 8 on hand-tuned kernels. The three-decade story of CPU microarchitecture is the asymptotic battle to push CPI below 0.5 on real code, and it has stalled there.

AMDAHL'S LAW

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
	​


Where 
𝑝
p is the parallelisable fraction of a program and 
𝑁
N is the processor count. The serial tail dominates as 
𝑁
→
∞
N→∞: maximum speedup is bounded at 
1
/
(
1
−
𝑝
)
1/(1−p) regardless of how many processors you throw at the problem.

The single most quoted equation in the field, and the one that justifies the entire enterprise of making the common case fast, because no amount of effort spent optimising the rare case can overcome the serial fraction it leaves untouched.

If 95% of your code parallelises, the maximum possible speedup is 20×. If 99%, 100×. For frontier-AI training at 100,000+ chips, even a 0.01% serial fraction caps you at 10,000×, far below linear. Real systems are worse than Amdahl predicts, because the formula ignores communication and synchronisation overhead. Amdahl is an upper bound, not a target.

GUSTAFSON'S LAW

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

Where 
𝛼
α is the serial fraction of the scaled-up workload.

The counter to Amdahl. Amdahl assumes a fixed problem solved on more processors (strong scaling); Gustafson assumes the problem grows with the processor count (weak scaling). In practice, supercomputers don't shrink wallclocks on yesterday's problem; they tackle bigger problems in the same wallclock. Frontier-model training is weak-scaling: the model size and batch size grow with the cluster, so Amdahl's pessimism over-fires.

LITTLE'S LAW

𝐿
=
𝜆
𝑊
L=λW

Average concurrency = throughput × average latency.
Average number of things in a system = the rate at which they arrive × the average time they stay.

The most general principle in the entire field. Whenever you ask "how much do I need in flight to saturate this thing?", you are asking Little's Law.

It is used to size every buffer in a chip. Any buffer holding in-flight work has to be at least L = λW entries; make it shallower and it fills, back-pressures the producer, and throughput drops below the peak you were aiming for.

ROB Sizes: ROB ≥ IPC × stall latency
MLP: outstanding misses ≥ bandwidth × latency / line size
TCP Windows: window ≥ bandwidth × RTT
GPU Warp Counts: resident warps ≥ memory latency / arithmetic latency + 1

The same equation, over and over, applied at different layers of the stack.

A worked example: 1 TB/s HBM at 80 ns latency with 64-byte cache lines requires ~1,250 outstanding misses to saturate. This is exactly why H100 and B200 push MSHR counts and outstanding-load capacity so hard; without them, the bandwidth on the spec sheet is unreachable.

THE ROOFLINE MODEL

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
	​

=min(π
peak
	​

,I⋅β
peak
	​

)

𝑃
attainable
P
attainable
	​

 = attainable performance (FLOP/s)
𝜋
π = peak compute (FLOP/s)
𝛽
β = peak memory bandwidth (B/s)
𝐼
I = arithmetic intensity (FLOPs per byte loaded)

A kernel runs no faster than the lower of two ceilings: the hardware's peak FLOP rate, or the rate at which memory can feed it operands, with the kernel's arithmetic intensity deciding which one binds.

The ridge point (where the kernel transitions from memory- to compute-bound) is at 
𝐼
∗
=
𝜋
/
𝛽
I
∗
=π/β. Below it, performance scales linearly with bandwidth: 
𝑃
=
𝛽
⋅
𝐼
P=β⋅I.
Above it, performance saturates at peak: 
𝑃
=
𝜋
P=π.

The most useful single diagram in modern accelerator design.

π = 4.5 PF/s
P = β · I
memory-bound
compute-bound
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
Arithmetic Intensity (FLOP/B, log)
Performance (TFLOP/s, log)

Modern AI rooflines (dense FP8):

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

LLM kernel intensities tell the inference story:

Square GEMM (M = N = K = 4096) FP8: 
𝐼
≈
2
𝐾
/
3
≈
2,731
I≈2K/3≈2,731 FLOP/B, compute-bound.
GEMV (single-token decode step) FP8: 
𝐼
≈
2
I≈2 FLOP/B, memory-bound.

That single ratio is why prefill and training are compute-bound, why decode is bandwidth-bound, and why precision-halving (FP32 → FP16 → FP8 → FP4) helps even when peak FLOPs don't move: halving the bytes per element doubles 
𝐼
I. Each generation of accelerator pushes 
𝜋
π up faster than 
𝛽
β, so the ridge migrates rightward; workloads that were compute-bound on H100 can be bandwidth-bound on Rubin without changing a line of code.

The Walls

The walls are physics-and-economics asymptotes. They aren't theorems; they're empirical limits the field has been bumping against for two decades.

THE END OF DENNARD SCALING

Robert Dennard's 1974 paper made the gift Moore's Law was always meant to deliver. Shrink linear dimensions by 
1
/
𝑘
1/k, and you get: area 
↓
𝑘
2
↓k
2
, voltage 
↓
𝑘
↓k, frequency 
↑
𝑘
↑k, power per transistor 
↓
𝑘
2
↓k
2
, power density: constant. Every node, twice the transistors at the same area, the same power, and a higher clock, for free.

It held until ~2006. Then threshold voltage couldn't drop further without exponential subthreshold leakage; supply voltage stuck ~1V; clock frequency froze around 3–4 GHz.

The multicore turn was forced, not chosen. Without Dennard, the only remaining lever for performance is parallelism, and every architectural development since 2006 (multicore, GPUs, TPUs, chiplets, DSAs) is a consequence.

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
	​

=α⋅C⋅V
dd
2
	​

⋅f

𝑃
dyn
P
dyn
	​

 = dynamic power
𝛼
α = activity factor
𝐶
C = total switched capacitance
𝑉
𝑑
𝑑
V
dd
	​

 = supply voltage
𝑓
f = clock frequency

Dynamic (switching) power is quadratic in voltage and linear in frequency. Halving 
𝑉
𝑑
𝑑
V
dd
	​

 drops power by 4×: the entire basis for DVFS. But 
𝑉
V and 
𝑓
f are coupled (faster transistors need higher 
𝑉
V to meet timing), so above a sweet spot, power scales roughly cubically with frequency.

Leakage adds an exponential: 
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
therm
	​

 (
𝑉
𝑇
V
T
	​

 = threshold voltage; 
𝑉
𝑡
ℎ
𝑒
𝑟
𝑚
V
therm
	​

 ≈ 26 mV at room temp; 
𝑛
n ≈ 1–1.5). Drop the threshold voltage to scale, and leakage explodes. This is what killed Dennard.

The hard ceiling is power density, not power. Around 2004, single-die heat flux saturated near 100–150 W/cm², comparable to a hot plate. Cooling is bounded by die area, not total wattage; push more power through a fixed-area die and cooling cost rises exponentially.

Modern accelerators sit at 700 W (H100) → 1,000 W (B200) → 1,400 W (B300) → ~1,800 W (Rubin Ultra). Air cooling effectively ended with Hopper. Liquid is mandatory above ~1 kW per chip; immersion is on the table for the next generation after that.

THE MEMORY WALL

The framing was simple: CPU performance was growing ~60%/year, DRAM latency only ~7%/year. Two diverging exponentials. Downstream someplace, average memory access time approaches miss penalty regardless of hit rate.

Today: a DRAM miss costs ~200–300 cycles. A modern CPU without caches would stall almost continuously.

For accelerators, the memory wall takes a different shape. HBM bandwidth grows ~30%/year; peak compute ~60–100%/year. The arithmetic intensity required to be compute-bound rises every generation; the roofline ridge migrates right. The chip whose ridge sits in the workload's intensity range wins. That's why HBM capacity and bandwidth are more contested than peak FLOPs in modern AI silicon: peak is cheap, feeding it is expensive.

THE ILP WALL

Even with oracle prediction and infinite resources, achievable ILP plateaus around 7–60 depending on workload, with most SPEC benchmarks well under 10. With realistic predictors, the practical ceiling is ~5.

Why:

Branches. ~20% of instructions, 3–5% mispredict even with state-of-the-art TAGE-SC-L, and ~20-cycle bubble per mispredict.
True data dependencies. Hardware can't eliminate them; renaming only attacks false dependencies (WAW, WAR).
Memory aliasing. Ambiguity forces conservative serialisation.

Real cores reach IPC ~3–4 sustained on integer SPEC despite ROB sizes well over 500. Width above 8-wide has been tried (Power, Itanium) and the marginal returns flatten quickly. The gap between issue width and sustained IPC is the ILP wall, made concrete.

LATENCY LAGS BANDWIDTH

Patterson's rule of thumb: in the time bandwidth doubles, latency improves only 1.2–1.4×. Equivalently, bandwidth improves roughly as the square of latency. Across 25 years of microprocessors, DRAM, networks, and disks, the pattern is uniform: bandwidth scaled 100–1000×, latency 4–40×.

This is the most important practical principle in the post. You can buy bandwidth: more channels, wider buses, more lanes, more chips. You cannot buy latency past physical limits. Every architecture that wins, wins by hiding latency with concurrency rather than reducing it. Warps hide DRAM latency on GPUs. ROBs hide L2/L3 misses on CPUs. TMA hides global-memory latency behind matmul on Hopper. Patterson's law is the reason every one of these tricks exists.

THE SPEED OF LIGHT

In free space, ≈30 cm/ns. In copper PCB trace, ≈15 cm/ns (≈2/3 c). Practical floors:

1 mm on-chip wire: 5 ps physical, ~200 ps actual (RC delay dominates over ToF at sub-mm scales).
1 m cable: 7 ns one-way, 14 ns round-trip.
Rack-to-rack in a datacentre: ~100 ns one-way.
Across a continent: ~50 ms.

You can shorten paths. That's exactly what chiplets (20 mm cross-die → 1 mm hybrid-bonded), HBM (DRAM millimetres from compute, not centimetres), and rack-as-one-GPU domains do. But you cannot beat physics.

This is why NVL72's passive copper backplane has a maximum reach of ~2 m, and why NVL576 needed a redesigned chassis (Kyber) to keep every NVLink path within copper distance. Beyond that, the bits go on glass, and pluggable optics dominate the power budget.

Locality and the Memory Hierarchy
THE PRINCIPLE OF LOCALITY

Empirical, not provable. Programs use a small fraction of memory most of the time.

Two flavours:

Temporal locality. Data referenced now is likely to be referenced soon (loops, working sets).
Spatial locality. Data near just-referenced data is likely to be referenced soon (arrays, sequential access).

90/10 rule: 90% of execution time is spent in 10% of code. Locality is the only reason caches work at all. Without it, a cache would hit at rate (cache size / memory size), essentially zero. With it, hit rates of 95–99% are routine across general-purpose workloads.

Locality is also the principle every domain-specific architecture exploits more aggressively than a CPU does. A systolic array wires temporal reuse into the silicon: each weight is reused 128–256 times across the row without re-fetching. A scratchpad replaces a cache when the access pattern is predictable enough that hardware prediction is wasted silicon. Specialisation is, in part, the art of identifying which locality pattern your workload has and baking it into the topology.

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
	​

+MR⋅t
miss
	​


𝑡
hit
t
hit
	​

 = hit latency at this tier
MR = miss rate (fraction of accesses that miss this tier)
𝑡
miss
t
miss
	​

 = miss penalty (time to satisfy the miss from the next tier)

Recursive across levels: 
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
	​

=t
hit,L2
	​

+MR
L2
	​

⋅t
miss,L2
	​

, and so on through L3 and DRAM.

A modern datacentre AI hierarchy (B200 / GB200 NVL72 era), latency-ordered from a GPU's perspective:

Tier	Capacity	Latency	Bandwidth	Energy
Register file	~256 KB / SM	<1 ns	~20 TB/s / SM	~0.03 pJ/B
SRAM (SMEM / L1)	~228 KB / SM	~17 ns	~33 TB/s	~0.3 pJ/B
L2 cache	50–126 MB	~150 ns	~5 TB/s	~2 pJ/B
HBM (local GPU)	80–192 GB	~280 ns	3.4–8 TB/s	~40 pJ/B
HBM via NVLink (NVL72)	~13.8 TB pool	~1 µs	130 TB/s aggregate	~50 pJ/B
Host DRAM (PCIe Gen5)	~1 TB / node	~1–2 µs	~55 GB/s	~100 pJ/B
NVMe SSD (Gen5)	10s TB / node	~100 µs	~14 GB/s	~600 pJ/B
Cross-rack RDMA (XDR)	datacentre-scale	~2 µs	800 Gb/s / NIC	~225 pJ/B

The hierarchy spans ~7 orders of magnitude in capacity and ~5 in latency. Per-byte energy grows with distance even faster than latency does.

THE THREE C'S

Every cache miss is one of three:

Compulsory (cold). First reference. Reduce by larger lines or prefetching.
Capacity. Working set exceeds cache. Reduce by a larger cache.
Conflict. Associativity insufficient. Reduce by higher associativity. (Absent in fully-associative)

A useful fourth, Coherence, for multiprocessor invalidations.

The taxonomy is more useful than it looks. It tells you which lever to pull: compulsory misses don't shrink with a bigger cache, capacity misses don't shrink with prefetching, conflict misses don't shrink with longer lines.

BELADY'S MIN

Theorem: evicting the line whose next reference is furthest in the future minimises total misses. Optimal, but offline-only, since it requires future knowledge.

LRU and its approximations (RRIP, NRU, Hawkeye, Mockingjay) try to predict the future from the past. The empirical gap between LRU and MIN is ~1.5–2× more misses on typical workloads. Hawkeye (Jain & Lin, ISCA 2016) closes ~80% of that gap by learning MIN's decisions on past traces and replaying them as predictions. It is one of the prettier results of modern microarchitecture: the optimal policy is uncomputable, but it can be approximated by training on its own history.

Pipelining and Out-of-Order
PIPELINING SPEEDUP

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
	​

⋅
1+CPI
stall
	​

1
	​


𝑆
S = speedup over the unpipelined version
𝑁
N = pipeline depth (number of stages)
𝑘
k = number of instructions executed
CPI
stall
CPI
stall
	​

 = average stall cycles per instruction (from hazards)

For long programs, 
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
	​

). Throughput approaches one instruction per cycle; latency is unchanged. Pipelining is a pure throughput optimisation.

Three classes of hazard stall the pipeline:

Structural: two instructions need the same resource. Fix: replicate or pipeline the resource.
Data: register dependencies between instructions (RAW, WAW, WAR). Fix: forwarding or stalls for RAW; register renaming for the false ones (WAW, WAR).
Control: branches. Fix: predict and pay the penalty on mispredict.
OPTIMAL PIPELINE DEPTH

Performance-optimal depth: ~50 stages, ~18 FO4 per stage. Power-aware optimum: ~7 stages, ~22.5 FO4 per stage. When you optimise BIPS³/W instead of pure throughput, the answer collapses to a much shallower pipeline.

The Pentium 4 went deep (20–31 stages) chasing peak frequency and ran headlong into the power wall. Core 2 onwards retreated to ~14-stage pipelines: the architecturally-justified response. Latch overhead per stage, branch mispredict penalty (proportional to depth), and memory-stall blocking together cap depth long before the silicon does.

TOMASULO'S ALGORITHM

Solves WAW and WAR hazards via register renaming through reservation-station tags. Decouples issue from execution: instructions wait in reservation stations until operands arrive on the common data bus, then execute out of program order. In-order commit via the reorder buffer was added by Smith and Pleszkun in 1985, giving Tomasulo precise exceptions and clean branch-misprediction recovery: instructions execute out of order but retire in program order, so a fault or speculation-squash leaves the architectural state at a consistent point.

The mechanism is sixty years old. Every modern out-of-order CPU is a refinement of it. Wider, deeper, faster, but the same algorithm.

ROB SIZING AS LITTLE'S LAW

ROB
≥
IPC
target
⋅
𝑡
stall
ROB≥IPC
target
	​

⋅t
stall
	​


A ROB has to hold every in-flight instruction. To hide a stall, the ROB must be at least throughput × stall duration: Little's Law applied to the issue queue. A 300-cycle DRAM miss at IPC 4 implies a 1,200-entry ROB to hide completely. No real core has that.

Modern values: Intel Lion Cove (2024): 576. AMD Zen 5: 448. AMD Zen 3: 256.

Real cores are an order of magnitude too small to hide DRAM through OoO alone, so they rely on the cache hierarchy to absorb most stalls and use OoO to hide L1/L2 latencies. The lesson is that the ROB and the cache are two halves of the same latency-hiding budget. Spending more on one without the other is wasted silicon.

BRANCH PREDICTION

Branch CPI penalty:
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
	​

=f
branch
	​

⋅p
mispredict
	​

⋅penalty

CPI
branch
CPI
branch
	​

 = extra cycles per instruction due to branch mispredictions
𝑓
branch
f
branch
	​

 = fraction of instructions that are branches
𝑝
mispredict
p
mispredict
	​

 = probability the predictor gets a branch wrong
penalty = pipeline-flush cost per misprediction (cycles, ∝ pipeline depth)

Today: 
𝑓
branch
≈
0.20
f
branch
	​

≈0.20, 
𝑝
mispredict
≈
0.03
p
mispredict
	​

≈0.03, penalty ≈ 20 cycles → ~0.12 CPI added.

Predictor evolution:

Two-level (Yeh & Patt 1991): local + global history.
Perceptron (Jiménez & Lin, HPCA 2001): used in AMD Zen.
TAGE (Seznec & Michaud 2006): geometric history lengths, tagged.
TAGE-SC-L (Seznec, CBP-4 2014): current state of the art, ~3–5 MPKI on SPEC.

The remaining mispredictions on data-dependent branches (branches whose outcome depends on input values rather than control state) are the dominant pipeline overhead in modern OoO cores. They are also the hardest to attack: by definition, the predictor cannot learn them from program state alone.

Coherence and Consistency
MESI

The canonical cache-coherence protocol. Each cached line sits in one of four states:

Modified: dirty here, stale everywhere else; on a remote read from another core, write the line back to memory and downgrade to Shared.
Exclusive: clean, held only by this cache; can transition silently to Modified on a local write.
Shared: clean, may be cached elsewhere; a local write must broadcast an invalidation to the other caches first, then transition to Modified.
Invalid: not present.

Reads hit on M/E/S. Writes need exclusive ownership: M and E already have it (silent write); S must first broadcast an invalidation to upgrade to M. The four-state machine guarantees coherence: every cached copy of an address eventually agrees on its value.

M
Modified
E
Exclusive
S
Shared
I
Invalid

● read hit     ● read miss     ● write hit     ● write miss
solid = local processor action     dotted = snoop (another core's bus traffic)

Consistency is the harder problem (what ordering of memory operations across multiple addresses on multiple processors does the programmer see?), and is the subject of memory models (sequential, TSO, release-consistent, weak), separate from coherence.

Coherence cost scales with 
𝑁
N cores:

Snooping bus: bandwidth 
∝
𝑁
∝N. Breaks down past ~16 cores.
Directory: storage 
∝
log
⁡
𝑁
∝logN, but indirection latency. Used in modern mesh and ring NoCs.

This is why scale-up domains have a ceiling. NVL72 binds 72 GPUs into one coherent fabric. NVL576 scales to 576 dies. Beyond that, the cost of maintaining coherence outpaces the workload's tolerance for it, and the only escape is to drop coherence and switch to message-passing. Most architectures do this at the rack boundary (i.e. RDMA over InfiniBand); Google's TPU goes further, dropping coherence within scale-up itself (ICI is message-passing across the entire 9,216-chip superpod). Every architecture has to choose a coherence boundary, and the choice defines the natural unit of scale-up.

Energy and Data Movement
THE HOROWITZ ENERGY TABLE

Measured at 45 nm CMOS.

Operation	Energy
8-bit int ADD	0.03 pJ
32-bit int ADD	0.1 pJ
16-bit FP ADD	0.4 pJ
32-bit FP ADD	0.9 pJ
8-bit int MUL	0.2 pJ
32-bit FP MUL	3.7 pJ
32-bit register read	~0.1 pJ
8 KB SRAM read	~10 pJ
1 MB SRAM read	~100 pJ
DRAM access (64 b)	~640 pJ

A DRAM access costs ~6,400× a 32-bit add. Memory dominates compute by two to three orders of magnitude. At 7 nm and below, on-chip energy roughly halves; DRAM energy/bit barely moves. The gap widens with each node. HBM gets you to ~5 pJ/bit (HBM3), ~4 pJ/bit (HBM3E), ~2.5 pJ/bit (HBM4 projected), better than DDR5, but still 50× the cost of an on-chip ALU operation.

THE COST OF DISTANCE

Energy per data movement scales with distance. Approximate values at modern nodes:

Movement	Energy
Local register	~0.1 pJ
1 mm on-chip	~6 pJ
20 mm on-chip (cross-die)	~50 pJ
Off-chip (DRAM)	~640 pJ
Cross-rack (optical)	~10 nJ per word

This is the deepest principle in modern AI silicon design. Every architectural choice is a battle against data-movement energy. Bring compute to data, not data to compute.

Particularly:

Systolic arrays (TPU MXU, MI300X Matrix Cores): each weight reused 128–256× without leaving the array. Data reuse is wired into the silicon.
3D-stacked memory (HBM; MI300X's hybrid-bonded SoIC): puts memory < 1 mm from compute, instead of cm.
On-package HBM vs DDR DIMMs: ~5× lower pJ/bit, ~10× higher bandwidth.
Chiplets: shorten cross-die paths from cm-scale package routing to mm-scale interposer.
Wafer-scale (Cerebras): the on-die fabric is "free": same silicon, no package crossing, no PCB trace, no cable.
The Levers
MAKE THE COMMON CASE FAST

The corollary of Amdahl: you cannot speed up the program past 
1
/
(
1
−
𝑝
)
1/(1−p), so you must reduce the part that doesn't benefit from speedup, by optimising what executes most.

The 90/10 rule operationalises it: 10% of static code is 90% of dynamic execution. Profile, optimise the hot path, ignore the rest. It sounds obvious. It is also the most ignored principle in the field: generations of architects have built clever support for cases that almost never execute, paying area and power for unused capability. The principle is a reminder to measure first.

POLLACK'S RULE

Performance
∝
Area
Performance∝
Area
	​


Doubling core area buys ~1.4× performance. Many small cores beat one big core in performance per area. Pollack + Amdahl together predict almost the entire shape of modern heterogeneous chips: a few big cores to handle the serial fraction (Amdahl), many small cores for the parallel fraction (Pollack). ARM big.LITTLE, Apple's E-cores + P-cores, the GPU SM-vs-CPU split: all of them fall out of the same two equations.

SPECIALISATION

In a 64-bit out-of-order core, the actual ALU operation costs ~1% of the energy. The other 99% goes to instruction fetch, decode, rename, schedule, ROB, register file, and the cache hierarchy that feeds them. The general-purpose CPU spends 99% of its energy on overhead.

A domain-specific architecture strips the overhead. Static schedule → no fetch/decode/rename. Predictable access patterns → scratchpad replaces cache. Single-precision target → no mixed-precision pipeline. The Hennessy-Patterson 2018 Turing Lecture pinned it: ~100× efficiency available via specialisation, paid in generality.

THROUGHPUT VS LATENCY

Two distinct goals; almost always a trade-off.

Throughput = ops/second (aggregate). Bought by parallelism, pipelining, batching.
Latency = time per op (single flow). Reduced by caching, speculation, prefetching (when they hit).

CPUs optimise latency: deep OoO, big caches, branch prediction, few threads. GPUs optimise throughput: massive thread parallelism, SIMT, latency hidden by warp swap. The same workload looks completely different on the two.

Inference splits along this axis. Prefill is throughput-bound (batch many tokens through GEMM). Decode is latency-bound (one token at a time, weight-bound). Disaggregated serving (separate prefill and decode pools) wins exactly because the two regimes want different machines.

SURFACE-TO-VOLUME SCALING

For a workload partitioned across 
𝑃
P processors with computation 
∝
𝑉
/
𝑃
∝V/P and communication 
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
 in 
𝑑
d dimensions:

Comm
Comp
∝
1
𝐿
where 
𝐿
=
(
𝑉
𝑃
)
1
/
𝑑
Comp
Comm
	​

∝
L
1
	​

where L=(
P
V
	​

)
1/d

𝑃
P = number of processors (the partition count)
𝑉
V = total problem volume (e.g., grid points, matrix elements)
𝑆
S = surface area, aggregate data exchanged between neighbouring sub-domains each step
𝑑
d = dimensionality of the partition (2 for grids, 3 for cubes)
𝐿
L = linear size of one processor's sub-domain

Larger blocks per processor → less relative communication. This is the strong-scaling tax. Folklore in H&P; canonical reference in Foster's Designing and Building Parallel Programs (1995).

THE BANDWIDTH-DELAY PRODUCT

BDP
=
bandwidth
⋅
round-trip-delay
BDP=bandwidth⋅round-trip-delay

Required outstanding bytes to fill a link. Same form as Little's Law; it is Little's Law applied to networks.

A 400 Gbps link with 5 µs RTT requires ~250 KB in flight to saturate. For collectives: ring all-reduce achieves bandwidth-optimal pattern; bisection bandwidth bounds steady-state throughput.

Reliability at Scale
FIT AND MTBF

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
	​

⋅N
devices
	​

10
9
	​

hours

MTBF = Mean Time Between Failures, average wallclock time between any two failures in a system of 
𝑁
N devices.
FIT = Failures In Time: failures per 
10
9
10
9
 device-hours. Modern SRAM sits at ~100–1,000 FIT/Mbit at sea level (vendor- and node-specific; treat any specific number with skepticism unless backed by a JEDEC JESD89 test report).

At 100,000-GPU scale, the cluster MTBF for any single hardware fault is ~30 minutes. The architecture is partly defined by what you do when things break.

Defences:

ECC (SEC-DED): single-error correct, double-detect. ~12.5% storage overhead.
ChipKill: tolerates a whole DRAM chip failure.
Asynchronous checkpointing: save state every N steps, roll back on fault. Trade compute for resilience. Orbax-style checkpointing is now standard in frontier-AI training stacks.
Redundant computation, replication, hot spares: increasingly relevant at AI cluster scale.

The 100,000-chip training run is the regime where reliability stops being a hardware concern and becomes a system-design concern. Every ExaFLOPS-class deployment (NVL72 SuperPODs, TPU Ironwood pods, Helios racks) ships with the recovery story baked into the software.

Synthesis
READING ANY ARCHITECTURE: THE SIX QUESTIONS
What's the workload? Determines arithmetic intensity (roofline), control complexity, locality.
Where does data live? Memory hierarchy, scratchpad vs cache, capacity, bandwidth.
How does data get to compute? DMA, prefetch, async copy, TMA, systolic dataflow.
What does compute look like? Width, depth, precision, programmability, scalar/vec/matrix.
How do chips compose? Scale-up, scale-out, fabric topology.
Where do the joules go? Almost always: data movement.
THE DEEPER POINT

Every principle here predates 2010. The Iron Law still holds. Amdahl still holds. Little's Law was true in 1961 and will be true in 2061. The walls didn't disappear; the field routed around them with parallelism, caching, specialisation, and chiplets.

What changed is the numbers, and the workload. Dennard scaling ended; the multicore turn was forced. Moore ended; chiplets and 3D stacking emerged. The memory wall got worse, not better; HBM and on-package memory routed around it. The ILP wall held; throughput-oriented architectures (GPUs, TPUs) sidestepped it by giving up serial latency for parallel concurrency. The energy gap between compute and memory grew; the field organised around minimising data movement.

Every architecture is a different parametrisation of the same set of equations.