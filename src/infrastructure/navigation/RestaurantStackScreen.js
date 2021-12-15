import React from "react"
import { createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import { RestaurantsScreen } from "../../features/restaurants/screens/RestaurantsScreen"

import {RestaurantDetail} from "../../features/restaurants/screens/RestaurantDetail"


const RestaurantStack = createStackNavigator()

export const RestaurantStackScreen = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{...TransitionPresets.ModalPresentationIOS}}>
            <RestaurantStack.Screen name="RestaurantScreen" component={RestaurantsScreen} options={{ headerShown: false }}/>
            <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetail} options={{ headerShown: false }}/>
        </RestaurantStack.Navigator>
    )
}