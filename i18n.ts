import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init(
  {
    lng: 'pt-BR',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          HOME: {
            TITLE: 'REN',
          },
        },
      },
      'pt-BR': {
        translation: {
          HOME: {
            TITLE: 'RENAN',
          },
        },
      },
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  },
  (err, t) => {
    i18n.t('alertView.title');
  }
);

export default i18n;
