import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useStorage } from '~/hooks';

import { IWelcome, componentData } from './data';
import { Welcome as Layout } from './Layout';

export const Welcome: React.FC<IWelcome> = props => {
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

  const data = componentData.SLIDES;

  const layoutProps = {
    ...props,
    data,
    onTutorialDone,
  };

  return <Layout {...layoutProps} />;
};
