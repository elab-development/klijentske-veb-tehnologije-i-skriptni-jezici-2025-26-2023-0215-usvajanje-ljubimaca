import { useContext } from 'react';

import { LanguageContext } from '../context/LanguageContext';
import type { Language } from '../types';

interface UseLanguageReturn {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export const useLanguage = (): UseLanguageReturn => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside a LanguageProvider');
  }
  return context;
};
