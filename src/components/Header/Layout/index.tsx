import * as React from 'react';
import { Children } from 'react';

import { IHeaderLayout } from '../data';

import { Wrapped, Text } from '~/components/Base';

export const Header = ({ children, title }: IHeaderLayout) => {
  const [left, right] = Children.toArray(children);

  return (
    <Wrapped
      testID={'Header'}
      flexDirection="row"
      justifyContent={'space-between'}
      alignItems="center"
      borderBottomWidth={1 / 3}
      borderColor="shadowBorder"
      p={4}>
      <Wrapped alignItems="flex-start" flex={1}>
        {left}
      </Wrapped>
      <Wrapped flex={3}>
        <Text textAlign="center">{title}</Text>
      </Wrapped>
      <Wrapped alignItems="flex-end" flex={1}>
        {right}
      </Wrapped>
    </Wrapped>
  );
};
