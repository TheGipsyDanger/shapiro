import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init(
  {
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          EVENTS_OF_DAY: {
            HEADER_V1: 'Events of',
            HEADER_V2: 'has no events',
          },
        },
      },
      'pt-BR': {
        translation: {
          EVENTS_OF_DAY: {
            HEADER_V1: 'Eventos do {}',
            HEADER_V2: 'não tem eventos',
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
