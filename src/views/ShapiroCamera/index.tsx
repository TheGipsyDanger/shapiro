import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import { useEvent, useDate, useAlert } from '~/hooks';
import {
  IEvent,
  IDayNames,
  createDaysFactory,
  createEventFactory,
} from '~/utils';

import { IShapiroCamera } from './data';
import { ShapiroCamera as Layout } from './Layout';

export const ShapiroCamera: React.FC<IShapiroCamera> = props => {
  const { days, updateDays } = useEvent();
  const { date } = useDate();
  const { showAlert } = useAlert();

  const cameraRef = useRef(null);

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(1);
  const [flashMode, setFlashMode] = useState(0);

  useEffect(() => {
    getPermission();
  }, []);

  const Days = createDaysFactory(days);

  const Event = createEventFactory(Days.selectedDay(date.dayName as IDayNames));

  const { success, data } = Event.getEventNow(date.dayName as IDayNames);

  const getPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const takePicture = async () => {
    if (!success) {
      return showAlert({
        title: 'Photo cannot be saved.',
        message: 'No events at this time.',
        type: 'error',
      });
    }
    if (cameraRef) {
      try {
        // @ts-ignore
        const { uri: bloopUri } = await cameraRef.current.takePictureAsync({
          skipProcessing: true,
        });
        const { uri } = await MediaLibrary.createAssetAsync(bloopUri);
        data.images.push(uri);
        updateDays(days);
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  const layoutProps = {
    ...props,
    type,
    cameraRef,
    flashMode,
    takePicture,
    hasPermission,
    hasEvent: success,
    event: data as IEvent,
    toggleFlash: () => setFlashMode(flashMode === 1 ? 0 : 1),
    toggleType: () => setType(type === 1 ? 2 : 1),
  };

  return <Layout {...layoutProps} />;
};
