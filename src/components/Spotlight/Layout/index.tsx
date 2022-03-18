import * as React from 'react';

import { Text, Wrapped } from '~/components/Base';
import { Conditional } from '~/components/Conditional';

import { Event } from './Event';

import { ISpotlightLayout } from '@/Spotlight';

export const Spotlight = ({
  edit,
  events,
  remove,
  hasEvents,
  selectEvent,
}: ISpotlightLayout) => (
  <Wrapped testID={`Spotlight`}>
    <Wrapped my={4}>
      <Text size={7} font="black" color="clean">
        {`TODAY EVENTS`}
      </Text>
    </Wrapped>
    <Conditional render={hasEvents}>
      <Wrapped flex={1}>
        {events.map((event, index) => (
          <Event key={index} {...{ event, selectEvent, edit, remove }} />
        ))}
      </Wrapped>
      <Wrapped>
        <Text font="medium" size={4} color="clean">
          No recorded events
        </Text>
      </Wrapped>
    </Conditional>
  </Wrapped>
);
