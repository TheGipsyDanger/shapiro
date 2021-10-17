import * as React from 'react';

import { Wrapped, Text } from '~/components/Base';

import { IButtonLayout } from '@/Button';

export const Button = ({
  title,
  color = 'green',
  disabled = false,
  ...props
}: IButtonLayout) => (
  <Wrapped {...props} boxShadow="card">
    <Wrapped bg="clean" center borderRadius="medium">
      <Text color={disabled ? 'white' : 'black'} font="medium" py={2}>
        {title}
      </Text>
    </Wrapped>
  </Wrapped>
);
