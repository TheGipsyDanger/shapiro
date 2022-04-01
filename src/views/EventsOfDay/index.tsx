import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useEvent } from '~/hooks';
import { createEventFactory, t } from '~/utils';

import { IEventsOfDay } from '@/EventsOfDay';
import { EventsOfDay as Layout } from './Layout';

export const EventsOfDay = (props: IEventsOfDay) => {
  const navigation = useNavigation();

  const { selectedDay, setCurrentEvent } = useEvent();

  const Event = createEventFactory(selectedDay);

  const { day, events } = Event.formattingTheEvent();

  const selectEvent = (id: string) => {
    setCurrentEvent(Event.getCurrentEvent(id));
    navigation.navigate('ImagesOfEvent');
  };

  const headerTitle = !!events.length
    ? `${t(`EVENTS_OF_DAY.HEADER_V1`)} ${day}`
    : `${day.charAt(0).toUpperCase() + day.slice(1)} ${t(
        `EVENTS_OF_DAY.HEADER_V2`
      )}`;

  const layoutProps = {
    ...props,
    headerTitle,
    selectEvent,
    events: Event.sortEvents(events),
  };

  return <Layout {...layoutProps} />;
};
