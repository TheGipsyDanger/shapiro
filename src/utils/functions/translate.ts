import { useTranslation } from 'react-i18next';

export const t = (key: string) => {
  return useTranslation().t(key);
};
