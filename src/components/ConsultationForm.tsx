import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { User, Phone, Mail, Send, Check, Calculator } from 'lucide-react';

export default function ConsultationForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) return;
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5">
      <h3 className="font-display text-xl font-bold text-navy-900">{t('ConsultationForm.title')}</h3>
      <p className="mt-1.5 text-sm text-navy-500">
        {t('ConsultationForm.subtitle')}
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <div className="relative">
          <User className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
          <input
            type="text"
            required
            value={form.name}
            onChange={update('name')}
            placeholder={t('ConsultationForm.placeholders.fullName')}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 ps-10 pe-3 text-start text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20"
          />
        </div>
        <div className="relative">
          <Phone className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
          <input
            type="tel"
            required
            dir="auto"
            value={form.phone}
            onChange={update('phone')}
            placeholder={t('ConsultationForm.placeholders.phoneNumber')}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 ps-10 pe-3 text-start text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20"
          />
        </div>
        <div className="relative">
          <Mail className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
          <input
            type="email"
            required
            value={form.email}
            onChange={update('email')}
            placeholder={t('ConsultationForm.placeholders.emailAddress')}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 ps-10 pe-3 text-start text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-400 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition-all duration-200 hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-500/40"
        >
          {submitted ? (
            <>
              <Check className="h-4 w-4" />
              {t('ConsultationForm.buttons.requestSent')}
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              {t('ConsultationForm.buttons.requestCallback')}
            </>
          )}
        </button>
      </form>

      {submitted && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-center text-xs font-medium text-teal-600"
        >
          {t('ConsultationForm.successMessage')}
        </motion.p>
      )}

      {/* Cost calculator CTA */}
      <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-4 text-center">
        <p className="text-sm font-medium text-navy-700">{t('ConsultationForm.calculatorCtaText')}</p>
        <Link
          to="/cost-calculator"
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
        >
          <Calculator className="h-4 w-4" />
          {t('ConsultationForm.openCostCalculator')}
        </Link>
      </div>
    </div>
  );
}
