import * as React from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
import { StatusBar } from 'expo-status-bar';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import { ModalHeader, Wrapped, HorizontalCarousel } from '../../../components';

import { IShowImagesLayout } from '../data';

export const ShowImages: React.FC<IShowImagesLayout> = ({
  images,
  imageIndex,
  imagesForModal,
  swipeCarrousel,
  ...props
}) => (
  <>
    <StatusBar style="light" />
    <Wrapped
      position="absolute"
      zIndex={2}
      top={initialWindowMetrics?.insets.top}
      left={0}
      right={0}>
      <ModalHeader title="" />
    </Wrapped>
    <ImageViewer
      onChange={index => swipeCarrousel(index)}
      index={imageIndex}
      imageUrls={imagesForModal}
      renderIndicator={() => <></>}
      useNativeDriver
    />
    <Wrapped
      position="absolute"
      zIndex={3}
      bottom={initialWindowMetrics?.insets.bottom}
      left={0}
      right={0}>
      <HorizontalCarousel {...{ images, imageIndex, ...props }} />
    </Wrapped>
  </>
);
