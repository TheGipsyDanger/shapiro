import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Page, EventCell, Wrapped, ModalHeader, Scroll } from '~/components';

import { IEventsOfDayLayout } from '../data';

export const EventsOfDay: React.FC<IEventsOfDayLayout> = ({
  day,
  events,
  selectEvent,
}) => (
  <Wrapped flex={1} bg={'white'}>
    <Page testID="EventsOfDay">
      <StatusBar style="dark" />
      <ModalHeader title={`Events of ${day}`} />
      <Scroll testID="EventsList">
        <Wrapped mx={2}>
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
    </Page>
  </Wrapped>
);
