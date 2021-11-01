import * as React from 'react';

import { Wrapped, PromotionalSlider } from '~/components';
import { responsive } from '~/utils';

import { ITestLayout } from '../data';

export const Test: React.FC<ITestLayout> = ({ data }) => {
  return <PromotionalSlider radius={25} />;
};
