import * as React from 'react';

import { IHourInput } from '@/HourInput';
import { HourInput as Layout } from './Layout';

export const HourInput = (props: IHourInput) => {
  const { values, label, placeholder } = props;

  const lowerLabel = label.toLowerCase();

  const hasValue = values[lowerLabel] !== '';

  const inputValue = hasValue ? values[lowerLabel] : placeholder;

  const layoutProps = {
    ...props,
    hasValue,
    lowerLabel,
    inputValue,
  };

  return <Layout {...layoutProps} />;
};
