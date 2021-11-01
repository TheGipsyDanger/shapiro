import * as React from 'react';
import { Children } from 'react';
import { IConditionalLayout } from '../data';

export const Conditional = ({ render, children }: IConditionalLayout) => {
  const [first, second] = Children.toArray(children);
  return render ? first : second ? second : null;
};
