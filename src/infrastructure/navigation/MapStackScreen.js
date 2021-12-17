import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { MapScreen } from "../../features/map/screens/MapScreen"

const MapStack = createStackNavigator()

export const MapStackScreen = () => {
    return (
        <MapStack.Navigator>
            <MapStack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }}/>
        </MapStack.Navigator>
    )
}