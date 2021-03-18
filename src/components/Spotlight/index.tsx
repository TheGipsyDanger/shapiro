import * as React from 'react';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useEvent, useAlert } from '~/hooks';
import { createEventFactory } from '~/utils';

import { ISpotlight } from './data';
import { Spotlight as Layout } from './Layout';

export const Spotlight: React.FC<ISpotlight> = props => {
  const navigation = useNavigation();
  const { showAlert } = useAlert();
  const { spotlightDay, setCurrentEvent } = useEvent();

  const Event = createEventFactory(spotlightDay);

  const { day, events } = Event.formattingTheEvent();

  const selectEvent = (id: string) => {
    const currentEvent = Event.getCurrentEvent(id);
    if (!!currentEvent.images.length) {
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
