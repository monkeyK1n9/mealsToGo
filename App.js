import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import {Text} from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { RestaurantsScreen } from './src/features/restaurants/screens/RestaurantsScreen';
import {theme} from "./src/infrastructure/theme/index"
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons"

import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"
import {SafeAreaViewSection} from "./src/features/restaurants/components/Utility/SafeAreaViewSection"

const MapPage = ()=> {
  return (
    <SafeAreaViewSection>
      <Text>MapScreen</Text>
    </SafeAreaViewSection>
  )
}

const SettingPage = ()=> {
  return (
    <SafeAreaViewSection>
      <Text>SettingScreen</Text>
    </SafeAreaViewSection>
  )
}

const Tab = createBottomTabNavigator()

export default function App() {
  const [oswaldLoaded] = useOswald({Oswald_400Regular})
  const [latoLoaded] = useLato({Lato_400Regular})

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName = undefined

                if (route.name==="Restaurant") {
                  iconName = focused ? 
                    "restaurant" : "restaurant-outline"
                } else if (route.name==="Map") {
                  iconName = focused ?
                    "map" : "map-outline"
                } else if (route.name==="Setting") {
                  iconName = focused ? 
                    "settings" : "settings-outline"
                }
                return <Ionicons name={iconName} size={size} color={color} />
              },
              tabBarActiveTintColor: theme.colors.brand.primary,
              tabBarInactiveTintColor: theme.colors.brand.secondary
            })} >
            <Tab.Screen name="Restaurant" component={RestaurantsScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="Map" component={MapPage}/>
            <Tab.Screen name="Setting" component={SettingPage}/>
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
