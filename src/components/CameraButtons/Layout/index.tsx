import * as React from 'react';

import { Wrapped, Linear, Icon } from '~/components/Base';

import { ICameraButtonsLayout } from '@/CameraButtons';

const IconButton = ({ icon, lib, onPress }: any) => (
  <Wrapped height={40} width={40} center>
    <Wrapped {...{ onPress }}>
      <Icon lib={lib} name={icon} color="white" size={30} />
    </Wrapped>
  </Wrapped>
);

const Button = ({ onPress }: any) => (
  <Wrapped {...{ onPress }}>
    <Wrapped
      height={56}
      width={56}
      borderRadius="circle"
      bg="orange"
      overflow="hidden">
      <Linear flex={1} />
    </Wrapped>
  </Wrapped>
);

export const CameraButtons: React.FC<ICameraButtonsLayout> = ({
  flashMode,
  toggleType,
  takePicture,
  toggleFlash,
}) => (
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
