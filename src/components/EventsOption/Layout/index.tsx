import * as React from 'react';

import { Wrapped, Icon } from '~/components';

import { IEventsOptionLayout } from '../data';

export const EventsOption: React.FC<IEventsOptionLayout> = ({ data }) => (
  <Wrapped
    py={2}
    justifyContent="flex-end"
    flexDirection="row"
    testID={`EventsOption`}>
    <Wrapped mx={2}>
      <Icon name={'delete'} color="red" size={30} />
    </Wrapped>
  </Wrapped>
);
