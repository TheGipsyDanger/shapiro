import * as React from 'react';
import { useRef, useEffect } from 'react';

import { useEvent } from '~/hooks';

import { IHorizontalCarousel } from '@/HorizontalCarousel';
import { HorizontalCarousel as Layout } from './Layout';

export const HorizontalCarousel: React.FC<IHorizontalCarousel> = props => {
  const flatlistRef = useRef(null);
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
    //@ts-ignore
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
