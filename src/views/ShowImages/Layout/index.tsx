import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Gallery } from '~/components';

import { IShowImagesLayout } from '@/ShowImages';

export const ShowImages = ({ goBack }: IShowImagesLayout) => (
  <>
    <StatusBar style="light" />
    <Gallery {...{ goBack }} />
  </>
);
