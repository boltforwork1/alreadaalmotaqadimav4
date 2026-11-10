import { useEffect, type ReactNode } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n, { supportedLanguages, type SupportedLanguage } from './index';

const rtlLanguages: SupportedLanguage[] = ['ar', 'fa'];

const fontMap: Record<SupportedLanguage, string> = {
  en: "'Montserrat', 'Inter', system-ui, sans-serif",
  ar: "'Alexandria', system-ui, sans-serif",
  ru: "'Montserrat', 'Inter', system-ui, sans-serif",
  zh: "'Montserrat', 'Inter', system-ui, sans-serif",
  fr: "'Montserrat', 'Inter', system-ui, sans-serif",
  fa: "'Alexandria', 'Inter', system-ui, sans-serif",
};

function LanguageSync() {
  const { i18n: i18nInstance } = useTranslation();

  useEffect(() => {
    const applyLang = (lang: string) => {
      const langShort = lang.split('-')[0] as SupportedLanguage;
      const langKey = supportedLanguages.includes(langShort) ? langShort : 'en';
      const html = document.documentElement;
      html.lang = langKey;
      html.dir = rtlLanguages.includes(langKey) ? 'rtl' : 'ltr';
      html.style.fontFamily = fontMap[langKey];
      html.classList.toggle('lang-rtl', rtlLanguages.includes(langKey));
      html.classList.toggle('lang-ltr', !rtlLanguages.includes(langKey));
    };

    applyLang(i18nInstance.language);
    const handler = (lng: string) => applyLang(lng);
    i18nInstance.on('languageChanged', handler);
    return () => {
      i18nInstance.off('languageChanged', handler);
    };
  }, [i18nInstance]);

  return null;
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageSync />
      {children}
    </I18nextProvider>
  );
}
