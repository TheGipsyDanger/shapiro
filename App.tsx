import * as React from 'react';
import * as Font from 'expo-font';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import {
  Intro,
  Toast,
  GlobalProvider,
  ModalController,
} from './src/components';

import { useStorage } from './src/hooks';
import Routes from './src/routes/Routes';

const App: React.FC = () => {
  const { getStorage, setStorage } = useStorage();
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [goToIntro, setGoToIntro] = useState(false);

  const handleFinishLoading = () => {
    setLoadingComplete(true);
  };

  const handleLoadingError = (error: any) => {
    console.warn(error);
  };

  const onTutorialDone = async () => {
    try {
      await setStorage('showIntro', false);
      setGoToIntro(false);
    } catch (error) {
      console.log('Error onTutorialDone');
    }
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
      <NavigationContainer>
        <GlobalProvider>
          {goToIntro ? <Intro onTutorialDone={onTutorialDone} /> : <Routes />}
          <Toast />
          <ModalController />
        </GlobalProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
