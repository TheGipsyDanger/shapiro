import * as React from 'react';

import { Wrapped, Icon } from '../../Base';

import { IActionButtonLayout } from '../data';

export const ActionButton: React.FC<IActionButtonLayout> = ({
  icon,
  onPress,
  type = 'default',
}) => (
  <Wrapped
    testID={`ActionButton`}
    bg={type == 'default' ? 'primary' : 'red'}
    position="absolute"
    shadow="iconVery"
    borderRadius="circle"
    right={16}
    bottom={16}
    height={56}
    width={56}>
    <Wrapped {...{ onPress }} flex={1} center>
      <Icon name={icon} color="white" size={30} />
    </Wrapped>
  </Wrapped>
);
