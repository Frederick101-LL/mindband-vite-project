import { motion } from "framer-motion";

const callouts = [
  ["Soft matte strap", "Comfortable for study, work, and sleep."],
  ["Rounded display", "Quick wellness status without data overload."],
  ["Sensor area", "Designed for routine wellness signals."],
];

export default function ProductDetailVisual({ bandColor }) {
  return (
    <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,.13),transparent_28%),radial-gradient(circle_at_82%_85%,rgba(20,184,166,.13),transparent_24%)]" />
      <div className="relative grid gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <motion.div
          className="relative mx-auto h-[360px] w-[260px]"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="absolute left-1/2 top-6 h-[310px] w-[120px] -translate-x-1/2 rounded-full"
            style={{ backgroundColor: bandColor.value }}
          />
          <div className="absolute left-1/2 top-[96px] h-[160px] w-[136px] -translate-x-1/2 rounded-[2rem] bg-gradient-to-br from-slate-200 to-slate-500 p-2 shadow-2xl">
            <div className="h-full rounded-[1.45rem] bg-slate-950 p-4">
              <div className="text-xs font-semibold text-cyan-300">MindBand</div>
              <div className="mt-7 flex items-end gap-1">
                {[42, 72, 56, 84, 64].map((height, index) => (
                  <span
                    key={height + index}
                    className="w-3 rounded-full bg-cyan-300/80"
                    style={{ height }}
                  />
                ))}
              </div>
              <div className="mt-5 h-2 rounded-full bg-white/15">
                <div className="h-2 w-2/3 rounded-full bg-yellow-300" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 grid w-20 -translate-x-1/2 grid-cols-3 gap-2">
            <span className="h-3 rounded-full bg-slate-300" />
            <span className="h-3 rounded-full bg-slate-500" />
            <span className="h-3 rounded-full bg-slate-300" />
          </div>
        </motion.div>

        <div className="relative space-y-4">
          {callouts.map(([title, text], index) => (
            <motion.div
              key={title}
              className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-5 shadow-lg shadow-slate-100 backdrop-blur"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-sky-50 text-sm font-semibold text-sky-700">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
                  <p className="mt-1 leading-7 text-slate-600">{text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
