import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Circle as XCircle,
  Wallet,
  Plane,
  FileText,
  Award,
  Briefcase,
  CalendarCheck,
  Check,
  ArrowRight,
  Calculator,
  IdCard,
  Users as UsersIcon,
  Stamp,
  Car,
  ShieldCheck,
} from 'lucide-react';

type ServiceKey =
  | 'tradeLicense'
  | 'notaryPublic'
  | 'mohre'
  | 'gdrfa'
  | 'sira'
  | 'rta'
  | 'proServices'
  | 'goldenVisa'
  | 'emiratesId'
  | 'bankAccount'
  | 'immigration'
  | 'liquidation';

type Service = {
  key: ServiceKey;
  path: string;
  icon: typeof XCircle;
  image?: string;
};

const services: Service[] = [
  {
    key: 'tradeLicense',
    path: '/services/trade-license',
    icon: FileText,
    image: 'https://images.pexels.com/photos/6814526/pexels-photo-6814526.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'notaryPublic',
    path: '/notary-services',
    icon: Stamp,
    image: '/images/pages/courts copy 2.jpg',
  },
  {
    key: 'mohre',
    path: '/mohre-services',
    icon: UsersIcon,
    image: 'https://images.pexels.com/photos/36765720/pexels-photo-36765720.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'gdrfa',
    path: '/gdrfa-services',
    icon: Stamp,
    image: 'https://images.pexels.com/photos/33497885/pexels-photo-33497885.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'sira',
    path: '/sira-services',
    icon: ShieldCheck,
    image: 'https://images.pexels.com/photos/20783671/pexels-photo-20783671.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'rta',
    path: '/rta-services',
    icon: Car,
    image: '/images/pages/rta.jpg',
  },
  {
    key: 'proServices',
    path: '/pro-services',
    icon: Briefcase,
    image: 'https://images.pexels.com/photos/8112138/pexels-photo-8112138.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'goldenVisa',
    path: '/services/golden-visa',
    icon: Award,
    image: '/images/pages/gvisa.jpg',
  },
  {
    key: 'emiratesId',
    path: '/emirates-id',
    icon: IdCard,
    image: '/images/pages/id.jpg',
  },
  {
    key: 'bankAccount',
    path: '/services/bank-account',
    icon: Wallet,
    image: 'https://images.pexels.com/photos/8062357/pexels-photo-8062357.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'immigration',
    path: '/services/immigration',
    icon: Plane,
    image: 'https://images.pexels.com/photos/39075595/pexels-photo-39075595.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'liquidation',
    path: '/services/liquidation',
    icon: XCircle,
    image: 'https://images.pexels.com/photos/9169925/pexels-photo-9169925.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
];

const heroServiceIcons: Record<string, typeof FileText> = {
  tradeLicense: FileText,
  employee: UsersIcon,
  mohre: Briefcase,
  immigration: Plane,
  municipality: ShieldCheck,
  rta: Car,
  corporate: Wallet,
  ongoing: CalendarCheck,
};

const heroServiceKeys = ['tradeLicense', 'employee', 'mohre', 'immigration', 'municipality', 'rta', 'corporate', 'ongoing'] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const governmentPartners = [
  { key: 'gdrfa', logo: '/images/pages/gdfra.png' },
  { key: 'mohre', logo: '/images/pages/mohre.png' },
  { key: 'rta', logo: '/images/pages/rta.png' },
  { key: 'dubai', logo: '/images/pages/dubai.png' },
  { key: 'municipality', logo: '/images/pages/muni.png' },
  { key: 'sira', logo: '/images/pages/sira.png' },
];

export default function Services() {
  const { t } = useTranslation();
  const featuredFeatures = t('Services.corporateServices.featured.features', { returnObjects: true }) as string[];

  return (
    <main>
      {/* Services hero */}
      <section className="relative overflow-hidden bg-[#f7f8fa]">
        <div className="pointer-events-none absolute -start-24 -top-24 h-72 w-72 rounded-full border-[26px] border-white/80" />
        <div className="pointer-events-none absolute bottom-[-7rem] start-[44%] h-72 w-72 rotate-45 border-[34px] border-teal-500/20" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:min-h-[32rem] lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-12 lg:py-16"
          >
            <div className="max-w-2xl">
              <p className="font-display text-4xl font-bold leading-[1.02] tracking-tight text-navy-950 sm:text-5xl lg:text-[3.6rem]">
                {t('Services.hero.title')}
                <span className="block text-teal-600">{t('Services.hero.titleHighlight')}</span>
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-700 sm:text-lg">
                {t('Services.hero.description')}
              </p>

              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-2.5 sm:grid-cols-4">
                {heroServiceKeys.map((serviceKey, index) => {
                  const ServiceIcon = heroServiceIcons[serviceKey];
                  return (
                    <motion.div
                      key={serviceKey}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.25 + index * 0.05 }}
                      className="flex min-h-[4.75rem] items-center gap-2 rounded-lg border border-slate-200 bg-white/90 px-2.5 py-2 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-600">
                        <ServiceIcon className="h-5 w-5" strokeWidth={1.7} />
                      </span>
                      <span className="text-[11px] font-bold leading-tight text-navy-900 sm:text-xs">
                        {t(`Services.hero.heroItems.${serviceKey}.label`)}
                        <span className="block font-medium text-navy-500">
                          {t(`Services.hero.heroItems.${serviceKey}.detail`)}
                        </span>
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative min-h-[18rem] overflow-hidden lg:min-h-0"
          >
            <img
              src="https://images.pexels.com/photos/17238022/pexels-photo-17238022.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt={t('Services.hero.imageAlt')}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f7f8fa] via-[#f7f8fa]/15 to-transparent lg:from-[#f7f8fa] lg:via-transparent lg:to-transparent" />
            <div className="absolute inset-y-0 start-0 hidden w-20 bg-[#f7f8fa] [clip-path:polygon(0_0,100%_0,35%_50%,100%_100%,0_100%)] lg:block" />
          </motion.div>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4 }}
            className="text-center font-display text-3xl font-bold text-navy-900"
          >
            {t('Services.corporateServices.title')}
          </motion.h2>

          {/* Featured card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-12 max-w-4xl"
          >
            <div className="group flex flex-col rounded-2xl border-2 border-teal-300 bg-gradient-to-br from-teal-50 to-white p-8 shadow-lg shadow-teal-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/20 sm:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-teal-100 transition-colors duration-300 group-hover:bg-teal-200">
                  <CalendarCheck className="h-9 w-9 text-teal-500" strokeWidth={1.75} />
                </div>
                <span className="rounded-full bg-teal-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {t('Services.corporateServices.featured.tag')}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">
                {t('Services.corporateServices.featured.name')}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-navy-500">
                {t('Services.corporateServices.featured.description')}
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {featuredFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100">
                      <Check className="h-3.5 w-3.5 text-teal-600" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-navy-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/monthly-contract"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-400 px-6 py-3 text-base font-semibold text-navy-900 shadow-lg shadow-teal-500/25 transition-all duration-200 group-hover:shadow-xl group-hover:shadow-teal-500/40"
              >
                {t('Services.corporateServices.featured.button')}
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>

          {/* Remaining services grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((item) => {
              const features = t(`Services.corporateServices.items.${item.key}.features`, { returnObjects: true }) as string[];
              return (
                <motion.div
                  key={item.path}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  {item.image && (
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={item.image}
                        alt={t(`Services.corporateServices.items.${item.key}.imageAlt`)}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent" />
                      <div className="absolute bottom-3 start-3 flex h-10 w-10 items-center justify-center rounded-lg bg-navy-950/85 text-teal-300 backdrop-blur-sm">
                        <item.icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    {!item.image && (
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 transition-colors duration-300 group-hover:bg-teal-100">
                        <item.icon className="h-8 w-8 text-teal-500" strokeWidth={1.75} />
                      </div>
                    )}
                    <h3 className="font-display text-lg font-bold text-navy-900">
                      {t(`Services.corporateServices.items.${item.key}.name`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-500">
                      {t(`Services.corporateServices.items.${item.key}.description`)}
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
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-teal-300 bg-teal-50 px-4 py-2.5 text-sm font-semibold text-teal-700 transition-colors duration-200 group-hover:bg-teal-500 group-hover:text-white"
                    >
                      {t('Services.corporateServices.learnMore')}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Government partners */}
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
              {t('Services.governmentPartners.eyebrow')}
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy-950 sm:text-3xl">
              {t('Services.governmentPartners.title')}
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
                  alt={t(`Services.governmentPartners.items.${partner.key}`)}
                  className="max-h-24 w-full max-w-[9rem] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-28"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-500 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-display text-3xl font-bold text-white md:text-4xl"
          >
            {t('Services.cta.title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-8"
          >
            <Link
              to="/cost-calculator"
              className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-navy-800 hover:shadow-xl"
            >
              <Calculator className="h-5 w-5" />
              {t('Services.cta.button')}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
