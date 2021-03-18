import * as React from 'react';
import { FlatList } from 'react-native';

import { Wrapped } from '../../Base';
import { Metrics } from '~/styles';

import { IHorizontalCarouselLayout } from '../data';
import C from './styles';

export const HorizontalCarousel: React.FC<IHorizontalCarouselLayout> = ({
  images,
  imageIndex,
  changeIndex,
  flatlistRef,
}) => {
  return (
    <Wrapped testID={`HorizontalCarousel`}>
      <FlatList
        data={images}
        ref={flatlistRef}
        initialScrollIndex={imageIndex}
        getItemLayout={(_, index) => ({
          length: Metrics.width / 4,
          offset: (Metrics.width / 4) * index,
          index,
        })}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item: img, index }: any) => (
          <C.ImageContainer
            onPress={() => changeIndex(index)}
            bg={index === imageIndex ? 'primary' : 'transparent'}
            center>
            <C.Image
              source={{
                uri: img,
              }}
            />
          </C.ImageContainer>
        )}
        keyExtractor={(_, index: number) => String(index)}
      />
    </Wrapped>
  );
};
