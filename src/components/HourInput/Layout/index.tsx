import * as React from 'react';

import { Wrapped, Text } from '~/components/Base';
import { FormError } from '~/components/FormError';

import { IHourInputLayout } from '@/HourInput';
import C from './styles';

export const HourInput: React.FC<IHourInputLayout> = ({
  label,
  errors,
  touched,
  hasValue,
  inputValue,
  press,
}) => {
  const lowerLabel = label.toLowerCase();

  return (
    <Wrapped flex={1} testID={`HourInput`} onPress={() => press(label)}>
      <Text mb={2}>{label}</Text>

      <C.FakeTimeInput color={hasValue ? 'black' : 'placeholder'}>
        {inputValue}
      </C.FakeTimeInput>

      {errors?.[lowerLabel] && touched?.[lowerLabel] ? (
        <FormError error={errors[lowerLabel]} />
      ) : (
        <FormError error={'  '} />
      )}
    </Wrapped>
  );
};
