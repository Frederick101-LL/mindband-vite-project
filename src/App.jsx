import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { qaItems, slides, speakers } from "./data/presentationData";
import AppDashboardVisual from "./components/visuals/AppDashboardVisual";
import CommercialPosterVisual from "./components/visuals/CommercialPosterVisual";
import MindBandHeroVisual from "./components/visuals/MindBandHeroVisual";
import PresentationPreviewVisual from "./components/visuals/PresentationPreviewVisual";
import ProductDetailVisual from "./components/visuals/ProductDetailVisual";
import StudentLifestyleVisual from "./components/visuals/StudentLifestyleVisual";

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

const designCards = [
  [BatteryChargingIcon, "All-day routine", "Designed for regular daily use between class, study, and rest."],
  [ActivityIcon, "Simple dashboard", "Stress, sleep, and heart rate insights are displayed clearly."],
  [BellRingIcon, "Gentle reminders", "Short, non-intrusive prompts encourage mindful breaks."],
  [ShieldCheckIcon, "Responsible support", "Wellness-focused guidance without replacing professional services."],
];

const aiMessages = [
  ["Morning", "You slept 7h 30m. Start with water and a short plan."],
  ["Afternoon", "Your stress is moderate. Try a 3-minute breathing break."],
  ["Evening", "Wind down early tonight. Tomorrow starts easier with rest."],
];

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function FeatureButton({ feature, active, onClick }) {
  const Icon = feature.icon;

  return (
    <button
      type="button"
      onClick={() => onClick(feature.id)}
      className={`group rounded-[1.75rem] border p-5 text-left transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-200 ${
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

function Nav({ presentationMode, onTogglePresentation }) {
  const [open, setOpen] = useState(false);
  const links = ["Overview", "Features", "Lifestyle", "Design", "AI Support", "Presentation", "Launch"];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/75 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#overview" className="text-lg font-semibold tracking-tight text-slate-950">
          MindBand
        </a>
        {!presentationMode && (
          <div className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="transition hover:text-slate-950"
              >
                {link}
              </a>
            ))}
          </div>
        )}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onTogglePresentation}
            className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-900 transition hover:border-sky-200 hover:bg-sky-50"
          >
            {presentationMode ? "Exit presentation" : "Presentation mode"}
          </button>
          {!presentationMode && (
            <a
              href="#launch"
              className="rounded-full bg-slate-950 px-5 py-2 text-sm font-medium text-white transition hover:bg-sky-700"
            >
              Join beta
            </a>
          )}
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-full p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Open navigation menu"
        >
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-slate-700">
            {!presentationMode &&
              links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onTogglePresentation();
              }}
              className="rounded-full bg-slate-950 px-5 py-3 text-left font-medium text-white"
            >
              {presentationMode ? "Exit presentation" : "Presentation mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function SlidesOverview({ compact = false }) {
  return (
    <div className="hide-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-2 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
      {slides.map((slide, index) => (
        <motion.article
          key={slide.number}
          className="min-w-[270px] snap-start rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-lg shadow-slate-100 lg:min-w-0"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.05, duration: 0.45 }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="text-3xl font-semibold tracking-[-0.04em] text-sky-600">{slide.number}</div>
            <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              {slide.duration}
            </div>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-slate-950">{slide.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{slide.summary}</p>
          {!compact && (
            <div className="mt-4 flex flex-wrap gap-2">
              {slide.points.map((point) => (
                <span key={point} className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                  {point}
                </span>
              ))}
            </div>
          )}
          <div className="mt-4 text-sm font-medium text-slate-500">{slide.owner}</div>
        </motion.article>
      ))}
    </div>
  );
}

function SpeakerScripts() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {speakers.map((speaker, index) => (
        <motion.article
          key={speaker.name}
          className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06, duration: 0.45 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-sky-700">{speaker.name}</div>
              <h3 className="mt-1 text-xl font-semibold text-slate-950">{speaker.role}</h3>
            </div>
            <div className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
              {speaker.duration}
            </div>
          </div>
          <div className="mt-4 text-sm font-medium text-slate-500">{speaker.slides}</div>
          <p className="mt-4 leading-7 text-slate-700">{speaker.script}</p>
          <div className="mt-5 rounded-2xl bg-sky-50 p-4 text-sm leading-6 text-sky-900">
            <span className="font-semibold">Transition: </span>
            {speaker.transition}
          </div>
        </motion.article>
      ))}
    </div>
  );
}

function QAAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-3">
      {qaItems.map((item, index) => {
        const open = activeIndex === index;

        return (
          <div key={item.question} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
            <button
              type="button"
              onClick={() => setActiveIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
              aria-expanded={open}
            >
              <span className="font-semibold text-slate-950">{item.question}</span>
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-slate-100 text-slate-600">
                {open ? "-" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                    <div className="text-sm font-semibold text-sky-700">{item.owner}</div>
                    <p className="mt-2 leading-7 text-slate-600">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function CommercialPage({
  activeFeature,
  activeCopy,
  selectedColor,
  setActiveFeature,
  setSelectedColor,
  onOpenPresentation,
}) {
  return (
    <>
      <section id="overview" className="relative overflow-hidden px-5 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_15%,rgba(14,165,233,.18),transparent_34%),radial-gradient(circle_at_20%_50%,rgba(20,184,166,.12),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
              <SparklesIcon className="h-4 w-4" /> AI-powered wellness support for students
            </div>
            <h1 className="max-w-4xl text-6xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-7xl lg:text-8xl">
              Feel better. Study better.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-600">
              MindBand is a student-friendly wearable concept that helps international students track stress, improve sleep, and stay balanced every day.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 font-medium text-white transition hover:bg-sky-700"
              >
                Explore features <ChevronRightIcon className="ml-1 h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={onOpenPresentation}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 font-medium text-slate-900 transition hover:border-sky-200 hover:bg-sky-50"
              >
                Open presentation mode
              </button>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm text-slate-600">
              <div>
                <span className="block text-2xl font-semibold text-slate-950">24/7</span>
                daily support
              </div>
              <div>
                <span className="block text-2xl font-semibold text-slate-950">AUD $79-99</span>
                target price
              </div>
              <div>
                <span className="block text-2xl font-semibold text-slate-950">4</span>
                core features
              </div>
            </div>
          </Reveal>
          <MindBandHeroVisual bandColor={selectedColor} activeFeature={activeCopy} />
        </div>
      </section>

      <section id="features" className="bg-slate-950 px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Interactive demo</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
              One band. Four simple ways to support student wellness.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Select a feature below and the MindBand screen slides into a new wellness status.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <FeatureButton
                  key={feature.id}
                  feature={feature}
                  active={activeFeature === feature.id}
                  onClick={setActiveFeature}
                />
              ))}
            </div>
            <div className="overflow-hidden rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl shadow-black/30">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeFeature}-${selectedColor.name}`}
                  initial={{ opacity: 0, x: 48 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -48 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <MindBandHeroVisual bandColor={selectedColor} activeFeature={activeCopy} />
                </motion.div>
              </AnimatePresence>
              <div className="mt-6 rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10">
                <h3 className="text-2xl font-semibold">{activeCopy.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{activeCopy.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lifestyle" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Student lifestyle</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Designed for real student routines.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              MindBand fits study sessions, part-time work, campus life, and evening wind-down routines. The visual system stays calm so it feels like support, not pressure.
            </p>
          </Reveal>
          <StudentLifestyleVisual />
        </div>
      </section>

      <section id="design" className="bg-slate-50 px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Design</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Lightweight by design. Calm by feeling.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              The look is minimal, soft, and student-friendly: a matte silicone strap, rounded screen, and a simple dashboard that avoids overwhelming users with too much data.
            </p>
            <div className="mt-8 flex flex-wrap gap-3" aria-label="Choose band colour">
              {colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`flex items-center gap-3 rounded-full border px-4 py-3 text-sm font-medium transition focus:outline-none focus:ring-4 focus:ring-sky-200 ${
                    selectedColor.name === color.name
                      ? "border-slate-950 bg-white"
                      : "border-slate-200 bg-white/70 hover:border-slate-400"
                  }`}
                  aria-pressed={selectedColor.name === color.name}
                >
                  <span className="h-5 w-5 rounded-full" style={{ backgroundColor: color.value }} />
                  {color.name}
                </button>
              ))}
            </div>
          </Reveal>
          <ProductDetailVisual bandColor={selectedColor} />
        </div>
        <div className="mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {designCards.map(([Icon, title, text], index) => (
            <Reveal key={title} delay={index * 0.05}>
              <div className="h-full rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="ai-support" className="overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50 px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">AI Support</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Helpful prompts, not pressure.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              MindBand gives short, supportive messages based on patterns. The purpose is to help students notice habits earlier and take small positive actions.
            </p>
            <div className="mt-8 grid gap-4">
              {aiMessages.map(([time, message], index) => (
                <motion.div
                  key={time}
                  className="rounded-[1.5rem] bg-white p-5 shadow-lg shadow-sky-100 ring-1 ring-slate-100"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07, duration: 0.45 }}
                >
                  <div className="mb-2 inline-flex rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
                    {time}
                  </div>
                  <p className="text-lg font-semibold leading-7 text-slate-950">"{message}"</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
          <AppDashboardVisual />
        </div>
      </section>

      <section id="presentation" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Presentation toolkit</p>
              <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
                Built for the product pitch and the classroom presentation.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                The webpage works as a commercial landing page first, then switches into a structured BUS110 presentation view for speakers, timing, slide ownership, transitions, and Q&A.
              </p>
              <button
                type="button"
                onClick={onOpenPresentation}
                className="mt-8 rounded-full bg-slate-950 px-7 py-4 font-medium text-white transition hover:bg-sky-700"
              >
                Launch speaker view
              </button>
            </Reveal>
            <PresentationPreviewVisual slides={slides} speakers={speakers} />
          </div>
          <div className="mt-14">
            <SlidesOverview />
          </div>
          <div className="mt-14">
            <SpeakerScripts />
          </div>
        </div>
      </section>

      <section id="launch" className="bg-slate-950 px-5 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Launch strategy</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Made for orientation week, student centres, and everyday campus life.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              A student-first launch can use university partnerships, orientation week booths, social media, and student ambassadors to reach international students naturally.
            </p>
            <div className="mt-8 rounded-[2rem] bg-white p-6 text-slate-950">
              <h3 className="text-2xl font-semibold">Student-friendly package</h3>
              <div className="mt-6 space-y-4">
                {[
                  "Affordable target price: AUD $79-99",
                  "Simple wellness dashboard",
                  "AI check-ins for daily routines",
                  "Clear statement: wellness support only, not medical diagnosis",
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                    <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-sky-600" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <CommercialPosterVisual />
        </div>
      </section>
    </>
  );
}

function PresentationMode({ onExit }) {
  return (
    <motion.section
      className="min-h-screen bg-slate-50 px-5 pb-20 pt-28 lg:px-8"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">
              Speaker mode
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">
              BUS110 MindBand presentation.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Use this view during the group presentation: 6 slides, 4 speakers, timing, transitions, scripts, and Q&A in one place.
            </p>
            <button
              type="button"
              onClick={onExit}
              className="mt-8 rounded-full bg-slate-950 px-7 py-4 font-medium text-white transition hover:bg-sky-700"
            >
              Back to commercial page
            </button>
          </div>
          <PresentationPreviewVisual slides={slides} speakers={speakers} />
        </div>

        <div className="mt-16">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Slides overview</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-950">
                Six-slide structure
              </h2>
            </div>
            <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              Target total: 5 minutes
            </div>
          </div>
          <SlidesOverview />
        </div>

        <div className="mt-16">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Speaker scripts</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-950">
              Four-person speaking plan
            </h2>
          </div>
          <SpeakerScripts />
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.55fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Q&A preparation</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-950">
              Likely questions
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              These answers keep the product positioned as responsible wellness support, not a medical claim.
            </p>
          </div>
          <QAAccordion />
        </div>
      </div>
    </motion.section>
  );
}

export default function MindBandWebsite() {
  const [activeFeature, setActiveFeature] = useState("stress");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [presentationMode, setPresentationMode] = useState(false);

  const activeCopy = useMemo(
    () => features.find((item) => item.id === activeFeature) || features[0],
    [activeFeature]
  );

  const openPresentation = () => {
    setPresentationMode(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closePresentation = () => {
    setPresentationMode(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen scroll-smooth bg-white font-sans text-slate-950">
      <Nav
        presentationMode={presentationMode}
        onTogglePresentation={presentationMode ? closePresentation : openPresentation}
      />
      <AnimatePresence mode="wait">
        {presentationMode ? (
          <PresentationMode key="presentation" onExit={closePresentation} />
        ) : (
          <motion.div
            key="commercial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <CommercialPage
              activeFeature={activeFeature}
              activeCopy={activeCopy}
              selectedColor={selectedColor}
              setActiveFeature={setActiveFeature}
              setSelectedColor={setSelectedColor}
              onOpenPresentation={openPresentation}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
