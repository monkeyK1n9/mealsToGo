import React, {useCallback, useContext, useState} from "react"
import { View, Alert, TouchableOpacity } from "react-native"
import { Text } from "../../restaurants/components/typography/TextComponent"
import { List, Avatar } from "react-native-paper"
import { SafeAreaViewSection } from "../../restaurants/components/Utility/SafeAreaViewSection"
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext"
import styled from "styled-components/native"
import { Spacer } from "../../restaurants/components/spacer/SpacerComponent"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from "@react-navigation/native"


const SettingItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]}
`
const AvatarContainer = styled(View)`
    align-items: center;
    padding: ${props => props.theme.space[3]}
`

export const SettingPage = ({navigation})=> {
    const {onLogout, user} = useContext(AuthenticationContext)
    const [photo, setPhoto] = useState("")

    const getProfilePicture = async (currentUser) => {
        const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`)
        setPhoto(photoUri)
    }

    
    useFocusEffect(
        useCallback(() => {
        getProfilePicture(user)
    }, [user]))
    return (
        <SafeAreaViewSection>
            <AvatarContainer>
                <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                    {photo ? (
                        <Avatar.Image source={{uri: photo}} size={170} />
                    ):(
                        <Avatar.Icon size={170} icon="account" backgroundColor="#2182BD"/>    
                    )}
                    
                </TouchableOpacity>

                <Spacer position="top" size="large">
                    <Text variant="label">{user.email}</Text>
                </Spacer>
            </AvatarContainer>
            <List.Section>
                <SettingItem
                    title="Favorites"
                    description="View you favorites"
                    left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                    onPress={() => navigation.navigate("Favorites")}
                />
                <SettingItem
                    style={{padding: 16}}
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="lock" />}
                    onPress={() => {
                        Alert.alert(
                            "Alert",
                            "Are you sure you want to logout?",
                            [
                                {text:"Yes", onPress: ()=> onLogout},
                                {text:"No", onPress: ()=>null, cancel: true}
                            ],
                            {
                                title: "Alert",
                                cancelable: true
                            }
                        )
                    }}
                />
            </List.Section>
        </SafeAreaViewSection>
    )
}