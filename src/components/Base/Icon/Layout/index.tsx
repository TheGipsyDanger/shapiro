import * as React from 'react';
import * as icons from '@expo/vector-icons/';

import { Wrapped } from '../../Wrapped';

import { colors } from '../../../../hooks/Theme';
import { IIconLayout } from '../data';

const Main = ({ lib, ...props }: IIconLayout) => {
  // @ts-ignore
  const Icon = icons[lib];
  return <Icon {...props} />;
};

export const Icon: React.FC<IIconLayout> = ({
  color = 'black',
  lib = 'AntDesign',
  name = 'stepforward',
  size = 20,
  ...props
}) => (
  <Wrapped {...props} testID={'Icon'}>
    <Main lib={lib} size={size} color={colors[color]} name={name} />
  </Wrapped>
);
