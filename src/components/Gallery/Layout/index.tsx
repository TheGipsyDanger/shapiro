import * as React from 'react';
import { FlatList } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import { Conditional } from '~/components/Conditional';
import { Wrapped } from '~/components/Base';
import { ModalHeader } from '~/components/ModalHeader';
import { ImageOption } from './ImageOption';
import { Image } from './Image';
import { Thumb } from './Thumb';

import { IGalleryLayout } from '../data';

export const Gallery = ({
  images,
  thumbRef,
  showInfo,
  galleryRef,
  deleteImage,
  changeInfoState,
  changeGalleryIndex,
  ...props
}: IGalleryLayout) => (
  <Wrapped bg="total_black" testID={`Gallery`}>
    <FlatList
      ref={galleryRef}
      data={images}
      horizontal
      pagingEnabled
      onMomentumScrollEnd={event => changeGalleryIndex(event)}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <Image uri={item.uri} changeInfoState={changeInfoState} />
      )}
    />
    <Conditional render={showInfo}>
      <FlatList
        ref={thumbRef}
        data={images}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        style={{ position: 'absolute', bottom: 30 }}
        renderItem={({ item, index }) => (
          <Thumb {...{ ...props, uri: item.uri, index }} />
        )}
      />
    </Conditional>
    <Conditional render={showInfo}>
      <Wrapped
        zIndex={10}
        position="absolute"
        top={initialWindowMetrics?.insets.top}
        left={0}
        right={0}>
        <Wrapped>
          <ModalHeader title="" color="white" />
          <ImageOption onPress={deleteImage} />
        </Wrapped>
      </Wrapped>
    </Conditional>
  </Wrapped>
);
