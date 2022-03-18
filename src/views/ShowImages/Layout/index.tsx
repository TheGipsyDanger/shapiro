import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Gallery, Wrapped } from '~/components';

import { IShowImagesLayout } from '@/ShowImages';

export const ShowImages = ({ goBack }: IShowImagesLayout) => (
  <Wrapped flex={1}>
    <StatusBar style="light" />
    <Gallery {...{ goBack }} />
  </Wrapped>
);
