import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationPL from './locales/pl/translation.json';
import translationENG from './locales/eng/translation.json';
import { LANGUAGE_KEY } from './constants';
import { AvailableLanguages } from '../types';

const resources = {
  eng: {
    translation: translationENG,
  },
  pl: {
    translation: translationPL,
  },
} as const;

const isValidLanguage = (lang: string): lang is AvailableLanguages => {
  return Object.keys(resources).includes(lang);
};

const getSavedLanguage = (): AvailableLanguages => {
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
  if (savedLanguage && isValidLanguage(savedLanguage)) {
    return savedLanguage;
  }
  const browserLanguage = navigator.language.split('-')[0];
  if (browserLanguage === 'pl') {
    return 'pl';
  }
  return 'eng';
};

export const useLanguage = () => {
  const changeLanguage = (language: AvailableLanguages) => {
    i18n.changeLanguage(language);
    localStorage.setItem(LANGUAGE_KEY, language);
  };

  return {
    currentLanguage: i18n.language as AvailableLanguages,
    changeLanguage,
    availableLanguages: Object.keys(resources) as AvailableLanguages[],
  };
};

i18n.use(initReactI18next).init({
  resources,
  lng: getSavedLanguage(),
  fallbackLng: 'eng',
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ['localStorage', 'navigator'],
  },
});

export default i18n;
