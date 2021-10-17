import * as React from 'react';

import { Wrapped, Linear } from '~/components/Base';

import { IButton } from '@/CameraButtons';

export const Button = ({ onPress }: IButton) => (
  <Wrapped {...{ onPress }}>
    <Wrapped
      height={56}
      width={56}
      borderRadius="circle"
      bg="orange"
      overflow="hidden">
      <Linear flex={1} />
    </Wrapped>
  </Wrapped>
);
