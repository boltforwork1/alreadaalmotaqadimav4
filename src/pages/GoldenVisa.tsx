import ServiceLayout from '@/components/ServiceLayout';
import { useTranslation } from 'react-i18next';
import { CircleCheck as CheckCircle2, TriangleAlert as AlertTriangle } from 'lucide-react';

export default function GoldenVisa() {
  const { t } = useTranslation();

  const stages = t('GoldenVisa.stages', { returnObjects: true }) as { title: string; description: string }[];
  const tableHeaders = t('GoldenVisa.tableHeaders', { returnObjects: true }) as string[];
  const tableRows = t('GoldenVisa.tableRows', { returnObjects: true }) as {
    process: string;
    documents: string;
    conditions: string;
    timeframe: string;
  }[];

  return (
    <ServiceLayout
      eyebrow={t('GoldenVisa.eyebrow')}
      title={t('GoldenVisa.title')}
      subtitle={t('GoldenVisa.subtitle')}
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          {t('GoldenVisa.leadText')}
        </p>

        <p className="mt-6 text-lg leading-relaxed text-navy-600">
          {t('GoldenVisa.p1')}
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          {t('GoldenVisa.eligibilityTitle')}
        </h2>
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-teal-200 bg-teal-50 p-5">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600" />
          <p className="text-sm leading-relaxed text-navy-700">
            {t('GoldenVisa.eligibilityText')}
          </p>
        </div>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          {t('GoldenVisa.stagesTitle')}
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {stages.map((stage, i) => (
            <div
              key={stage.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-950 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-3 font-display text-base font-bold text-navy-900">{stage.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{stage.description}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          {t('GoldenVisa.timelineTitle')}
        </h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full border-collapse text-start text-sm">
            <thead>
              <tr className="bg-navy-950 text-white">
                {tableHeaders.map((header) => (
                  <th key={header} className="px-4 py-3.5 font-semibold text-start">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr key={row.process} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="border-t border-slate-200 px-4 py-3 font-medium text-navy-900">
                    {row.process}
                  </td>
                  <td className="border-t border-slate-200 px-4 py-3 text-navy-600">
                    {row.documents}
                  </td>
                  <td className="border-t border-slate-200 px-4 py-3 text-navy-600">
                    {row.conditions}
                  </td>
                  <td className="border-t border-slate-200 px-4 py-3">
                    <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                      {row.timeframe}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <h4 className="text-sm font-bold text-amber-800">{t('GoldenVisa.noticeTitle')}</h4>
            <p className="mt-1 text-sm leading-relaxed text-amber-800">
              {t('GoldenVisa.noticeText')}
            </p>
          </div>
        </div>
      </article>
    </ServiceLayout>
  );
}
