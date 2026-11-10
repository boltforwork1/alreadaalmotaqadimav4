import ServiceLayout from '@/components/ServiceLayout';
import { useTranslation } from 'react-i18next';
import { CircleCheck as CheckCircle2 } from 'lucide-react';

export default function RtaServices() {
  const { t } = useTranslation();
  const benefits = t('RtaServices.benefits', { returnObjects: true }) as string[];

  return (
    <ServiceLayout
      eyebrow={t('RtaServices.eyebrow')}
      title={t('RtaServices.title')}
      subtitle={t('RtaServices.subtitle')}
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          {t('RtaServices.leadText')}
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          {t('RtaServices.benefitsTitle')}
        </h2>
        <ul className="mt-5 space-y-4">
          {benefits.map((b) => (
            <li key={b} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
              <span className="text-base leading-relaxed text-navy-600">{b}</span>
            </li>
          ))}
        </ul>
      </article>
    </ServiceLayout>
  );
}
