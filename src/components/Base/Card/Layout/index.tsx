import * as React from 'react';
import { ICardLayout } from '../data';
import { TouchableOpacity } from 'react-native';
import C from './styles';

export const Card: React.FC<ICardLayout> = ({
  children,
  bg = 'white',
  shadow = 'card',
  borderRadius = 4,
  ...props
}) => {
  const as = props.onPress && TouchableOpacity;
  return (
    <C.Wrapped
      {...props}
      {...{ as, activeOpacity: 0.6 }}
      bg={bg}
      shadow={shadow}
      borderRadius={borderRadius}>
      {children}
    </C.Wrapped>
  );
};
