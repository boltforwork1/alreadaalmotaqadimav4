import ServiceLayout from '@/components/ServiceLayout';
import { useTranslation } from 'react-i18next';
import { Landmark, Building2, Check, CircleAlert as AlertCircle } from 'lucide-react';

export default function BankAccount() {
  const { t } = useTranslation();
  const mainlandRequirements = t('BankAccount.mainlandRequirements', { returnObjects: true }) as string[];
  const freeZoneRequirements = t('BankAccount.freeZoneRequirements', { returnObjects: true }) as string[];
  const footnotes = t('BankAccount.footnotes', { returnObjects: true }) as { mark: string; text: string }[];

  return (
    <ServiceLayout
      eyebrow={t('BankAccount.eyebrow')}
      title={t('BankAccount.title')}
      subtitle={t('BankAccount.subtitle')}
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          {t('BankAccount.leadText')}
        </p>

        <p className="mt-6 text-lg leading-relaxed text-navy-600">
          {t('BankAccount.p1')}
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Mainland */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                <Landmark className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy-900">{t('BankAccount.mainlandTitle')}</h3>
            </div>
            <ul className="mt-4 space-y-2.5">
              {mainlandRequirements.map((req) => (
                <li key={req} className="flex items-start gap-2.5 text-sm text-navy-600">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-500" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Free Zone */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                <Building2 className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy-900">{t('BankAccount.freeZoneTitle')}</h3>
            </div>
            <ul className="mt-4 space-y-2.5">
              {freeZoneRequirements.map((req) => (
                <li key={req} className="flex items-start gap-2.5 text-sm text-navy-600">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-500" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footnotes */}
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <h4 className="text-sm font-bold text-amber-800">{t('BankAccount.importantNotes')}</h4>
          </div>
          <ul className="mt-3 space-y-1.5">
            {footnotes.map((note) => (
              <li key={note.mark} className="text-sm text-amber-800">
                <span className="font-semibold">{note.mark}</span> {note.text}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </ServiceLayout>
  );
}
