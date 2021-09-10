import * as React from 'react';
import { Animated } from 'react-native';

import { IToastLayout } from '@/Toast';
import C from './styles';

export const Toast: React.FC<IToastLayout> = ({ top }) => (
  <Animated.View
    style={{
      zIndex: 5,
      top,
    }}
    testID={`Toast`}>
    <C.Text>{`Toast`}</C.Text>
  </Animated.View>
);
