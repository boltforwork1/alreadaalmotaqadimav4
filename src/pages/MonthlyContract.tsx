import { motion } from 'framer-motion';
import {
  Headset,
  Stamp,
  FileText,
  Briefcase,
  ShieldCheck,
  CircleCheck,
  FileCheck,
  CalendarClock,
  RefreshCw,
  Check,
  ArrowRight,
  Crown,
  Users,
  Building2,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ConsultationForm from '@/components/ConsultationForm';

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

const heroBenefitIcons: LucideIcon[] = [Headset, Stamp, ShieldCheck, CalendarClock];

const benefitIcons: LucideIcon[] = [
  Headset,
  Stamp,
  FileText,
  Briefcase,
  ShieldCheck,
  CircleCheck,
  FileCheck,
  CalendarClock,
  RefreshCw,
];

const packageIcons: LucideIcon[] = [Users, Building2, Crown];
const packageKeys = ['basic', 'standard', 'premium'] as const;

/* ------------------------------------------------------------------ */
/* Government partners                                                */
/* ------------------------------------------------------------------ */

const governmentPartners = [
  { key: 'gdrfa', logo: '/images/pages/gdfra.png' },
  { key: 'mohre', logo: '/images/pages/mohre.png' },
  { key: 'rta', logo: '/images/pages/rta.png' },
  { key: 'dubai', logo: '/images/pages/dubai.png' },
  { key: 'municipality', logo: '/images/pages/muni.png' },
  { key: 'sira', logo: '/images/pages/sira.png' },
];

/* ------------------------------------------------------------------ */
/* Animations                                                          */
/* ------------------------------------------------------------------ */

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function MonthlyContract() {
  const { t } = useTranslation();

  const heroBenefits = t('MonthlyContract.hero.benefits', { returnObjects: true }) as Record<string, { title: string; description: string }>;
  const heroBenefitKeys = ['dedicatedPro', 'visaManagement', 'govApprovals', 'expiryReminders'] as const;

  const benefitItems = t('MonthlyContract.keyBenefits.items', { returnObjects: true }) as { title: string; description: string }[];

  const packages = packageKeys.map((key, i) => ({
    key,
    icon: packageIcons[i],
    name: t(`MonthlyContract.packages.items.${key}.name`),
    subtitle: t(`MonthlyContract.packages.items.${key}.subtitle`),
    price: [2500, 3500, 4500][i],
    currency: t(`MonthlyContract.packages.items.${key}.currency`),
    priceSuffix: t(`MonthlyContract.packages.items.${key}.priceSuffix`),
    features: t(`MonthlyContract.packages.items.${key}.features`, { returnObjects: true }) as string[],
    button: t(`MonthlyContract.packages.items.${key}.button`),
    popular: key === 'standard',
    popularLabel: key === 'standard' ? t('MonthlyContract.packages.items.standard.popular') : null,
  }));

  return (
    <main className="pt-20">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-transparent" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="pointer-events-none absolute -start-40 top-0 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -end-40 bottom-0 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-teal-400">
              {t('MonthlyContract.hero.eyebrow')}
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold leading-snug text-white lg:text-5xl">
              {t('MonthlyContract.hero.title')}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              {t('MonthlyContract.hero.subtitle')}
            </p>

            {/* Hero benefits highlights */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {heroBenefitKeys.map((benefitKey, i) => {
                const item = heroBenefits[benefitKey];
                const Icon = heroBenefitIcons[i];
                return (
                  <motion.div
                    key={benefitKey}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                    className="group flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm transition-colors duration-200 hover:border-teal-500/40 hover:bg-white/[0.1]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/15 text-teal-400 transition-colors duration-200 group-hover:bg-teal-500/25">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-sm font-bold text-white">{item.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-400">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Intro ===== */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-lg font-medium leading-relaxed text-teal-700">
              {t('MonthlyContract.intro')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== Monthly PRO Packages ===== */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-teal-500">
              {t('MonthlyContract.packages.eyebrow')}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              {t('MonthlyContract.packages.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
              {t('MonthlyContract.packages.subtitle')}
            </p>
          </div>

          <motion.div
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {packages.map((pkg) => (
              <motion.div
                key={pkg.key}
                variants={cardVariants}
                className={`group relative flex flex-col rounded-2xl border-2 p-8 transition-all duration-300 hover:-translate-y-1 ${
                  pkg.popular
                    ? 'border-teal-400 bg-gradient-to-br from-teal-50 to-white shadow-xl shadow-teal-500/15 lg:scale-105'
                    : 'border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-slate-900/5'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 start-1/2 -translate-x-1/2 rtl:translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-teal-500 to-teal-400 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-teal-500/30">
                      {pkg.popularLabel}
                    </span>
                  </div>
                )}

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300 ${
                    pkg.popular
                      ? 'bg-teal-100 group-hover:bg-teal-200'
                      : 'bg-slate-100 group-hover:bg-teal-50'
                  }`}
                >
                  <pkg.icon
                    className={`h-7 w-7 ${pkg.popular ? 'text-teal-500' : 'text-slate-600 group-hover:text-teal-500'}`}
                    strokeWidth={1.75}
                  />
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-navy-900">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-teal-600">{pkg.subtitle}</p>

                {/* Price */}
                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-bold text-navy-900">
                    {pkg.price.toLocaleString()}
                  </span>
                  <span className="text-sm font-semibold text-slate-500">{pkg.currency}</span>
                  <span className="text-sm text-slate-400">{pkg.priceSuffix}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          pkg.popular ? 'bg-teal-100' : 'bg-slate-100'
                        }`}
                      >
                        <Check
                          className={`h-3.5 w-3.5 ${pkg.popular ? 'text-teal-600' : 'text-slate-600'}`}
                          strokeWidth={3}
                        />
                      </span>
                      <span className="text-sm leading-relaxed text-navy-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-teal-500 to-teal-400 text-white shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40'
                      : 'border border-teal-400 bg-teal-50 text-navy-900 hover:bg-teal-100'
                  }`
                  }
                >
                  {pkg.button}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 rtl:rotate-180" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== Benefits Grid (3x3) ===== */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-teal-500">
              {t('MonthlyContract.keyBenefits.eyebrow')}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              {t('MonthlyContract.keyBenefits.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
              {t('MonthlyContract.keyBenefits.subtitle')}
            </p>
          </div>

          <motion.div
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {benefitItems.map((benefit, i) => {
              const Icon = benefitIcons[i] ?? Headset;
              return (
                <motion.div
                  key={`benefit-${i}`}
                  variants={cardVariants}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-900/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 transition-colors duration-300 group-hover:bg-teal-100">
                    <Icon className="h-6 w-6 text-teal-500" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-navy-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== Government Authorities We Support ===== */}
      <section className="relative overflow-hidden border-y border-[#eee5d8] bg-[#fbf7ef] py-12 sm:py-14">
        <div className="pointer-events-none absolute -start-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-white/70 blur-3xl" />
        <div className="pointer-events-none absolute -end-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#eadfcf]/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            className="mb-8 text-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              {t('MonthlyContract.governmentPartners.eyebrow')}
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy-950 sm:text-3xl">
              {t('MonthlyContract.governmentPartners.title')}
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#eadfce] bg-[#fffdf9] shadow-sm sm:grid-cols-3 lg:grid-cols-6"
          >
            {governmentPartners.map((partner) => (
              <motion.div
                key={partner.key}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                }}
                className="group flex min-h-32 items-center justify-center border-b border-[#eee5d8] px-4 py-5 transition-colors duration-200 hover:bg-white sm:min-h-36 sm:px-5 sm:py-6 lg:min-h-40 lg:border-b-0 lg:border-e lg:last:border-e-0"
              >
                <img
                  src={partner.logo}
                  alt={t(`MonthlyContract.governmentPartners.items.${partner.key}`)}
                  className="max-h-24 w-full max-w-[9rem] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-28"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== Consultation Form ===== */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <ConsultationForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
