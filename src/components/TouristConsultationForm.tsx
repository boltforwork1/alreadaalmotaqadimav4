import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check, Mail, Phone, Send, User } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type TouristConsultationFormProps = {
  serviceKey: string;
};

type FormState = { fullName: string; phone: string; email: string };
type Status = 'idle' | 'submitting' | 'success' | 'error';

const emptyForm: FormState = { fullName: '', phone: '', email: '' };

const inputClass =
  'w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 ps-10 pe-3 text-start text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20';

export default function TouristConsultationForm({ serviceKey }: TouristConsultationFormProps) {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<Status>('idle');

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((current) => ({ ...current, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const { error } = await supabase.from('tourist_callback_requests').insert({
      service_key: serviceKey,
      full_name: form.fullName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
    });
    if (error) {
      setStatus('error');
      return;
    }
    setForm(emptyForm);
    setStatus('success');
  };

  const consultation = 'Services.touristServices.consultation';

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5">
      <h2 className="font-display text-xl font-bold text-navy-900">{t(`${consultation}.title`)}</h2>
      <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{t(`${consultation}.subtitle`)}</p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-navy-700">{t(`${consultation}.fullName`)}</span>
          <span className="relative mt-1.5 block">
            <User className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
            <input
              type="text"
              required
              autoComplete="name"
              value={form.fullName}
              onChange={update('fullName')}
              className={inputClass}
            />
          </span>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-navy-700">{t(`${consultation}.phone`)}</span>
          <span className="relative mt-1.5 block">
            <Phone className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
            <input
              type="tel"
              required
              autoComplete="tel"
              dir="auto"
              value={form.phone}
              onChange={update('phone')}
              className={inputClass}
            />
          </span>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-navy-700">{t(`${consultation}.email`)}</span>
          <span className="relative mt-1.5 block">
            <Mail className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
            <input
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={update('email')}
              className={inputClass}
            />
          </span>
        </label>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-300 py-3 text-sm font-semibold text-navy-950 shadow-md shadow-teal-500/20 transition-all duration-200 hover:bg-teal-400 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' ? (
            t(`${consultation}.submitting`)
          ) : (
            <>
              <Send className="h-4 w-4" />
              {t(`${consultation}.submit`)}
            </>
          )}
        </button>
      </form>

      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex items-start gap-2 text-sm font-medium text-teal-700"
        >
          <Check className="mt-0.5 h-4 w-4 shrink-0" />
          {t(`${consultation}.success`)}
        </motion.p>
      )}
      {status === 'error' && (
        <p role="alert" className="mt-4 text-sm font-medium text-red-700">
          {t(`${consultation}.error`)}
        </p>
      )}
    </div>
  );
}
