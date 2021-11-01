import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { Metrics } from '~/styles';
import { defineCorrectIndex } from '~/utils';

import { IPromotionalSlider, sliderImages, indicatorImages } from './data';
import { PromotionalSlider as Layout } from './Layout';

export const PromotionalSlider: React.FC<IPromotionalSlider> = props => {
  const { delay = 5000 } = props;
  const galleryRef = useRef<FlatList>();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [sliderIndex, setSliderIndex] = useState<number>(60);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setCounter(old => old + 1);
    }, delay);

    if (counter > 0) {
      scrollLists(sliderIndex + 1);
      setActiveIndex(() => (activeIndex === 3 ? 0 : activeIndex + 1));
      setSliderIndex(old => old + 1);
    }
  }, [counter]);

  function scrollLists(index: number): void {
    galleryRef?.current?.scrollToIndex({
      index,
      animated: true,
    });
  }

  function changeSliderIndex(event: any): void {
    const index = Math.floor(
      event?.nativeEvent?.contentOffset?.x / Metrics.width
    );
    setSliderIndex(() => index);
    setActiveIndex(() => defineCorrectIndex(index));
  }

  function isSelect(index: number): boolean {
    return index === activeIndex;
  }

  function indicatorPress(index: number): void {
    const newSliderIndex = index - activeIndex + sliderIndex;
    setActiveIndex(() => index);
    setSliderIndex(() => newSliderIndex);
    scrollLists(newSliderIndex);
  }

  const layoutProps = {
    ...props,
    isSelect,
    galleryRef,
    sliderImages,
    indicatorPress,
    indicatorImages,
    changeSliderIndex,
  };

  return <Layout {...layoutProps} />;
};
