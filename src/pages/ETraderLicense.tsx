import { CircleCheck as CheckCircle2, Circle as XCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ServiceLayout from '@/components/ServiceLayout';
import Tabs from '@/components/Tabs';
import StatsBar from '@/components/StatsBar';

export default function ETraderLicense() {
  const { t } = useTranslation();

  const benefits = t('ETraderLicense.benefits', { returnObjects: true }) as { title: string; description: string }[];
  const limitations = t('ETraderLicense.limitations', { returnObjects: true }) as { title: string; description: string }[];

  return (
    <ServiceLayout
      eyebrow={t('ETraderLicense.eyebrow')}
      title={t('ETraderLicense.title')}
      subtitle={t('ETraderLicense.subtitle')}
    >
      <article>
        <img
          src="/images/pages/page4.jpg"
          alt={t('ETraderLicense.title')}
          className="h-64 w-full rounded-2xl object-cover object-center shadow-lg sm:h-80"
        />

        <p className="mt-8 text-lg leading-relaxed text-navy-600">
          {t('ETraderLicense.p1')}
        </p>

        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          {t('ETraderLicense.p2')}
        </p>

        <Tabs
          tabs={[
            {
              id: 'benefits',
              label: t('ETraderLicense.benefitsTitle'),
              content: (
                <ul className="space-y-4">
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
              ),
            },
            {
              id: 'limitations',
              label: t('ETraderLicense.limitationsTitle'),
              content: (
                <ul className="space-y-4">
                  {limitations.map((l) => (
                    <li key={l.title} className="flex gap-3">
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                      <div>
                        <p className="font-semibold text-navy-900">{l.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-navy-500">{l.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ),
            },
          ]}
          className="mt-10"
        />

        <StatsBar />
      </article>
    </ServiceLayout>
  );
}
