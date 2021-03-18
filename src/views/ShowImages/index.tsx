import * as React from 'react';

import { useEvent } from '~/hooks';

import { IShowImages } from './data';
import { ShowImages as Layout } from './Layout';

export const ShowImages: React.FC<IShowImages> = props => {
  const { currentEvent, imageIndex, setImageIndex } = useEvent();

  const images = currentEvent.images;

  const imagesForModal = images.map(img => ({
    url: img,
  }));

  const swipeCarrousel = (index: any) => {
    setImageIndex(index);
  };

  const changeBottomCarrouselIndex = (index: number) => {
    setImageIndex(index);
  };

  const layoutProps = {
    ...props,
    images,
    imageIndex,
    imagesForModal,
    swipeCarrousel,
    changeBottomCarrouselIndex,
  };

  return <Layout {...layoutProps} />;
};
