import * as React from 'react';
import { IDayInput } from './data';
import { DayInput as Layout } from './Layout';

export const DayInput: React.FC<IDayInput> = props => {
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
