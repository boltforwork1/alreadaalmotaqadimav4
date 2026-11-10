import ServiceLayout from '@/components/ServiceLayout';
import { useTranslation } from 'react-i18next';
import { CircleCheck as CheckCircle2 } from 'lucide-react';

export default function Liquidation() {
  const { t } = useTranslation();

  const stages = t('Liquidation.stages', { returnObjects: true }) as { title: string; description: string }[];
  const tableHeaders = t('Liquidation.tableHeaders', { returnObjects: true }) as string[];
  const tableRows = t('Liquidation.tableRows', { returnObjects: true }) as {
    process: string;
    documents: string;
    conditions: string;
    timeframe: string;
  }[];

  return (
    <ServiceLayout
      eyebrow={t('Liquidation.eyebrow')}
      title={t('Liquidation.title')}
      subtitle={t('Liquidation.subtitle')}
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          {t('Liquidation.leadText')}
        </p>

        <p className="mt-6 text-lg leading-relaxed text-navy-600">
          {t('Liquidation.p1')}
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          {t('Liquidation.stagesTitle')}
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <CheckCircle2 className="h-6 w-6 text-teal-500" />
              <h3 className="mt-3 font-display text-base font-bold text-navy-900">{stage.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{stage.description}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          {t('Liquidation.timelineTitle')}
        </h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full border-collapse text-start text-sm">
            <thead>
              <tr className="bg-slate-900 text-white">
                {tableHeaders.map((header) => (
                  <th key={header} className="px-4 py-3.5 font-semibold text-start">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr
                  key={row.process}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                >
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

        <p className="mt-6 text-base leading-relaxed text-navy-500">
          {t('Liquidation.footerNote')}
        </p>
      </article>
    </ServiceLayout>
  );
}
