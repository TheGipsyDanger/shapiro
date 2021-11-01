import * as React from 'react';
import { useRef, useState } from 'react';
import { FlatList } from 'react-native';

import { useEvent } from '~/hooks';
import { Metrics } from '~/styles';

import { IGallery } from './data';
import { Gallery as Layout } from './Layout';

export const Gallery = (props: IGallery) => {
  const galleryRef = useRef<FlatList>();
  const thumbRef = useRef<FlatList>();

  const { currentEvent } = useEvent();

  const [images, setImages] = useState(
    currentEvent.images.map(img => ({
      uri: img,
    }))
  );

  const [showInfo, setShowInfo] = useState(true);

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

  const layoutProps = {
    ...props,
    images,
    showInfo,
    isSelect,
    thumbRef,
    galleryRef,
    activeIndex,
    changeThumbIndex,
    changeGalleryIndex,
    changeInfoState: () => setShowInfo(old => !old),
  };

  return <Layout {...layoutProps} />;
};
