import * as React from 'react';

import { Text, Wrapped } from '~/components/Base';
import { Header, ShowMore, Event } from './components';

import { ISpotlightLayout } from '@/Spotlight';

export const Spotlight: React.FC<ISpotlightLayout> = ({
  day,
  events,
  onPress,
  openDay,
  showMore,
  hasEvents,
  selectEvent,
}) => (
  <Wrapped testID={`Spotlight`} mt={4}>
    <Header {...{ day, onPress }} />
    {hasEvents ? (
      <Wrapped flex={1}>
        {events.map((event, index) => (
          <Event key={index} {...{ event, selectEvent }} />
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
