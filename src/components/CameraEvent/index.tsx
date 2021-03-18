import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { ICameraEvent } from './data';
import { CameraEvent as Layout } from './Layout';

export const CameraEvent: React.FC<ICameraEvent> = props => {
  const navigation = useNavigation();

  const goToCreateEvent = () => navigation.navigate('CreateEvent');

  const layoutProps = {
    ...props,
    goToCreateEvent,
  };

  return <Layout {...layoutProps} />;
};
