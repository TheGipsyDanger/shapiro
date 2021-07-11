import * as React from 'react';

import { Text } from '~/components/Base';

import { IFormErrorLayout } from '../data';
import C from './styles';

export const FormError: React.FC<IFormErrorLayout> = ({ error }) => (
  <Text color="red" size={3} mt={1}>
    {error}
  </Text>
);