import * as React from 'react';

import { Text, Wrapped, Icon } from '~/components/Base';

import { ISpotlightHeaderLayout } from '@/Spotlight';

export const Header: React.FC<ISpotlightHeaderLayout> = ({ day, onPress }) => (
  <Wrapped flexDirection={'row'} justifyContent="space-between" mb={2}>
    <Wrapped>
      <Text size={7} font="black" color="clean">
        {`${day.toUpperCase()}\nEVENTS`}
      </Text>
    </Wrapped>
    <Wrapped center testID={`AddEvent`} {...{ onPress }}>
      <Wrapped bg={'clean'} p={2} borderRadius="circle">
        <Icon name={'plus'} color="black" size={30} />
      </Wrapped>
    </Wrapped>
  </Wrapped>
);
