import { motion } from "framer-motion";

const cards = [
  ["Stress Level", "Moderate", "Take a 3-minute breathing break.", "bg-sky-50 text-sky-700"],
  ["Sleep Quality", "7h 30m", "Your rest pattern is improving.", "bg-violet-50 text-violet-700"],
  ["Heart Rate", "72 bpm", "Stable during study time.", "bg-rose-50 text-rose-700"],
  ["AI Check-in", "Ready", "Plan one quiet routine tonight.", "bg-emerald-50 text-emerald-700"],
];

export default function AppDashboardVisual() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[3rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-sky-100"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7 }}
    >
      <div className="rounded-[2.5rem] bg-slate-950 p-5 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-400">MindBand App</div>
            <div className="text-2xl font-semibold">Today</div>
          </div>
          <div className="rounded-full bg-cyan-300 px-3 py-1 text-sm font-semibold text-slate-950">
            Balanced
          </div>
        </div>
        <div className="mt-6 rounded-[2rem] bg-white/10 p-5">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-sm text-slate-300">Wellness rhythm</div>
              <div className="mt-1 text-4xl font-semibold">82%</div>
            </div>
            <div className="flex h-20 items-end gap-1">
              {[42, 54, 38, 70, 62, 84, 76].map((height, index) => (
                <motion.span
                  key={height + index}
                  className="w-3 rounded-full bg-cyan-300"
                  initial={{ height: 8 }}
                  whileInView={{ height }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {cards.map(([title, value, text, tone], index) => (
          <motion.div
            key={title}
            className="rounded-[1.5rem] border border-slate-100 bg-white p-4 shadow-lg shadow-slate-100"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
          >
            <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${tone}`}>
              {title}
            </div>
            <div className="mt-3 text-2xl font-semibold text-slate-950">{value}</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
