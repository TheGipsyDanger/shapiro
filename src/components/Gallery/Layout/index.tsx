import * as React from 'react';
import { FlatList } from 'react-native';

import { Conditional } from '~/components/Conditional';
import { Wrapped } from '~/components/Base';
import { Header } from './Header';
import { ImageOption } from './ImageOption';
import { Image } from './Image';
import { Thumb } from './Thumb';

import { IGalleryLayout } from '../data';

export const Gallery = ({
  images,
  thumbRef,
  showInfo,
  galleryRef,
  changeInfoState,
  changeGalleryIndex,
  ...props
}: IGalleryLayout) => (
  <Wrapped bg="total_black" testID={`Gallery`}>
    <Conditional render={showInfo}>
      <Header />
      <ImageOption />
    </Conditional>
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
  </Wrapped>
);
