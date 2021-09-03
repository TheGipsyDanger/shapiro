import * as React from 'react';

import { Metrics } from '~/styles';

import { IDayCell } from './data';
import { DayCell as Layout } from './Layout';

const { width } = Metrics;

export const DayCell: React.FC<IDayCell> = props => {
  const size = width / 4;

  function defineText(day: string): string {
    const subDay = day.substring(0, 3);
    return subDay.charAt(0).toUpperCase() + subDay.slice(1);
  }

  const layoutProps = {
    ...props,
    size,
    defineText,
  };

  return <Layout {...layoutProps} />;
};
