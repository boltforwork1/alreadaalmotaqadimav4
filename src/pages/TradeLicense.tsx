import ServiceLayout from '@/components/ServiceLayout';
import { useTranslation } from 'react-i18next';
import { FilePlus, RefreshCw, CreditCard as Edit3, Clock } from 'lucide-react';

export default function TradeLicense() {
  const { t } = useTranslation();
  const services = t('TradeLicense.services', { returnObjects: true }) as { title: string; description: string }[];

  return (
    <ServiceLayout
      eyebrow={t('TradeLicense.eyebrow')}
      title={t('TradeLicense.title')}
      subtitle={t('TradeLicense.subtitle')}
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          {t('TradeLicense.leadText')}
        </p>

        <p className="mt-6 text-lg leading-relaxed text-navy-600">
          {t('TradeLicense.p1')}
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          {t('TradeLicense.servicesTitle')}
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {services.map((service, i) => {
            const icons = [FilePlus, RefreshCw, Edit3];
            const Icon = icons[i] ?? FilePlus;
            return (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                  <Icon className="h-5 w-5 text-teal-600" />
                </div>
                <h3 className="mt-3 font-display text-base font-bold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center gap-4 rounded-xl border border-teal-200 bg-teal-50 p-5">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-500">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-display text-base font-bold text-navy-900">
              {t('TradeLicense.processingTimeTitle')}
            </h3>
            <p className="mt-0.5 text-sm text-navy-600">
              {t('TradeLicense.processingTimeText')}
            </p>
          </div>
        </div>
      </article>
    </ServiceLayout>
  );
}
