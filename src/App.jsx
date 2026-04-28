import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const SvgIcon = ({ children, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const BrainIcon = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M9 3a4 4 0 0 0-4 4v1a4 4 0 0 0 0 8v1a4 4 0 0 0 7 2.65A4 4 0 0 0 19 17v-1a4 4 0 0 0 0-8V7a4 4 0 0 0-7-2.65A4 4 0 0 0 9 3Z" />
    <path d="M12 4v16" />
    <path d="M8 8h1" />
    <path d="M8 13h2" />
    <path d="M15 8h1" />
    <path d="M14 13h2" />
  </SvgIcon>
);

const MoonIcon = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M21 13.8A8.5 8.5 0 1 1 10.2 3a7 7 0 0 0 10.8 10.8Z" />
  </SvgIcon>
);

const HeartPulseIcon = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
    <path d="M3 12h4l2-3 3 6 2-3h7" />
  </SvgIcon>
);

const GraduationCapIcon = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c3 2 9 2 12 0v-5" />
  </SvgIcon>
);

const ShieldCheckIcon = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-5" />
  </SvgIcon>
);

const SparklesIcon = ({ className }) => (
  <SvgIcon className={className}>
    <path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
    <path d="m5 15 .8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15Z" />
    <path d="m19 13 .7 1.8 1.8.7-1.8.7L19 19l-.7-1.8-1.8-.7 1.8-.7L19 13Z" />
  </SvgIcon>
);

const ChevronRightIcon = ({ className }) => (
  <SvgIcon className={className}>
    <path d="m9 18 6-6-6-6" />
  </SvgIcon>
);

const CheckIcon = ({ className }) => (
  <SvgIcon className={className}>
    <path d="m20 6-11 11-5-5" />
  </SvgIcon>
);

const MenuIcon = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </SvgIcon>
);

const XIcon = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </SvgIcon>
);

const ActivityIcon = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M22 12h-4l-3 8L9 4l-3 8H2" />
  </SvgIcon>
);

const BatteryChargingIcon = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M3 7h12a2 2 0 0 1 2 2v1h2v4h-2v1a2 2 0 0 1-2 2H3V7Z" />
    <path d="m11 8-3 4h4l-3 4" />
  </SvgIcon>
);

const BellRingIcon = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 6 3 8H3c0-2 3-1 3-8Z" />
    <path d="M10 20a2 2 0 0 0 4 0" />
    <path d="M4 4 2 6" />
    <path d="m22 6-2-2" />
  </SvgIcon>
);

const colors = [
  { name: "Calm Teal", value: "#0f6f86", shadow: "rgba(15,111,134,.35)" },
  { name: "Graphite", value: "#242a31", shadow: "rgba(36,42,49,.28)" },
  { name: "Soft Sand", value: "#d6c5ab", shadow: "rgba(214,197,171,.35)" },
];

const features = [
  {
    id: "stress",
    label: "Stress",
    icon: BrainIcon,
    title: "Understand stress before it builds up.",
    text: "MindBand reads daily patterns such as heart rate, rest, and activity to show a simple stress status students can understand at a glance.",
    metric: "Moderate",
    detail: "Real-time stress indicator",
  },
  {
    id: "sleep",
    label: "Sleep",
    icon: MoonIcon,
    title: "Build better rest habits, one night at a time.",
    text: "Simple sleep tracking helps students see rest duration and receive gentle reminders for healthier routines.",
    metric: "7h 30m",
    detail: "Sleep quality insight",
  },
  {
    id: "heart",
    label: "Heart",
    icon: HeartPulseIcon,
    title: "See wellness signals in a cleaner way.",
    text: "Heart rate insights are presented in plain language, so students can focus on balance rather than complicated health data.",
    metric: "72 bpm",
    detail: "Heart rate insights",
  },
  {
    id: "checkin",
    label: "AI Check-in",
    icon: SparklesIcon,
    title: "A daily check-in that feels supportive, not clinical.",
    text: "The app can ask short mood questions and suggest small actions, such as a breathing break or contacting student support.",
    metric: "Breathe",
    detail: "AI-powered support",
  },
];

function ProductMockup({ bandColor, activeFeature }) {
  const active = features.find((item) => item.id === activeFeature) || features[0];
  const Icon = active.icon;

  return (
    <div className="relative mx-auto flex h-[520px] w-full max-w-[520px] items-center justify-center overflow-hidden rounded-[3rem] bg-gradient-to-br from-white via-sky-50 to-slate-100 shadow-2xl shadow-slate-200">
      <div className="absolute left-8 top-8 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-slate-600 backdrop-blur">
        MindBand Concept
      </div>
      <motion.div
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative h-[410px] w-[220px] rotate-[-8deg]"
        style={{ filter: `drop-shadow(0 30px 40px ${bandColor.shadow})` }}
      >
        <div
          className="absolute left-1/2 top-0 h-full w-[92px] -translate-x-1/2 rounded-full"
          style={{ background: bandColor.value }}
        />
        <div
          className="absolute left-1/2 top-8 h-[350px] w-[128px] -translate-x-1/2 rounded-full border-[12px] border-white/10"
          style={{ background: `linear-gradient(180deg, ${bandColor.value}, ${bandColor.value}dd)` }}
        />
        <div className="absolute left-1/2 top-[94px] z-10 h-[246px] w-[122px] -translate-x-1/2 rounded-[2rem] bg-gradient-to-br from-[#f2e7d8] to-[#b6b1a9] p-[5px] shadow-xl">
          <div className="h-full rounded-[1.65rem] bg-black p-4 text-white">
            <div className="text-center text-lg font-semibold text-cyan-300">MindBand</div>
            <div className="mt-1 text-center text-[10px] leading-tight text-slate-300">AI for your<br />mind & body</div>
            <div className="my-3 h-px bg-white/15" />
            <div className="text-center text-[10px] uppercase tracking-[0.18em] text-slate-300">{active.detail}</div>
            <div className="mx-auto mt-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-400 via-yellow-300 to-rose-500 p-[5px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                <Icon className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="mt-4 text-center text-2xl font-semibold text-yellow-300">{active.metric}</div>
            <div className="mt-4 grid grid-cols-3 gap-1">
              <span className="h-1.5 rounded-full bg-cyan-300" />
              <span className="h-1.5 rounded-full bg-white/30" />
              <span className="h-1.5 rounded-full bg-white/30" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 h-5 w-20 -translate-x-1/2 rounded-full bg-black/20" />
      </motion.div>
    </div>
  );
}

function FeatureButton({ feature, active, onClick }) {
  const Icon = feature.icon;
  return (
    <button
      type="button"
      onClick={() => onClick(feature.id)}
      className={`group rounded-3xl border p-5 text-left transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-200 ${
        active
          ? "border-sky-300 bg-white shadow-xl shadow-sky-100"
          : "border-slate-200 bg-white/70 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
      }`}
      aria-pressed={active}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 group-hover:bg-sky-100">
        <Icon className="h-6 w-6" />
      </div>
      <div className="text-lg font-semibold text-slate-950">{feature.label}</div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{feature.text}</p>
    </button>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["Overview", "Features", "Design", "AI Support", "Launch"];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#overview" className="text-lg font-semibold tracking-tight text-slate-950">MindBand</a>
        <div className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="transition hover:text-slate-950">
              {link}
            </a>
          ))}
        </div>
        <a href="#launch" className="hidden rounded-full bg-slate-950 px-5 py-2 text-sm font-medium text-white transition hover:bg-sky-700 md:inline-flex">
          Join beta
        </a>
        <button type="button" onClick={() => setOpen(!open)} className="rounded-full p-2 text-slate-700 hover:bg-slate-100 md:hidden" aria-label="Open navigation menu">
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-slate-700">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} onClick={() => setOpen(false)}>{link}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default function MindBandWebsite() {
  const [activeFeature, setActiveFeature] = useState("stress");
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const activeCopy = useMemo(
    () => features.find((item) => item.id === activeFeature) || features[0],
    [activeFeature]
  );

  const designCards = [
    [BatteryChargingIcon, "All-day routine", "Designed for regular daily use between class, study, and rest."],
    [ActivityIcon, "Simple dashboard", "Stress, sleep, and heart rate insights are displayed clearly."],
    [BellRingIcon, "Gentle reminders", "Short, non-intrusive prompts encourage mindful breaks."],
    [ShieldCheckIcon, "Responsible support", "Wellness-focused guidance without replacing professional services."],
  ];

  return (
    <main className="min-h-screen scroll-smooth bg-white font-sans text-slate-950">
      <Nav />

      <section id="overview" className="relative overflow-hidden px-5 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_15%,rgba(14,165,233,.18),transparent_34%),radial-gradient(circle_at_20%_50%,rgba(20,184,166,.12),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
              <SparklesIcon className="h-4 w-4" /> AI-powered wellness support for students
            </div>
            <h1 className="max-w-4xl text-6xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-7xl lg:text-8xl">Feel better. Study better.</h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-600">
              MindBand is a student-friendly wearable concept that helps international students track stress, improve sleep, and stay balanced every day.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#features" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 font-medium text-white transition hover:bg-sky-700">
                Explore features <ChevronRightIcon className="ml-1 h-4 w-4" />
              </a>
              <a href="#design" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 font-medium text-slate-900 transition hover:border-slate-300 hover:bg-slate-50">See design</a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm text-slate-600">
              <div><span className="block text-2xl font-semibold text-slate-950">24/7</span>daily support</div>
              <div><span className="block text-2xl font-semibold text-slate-950">79–99</span>AUD target price</div>
              <div><span className="block text-2xl font-semibold text-slate-950">4</span>core features</div>
            </div>
          </motion.div>
          <ProductMockup bandColor={selectedColor} activeFeature={activeFeature} />
        </div>
      </section>

      <section id="features" className="bg-slate-950 px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Interactive demo</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">One band. Four simple ways to support student wellness.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">Select a feature below and the MindBand screen changes instantly, just like a product demo section on a modern launch page.</p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <FeatureButton key={feature.id} feature={feature} active={activeFeature === feature.id} onClick={setActiveFeature} />
              ))}
            </div>
            <div className="rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl shadow-black/30">
              <ProductMockup bandColor={selectedColor} activeFeature={activeFeature} />
              <div className="mt-6 rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10">
                <h3 className="text-2xl font-semibold">{activeCopy.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{activeCopy.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="design" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Design</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">Lightweight by design. Calm by feeling.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              The look is minimal, soft, and student-friendly: a matte silicone strap, rounded screen, and a simple dashboard that avoids overwhelming users with too much data.
            </p>
            <div className="mt-8 flex flex-wrap gap-3" aria-label="Choose band colour">
              {colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`flex items-center gap-3 rounded-full border px-4 py-3 text-sm font-medium transition focus:outline-none focus:ring-4 focus:ring-sky-200 ${selectedColor.name === color.name ? "border-slate-950" : "border-slate-200 hover:border-slate-400"}`}
                  aria-pressed={selectedColor.name === color.name}
                >
                  <span className="h-5 w-5 rounded-full" style={{ backgroundColor: color.value }} />
                  {color.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {designCards.map(([Icon, title, text]) => (
              <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-100">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-support" className="overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">AI Support</p>
              <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">Helpful prompts, not pressure.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                MindBand gives short, supportive messages based on patterns. The purpose is to help students notice habits earlier and take small positive actions.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                ["Morning", "You slept 7h 30m. Start with water and a short plan."],
                ["Afternoon", "Your stress is moderate. Try a 3-minute breathing break."],
                ["Evening", "Wind down early tonight. Tomorrow starts easier with rest."],
              ].map(([time, message]) => (
                <motion.div key={time} whileHover={{ y: -8 }} className="rounded-[2rem] bg-white p-7 shadow-xl shadow-sky-100 ring-1 ring-slate-100">
                  <div className="mb-5 inline-flex rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">{time}</div>
                  <p className="text-xl font-semibold leading-8 text-slate-950">“{message}”</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="launch" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[3rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Launch strategy</p>
              <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">Made for orientation week, student centres, and everyday campus life.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                A student-first launch can use university partnerships, orientation week booths, social media, and student ambassadors to reach international students naturally.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="mailto:hello@mindband.example" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 font-medium text-slate-950 transition hover:bg-cyan-100">Contact project team</a>
                <a href="#overview" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-medium text-white transition hover:bg-white/10">Back to top</a>
              </div>
            </div>
            <div className="rounded-[2.5rem] bg-white p-6 text-slate-950">
              <h3 className="text-2xl font-semibold">Student-friendly package</h3>
              <div className="mt-6 space-y-4">
                {["Affordable target price: AUD $79–99", "Simple wellness dashboard", "AI check-ins for daily routines", "Clear statement: wellness support only, not medical diagnosis"].map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                    <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-sky-600" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
