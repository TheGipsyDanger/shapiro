import * as React from 'react';

import { Wrapped } from '~/components/Base';
import { Date } from './Date';

import { IHomeHeaderLayout } from '@/HomeHeader';

export const HomeHeader = ({ date }: IHomeHeaderLayout) => (
  <Wrapped testID={`HomeHeader`}>
    <Date {...date} />
  </Wrapped>
);
