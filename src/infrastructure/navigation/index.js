import React, {useContext} from "react"
import {NavigationContainer} from "@react-navigation/native"

import {View, Text} from "react-native"
import { AuthenticationContext } from "../../services/authentication/AuthenticationContext"
import { AppNavigator } from "./AppNavigator"
import {AccountNavigator} from "./AccountNavigator"

export const Navigation = () => {
    const {isAuthenticated} = useContext(AuthenticationContext)
    return (
        <NavigationContainer>
            {isAuthenticated ? 
                <AppNavigator /> : 
                <AccountNavigator />}
        </NavigationContainer>    
    )
}