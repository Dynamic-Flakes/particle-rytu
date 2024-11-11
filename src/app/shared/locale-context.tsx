'use client';

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import i18n from '../../../i18n.mjs'

type LocaleContextProps = {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({ initialLocale, children }: { initialLocale: string; children: ReactNode }) => {
  const { t } = useTranslation(['components', 'templates']);
  const [locale, setLocale] = useState(initialLocale); 

  useEffect(() => {
    if (locale !== i18n.language) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {

  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
