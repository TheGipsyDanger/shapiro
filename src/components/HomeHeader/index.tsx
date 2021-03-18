import * as React from 'react';

import { useDate } from '~/hooks';

import { IHomeHeader } from './data';
import { HomeHeader as Layout } from './Layout';

export const HomeHeader: React.FC<IHomeHeader> = props => {
  const { date } = useDate();

  const layoutProps = {
    ...props,
    date,
  };

  return <Layout {...layoutProps} />;
};
