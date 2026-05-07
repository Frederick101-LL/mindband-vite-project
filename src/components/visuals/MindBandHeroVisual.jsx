import { motion } from "framer-motion";

export default function MindBandHeroVisual({ bandColor, activeFeature }) {
  const ActiveIcon = activeFeature.icon;

  return (
    <div className="relative mx-auto flex min-h-[520px] w-full max-w-[560px] items-center justify-center overflow-hidden rounded-[3rem] border border-white/70 bg-[linear-gradient(135deg,#ffffff_0%,#eff8fb_46%,#e7eef3_100%)] shadow-2xl shadow-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(125,211,252,.42),transparent_28%),radial-gradient(circle_at_80%_78%,rgba(45,212,191,.22),transparent_30%)]" />
      <motion.div
        aria-hidden="true"
        className="absolute h-[360px] w-[360px] rounded-full border border-white/70"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute left-7 top-7 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-medium text-slate-600 backdrop-blur">
        MindBand Concept
      </div>

      <motion.div
        className="relative h-[430px] w-[250px]"
        initial={{ opacity: 0, y: 28, rotate: -9 }}
        whileInView={{ opacity: 1, y: 0, rotate: -6 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        animate={{ y: [0, -10, 0] }}
        style={{ filter: `drop-shadow(0 34px 42px ${bandColor.shadow})` }}
      >
        <div
          className="absolute left-1/2 top-0 h-full w-[96px] -translate-x-1/2 rounded-full"
          style={{ background: bandColor.value }}
        />
        <div
          className="absolute left-1/2 top-8 h-[365px] w-[132px] -translate-x-1/2 rounded-full border-[14px] border-white/10"
          style={{ background: `linear-gradient(180deg, ${bandColor.value}, ${bandColor.value}dd)` }}
        />
        <div className="absolute left-1/2 top-[92px] z-10 h-[252px] w-[128px] -translate-x-1/2 rounded-[2rem] bg-gradient-to-br from-[#f7ede1] to-[#9ea4ab] p-[5px] shadow-2xl">
          <div className="h-full rounded-[1.7rem] bg-[#07090d] p-4 text-white">
            <div className="text-center text-lg font-semibold text-cyan-300">MindBand</div>
            <div className="mt-1 text-center text-[10px] leading-tight text-slate-300">
              AI wellness
              <br />
              support
            </div>
            <div className="my-3 h-px bg-white/15" />
            <div className="text-center text-[10px] uppercase tracking-[0.18em] text-slate-300">
              {activeFeature.detail}
            </div>
            <div className="mx-auto mt-4 flex h-20 w-20 items-center justify-center rounded-full bg-[conic-gradient(from_20deg,#22d3ee,#34d399,#fde047,#fb7185,#22d3ee)] p-[5px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#07090d]">
                <ActiveIcon className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="mt-4 text-center text-2xl font-semibold text-yellow-300">
              {activeFeature.metric}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-1">
              <span className="h-1.5 rounded-full bg-cyan-300" />
              <span className="h-1.5 rounded-full bg-white/30" />
              <span className="h-1.5 rounded-full bg-white/30" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 h-5 w-24 -translate-x-1/2 rounded-full bg-black/20 blur-[1px]" />
      </motion.div>

      <motion.div
        className="absolute bottom-7 right-7 w-44 rounded-[1.5rem] border border-white/70 bg-white/75 p-4 shadow-xl shadow-slate-200 backdrop-blur"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.7 }}
      >
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
          Live insight
        </div>
        <div className="mt-2 text-lg font-semibold text-slate-950">{activeFeature.label}</div>
        <div className="mt-3 h-2 rounded-full bg-slate-200">
          <motion.div
            className="h-2 rounded-full bg-sky-500"
            initial={{ width: "35%" }}
            animate={{ width: activeFeature.id === "sleep" ? "72%" : activeFeature.id === "heart" ? "58%" : "64%" }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
