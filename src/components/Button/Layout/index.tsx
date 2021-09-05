import * as React from 'react';

import { Wrapped, Text, Linear } from '~/components/Base';

import { IButtonLayout } from '../data';

export const Button: React.FC<IButtonLayout> = ({
  title,
  color = 'green',
  disabled = false,
  ...props
}) => (
  <Wrapped {...props} boxShadow="card">
    <Wrapped bg="clean" center borderRadius="medium">
      <Text color={disabled ? 'white' : 'black'} font="medium" py={2}>
        {title}
      </Text>
    </Wrapped>
  </Wrapped>
);
``;
