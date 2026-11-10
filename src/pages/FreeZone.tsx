import { CircleCheck as CheckCircle2, Circle as XCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ServiceLayout from '@/components/ServiceLayout';
import Tabs from '@/components/Tabs';
import StatsBar from '@/components/StatsBar';

export default function FreeZone() {
  const { t } = useTranslation();

  const benefits = t('FreeZone.benefits', { returnObjects: true }) as { title: string; description: string }[];
  const limitations = t('FreeZone.limitations', { returnObjects: true }) as { title: string; description: string }[];
  const dmccFeatures = t('FreeZone.jurisdictions.dmcc.features', { returnObjects: true }) as string[];
  const dsoFeatures = t('FreeZone.jurisdictions.dso.features', { returnObjects: true }) as string[];

  return (
    <ServiceLayout
      eyebrow={t('FreeZone.eyebrow')}
      title={t('FreeZone.title')}
      subtitle={t('FreeZone.subtitle')}
    >
      <article>
        <img
          src="/images/pages/image.png"
          alt={t('FreeZone.title')}
          className="h-64 w-full rounded-2xl object-cover object-center shadow-lg sm:h-80"
        />

        <p className="mt-8 text-lg leading-relaxed text-navy-600">
          {t('FreeZone.p1')}
        </p>

        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          {t('FreeZone.p2')}
        </p>

        {/* Benefits vs Limitations */}
        <Tabs
          tabs={[
            {
              id: 'benefits',
              label: t('FreeZone.benefitsTitle'),
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
              label: t('FreeZone.limitationsTitle'),
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

        {/* Jurisdictions */}
        <h2 className="mt-12 font-display text-2xl font-bold leading-snug text-navy-900">
          {t('FreeZone.jurisdictionsTitle')}
        </h2>
        <Tabs
          tabs={[
            {
              id: 'dmcc',
              label: 'DMCC',
              content: (
                <div>
                  <p className="text-base leading-relaxed text-navy-600">
                    {t('FreeZone.jurisdictions.dmcc.description')}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-navy-600">
                    {dmccFeatures.map((feature) => (
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
              id: 'dso',
              label: 'DSO',
              content: (
                <div>
                  <p className="text-base leading-relaxed text-navy-600">
                    {t('FreeZone.jurisdictions.dso.description')}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-navy-600">
                    {dsoFeatures.map((feature) => (
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
