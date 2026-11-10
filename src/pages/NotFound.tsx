import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Hop as Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-navy-950 px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-teal-500/5 blur-3xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center"
      >
        <p className="font-display text-8xl font-bold text-teal-500 sm:text-9xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
          {t('NotFound.title')}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-400">
          {t('NotFound.message')}
        </p>
        <Link
          to="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-400 px-7 py-3.5 text-base font-semibold text-navy-950 shadow-lg shadow-teal-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-teal-500/40"
        >
          <Home className="h-5 w-5" />
          {t('NotFound.backHome')}
          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  );
}
