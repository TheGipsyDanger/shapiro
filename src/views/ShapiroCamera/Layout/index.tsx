import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';

import {
  Page,
  Text,
  Linear,
  Wrapped,
  CameraEvent,
  ModalHeader,
  CameraButtons,
} from '~/components';

import { IShapiroCameraLayout } from '../data';

const NoAccess = () => (
  <Linear flex={1}>
    <Wrapped flex={1} center>
      <Text color="white">{'No access to camera'}</Text>
    </Wrapped>
  </Linear>
);

const Loading = () => (
  <Linear flex={1}>
    <Wrapped flex={1} center>
      <Wrapped mb={2}>
        <ActivityIndicator size="large" color="#FFF" />
      </Wrapped>
    </Wrapped>
  </Linear>
);

export const ShapiroCamera: React.FC<IShapiroCameraLayout> = ({
  type,
  event,
  hasEvent,
  cameraRef,
  flashMode,
  takePicture,
  hasPermission,
  ...props
}) => {
  if (hasPermission === null) return <Loading />;

  if (hasPermission === false) return <NoAccess />;

  return (
    <Camera ref={cameraRef} {...{ type, flashMode }} style={{ flex: 1 }}>
      <Page bg="transparent">
        <StatusBar style="light" />
        <Wrapped flex={1} justifyContent="space-between">
          <Wrapped>
            <ModalHeader title="" color="white" />
            <CameraEvent {...{ event }} />
          </Wrapped>
          <CameraButtons {...{ ...props, type, flashMode, takePicture }} />
        </Wrapped>
      </Page>
    </Camera>
  );
};
