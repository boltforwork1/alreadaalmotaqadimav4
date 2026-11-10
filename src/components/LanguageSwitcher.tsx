import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Check, ChevronDown } from 'lucide-react';
import {
  supportedLanguages,
  languageShort,
  languageLabels,
  type SupportedLanguage,
} from '@/i18n';

const flagEmoji: Record<SupportedLanguage, string> = {
  en: '🇬🇧',
  ar: '🇦🇪',
  ru: '🇷🇺',
  zh: '🇨🇳',
  fr: '🇫🇷',
  fa: '🇮🇷',
};

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = (i18n.language?.split('-')[0] ?? 'en') as SupportedLanguage;
  const currentKey = supportedLanguages.includes(current) ? current : 'en';

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const changeLanguage = (lng: SupportedLanguage) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t('LanguageSwitcher.ariaSwitchLanguage')}
        className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:border-teal-400/60 hover:bg-white/10"
      >
        <Globe className="h-4 w-4 text-teal-400" />
        <span className="text-xs font-bold">{languageShort[currentKey]}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute end-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-navy-700/80 bg-navy-950 shadow-2xl shadow-black/50"
          >
            {supportedLanguages.map((lng) => {
              const active = lng === currentKey;
              return (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                    active
                      ? 'bg-teal-500/15 text-teal-400'
                      : 'text-slate-300 hover:bg-navy-800 hover:text-teal-400'
                  }`}
                >
                  <span className="text-base">{flagEmoji[lng]}</span>
                  <span className="flex-1 text-start">{languageLabels[lng]}</span>
                  {active && <Check className="h-4 w-4 text-teal-400" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
