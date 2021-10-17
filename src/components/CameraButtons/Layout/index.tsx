import * as React from 'react';

import { Wrapped } from '~/components/Base';
import { IconButton } from './IconButton';
import { Button } from './Button';

import { ICameraButtonsLayout } from '@/CameraButtons';

export const CameraButtons = ({
  flashMode,
  toggleType,
  takePicture,
  toggleFlash,
}: ICameraButtonsLayout) => (
  <Wrapped
    testID={`CameraButtons`}
    px={4}
    mb={2}
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between">
    <IconButton
      lib="Ionicons"
      icon={flashMode === 1 ? 'ios-flash' : 'ios-flash-off'}
      onPress={toggleFlash}
    />
    <Button onPress={takePicture} />
    <IconButton
      lib="MaterialCommunityIcons"
      icon="camera-retake"
      onPress={toggleType}
    />
  </Wrapped>
);
