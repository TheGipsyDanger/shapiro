import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Page, Scroll, Wrapped, EventCell, ModalHeader } from '~/components';

import { IEventsOfDayLayout } from '@/EventsOfDay';

export const EventsOfDay: React.FC<IEventsOfDayLayout> = ({
  events,
  headerTitle,
  selectEvent,
}) => (
  <Wrapped flex={1} bg={'white'}>
    <Page testID="EventsOfDay">
      <StatusBar style="dark" />
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
    </Page>
  </Wrapped>
);
