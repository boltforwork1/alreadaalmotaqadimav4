import { CircleCheck as CheckCircle2, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ServiceLayout from '@/components/ServiceLayout';
import Tabs from '@/components/Tabs';
import StatsBar from '@/components/StatsBar';

export default function Offshore() {
  const { t } = useTranslation();

  const ajmanFeatures = t('Offshore.jurisdictions.ajman.features', { returnObjects: true }) as string[];
  const bviFeatures = t('Offshore.jurisdictions.bvi.features', { returnObjects: true }) as string[];
  const seychellesFeatures = t('Offshore.jurisdictions.seychelles.features', { returnObjects: true }) as string[];

  return (
    <ServiceLayout
      eyebrow={t('Offshore.eyebrow')}
      title={t('Offshore.title')}
      subtitle={t('Offshore.subtitle')}
    >
      <article>
        <img
          src="/images/pages/page4.jpg"
          alt={t('Offshore.title')}
          className="h-64 w-full rounded-2xl object-cover object-center shadow-lg sm:h-80"
        />

        <p className="mt-8 text-lg leading-relaxed text-navy-600">
          {t('Offshore.p1')}
        </p>

        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          {t('Offshore.p2')}
        </p>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-teal-200 bg-teal-50 p-5">
          <Shield className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
          <p className="text-sm leading-relaxed text-navy-700">
            {t('Offshore.privacyNote')}
          </p>
        </div>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          {t('Offshore.jurisdictionsTitle')}
        </h2>
        <Tabs
          tabs={[
            {
              id: 'ajman',
              label: t('Offshore.jurisdictions.ajman.tabLabel'),
              content: (
                <div>
                  <p className="text-base leading-relaxed text-navy-600">
                    {t('Offshore.jurisdictions.ajman.description')}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-navy-600">
                    {ajmanFeatures.map((feature) => (
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
              id: 'bvi',
              label: t('Offshore.jurisdictions.bvi.tabLabel'),
              content: (
                <div>
                  <p className="text-base leading-relaxed text-navy-600">
                    {t('Offshore.jurisdictions.bvi.description')}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-navy-600">
                    {bviFeatures.map((feature) => (
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
              id: 'seychelles',
              label: t('Offshore.jurisdictions.seychelles.tabLabel'),
              content: (
                <div>
                  <p className="text-base leading-relaxed text-navy-600">
                    {t('Offshore.jurisdictions.seychelles.description')}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-navy-600">
                    {seychellesFeatures.map((feature) => (
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
