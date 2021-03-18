import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useEvent } from '~/hooks';
import { createEventFactory } from '~/utils';

import { IEventsOfDay } from './data';
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

  const layoutProps = {
    ...props,
    day,
    selectEvent,
    events: Event.sortEvents(events),
  };

  return <Layout {...layoutProps} />;
};
