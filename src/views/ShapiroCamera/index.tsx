import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Camera } from 'expo-camera';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';
import Toast from 'react-native-toast-message';

import { useEvent, useDate } from '~/hooks';
import {
  IEvent,
  IDayNames,
  createDaysFactory,
  createEventFactory,
} from '~/utils';

import { IShapiroCamera, IPermission, IPermissionCheck } from '@/ShapiroCamera';
import { ShapiroCamera as Layout } from './Layout';

export const ShapiroCamera = (props: IShapiroCamera) => {
  const { days, updateDays } = useEvent();
  const { date } = useDate();

  const navigation = useNavigation();

  const cameraRef = useRef(null);

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(1);
  const [flashMode, setFlashMode] = useState(0);
  const [
    missingPermissions,
    setMissingPermissions,
  ] = useState<IPermissionCheck>({} as IPermissionCheck);

  useEffect(() => {
    init();
  }, []);

  const Days = createDaysFactory(days);

  const Event = createEventFactory(Days.selectedDay(date.dayName as IDayNames));

  const { success, data } = Event.getEventNow(date.dayName as IDayNames);

  async function init() {
    const permissionsState = await getPermission();
    const permissions = convertPermissions(permissionsState);
    const hasPermissionsToFlow = checkPermissions(permissions);
    setMissingPermissions(permissions);
    setHasPermission(hasPermissionsToFlow);
  }

  async function getPermission(): Promise<any> {
    try {
      const { status: camera } = await Camera.requestPermissionsAsync();
      const { status: roll } = await MediaLibrary.requestPermissionsAsync();
      return {
        camera,
        roll,
      };
    } catch (error) {
      console.log('Error ao pegar permissões');
    }
  }

  function checkPermissions(permissions: IPermissionCheck): boolean {
    return Object.values(permissions).every(Boolean);
  }

  function convertPermissions(permissions: IPermission): IPermissionCheck {
    return Object.keys(permissions).reduce((acc, curr) => {
      return {
        ...acc,
        [curr]: permissions[curr as keyof IPermission] === 'granted',
      };
    }, {} as IPermissionCheck);
  }

  function openDeviceSettings() {
    Linking.openURL('app-settings:');
    navigation.goBack();
  }

  async function takePicture() {
    if (!success) {
      return Toast.show({
        type: 'error',
        text1: `Photo cannot be saved.`,
        text2: 'No events at this time.',
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
  }

  const layoutProps = {
    ...props,
    type,
    cameraRef,
    flashMode,
    takePicture,
    hasPermission,
    hasEvent: success,
    missingPermissions,
    openDeviceSettings,
    event: data as IEvent,
    toggleFlash: () => setFlashMode(flashMode === 1 ? 0 : 1),
    toggleType: () => setType(type === 1 ? 2 : 1),
  };

  return <Layout {...layoutProps} />;
};
