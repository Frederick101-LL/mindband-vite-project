import { motion } from "framer-motion";

export default function CommercialPosterVisual() {
  return (
    <div className="relative overflow-hidden rounded-[3rem] bg-white p-6 text-slate-950 shadow-2xl shadow-black/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(14,165,233,.18),transparent_26%),linear-gradient(135deg,#ffffff,#eef7fa)]" />
      <motion.div
        className="relative min-h-[430px] rounded-[2.5rem] border border-slate-200 p-8"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
          Campus launch poster
        </div>
        <h3 className="mt-8 text-6xl font-semibold tracking-[-0.06em] sm:text-7xl">
          MindBand
        </h3>
        <p className="mt-4 max-w-sm text-3xl font-semibold leading-tight text-slate-800">
          Feel better. Study better.
        </p>
        <p className="mt-5 max-w-sm leading-7 text-slate-600">
          AI wellness support for international students.
        </p>
        <div className="mt-8 inline-flex rounded-full bg-slate-950 px-5 py-3 text-lg font-semibold text-white">
          AUD $79-99
        </div>

        <motion.div
          className="absolute bottom-10 right-8 h-64 w-40 rotate-[-10deg]"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute left-1/2 top-0 h-full w-16 -translate-x-1/2 rounded-full bg-[#0f6f86]" />
          <div className="absolute left-1/2 top-16 h-32 w-28 -translate-x-1/2 rounded-[1.75rem] bg-slate-950 p-4 shadow-2xl">
            <div className="text-center text-sm font-semibold text-cyan-300">Calm</div>
            <div className="mx-auto mt-6 h-16 w-16 rounded-full bg-[conic-gradient(#22d3ee,#34d399,#fde047,#22d3ee)] p-1">
              <div className="h-full rounded-full bg-slate-950" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
