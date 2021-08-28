import * as React from 'react';
import { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import { Wrapped, Text } from '~/components/Base';
import { useAlert } from '~/hooks';

import { IToast } from './data';

export const Toast: React.FC<IToast> = props => {
  const insets = initialWindowMetrics?.insets?.top || 0;

  const { isShow, alertCtx, setIsShow } = useAlert();

  const [animationValue] = useState(new Animated.Value(-80));

  const animations = {
    show: {
      toValue: insets,
      duration: 400,
      useNativeDriver: false,
    },
    remove: {
      toValue: -80,
      duration: 400,
      useNativeDriver: false,
    },
  };

  useEffect(() => {
    if (isShow) {
      Animated.timing(animationValue, animations.show).start();
      setTimeout(() => {
        Animated.timing(animationValue, animations.remove).start();
        setIsShow(false);
      }, 2600);
    }
  }, [isShow]);

  return (
    <Animated.View
      style={{
        zIndex: 100,
        top: animationValue,
        left: 0,
        right: 0,
        position: 'absolute',
        marginHorizontal: 16,
      }}
      testID={`Toast`}>
      <Wrapped
        bg="white"
        shadow={'toast'}
        borderRadius={'medium'}
        borderLeftWidth={8}
        borderColor={alertCtx.type === 'error' ? 'red' : 'green'}
        width={'100%'}
        height={80}
        py={2}>
        <Wrapped pl={2} flex={1} justifyContent="center">
          <Text font="medium" size={4}>
            {alertCtx.title}
          </Text>
          <Text font="light" color="gray" size={3}>
            {alertCtx.message}
          </Text>
        </Wrapped>
      </Wrapped>
    </Animated.View>
  );
};
