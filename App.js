import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components/native';
import {theme} from "./src/infrastructure/theme/index"
import { Navigation } from './src/infrastructure/navigation';

import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"

import { RestaurantsContextProvider } from './src/services/restaurants/RestaurantContext';
import { LocationContextProvider } from './src/services/location/LocationContext';
import { FavoritesContextProvider } from './src/services/favorites/FavoritesContext';
import { AuthenticationContextProvider } from './src/services/authentication/AuthenticationContext';

import {initializeApp, getApps} from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA3I9JxJpRgQv2YgLyfMIE1G2uLLeGuLV0",
  authDomain: "mealstogo-9817d.firebaseapp.com",
  projectId: "mealstogo-9817d",
  storageBucket: "mealstogo-9817d.appspot.com",
  messagingSenderId: "1037996718723",
  appId: "1:1037996718723:web:0e89d2f27a67a8eaa139b6",
  measurementId: "G-RYMMH75CP3"
};

if(getApps().length < 1){
  initializeApp(firebaseConfig);
}


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(()=> {
    const auth = getAuth();
    setTimeout(()=> {
      signInWithEmailAndPassword(auth, "email@guillaume.com", "test123")
      .then((user)=> {
        setIsAuthenticated(true)
      }).catch((e)=> {
        console.log(e)
      })  
    }, 1000)
  }, [])

  const [oswaldLoaded] = useOswald({Oswald_400Regular})
  const [latoLoaded] = useLato({Lato_400Regular})

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }


  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
