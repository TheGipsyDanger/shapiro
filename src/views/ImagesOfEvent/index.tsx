import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useEvent, useModal } from '~/hooks';

import { IImagesOfEvent } from '@/ImagesOfEvent';
import { ImagesOfEvent as Layout } from './Layout';

export const ImagesOfEvent: React.FC<IImagesOfEvent> = props => {
  const navigation = useNavigation();

  const { openModal, defineFunctions } = useModal();
  const { currentEvent, setImageIndex } = useEvent();

  const goTo = (imageIndex: number) => {
    setImageIndex(imageIndex);
    navigation.navigate('ShowImages');
  };

  const showAlert = () => {
    defineFunctions([() => navigation.goBack()]);
    openModal('ModalQuestion');
  };

  const layoutProps = {
    ...props,
    goTo,
    showAlert,
    currentEvent,
  };

  return <Layout {...layoutProps} />;
};
