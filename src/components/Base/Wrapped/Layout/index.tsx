import * as React from 'react';
import { IWrappedLayout } from '../data';
import { TouchableOpacity } from 'react-native';
import C from './styles';

export const Wrapped: React.FC<IWrappedLayout> = ({
  children,
  bg = 'transparent',
  ...props
}) => {
  const as = props.onPress && TouchableOpacity;
  return (
    <C.Wrapped {...props} {...{ as, activeOpacity: 0.6 }} bg={bg}>
      {children}
    </C.Wrapped>
  );
};
