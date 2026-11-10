import ServiceLayout from '@/components/ServiceLayout';
import { useTranslation } from 'react-i18next';
import { CircleCheck as CheckCircle2 } from 'lucide-react';

export default function NotaryServices() {
  const { t } = useTranslation();
  const services = t('NotaryServices.services', { returnObjects: true }) as string[];

  return (
    <ServiceLayout
      eyebrow={t('NotaryServices.eyebrow')}
      title={t('NotaryServices.title')}
      subtitle={t('NotaryServices.subtitle')}
    >
      <article>

        <p className="mt-8 text-lg leading-relaxed text-navy-600">
          {t('NotaryServices.p1')}
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          {t('NotaryServices.servicesTitle')}
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <li
              key={service}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
              <span className="text-base leading-relaxed text-navy-600">{service}</span>
            </li>
          ))}
        </ul>
      </article>
    </ServiceLayout>
  );
}
