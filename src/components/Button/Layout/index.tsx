import * as React from 'react';

import { Wrapped, Text, Linear } from '~/components/Base';

import { IButtonLayout } from '../data';

export const Button: React.FC<IButtonLayout> = ({
  title,
  color = 'primary',
  disabled = false,
  ...props
}) => (
  <Wrapped center {...props} boxShadow="card">
    {disabled ? (
      <Wrapped bg="white" borderRadius={8} opacity={0.4}>
        <Text px={4} py={2}>
          {title}
        </Text>
      </Wrapped>
    ) : (
      <Wrapped bg={color} borderRadius={8}>
        <Text color="white" px={4} py={2}>
          {title}
        </Text>
      </Wrapped>
    )}
  </Wrapped>
);
