import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useEvent } from '~/hooks';

import { IImagesOfEvent } from './data';
import { ImagesOfEvent as Layout } from './Layout';

export const ImagesOfEvent: React.FC<IImagesOfEvent> = props => {
  const navigation = useNavigation();

  const { currentEvent, setImageIndex } = useEvent();

  const goTo = (imageIndex: number) => {
    setImageIndex(imageIndex);
    navigation.navigate('ShowImages');
  };

  const layoutProps = {
    ...props,
    goTo,
    currentEvent,
  };

  return <Layout {...layoutProps} />;
};
