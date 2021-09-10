import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';

import {
  Page,
  Linear,
  Wrapped,
  Button,
  CameraEvent,
  ModalHeader,
  CameraButtons,
} from '~/components';

import { IShapiroCameraLayout } from '@/ShapiroCamera';

import C from './styles';

const NoAccess: React.FC<IShapiroCameraLayout> = ({
  missingPermissions: { camera, roll },
  openDeviceSettings,
}) => (
  <Linear flex={1} justifyContent="center">
    <Wrapped mx={4}>
      <Wrapped>
        <C.Text font="black" mb={4}>
          {'No access to camera'}
        </C.Text>
        {!camera && (
          <C.Text>{`We need camera permission to take photos.`}</C.Text>
        )}
        {!roll && (
          <C.Text>{`We need camera roll permission to save photos.`}</C.Text>
        )}
      </Wrapped>
      {(!camera || !roll) && (
        <Button title="Allow access" onPress={openDeviceSettings} color="red" />
      )}
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

export const ShapiroCamera: React.FC<IShapiroCameraLayout> = props => {
  const {
    type,
    event,
    cameraRef,
    flashMode,
    takePicture,
    hasPermission,
  } = props;

  if (hasPermission === null) return <Loading />;

  if (!hasPermission) return <NoAccess {...props} />;

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
