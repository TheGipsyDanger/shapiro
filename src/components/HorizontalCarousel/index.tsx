import * as React from 'react';
import { FlatList } from 'react-native';
import { useRef, useEffect } from 'react';

import { useEvent } from '~/hooks';

import { IHorizontalCarousel } from '@/HorizontalCarousel';
import { HorizontalCarousel as Layout } from './Layout';

export const HorizontalCarousel = (props: IHorizontalCarousel) => {
  const flatlistRef = useRef<FlatList>(null);
  const { imageIndex } = useEvent();

  useEffect(() => {
    scrollList(imageIndex);
  }, [imageIndex]);

  function changeIndex(index: number) {
    const { swipeCarrousel } = props;
    swipeCarrousel(index);
    scrollList(index);
  }

  function scrollList(index: number) {
    flatlistRef?.current?.scrollToIndex({
      animated: true,
      index: index,
    });
  }

  const layoutProps = {
    ...props,
    changeIndex,
    flatlistRef,
  };

  return <Layout {...layoutProps} />;
};
