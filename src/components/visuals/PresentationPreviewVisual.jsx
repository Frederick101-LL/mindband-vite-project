import { motion } from "framer-motion";

export default function PresentationPreviewVisual({ slides, speakers }) {
  return (
    <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-100">
      <div className="rounded-[2.5rem] bg-slate-950 p-6 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              BUS110 presentation
            </div>
            <h3 className="mt-2 text-3xl font-semibold">5-minute speaker view</h3>
          </div>
          <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950">
            4 speakers
          </div>
        </div>

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/15">
          <motion.div
            className="h-full rounded-full bg-cyan-300"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.number}
              className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/10"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="text-lg font-semibold text-cyan-200">{slide.number}</div>
              <div className="mt-2 text-xs leading-5 text-slate-300">{slide.title}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              className="rounded-2xl bg-white p-4 text-slate-950"
              initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
            >
              <div className="text-sm font-semibold text-sky-700">{speaker.name}</div>
              <div className="mt-1 font-semibold">{speaker.role}</div>
              <div className="mt-2 text-sm text-slate-500">{speaker.duration}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
