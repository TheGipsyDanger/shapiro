// @ts-nocheck
import * as React from 'react';
import * as Font from 'expo-font';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '~/utils/functions/navigator';
import AppLoading from 'expo-app-loading';
import Toast from 'react-native-toast-message';

import { GlobalProvider, ModalController } from './src/components';

import { useStorage } from './src/hooks';
import { toastConfig } from './src/configs/toast';
import { Routes } from './src/routes/Routes';

import './i18n';

const App: React.FC = () => {
  const { getStorage } = useStorage();
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [goToIntro, setGoToIntro] = useState(false);

  const handleFinishLoading = () => {
    setLoadingComplete(true);
  };

  const handleLoadingError = (error: any) => {
    console.warn(error);
  };

  const getTutorialStatus = async () => {
    try {
      const showIntro = await getStorage('showIntro');
      setGoToIntro(showIntro === {} ? false : showIntro);
    } catch (error) {
      console.log('Error getTutorialStatus');
    }
  };

  const loadResourcesAsync = async () => {
    await Font.loadAsync({
      'rubik-regular': require('./src/assets/fonts/Rubik-Regular.ttf'),
      'rubik-medium': require('./src/assets/fonts/Rubik-Medium.ttf'),
      'rubik-bold': require('./src/assets/fonts/Rubik-Bold.ttf'),
      'rubik-light': require('./src/assets/fonts/Rubik-Light.ttf'),
      'rubik-black': require('./src/assets/fonts/Title-Bold.otf'),
    });
    await getTutorialStatus();
  };

  if (isLoadingComplete === false)
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading}
      />
    );

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <GlobalProvider>
          <Routes goToIntro={goToIntro} />
          <ModalController />
          <Toast config={toastConfig} />
        </GlobalProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
