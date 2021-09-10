import * as React from 'react';

import { useEvent } from '~/hooks';
import { createEventFactory } from '~/utils';

import { IEventCell } from '@/EventCell';
import { EventCell as Layout } from './Layout';

export const EventCell: React.FC<IEventCell> = props => {
  const { selectedDay } = useEvent();

  const Event = createEventFactory(selectedDay);

  const { images } = Event.formattingImages(props.images);

  const layoutProps = {
    ...props,
    images,
    imagesCount: props.images.length,
  };

  return <Layout {...layoutProps} />;
};
