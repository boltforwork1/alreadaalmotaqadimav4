import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, type LucideIcon } from 'lucide-react';

export type ServiceCardItem = {
  key: string;
  path: string;
  icon: LucideIcon;
  image?: string;
};

type ServiceCardProps = {
  item: ServiceCardItem;
  namespace: string;
  learnMoreLabel: string;
  children?: ReactNode;
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function ServiceCard({ item, namespace, learnMoreLabel, children }: ServiceCardProps) {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      {item.image && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={item.image}
            alt={t(`${namespace}.items.${item.key}.imageAlt`)}
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
          {t(`${namespace}.items.${item.key}.name`)}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-500">
          {t(`${namespace}.items.${item.key}.description`)}
        </p>
        <div className="mt-5 flex flex-1 flex-col">{children}</div>
        <Link
          to={item.path}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-teal-300 bg-teal-50 px-4 py-2.5 text-sm font-semibold text-teal-700 transition-colors duration-200 group-hover:bg-teal-500 group-hover:text-white"
        >
          {learnMoreLabel}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180" />
        </Link>
      </div>
    </motion.div>
  );
}
