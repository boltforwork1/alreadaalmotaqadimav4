import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Send, User } from 'lucide-react';
import type { ShowcaseCategory } from '@/data/serviceShowcase';

const inputClass =
  'w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 ps-10 pe-3 text-start text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20';

type ShowcaseConsultationFormProps = {
  category: ShowcaseCategory;
};

export default function ShowcaseConsultationForm({ category }: ShowcaseConsultationFormProps) {
  const { t } = useTranslation();
  const consultation = `Services.${category}.consultation`;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5">
      <h2 className="font-display text-xl font-bold text-navy-900">{t(`${consultation}.title`)}</h2>
      <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{t(`${consultation}.subtitle`)}</p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-navy-700">{t(`${consultation}.fullName`)}</span>
          <span className="relative mt-1.5 block">
            <User className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
            <input type="text" autoComplete="name" className={inputClass} />
          </span>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-navy-700">{t(`${consultation}.phone`)}</span>
          <span className="relative mt-1.5 block">
            <Phone className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
            <input type="tel" autoComplete="tel" dir="auto" className={inputClass} />
          </span>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-navy-700">{t(`${consultation}.email`)}</span>
          <span className="relative mt-1.5 block">
            <Mail className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
            <input type="email" autoComplete="email" className={inputClass} />
          </span>
        </label>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-300 py-3 text-sm font-semibold text-navy-950 shadow-md shadow-teal-500/20 transition-all duration-200 hover:bg-teal-400 hover:shadow-lg"
        >
          <Send className="h-4 w-4" />
          {t(`${consultation}.submit`)}
        </button>
      </form>
    </div>
  );
}
