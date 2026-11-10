import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Clock, Route, Star, Ticket } from 'lucide-react';
import TouristConsultationForm from '@/components/TouristConsultationForm';
import { findTouristService } from '@/data/touristServices';
import NotFound from '@/pages/NotFound';

const handleIcons = [Ticket, Star, Route];

type HandleEntry = { title: string; description: string };

export default function TouristServiceDetail() {
  const { t } = useTranslation();
  const { serviceKey } = useParams();
  const service = findTouristService(serviceKey);

  if (!service) return <NotFound />;

  const base = `Services.touristServices.items.${service.key}`;
  const handle = t(`${base}.handle`, { returnObjects: true }) as HandleEntry[];

  return (
    <main className="pt-28">
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
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-teal-300"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1 rtl:rotate-180" />
              {t('Services.touristServices.backToServices')}
            </Link>
            <span className="mt-6 block text-sm font-semibold uppercase tracking-wide text-teal-400">
              {t('Services.touristServices.title')}
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.15] text-white lg:text-5xl">
              {t(`${base}.name`)}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">{t(`${base}.headerSubtitle`)}</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <p className="text-lg leading-relaxed text-navy-600">{t(`${base}.description`)}</p>

              <h2 className="mt-12 font-display text-2xl font-bold text-navy-900">
                {t('Services.touristServices.handleTitle')}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {handle.map((entry, i) => {
                  const Icon = handleIcons[i] ?? Ticket;
                  return (
                    <div
                      key={entry.title}
                      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                        <Icon className="h-5 w-5 text-teal-600" strokeWidth={1.75} />
                      </div>
                      <h3 className="mt-3 font-display text-base font-bold text-navy-900">{entry.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{entry.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center gap-5 rounded-2xl bg-teal-300 p-6 shadow-lg shadow-teal-500/20">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-950">
                  <Clock className="h-6 w-6 text-teal-300" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-950">
                    {t('Services.touristServices.processingTimeTitle')}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-900">{t(`${base}.processingTime`)}</p>
                </div>
              </div>
            </motion.div>

            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <TouristConsultationForm />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
