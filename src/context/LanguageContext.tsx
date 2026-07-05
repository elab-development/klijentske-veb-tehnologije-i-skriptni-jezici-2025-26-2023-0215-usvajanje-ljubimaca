import { createContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';

import type { Language, Translation } from '../types';
import { en } from '../i18n/en';
import { sr } from '../i18n/sr';

const translationMap: Record<Language, Translation> = { en, sr };

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps): JSX.Element => {
  const [language, setLanguage] = useState<Language>('sr');

  const toggleLanguage = useCallback((): void => {
    setLanguage((previous) => (previous === 'sr' ? 'en' : 'sr'));
  }, []);

  const t = useCallback(
    (key: string): string => translationMap[language][key] ?? key,
    [language]
  );

  const contextValue: LanguageContextValue = { language, toggleLanguage, t };

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};
