import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useEvent } from '~/hooks';
import { createEventFactory } from '~/utils';

import { IEventsOfDay } from '@/EventsOfDay';
import { EventsOfDay as Layout } from './Layout';

export const EventsOfDay: React.FC<IEventsOfDay> = props => {
  const navigation = useNavigation();

  const { selectedDay, setCurrentEvent } = useEvent();

  const Event = createEventFactory(selectedDay);

  const { day, events } = Event.formattingTheEvent();

  const selectEvent = (id: string) => {
    setCurrentEvent(Event.getCurrentEvent(id));
    navigation.navigate('ImagesOfEvent');
  };

  const headerTitle = !!events.length
    ? `Events of ${day}`
    : `${day.charAt(0).toUpperCase() + day.slice(1)} has no events`;

  const layoutProps = {
    ...props,
    headerTitle,
    selectEvent,
    events: Event.sortEvents(events),
  };

  return <Layout {...layoutProps} />;
};
