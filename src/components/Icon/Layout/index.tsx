import React from 'react';
import * as ICON from '@expo/vector-icons';

import { Wrapped } from '../../Base/Wrapped';

import { IIconLayout, IIconDefine } from '../data';
import C from './styles';

const Main = ({ lib, ...props }: IIconLayout) => {
  // @ts-ignore
  const Icon = ICON[lib];
  return <Icon {...props} />;
};

export const Icon: React.FC<IIconLayout> = ({
  lib = 'AntDesign',
  size = 20,
  color = 'black',
  name,
  ...props
}) => (
  <Wrapped {...props} testID={'Icon'}>
    <Main lib={lib} size={size} color={color} name={name} />
  </Wrapped>
);
