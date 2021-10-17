import * as React from 'react';

import { Wrapped, Text } from '~/components/Base';

import { ICameraEventLayout } from '@/CameraEvent';

export const CameraEvent = ({ event, goToCreateEvent }: ICameraEventLayout) => {
  const action = event.name ? {} : { ...{ onPress: goToCreateEvent } };
  return (
    <Wrapped bg="opacity" {...action} testID={`CameraEvent`}>
      <Text color="white" textAlign="center" py={3}>
        {event.name || 'Create event'}
      </Text>
    </Wrapped>
  );
};
