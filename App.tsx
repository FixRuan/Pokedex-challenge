import React from 'react';
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';

import { Home } from './src/screens/Home';
import { Pokemon } from './src/screens/Pokemon';


let customFonts = {
  'SF_Regular': require('./src/assets/fonts/sf-pro-display-regular.ttf'),
  'SF_Medium': require('./src/assets/fonts/sf-pro-display-medium.ttf'),
  'SF_Bold': require('./src/assets/fonts/sf-pro-display-bold.ttf'),
}

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Pokemon />
    </ThemeProvider>
  );
}

