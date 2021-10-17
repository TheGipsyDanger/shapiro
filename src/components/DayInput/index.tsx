import * as React from 'react';

import { IDayInput } from '@/DayInput';
import { DayInput as Layout } from './Layout';

export const DayInput = (props: IDayInput) => {
  const { days, daySelected } = props;

  const dayIndex = days.findIndex(day => day === daySelected);

  function isSelected(day: string): boolean {
    return daySelected === day;
  }

  const layoutProps = {
    ...props,
    dayIndex,
    isSelected,
  };

  return <Layout {...layoutProps} />;
};
