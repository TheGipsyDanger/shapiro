import * as React from 'react';
import { useRef, useEffect } from 'react';

import { useEvent } from '~/hooks';

import { IHorizontalCarousel } from './data';
import { HorizontalCarousel as Layout } from './Layout';

export const HorizontalCarousel: React.FC<IHorizontalCarousel> = props => {
  const flatlistRef = useRef(null);
  const { imageIndex } = useEvent();

  useEffect(() => {
    //@ts-ignore
    flatlistRef?.current?.scrollToIndex({
      animated: true,
      index: imageIndex,
    });
  }, [imageIndex]);

  const changeIndex = (index: number) => {
    props.swipeCarrousel(index);
    //@ts-ignore
    flatlistRef?.current?.scrollToIndex({
      animated: true,
      index: index,
    });
  };

  const layoutProps = {
    ...props,
    changeIndex,
    flatlistRef,
  };

  return <Layout {...layoutProps} />;
};
