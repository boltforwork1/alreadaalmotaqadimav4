import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Flag, Globe, ShieldCheck, UserCheck, Eye, Zap, Globe as Globe2, Layers, MessageSquare, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';

const MotionLink = motion(Link);

export default function About() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Flag,
      titleKey: 'About.features.localIndependent.title',
      pointsKey: 'About.features.localIndependent.points',
    },
    {
      icon: Globe,
      titleKey: 'About.features.reachNetwork.title',
      pointsKey: 'About.features.reachNetwork.points',
    },
  ] as const;

  const pillars = [
    { icon: ShieldCheck, key: 'successParamount' },
    { icon: Eye, key: 'transparent' },
    { icon: Zap, key: 'efficientInvisible' },
    { icon: Globe2, key: 'globallyInclusive' },
    { icon: Layers, key: 'fullService' },
    { icon: MessageSquare, key: 'accessible' },
  ] as const;

  return (
    <div>
      {/* ===== Hero ===== */}
      <section className="relative isolate min-h-[30rem] overflow-hidden bg-navy-950 sm:min-h-[34rem]">
        <img
          src="/images/pages/aboutbc.jpg"
          alt={t('About.hero.imageAlt')}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-navy-950/70" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/80 via-navy-950/45 to-navy-950/85" />
        <div className="pointer-events-none absolute inset-x-0 bottom-8 -z-10 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-80" />
        <div className="relative mx-auto flex min-h-[30rem] max-w-5xl flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[34rem] sm:px-8 lg:px-12">
          <motion.img
            src="/logo.png"
            alt={t('About.hero.logoAlt')}
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-44 drop-shadow-[0_12px_30px_rgba(0,0,0,0.5)] sm:w-56 lg:w-64"
          />
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 font-display text-2xl font-bold tracking-tight text-teal-400 sm:text-4xl lg:text-5xl"
          >
            {t('About.hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-100 sm:text-lg"
          >
            {t('About.hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* ===== Who is Central Hub ===== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-bold uppercase tracking-wider text-teal-500">
                {t('About.who.eyebrow')}
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-slate-900">
                {t('About.who.title')}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                {t('About.who.p1')}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {t('About.who.p2')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-[420px] overflow-hidden rounded-3xl shadow-xl shadow-slate-900/10 sm:h-[520px]"
            >
              <img
                src="/images/pages/about.jpg"
                alt={t('About.who.imageAlt')}
                className="h-full w-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Features: Local & Independent / Reach & Network ===== */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature, i) => {
              const points = t(feature.pointsKey, { returnObjects: true }) as string[];
              return (
                <motion.div
                  key={feature.titleKey}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50">
                    <feature.icon className="h-8 w-8 text-teal-500" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-slate-900">
                    {t(feature.titleKey)}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" strokeWidth={2} />
                        <span className="text-sm leading-relaxed text-slate-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Our Approach (6 Pillars) ===== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-teal-500">
              {t('About.approach.eyebrow')}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              {t('About.approach.title')}
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 transition-colors duration-300 group-hover:bg-teal-100">
                  <pillar.icon className="h-6 w-6 text-teal-500" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  {t(`About.approach.pillars.${pillar.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {t(`About.approach.pillars.${pillar.key}.text`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Cost Calculator CTA ===== */}
      <section className="bg-teal-500 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl font-bold leading-tight tracking-tight text-navy-900 sm:text-3xl"
          >
            {t('About.cta.title')}
          </motion.h2>
          <MotionLink
            to="/cost-calculator"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-navy-900 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-navy-900/25 transition-all duration-200 hover:bg-navy-800 hover:shadow-2xl hover:shadow-navy-900/40"
          >
            {t('About.cta.button')}
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180" />
          </MotionLink>
        </div>
      </section>
    </div>
  );
}
