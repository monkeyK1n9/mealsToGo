import React, {useContext} from "react"
import {View, Text} from "react-native"
import { AuthenticationContext } from "../../services/authentication/AuthenticationContext"
import { AppNavigator } from "./AppNavigator"

export const Navigation = () => {
    const {isAuthenticated} = useContext(AuthenticationContext)
    return isAuthenticated ? 
            <AppNavigator /> : 
            <AccountNavigator />
}