import * as React from 'react';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useEvent, useAlert } from '~/hooks';
import { createEventFactory, createDaysFactory } from '~/utils';

import { ISpotlight } from './data';
import { Spotlight as Layout } from './Layout';

export const Spotlight: React.FC<ISpotlight> = props => {
  const navigation = useNavigation();
  const { showAlert } = useAlert();
  const { spotlightDay, setCurrentEvent, days, setSelectedDay } = useEvent();

  const Event = createEventFactory(spotlightDay);

  const { day, events } = Event.formattingTheEvent();

  const Days = createDaysFactory(days);

  const selectEvent = (id: string) => {
    const dayObj = Days.selectedDay(day);
    const currentEvent = Event.getCurrentEvent(id);

    if (!!currentEvent.images.length) {
      setSelectedDay(dayObj);
      setCurrentEvent(currentEvent);
      navigation.navigate('ImagesOfEvent');
    } else {
      showAlert({
        title: 'Ops...',
        message: 'Esse evento não possui nenhuma foto.',
        type: 'error',
      });
    }
  };

  const layoutProps = {
    ...props,
    day,
    selectEvent,
    events: Event.sortEvents(events).slice(0, 3),
  };

  return <Layout {...layoutProps} />;
};
