import * as React from 'react';

import { Wrapped, Text } from '~/components/Base';
import { FormError } from '~/components/FormError';

import { IEventNameInputLayout } from '@/EventNameInput';
import C from './styles';

export const EventNameInput: React.FC<IEventNameInputLayout> = ({
  errors,
  values,
  touched,
  onChange,
}) => (
  <Wrapped testID={`EventNameInput`}>
    <Text mb={2}>Event name:</Text>
    <C.Input
      autoFocus={true}
      contextMenuHidden={true}
      autoCapitalize={'none'}
      autoCorrect={false}
      returnKeyType={'next'}
      value={values.name}
      placeholder={'Ex: math class'}
      onChangeText={(text: string) => onChange('name', text)}
    />

    {errors?.name && touched?.name ? (
      <FormError error={errors?.name} />
    ) : (
      <FormError error={'  '} />
    )}
  </Wrapped>
);
