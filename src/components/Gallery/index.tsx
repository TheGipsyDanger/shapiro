import * as React from 'react';
import { useRef, useState } from 'react';
import { FlatList } from 'react-native';

import { useEvent } from '~/hooks';
import { Metrics } from '~/styles';
import { navigate, createEventFactory, IDay } from '~/utils';

import { IGallery } from './data';
import { Gallery as Layout } from './Layout';

export const Gallery = (props: IGallery) => {
  const galleryRef = useRef<FlatList>();
  const thumbRef = useRef<FlatList>();

  const {
    days,
    imageIndex,
    updateDays,
    selectedDay,
    currentEvent,
    setCurrentEvent,
  } = useEvent();

  const Event = createEventFactory(selectedDay);

  const { day, events } = Event.formattingTheEvent();

  const [images, setImages] = useState(
    currentEvent.images.map(img => ({
      uri: img,
    }))
  );

  function updateEventImages(images: any[]) {
    return {
      [day.toLowerCase()]: {
        events: events.map(item => {
          if (currentEvent.id === item.id) {
            const newItem = {
              ...item,
              images: images.map(item => item.uri),
            };
            setCurrentEvent(newItem);
            return newItem;
          } else {
            return {
              ...item,
            };
          }
        }),
      },
    };
  }

  const [showInfo, setShowInfo] = useState<boolean>(true);

  const [activeIndex, setActiveIndex] = useState<number>(imageIndex);

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
    changeThumbIndex(
      Math.floor(event?.nativeEvent?.contentOffset?.x / Metrics.width)
    );
  }

  function changeThumbIndex(index: number): void {
    setActiveIndex(index);
    scrollLists(index);
  }

  function cleanAndBackFlow() {
    navigate('EventsOfDay', {});
    setImages(() => []);
    defineDays(updateEventImages([]));
    setActiveIndex(0);
  }

  function updateImages() {
    const newImages = images.filter((_, index) => index !== activeIndex);
    const checkIsLast = newImages.length === 1 || activeIndex === 0;
    setActiveIndex(old => (checkIsLast ? 0 : old - 1));
    setImages(() => newImages);
    defineDays(updateEventImages(newImages));
  }

  function defineDays(day: IDay) {
    updateDays({
      ...days,
      ...day,
    });
  }

  function deleteImage() {
    images.length === 1 ? cleanAndBackFlow() : updateImages();
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
