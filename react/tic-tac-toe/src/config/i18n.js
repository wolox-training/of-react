import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import sp from './sp';
import en from './en';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

const resources = { en, sp }

i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "en",
      fallbackLng: "en",
      initImmediate: false,
      react: {
        wait: true
      }
  });

requireAll(require.context('..', true, /i18n\.js$/));

export default i18n;
