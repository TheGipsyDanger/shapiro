import * as React from 'react';
import { IEventsOption } from './data';
import { EventsOption as Layout } from './Layout';

export const EventsOption: React.FC<IEventsOption> = props => (
  <Layout {...props} />
);
