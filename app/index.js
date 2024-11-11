import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import Home from './screens/home';
import Apvp from './screens/VideoDetails';
import StackNav from './navigators/mainNav';
SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible while we fetch resources

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Poppins_Regular: require('./assets/fonts/Poppins-Regular.ttf'),
    Poppins_Bold: require('./assets/fonts/Poppins-Bold.ttf'),
    Poppins_Italic: require('./assets/fonts/Poppins-Italic.ttf'),
    Poppins_SemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    Poppins_Medium: require('./assets/fonts/Poppins-Medium.ttf'),
    Rabiat_Muhammad: require('./assets/fonts/Rabiat-Muhammad.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      try {
        if (fontsLoaded) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          await SplashScreen.hideAsync();
          setAppIsReady(true);
        }
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!appIsReady) {
    return null;
  }

  return ( 
    <StackNav/>
);
}


