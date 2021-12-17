import React, {useContext} from "react"
import { View, Alert } from "react-native"
import { Text } from "../../restaurants/components/typography/TextComponent"
import { List, Avatar } from "react-native-paper"
import { SafeAreaViewSection } from "../../restaurants/components/Utility/SafeAreaViewSection"
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext"
import styled from "styled-components/native"
import { Spacer } from "../../restaurants/components/spacer/SpacerComponent"

const SettingItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]}
`
const AvatarContainer = styled(View)`
    align-items: center;
    padding: ${props => props.theme.space[3]}
`

export const SettingPage = ({navigation})=> {
    const {onLogout, user} = useContext(AuthenticationContext)

    return (
        <SafeAreaViewSection>
            <AvatarContainer>
                <Avatar.Icon size={170} icon="account" backgroundColor="#2182BD"/>
            
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