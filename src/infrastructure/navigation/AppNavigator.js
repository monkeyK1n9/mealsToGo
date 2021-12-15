import React from "react"
import {Text} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { RestaurantsScreen } from "../../features/restaurants/screens/RestaurantsScreen"
import Ionicons from "@expo/vector-icons/Ionicons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import {theme} from "../theme"
import {SafeAreaViewSection} from "../../features/restaurants/components/Utility/SafeAreaViewSection"

import { RestaurantStackScreen } from "./RestaurantStackScreen";
import { MapScreen } from "../../features/map/screens/MapScreen";

const MapStack = createStackNavigator()
const SettingStack = createStackNavigator()



const MapStackScreen = () => {
    return (
        <MapStack.Navigator>
            <MapStack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }}/>
        </MapStack.Navigator>
    )
}

const SettingStackScreen = () => {
    return(
        <SettingStack.Navigator>
            <SettingStack.Screen name="SettingScreen" component={SettingPage} options={{ headerShown: false }}/>
        </SettingStack.Navigator>
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

export const AppNavigator = () => {
    return (
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
                <Tab.Screen name="Restaurant" component={RestaurantStackScreen} options={{ headerShown: false }}/>
                <Tab.Screen name="Map" component={MapStackScreen} options={{ headerShown: false }}/>
                <Tab.Screen name="Setting" component={SettingStackScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}