import * as React from 'react';

import { useDate } from '~/hooks';

import { IHomeHeader } from '@/HomeHeader';
import { HomeHeader as Layout } from './Layout';

export const HomeHeader = (props: IHomeHeader) => {
  const { date } = useDate();

  const layoutProps = {
    ...props,
    date,
  };

  return <Layout {...layoutProps} />;
};
