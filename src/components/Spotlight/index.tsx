import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useEvent, useAlert, useCreateEvent } from '~/hooks';
import { createEventFactory, createDaysFactory, IEditEvent } from '~/utils';

import { ISpotlight } from '@/Spotlight';
import { Spotlight as Layout } from './Layout';

export const Spotlight = (props: ISpotlight) => {
  const navigation = useNavigation();

  const { showAlert } = useAlert();
  const { setEventToEdit } = useCreateEvent();
  const {
    days,
    updateDays,
    spotlightDay,
    setSelectedDay,
    setCurrentEvent,
  } = useEvent();

  const Event = createEventFactory(spotlightDay);
  const Days = createDaysFactory(days);

  const { day, events } = Event.formattingTheEvent();

  function selectEvent(id: string) {
    const dayObj = Days.selectedDay(day);
    const currentEvent = Event.getCurrentEvent(id);
    setSelectedDay(dayObj);
    setCurrentEvent(currentEvent);
    navigation.navigate('ImagesOfEvent');
  }

  function openDay() {
    setSelectedDay(Days.selectedDay(day));
    navigation.navigate('EventsOfDay');
  }

  function edit(id: string) {
    const event = Event.getCurrentEvent(id);
    setEventToEdit(event);
    props.onPress();
  }

  function createEvent() {
    setEventToEdit({} as IEditEvent);
    props.onPress();
  }

  function remove(id: string) {
    const { name } = Event.getCurrentEvent(id);

    const days = Days.updateDay(Event.deleteEvent(id));
    updateDays(days);

    showAlert({
      title: `${name} deleted`,
      message: 'Successfully delete event.',
      type: 'success',
    });
  }

  const layoutProps = {
    ...props,
    day,
    edit,
    remove,
    openDay,
    selectEvent,
    onPress: createEvent,
    hasEvents: !!events.length,
    showMore: events.length > 3,
    events: Event.sortEvents(events).slice(0, 3),
  };

  return <Layout {...layoutProps} />;
};
