import * as React from 'react';
import { IActionButton } from './data';
import { ActionButton as Layout } from './Layout';

export const ActionButton: React.FC<IActionButton> = props => (
  <Layout {...props} />
);
