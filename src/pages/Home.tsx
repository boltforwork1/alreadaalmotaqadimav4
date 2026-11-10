import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Briefcase, ShieldCheck, Check, CircleCheck as CheckCircle, Building2, Globe as Globe2, Archive, Award, Stamp, UserCheck, Landmark, Plane, ShoppingCart, ChevronDown, MapPin } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

type JurisdictionKey = 'mainland' | 'freeZone' | 'freelanceAbuDhabi' | 'eTrader';

type JurisdictionItem = {
  key: JurisdictionKey;
  path: string;
  icon: typeof Building2;
  image: string;
};

const jurisdictionItems: JurisdictionItem[] = [
  {
    key: 'mainland',
    path: '/mainland',
    icon: Building2,
    image: 'https://images.pexels.com/photos/25309271/pexels-photo-25309271.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'freeZone',
    path: '/free-zone',
    icon: Globe2,
    image: '/images/pages/freezone.jpg',
  },
  {
    key: 'freelanceAbuDhabi',
    path: '/freelance-license-abu-dhabi',
    icon: Briefcase,
    image: '/images/pages/freelance.jpg',
  },
  {
    key: 'eTrader',
    path: '/e-trader-license',
    icon: ShoppingCart,
    image: '/images/pages/e-trader.jpg',
  },
];

const jurisdictionContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const jurisdictionCardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

type ServiceKey = 'companyFormation' | 'companyLiquidation' | 'businessLicense' | 'proVisaServices' | 'corporateSponsor' | 'bankLiaison' | 'governmentServices' | 'immigrationLabour';

type ServiceItem = {
  key: ServiceKey;
  icon: typeof Building2;
};

const serviceItems: ServiceItem[] = [
  { key: 'companyFormation', icon: Building2 },
  { key: 'companyLiquidation', icon: Archive },
  { key: 'businessLicense', icon: Award },
  { key: 'proVisaServices', icon: Stamp },
  { key: 'corporateSponsor', icon: UserCheck },
  { key: 'bankLiaison', icon: Landmark },
  { key: 'governmentServices', icon: ShieldCheck },
  { key: 'immigrationLabour', icon: Plane },
];

type StatKey = 'clientsHelped' | 'yearsExperience' | 'expertConsultants' | 'clientSatisfaction';

const statItems: { endValue: number; suffix: string; labelKey: StatKey }[] = [
  { endValue: 2500, suffix: '+', labelKey: 'clientsHelped' },
  { endValue: 12, suffix: '+', labelKey: 'yearsExperience' },
  { endValue: 25, suffix: '+', labelKey: 'expertConsultants' },
  { endValue: 97, suffix: '%', labelKey: 'clientSatisfaction' },
];

const heroHighlights = [
  { icon: Award, titleKey: 'Home.hero.highlights.trusted', descKey: 'Home.hero.highlights.trustedDesc' },
  { icon: Building2, titleKey: 'Home.hero.highlights.uaeExpertise', descKey: 'Home.hero.highlights.uaeExpertiseDesc' },
  { icon: UserCheck, titleKey: 'Home.hero.highlights.endToEndService', descKey: 'Home.hero.highlights.endToEndServiceDesc' },
];

export default function Home() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', contact: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = t('Home.faq.items', { returnObjects: true }) as { q: string; a: string }[];
  const formationBenefits = t('Home.formation.benefits', { returnObjects: true }) as string[];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim()) return;
    setSubmitted(true);
    setForm({ name: '', contact: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div>
      {/* ===== Hero Section ===== */}
      <section className="relative flex min-h-[72vh] flex-col justify-center overflow-hidden">
        <img
          src="/images/bc copy.jpg"
          alt={t('Home.hero.heroImageAlt')}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-navy-950/95 via-navy-950/75 to-navy-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 lg:px-12 lg:py-12">
          <div className="max-w-2xl text-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-navy-950/40 px-4 py-1.5 text-sm font-medium text-teal-200 backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-teal-400" />
              {t('Home.hero.badge')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 font-display text-4xl font-bold leading-[1.5] tracking-tight text-white sm:text-5xl lg:text-5xl"
            >
              {t('Home.hero.title')}{' '}
              <span className="bg-gradient-to-r from-teal-300 to-teal-100 bg-clip-text text-transparent">
                {t('Home.hero.titleHighlight')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg"
            >
              {t('Home.hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-400 px-7 py-3.5 text-base font-semibold text-navy-900 shadow-xl shadow-teal-500/25 transition-all duration-200 hover:shadow-2xl hover:shadow-teal-500/40 hover:brightness-105"
              >
                <MapPin className="h-5 w-5" />
                {t('Home.hero.getStartedToday')}
              </Link>
              <a
                href="https://wa.me/971504229389"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300/70 bg-navy-950/20 px-7 py-3.5 text-base font-medium text-white transition-colors duration-200 hover:border-teal-300 hover:text-teal-200"
              >
                <WhatsAppIcon className="h-5 w-5" />
                <bdi>{t('Home.hero.whatsappNumber')}</bdi>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-7 grid grid-cols-1 gap-5 border-t border-white/20 pt-5 sm:grid-cols-3"
            >
              {heroHighlights.map((item) => (
                <div key={item.titleKey} className="flex items-center gap-3">
                  <item.icon className="h-9 w-9 shrink-0 text-teal-300" strokeWidth={1.5} />
                  <div>
                    <p className="font-display text-sm font-bold text-white">{t(item.titleKey)}</p>
                    <p className="mt-0.5 text-xs text-slate-300">{t(item.descKey)}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Choose Your Business Jurisdiction ===== */}
      <section className="bg-white pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <span className="text-sm font-bold uppercase tracking-wider text-teal-500">
              {t('Home.jurisdictions.eyebrow')}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              {t('Home.jurisdictions.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
              {t('Home.jurisdictions.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={jurisdictionContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {jurisdictionItems.map((item) => {
              const features = t(`Home.jurisdictions.items.${item.key}.features`, { returnObjects: true }) as string[];
              return (
                <motion.div
                  key={item.path}
                  variants={jurisdictionCardVariants}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-navy-900/10"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={t(`Home.jurisdictions.items.${item.key}.imageAlt`)}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent" />
                    <div className="absolute bottom-3 start-3 flex h-10 w-10 items-center justify-center rounded-lg bg-navy-950/85 text-teal-300 backdrop-blur-sm">
                      <item.icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold leading-tight text-navy-900">
                      {t(`Home.jurisdictions.items.${item.key}.name`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-500">
                      {t(`Home.jurisdictions.items.${item.key}.description`)}
                    </p>
                    <ul className="mt-5 flex-1 space-y-2.5">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-100">
                            <Check className="h-3 w-3 text-teal-600" strokeWidth={3} />
                          </span>
                          <span className="text-sm leading-relaxed text-navy-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={item.path}
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-500 px-4 py-2.5 text-sm font-semibold text-navy-950 transition-all duration-200 hover:bg-teal-400"
                    >
                      {t(`Home.jurisdictions.items.${item.key}.buttonText`)}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== Company Formation Intro ===== */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-bold uppercase tracking-wider text-teal-500">
                {t('Home.formation.eyebrow')}
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-slate-900">
                {t('Home.formation.title')}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                {t('Home.formation.description')}
              </p>
            </motion.div>

            {/* Right: Benefits List */}
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="flex flex-col gap-4"
            >
              {formationBenefits.map((benefit, i) => (
                <motion.li
                  key={`formation-benefit-${i}`}
                  custom={i}
                  variants={{
                    hidden: { opacity: 0, x: 24 },
                    show: (delay: number) => ({
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.4, delay: delay * 0.08 },
                    }),
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-6 w-6 shrink-0 text-teal-500" strokeWidth={2} />
                  <span className="text-base font-medium text-slate-700">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ===== Services Grid ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-teal-500">
              {t('Home.services.eyebrow')}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              {t('Home.services.title')}
            </h2>
          </div>

          {/* Grid */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceItems.map((service, i) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
                className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 transition-colors duration-300 group-hover:bg-teal-100">
                  <service.icon className="h-8 w-8 text-teal-500" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  {t(`Home.services.items.${service.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {t(`Home.services.items.${service.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* View All Services CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-400 px-7 py-3.5 text-base font-semibold text-navy-900 shadow-lg shadow-teal-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-teal-500/40 hover:brightness-105"
            >
              {t('Home.services.viewAllServices')}
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Stats / Social Proof Banner ===== */}
      <section className="relative overflow-hidden bg-navy-950 py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-teal-500/5 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-teal-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {statItems.map((stat, i) => (
              <motion.div
                key={stat.labelKey}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-5xl font-bold text-teal-500">
                  <AnimatedCounter endValue={stat.endValue} suffix={stat.suffix} />
                </div>
                <div className="mt-3 text-lg text-slate-300">{t(`Home.stats.${stat.labelKey}`)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ / SEO Content ===== */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          {/* Header */}
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-teal-500">
              {t('Home.faq.eyebrow')}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              {t('Home.faq.title')}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {t('Home.faq.subtitle')}
            </p>
          </div>

          {/* Accordion */}
          <div className="mt-12 flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`overflow-hidden rounded-xl border bg-white transition-colors duration-200 ${
                    isOpen ? 'border-teal-300' : 'border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
                  >
                    <span
                      className={`font-display text-base font-semibold sm:text-lg ${
                        isOpen ? 'text-teal-600' : 'text-slate-900'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-teal-500' : 'text-slate-400'
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-base text-slate-700">{t('Home.faq.stillHaveQuestions')}</p>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-400 px-7 py-3.5 text-base font-semibold text-navy-900 shadow-lg shadow-teal-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-teal-500/40 hover:brightness-105"
            >
              {t('Home.faq.ctaButton')}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== Request a Free Quote ===== */}
      <section className="relative overflow-hidden bg-navy-950 py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-teal-500/5 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-teal-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-2xl px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="text-sm font-bold uppercase tracking-wider text-teal-400">{t('Home.quote.eyebrow')}</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t('Home.quote.title')}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              {t('Home.quote.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-navy-200">{t('Home.quote.fullNameLabel')}</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t('Home.quote.fullNamePlaceholder')}
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-navy-400 transition-colors focus:border-teal-500/50 focus:bg-white/10 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-navy-200">{t('Home.quote.contactLabel')}</label>
                <input
                  type="text"
                  required
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  placeholder={t('Home.quote.contactPlaceholder')}
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-navy-400 transition-colors focus:border-teal-500/50 focus:bg-white/10 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex h-[46px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-teal-500 to-teal-400 px-7 text-base font-semibold text-navy-900 shadow-lg shadow-teal-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-teal-500/40 hover:brightness-105"
              >
                {submitted ? (
                  <>
                    <Check className="h-5 w-5" />
                    {t('Home.quote.buttonSent')}
                  </>
                ) : (
                  <>
                    {t('Home.quote.button')}
                    <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-center text-sm text-teal-300"
              >
                {t('Home.quote.successMessage')}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
