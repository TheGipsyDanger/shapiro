import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useStorage } from '~/hooks';

import { IWelcome } from '@/Welcome';
import { Welcome as Layout } from './Layout';

const assetsURL = '../../assets';

export const Welcome = (props: IWelcome) => {
  const { setStorage } = useStorage();
  const { navigate } = useNavigation();

  async function onTutorialDone() {
    try {
      await setStorage('showIntro', false);
      navigate('Home');
    } catch (error) {
      console.log('Error onTutorialDone');
    }
  }

  const data = [
    {
      key: 'step1',
      title: 'welcome',
      text: 'shapiro is a simple way to organize\nyour school lesson photos',
      image: require(`${assetsURL}/logo/white.png`),
    },
    {
      key: 'step2',
      title: 'events',
      text:
        "choose a day and select a time and that's it!\nyour event is created",
      image: require(`${assetsURL}/step2.png`),
    },
    {
      key: 'step3',
      title: 'take photos',
      text:
        'shapiro indicates the current event,\njust take photos and they\nwill be organized',
      image: require(`${assetsURL}/step3.png`),
    },
    {
      key: 'step4',
      title: 'organized',
      text: 'view your photos easily and organized\nby events',
      image: require(`${assetsURL}/step4.png`),
    },
    {
      key: 'step5',
      title: 'share',
      text: 'share your photos on the most\ndiverse platforms',
      image: require(`${assetsURL}/step5.png`),
    },
  ];

  const layoutProps = {
    ...props,
    data,
    onTutorialDone,
  };

  return <Layout {...layoutProps} />;
};
