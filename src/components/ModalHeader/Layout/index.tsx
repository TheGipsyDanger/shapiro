import * as React from 'react';

import { Wrapped, Text, Icon } from '~/components/Base';
import { Conditional } from '~/components/Conditional';

import { IModalHeaderLayout } from '@/ModalHeader';

export const ModalHeader = ({
  onPress,
  title,
  showIcon = true,
  color = 'black',
}: IModalHeaderLayout) => (
  <Wrapped testID="ModalHeader">
    <Conditional render={showIcon}>
      <Wrapped center>
        <Icon
          lib="Entypo"
          name="chevron-small-down"
          size={40}
          color={color}
          {...{ onPress }}
        />
      </Wrapped>
    </Conditional>
    <Conditional render={title !== ''}>
      <Text
        testID="ModalHeaderTitle"
        size={6}
        font="medium"
        mt={2}
        pl={2}
        mb={4}>
        {title}
      </Text>
    </Conditional>
  </Wrapped>
);
