import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Gallery } from '~/components';

import { IShowImagesLayout } from '@/ShowImages';

export const ShowImages = (props: IShowImagesLayout) => (
  <>
    <StatusBar style="light" />
    <Gallery />
  </>
);
