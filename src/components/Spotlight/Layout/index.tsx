import * as React from 'react';

import { Text, Wrapped } from '~/components/Base';

import { Event } from './Event';
import { Header } from './Header';
import { ShowMore } from './ShowMore';

import { ISpotlightLayout } from '@/Spotlight';

export const Spotlight = ({
  day,
  edit,
  events,
  remove,
  onPress,
  openDay,
  showMore,
  hasEvents,
  selectEvent,
}: ISpotlightLayout) => (
  <Wrapped testID={`Spotlight`} mt={4}>
    <Header {...{ day, onPress }} />
    {hasEvents ? (
      <Wrapped flex={1}>
        {events.map((event, index) => (
          <Event key={index} {...{ event, selectEvent, edit, remove }} />
        ))}
        {showMore && <ShowMore {...{ openDay }} />}
      </Wrapped>
    ) : (
      <Wrapped py={3}>
        <Text font="medium" size={4}>
          No recorded events
        </Text>
      </Wrapped>
    )}
  </Wrapped>
);
