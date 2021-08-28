import * as React from 'react';

import { Wrapped, Text } from '~/components/Base';
import { Icon } from '~/components/Base/Icon';

import { IModalHeaderLayout } from '../data';

export const ModalHeader: React.FC<IModalHeaderLayout> = ({
  onPress,
  title,
  color = 'black',
}) => (
  <Wrapped testID="ModalHeader">
    <Wrapped center>
      <Icon
        lib="Entypo"
        name="chevron-small-down"
        size={40}
        color={color}
        {...{ onPress }}
      />
    </Wrapped>
    {title !== '' && (
      <Text
        testID="ModalHeaderTitle"
        size={6}
        font="medium"
        mt={2}
        pl={2}
        mb={4}>
        {title}
      </Text>
    )}
  </Wrapped>
);
