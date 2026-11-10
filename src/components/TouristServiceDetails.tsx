import { useTranslation } from 'react-i18next';
import { Clock, Route, Star, Ticket } from 'lucide-react';

const handleIcons = [Ticket, Star, Route];

type TouristServiceDetailsProps = {
  itemKey: string;
};

type HandleEntry = { title: string; description: string };

export default function TouristServiceDetails({ itemKey }: TouristServiceDetailsProps) {
  const { t } = useTranslation();
  const base = `Services.touristServices.items.${itemKey}`;
  const handle = t(`${base}.handle`, { returnObjects: true }) as HandleEntry[];

  return (
    <>
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-teal-700">
          {t('Services.touristServices.handleTitle')}
        </h4>
        <div className="mt-3 grid gap-3">
          {handle.map((entry, i) => {
            const Icon = handleIcons[i] ?? Ticket;
            return (
              <div
                key={entry.title}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50">
                  <Icon className="h-4 w-4 text-teal-600" />
                </div>
                <div>
                  <h5 className="font-display text-sm font-bold text-navy-900">{entry.title}</h5>
                  <p className="mt-1 text-xs leading-relaxed text-navy-500">{entry.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-xl border border-teal-200 bg-teal-50 p-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-500">
          <Clock className="h-5 w-5 text-white" />
        </div>
        <div>
          <h4 className="font-display text-sm font-bold text-navy-900">
            {t('Services.touristServices.processingTimeTitle')}
          </h4>
          <p className="mt-0.5 text-xs leading-relaxed text-navy-600">{t(`${base}.processingTime`)}</p>
        </div>
      </div>
    </>
  );
}
