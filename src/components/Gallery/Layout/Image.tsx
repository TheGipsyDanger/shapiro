import * as React from 'react';
import ImageZoom from 'react-native-image-pan-zoom';

import { Metrics } from '~/styles';

import { IImage } from '../data';
import C from './styles';

const { width, height } = Metrics;

export const Image = ({ uri, changeInfoState }: IImage) => (
  <C.Container>
    <ImageZoom
      onClick={changeInfoState}
      cropWidth={width}
      imageWidth={width}
      cropHeight={height}
      imageHeight={height}>
      <C.Image
        source={{
          uri,
        }}
      />
    </ImageZoom>
  </C.Container>
);
