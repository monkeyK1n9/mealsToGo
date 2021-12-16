import React from "react"
import { Spacer } from "../../restaurants/components/spacer/SpacerComponent"
import { AccountContainer, AccountCover, AuthButton, BackImage } from "../components/AccountStyles"

export const AccountScreen = ({navigation}) => {
    return (
        <BackImage>
            <AccountCover />
            <AccountContainer>
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}
                > Login </AuthButton>

                <Spacer size="large">
                    <AuthButton
                        icon="account-box-outline"
                        mode="contained"
                        onPress={() => navigation.navigate("Register")}
                    > Register </AuthButton>
                </Spacer>  
            </AccountContainer>
        </BackImage>
    )
}