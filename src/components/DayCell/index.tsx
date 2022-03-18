import * as React from 'react';

import { Metrics } from '~/styles';

import { useDate } from '~/hooks';

import { IDayCell } from '@/DayCell';
import { DayCell as Layout } from './Layout';

const { width } = Metrics;

export const DayCell = (props: IDayCell) => {
  const { day } = props;
  const size = width / 7;

  const {
    date: { dayName },
  } = useDate();

  function defineText(day: string): string {
    const subDay = day.substring(0, 3);
    return subDay.charAt(0).toUpperCase() + subDay.slice(1);
  }

  const layoutProps = {
    ...props,
    size,
    defineText,
    isToday: defineText(day) === defineText(dayName),
  };

  return <Layout {...layoutProps} />;
};
