import * as React from 'react';

import { Wrapped, Text, Icon } from '~/components/Base';

import { IModalHeaderLayout } from '@/ModalHeader';

export const ModalHeader = ({
  onPress,
  title,
  color = 'black',
}: IModalHeaderLayout) => (
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
