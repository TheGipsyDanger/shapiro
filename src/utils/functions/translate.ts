import { useTranslation } from 'react-i18next';

export const t = (key: string, args?: object) => {
  return useTranslation().t(key, args);
};
