import * as React from 'react';

import { Wrapped, Text } from '~/components/Base';
import { FormError } from '~/components/FormError';

import { IHourInputLayout } from '../data';
import C from './styles';

export const HourInput: React.FC<IHourInputLayout> = ({
  placeholder,
  label,
  errors,
  values,
  touched,
  onChange,
}) => {
  const lowerLabel = label.toLowerCase();

  return (
    <Wrapped flex={1} testID={`HourInput`}>
      <Text mb={2}>{label}</Text>

      <C.TimeInput
        {...{ placeholder, value: values[lowerLabel] }}
        onChangeText={(text: string) => onChange(lowerLabel, text)}
      />

      {errors?.[lowerLabel] && touched?.[lowerLabel] ? (
        <FormError error={errors[lowerLabel]} />
      ) : (
        <FormError error={'  '} />
      )}
    </Wrapped>
  );
};
