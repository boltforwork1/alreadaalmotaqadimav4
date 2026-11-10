import ServiceLayout from '@/components/ServiceLayout';
import { useTranslation } from 'react-i18next';
import { CircleCheck as CheckCircle2 } from 'lucide-react';

export default function ProServices() {
  const { t } = useTranslation();
  const benefits = t('ProServices.benefits', { returnObjects: true }) as { title: string; description: string }[];

  return (
    <ServiceLayout
      eyebrow={t('ProServices.eyebrow')}
      title={t('ProServices.title')}
      subtitle={t('ProServices.subtitle')}
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          {t('ProServices.leadText')}
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          {t('ProServices.benefitsTitle')}
        </h2>
        <ul className="mt-5 space-y-4">
          {benefits.map((b) => (
            <li key={b.title} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
              <div>
                <p className="font-semibold text-navy-900">{b.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-navy-500">{b.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </ServiceLayout>
  );
}
