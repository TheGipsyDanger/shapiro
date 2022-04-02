import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init(
  {
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          ALERTS: {
            EVENT: 'event',
            ERROR: 'Ops...',
            UPDATED_SUCCESS_TITLE: 'updated',
            CREATED_SUCCESS_TITLE: 'created',
            UPDATED_SUCCESS_SUBTITLE: 'Successfully updated event',
            CREATED_SUCCESS_SUBTITLE: 'Successfully created event',
          },
          CREATE_EVENT: {},
          EVENTS_OF_DAY: {
            HEADER_V1: 'Events of',
            HEADER_V2: 'has no events',
          },
        },
      },
      'pt-BR': {
        translation: {
          ALERTS: {
            EVENT: 'event',
            ERROR: 'Ops...',
            UPDATED: 'atualizado',
            CREATED: 'criado',
          },
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
