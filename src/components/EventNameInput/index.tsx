import * as React from 'react';
import { IEventNameInput } from './data';
import { EventNameInput as Layout } from './Layout';

export const EventNameInput: React.FC<IEventNameInput> = props => (
  <Layout {...props} />
);
