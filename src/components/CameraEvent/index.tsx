import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { ICameraEvent } from '@/CameraEvent';
import { CameraEvent as Layout } from './Layout';

export const CameraEvent = (props: ICameraEvent) => {
  const navigation = useNavigation();

  const layoutProps = {
    ...props,
    goToCreateEvent: () => navigation.navigate('CreateEvent'),
  };

  return <Layout {...layoutProps} />;
};
