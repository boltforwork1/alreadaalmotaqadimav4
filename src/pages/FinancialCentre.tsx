import { CircleCheck as CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ServiceLayout from '@/components/ServiceLayout';
import Tabs from '@/components/Tabs';
import StatsBar from '@/components/StatsBar';

export default function FinancialCentre() {
  const { t } = useTranslation();

  const difcFeatures = t('FinancialCentre.difc.features', { returnObjects: true }) as string[];
  const adgmFeatures = t('FinancialCentre.adgm.features', { returnObjects: true }) as string[];

  return (
    <ServiceLayout
      eyebrow={t('FinancialCentre.eyebrow')}
      title={t('FinancialCentre.title')}
      subtitle={t('FinancialCentre.subtitle')}
    >
      <article>
        <img
          src="/images/pages/page3.jpg"
          alt={t('FinancialCentre.title')}
          className="h-64 w-full rounded-2xl object-cover object-center shadow-lg sm:h-80"
        />

        <p className="mt-8 text-lg leading-relaxed text-navy-600">
          {t('FinancialCentre.p1')}
        </p>

        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          {t('FinancialCentre.p2')}
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          {t('FinancialCentre.jurisdictionsTitle')}
        </h2>
        <Tabs
          tabs={[
            {
              id: 'difc',
              label: 'DIFC',
              content: (
                <div>
                  <p className="text-base leading-relaxed text-navy-600">
                    {t('FinancialCentre.difc.description')}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-navy-600">
                    {difcFeatures.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            },
            {
              id: 'adgm',
              label: 'ADGM',
              content: (
                <div>
                  <p className="text-base leading-relaxed text-navy-600">
                    {t('FinancialCentre.adgm.description')}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-navy-600">
                    {adgmFeatures.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            },
          ]}
          className="mt-5"
        />

        <StatsBar />
      </article>
    </ServiceLayout>
  );
}
