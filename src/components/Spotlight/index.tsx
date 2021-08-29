import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useEvent } from '~/hooks';
import { createEventFactory, createDaysFactory } from '~/utils';

import { ISpotlight } from './data';
import { Spotlight as Layout } from './Layout';

export const Spotlight: React.FC<ISpotlight> = props => {
  const navigation = useNavigation();

  const { spotlightDay, setCurrentEvent, days, setSelectedDay } = useEvent();

  const Event = createEventFactory(spotlightDay);

  const { day, events } = Event.formattingTheEvent();

  const Days = createDaysFactory(days);

  const selectEvent = (id: string) => {
    const dayObj = Days.selectedDay(day);
    const currentEvent = Event.getCurrentEvent(id);
    setSelectedDay(dayObj);
    setCurrentEvent(currentEvent);
    navigation.navigate('ImagesOfEvent');
  };

  const openDay = () => {
    setSelectedDay(Days.selectedDay(day));
    navigation.navigate('EventsOfDay');
  };

  const layoutProps = {
    ...props,
    day,
    openDay,
    selectEvent,
    hasEvents: !!events.length,
    showMore: events.length > 3,
    events: Event.sortEvents(events).slice(0, 3),
  };

  return <Layout {...layoutProps} />;
};
