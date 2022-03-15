import * as React from 'react';
import { useRef, useState } from 'react';
import { FlatList } from 'react-native';

import { useEvent } from '~/hooks';
import { Metrics } from '~/styles';

import { IGallery } from './data';
import { Gallery as Layout } from './Layout';

export const Gallery = (props: IGallery) => {
  const { goBack } = props;
  const galleryRef = useRef<FlatList>();
  const thumbRef = useRef<FlatList>();

  const { currentEvent } = useEvent();

  const [images, setImages] = useState(
    currentEvent.images.map(img => ({
      uri: img,
    }))
  );

  const [showInfo, setShowInfo] = useState<boolean>(true);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  function isSelect(index: number): boolean {
    return index === activeIndex;
  }

  function scrollLists(index: number): void {
    const values = {
      index,
      animated: true,
      viewPosition: 0.5,
    };

    galleryRef?.current?.scrollToIndex(values);
    thumbRef?.current?.scrollToIndex(values);
  }

  function changeGalleryIndex(event: any): void {
    const index = Math.floor(
      event?.nativeEvent?.contentOffset?.x / Metrics.width
    );

    changeThumbIndex(index);
  }

  function changeThumbIndex(index: number): void {
    setActiveIndex(index);
    scrollLists(index);
  }

  function cleanAndBackFlow() {
    // deletar Images da factory
    goBack();
    setImages([]);
    setActiveIndex(0);
  }

  function updateImages() {
    const newImages = images.filter((_, index) => index !== activeIndex);

    if (newImages.length === 1 || activeIndex === 0) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex - 1);
    }

    setImages(newImages);
  }

  function deleteImage() {
    images.length >= 1 ? cleanAndBackFlow() : updateImages();
  }

  const layoutProps = {
    ...props,
    images,
    showInfo,
    isSelect,
    thumbRef,
    galleryRef,
    activeIndex,
    deleteImage,
    changeThumbIndex,
    changeGalleryIndex,
    changeInfoState: () => setShowInfo(old => !old),
  };

  return <Layout {...layoutProps} />;
};
