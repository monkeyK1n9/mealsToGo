import React from "react"
import Ionicons from "@expo/vector-icons/Ionicons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {theme} from "../theme"

import { RestaurantStackScreen } from "./RestaurantStackScreen";
import { MapStackScreen } from "./MapStackScreen";
import { SettingStackScreen } from "./SettingStackScreen"
import { RestaurantsContextProvider } from "../../services/restaurants/RestaurantContext";
import { LocationContextProvider } from "../../services/location/LocationContext"; 
import { FavoritesContextProvider } from "../../services/favorites/FavoritesContext"; 


  
const Tab = createBottomTabNavigator()

export const AppNavigator = () => {
    return (   
        <FavoritesContextProvider>
            <LocationContextProvider>
                <RestaurantsContextProvider>        
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
                            <Tab.Screen name="Setting" component={SettingStackScreen} options={{ headerShown: false }}/>
                    </Tab.Navigator>
                </RestaurantsContextProvider>
            </LocationContextProvider>
        </FavoritesContextProvider>
    )
}