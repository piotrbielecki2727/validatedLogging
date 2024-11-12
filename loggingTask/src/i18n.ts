import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationPL from "./assets/locales/pl/translation.json";
import translationENG from "./assets/locales/eng/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    eng: {
      translation: translationENG,
    },
    pl: {
      translation: translationPL,
    },
  },
  lng: "eng",
  fallbackLng: "eng",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
