import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '@/locales/en.json';
import ar from '@/locales/ar.json';
import ru from '@/locales/ru.json';
import ur from '@/locales/ur.json';

export const supportedLanguages = ['en', 'ar', 'ru', 'ur'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const languageLabels: Record<SupportedLanguage, string> = {
  en: 'English',
  ar: 'العربية',
  ru: 'Русский',
  ur: 'اردو',
};

export const languageShort: Record<SupportedLanguage, string> = {
  en: 'EN',
  ar: 'AR',
  ru: 'RU',
  ur: 'UR',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      ru: { translation: ru },
      ur: { translation: ur },
    },
    fallbackLng: 'en',
    supportedLngs: [...supportedLanguages],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
  });

export default i18n;
