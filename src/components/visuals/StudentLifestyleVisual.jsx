import { motion } from "framer-motion";

export default function StudentLifestyleVisual() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[3rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,.28),transparent_28%),radial-gradient(circle_at_80%_72%,rgba(45,212,191,.18),transparent_32%)]" />
      <div className="relative mx-auto flex h-[380px] max-w-4xl items-end justify-center">
        <div className="absolute left-8 top-8 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
          Campus study moment
        </div>
        <motion.div
          className="absolute bottom-12 h-28 w-[82%] rounded-[2rem] bg-white/10 shadow-2xl shadow-black/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute bottom-32 left-[16%] h-32 w-44 rounded-t-[1.5rem] border border-white/20 bg-slate-800 p-3 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="h-full rounded-xl bg-gradient-to-br from-sky-300/40 to-cyan-200/10 p-4">
            <div className="h-2 w-20 rounded-full bg-white/60" />
            <div className="mt-4 h-2 w-28 rounded-full bg-white/35" />
            <div className="mt-2 h-2 w-20 rounded-full bg-white/25" />
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-36 right-[18%] h-40 w-40 rounded-[2rem] bg-sky-100 p-5 text-slate-950 shadow-2xl"
          initial={{ opacity: 0, rotate: 5, y: 24 }}
          whileInView={{ opacity: 1, rotate: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
            Notes
          </div>
          <div className="mt-5 space-y-2">
            <div className="h-2 rounded-full bg-slate-300" />
            <div className="h-2 w-4/5 rounded-full bg-slate-300" />
            <div className="h-2 w-3/5 rounded-full bg-slate-300" />
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-1/2 h-20 w-64 -translate-x-1/2 rounded-full bg-[#d6b596]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute right-16 top-5 h-10 w-16 rounded-full bg-[#0f6f86] p-1 shadow-lg">
            <div className="h-full rounded-full bg-slate-950 text-center text-[10px] font-semibold leading-8 text-cyan-200">
              Calm
            </div>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-[47%] h-28 w-24 rounded-t-full bg-[#f0c9a8]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <div className="absolute left-1/2 top-6 h-6 w-14 -translate-x-1/2 rounded-full bg-slate-900/80" />
          <div className="absolute -bottom-20 left-1/2 h-24 w-32 -translate-x-1/2 rounded-t-[2rem] bg-cyan-700" />
        </motion.div>
      </div>
    </div>
  );
}
