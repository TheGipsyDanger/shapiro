import * as React from 'react';
import { FlatList } from 'react-native';

import { Wrapped } from '~/components/Base';
import { Image } from './Image';
import { Thumb } from './Thumb';

import { IGalleryLayout } from '../data';

export const Gallery = ({
  images,
  thumbRef,
  galleryRef,
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
      renderItem={({ item }) => <Image uri={item.uri} />}
    />
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
  </Wrapped>
);
