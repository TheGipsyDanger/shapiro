import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Scroll, Wrapped, EventCell, ModalHeader } from '~/components';

import { IEventsOfDayLayout } from '@/EventsOfDay';

export const EventsOfDay: React.FC<IEventsOfDayLayout> = ({
  events,
  headerTitle,
  selectEvent,
}) => (
  <Wrapped flex={1} bg={'white'}>
    <StatusBar style="dark" />
    <Wrapped height={useSafeAreaInsets().top} />
    <ModalHeader title={headerTitle} />
    <Scroll testID="EventsList">
      <Wrapped>
        {events.map((event, index) => (
          <EventCell
            key={index}
            name={event.name}
            images={event.images}
            hour={`${event.initial} - ${event.final}`}
            onPress={() => selectEvent(event.id)}
          />
        ))}
      </Wrapped>
    </Scroll>
  </Wrapped>
);
