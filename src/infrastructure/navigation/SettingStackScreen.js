import React from "react"
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack"
import { SettingPage } from "../../features/settings/screens/SettingScreen"
import { FavoritePage } from "../../features/settings/screens/FavoriteScreen"
import { CameraScreen } from "../../features/settings/screens/CameraScreen"

const SettingStack = createStackNavigator()

export const SettingStackScreen = () => {
    return(
        <SettingStack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter
            }}
        >
            <SettingStack.Screen name="SettingScreen" component={SettingPage} options={{ headerShown: false }}/>
            <SettingStack.Screen name="Favorites" component={FavoritePage} options={{ headerShown: true }}/>
            <SettingStack.Screen name="Camera" component={CameraScreen} options={{ headerShown: false }}/>
        </SettingStack.Navigator>
    )
}