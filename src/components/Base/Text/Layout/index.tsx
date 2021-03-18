import * as React from 'react';
import { ITextLayout } from '../data';
import C from './styles';

export const Text: React.FC<ITextLayout> = ({ size = 5, color, ...props }) => (
  <C.Text {...props} color={color} fontSize={size} />
);
