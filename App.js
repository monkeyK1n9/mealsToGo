import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components/native';
import {theme} from "./src/infrastructure/theme/index"
import { Navigation } from './src/infrastructure/navigation';

import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"


import { AuthenticationContextProvider } from './src/services/authentication/AuthenticationContext';

import {initializeApp, getApps} from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
   "YOUR APP CONFIG HERE"
};

if(getApps().length < 1){
  initializeApp(firebaseConfig);
}


export default function App() {

  const [oswaldLoaded] = useOswald({Oswald_400Regular})
  const [latoLoaded] = useLato({Lato_400Regular})

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }


  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />  
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
