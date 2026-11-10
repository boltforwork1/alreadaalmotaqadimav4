import ServiceLayout from '@/components/ServiceLayout';
import { useTranslation } from 'react-i18next';
import { Briefcase, Users, Circle as XCircle, FileCheck, Stamp, FileText } from 'lucide-react';

const serviceIcons = [Briefcase, Users, XCircle, FileCheck, FileText, Stamp];

export default function Immigration() {
  const { t } = useTranslation();
  const services = t('Immigration.services', { returnObjects: true }) as { title: string; description: string; timeframe: string }[];

  return (
    <ServiceLayout
      eyebrow={t('Immigration.eyebrow')}
      title={t('Immigration.title')}
      subtitle={t('Immigration.subtitle')}
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          {t('Immigration.leadText')}
        </p>

        <p className="mt-6 text-lg leading-relaxed text-navy-600">
          {t('Immigration.p1')}
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          {t('Immigration.servicesTitle')}
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = serviceIcons[i] ?? Briefcase;
            return (
              <div
                key={service.title}
                className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-teal-50">
                  <Icon className="h-5 w-5 text-teal-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-base font-bold text-navy-900">
                      {service.title}
                    </h3>
                    <span className="flex-shrink-0 rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white">
                      {service.timeframe}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-navy-500">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </ServiceLayout>
  );
}
