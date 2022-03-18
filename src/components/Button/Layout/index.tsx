import * as React from 'react';

import { Wrapped, Text } from '~/components/Base';
import { IButtonTypes } from '~/utils';

import { IButtonLayout } from '@/Button';

const options: IButtonTypes = {
  default: { bg: 'black', color: 'white' },
  clean: { bg: 'clean', color: 'black' },
};

export const Button = ({
  title,
  onPress,
  type = 'default',
  color = 'green',
  disabled = false,
  ...props
}: IButtonLayout) => {
  const button = options[type];
  return (
    <Wrapped {...(disabled ? {} : { onPress })}>
      <Wrapped {...props} boxShadow="card" opacity={disabled ? 0.4 : 1}>
        <Wrapped bg={button.bg} center borderRadius="medium" height={48}>
          <Text size={4} color={button.color} font="medium">
            {title}
          </Text>
        </Wrapped>
      </Wrapped>
    </Wrapped>
  );
};
