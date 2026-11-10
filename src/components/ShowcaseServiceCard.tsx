import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Check } from 'lucide-react';
import { serviceCardVariants } from '@/components/ServiceCard';
import { showcaseCategories, type ShowcaseCategory, type ShowcaseService } from '@/data/serviceShowcase';

type ShowcaseServiceCardProps = {
  category: ShowcaseCategory;
  service: ShowcaseService;
};

export default function ShowcaseServiceCard({ category, service }: ShowcaseServiceCardProps) {
  const { t } = useTranslation();
  const base = `Services.${category}.items.${service.key}`;
  const bullets = t(`${base}.bullets`, { returnObjects: true }) as string[];
  const Icon = service.icon;

  return (
    <motion.article
      variants={serviceCardVariants}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative h-44 overflow-hidden rounded-t-2xl">
        <img
          src={service.image}
          alt={t(`${base}.imageAlt`)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
      </div>
      <div className="absolute start-6 top-44 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-xl bg-navy-950 text-teal-300 shadow-lg ring-4 ring-white">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-10">
        <h3 className="font-display text-lg font-bold text-navy-900">{t(`${base}.name`)}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-500">{t(`${base}.subtitle`)}</p>

        <ul className="mt-5 flex-1 space-y-2.5">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-100">
                <Check className="h-3 w-3 text-teal-600" strokeWidth={3} />
              </span>
              <span className="text-sm leading-relaxed text-navy-600">{bullet}</span>
            </li>
          ))}
        </ul>

        <Link
          to={`${showcaseCategories[category].detailPath}/${service.key}`}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-300 px-4 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-all duration-200 hover:bg-teal-400 hover:shadow-md"
        >
          {t(`Services.${category}.learnMore`)}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180" />
        </Link>
      </div>
    </motion.article>
  );
}
