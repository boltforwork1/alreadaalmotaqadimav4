import ServiceLayout from '@/components/ServiceLayout';
import { useTranslation } from 'react-i18next';
import { CircleCheck as CheckCircle2 } from 'lucide-react';

export default function SiraServices() {
  const { t } = useTranslation();
  const benefits = t('SiraServices.benefits', { returnObjects: true }) as string[];

  return (
    <ServiceLayout
      eyebrow={t('SiraServices.eyebrow')}
      title={t('SiraServices.title')}
      subtitle={t('SiraServices.subtitle')}
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          {t('SiraServices.leadText')}
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          {t('SiraServices.benefitsTitle')}
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
