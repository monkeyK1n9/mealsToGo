import React from "react"
import {Text} from "../../restaurants/components/typography/TextComponent"
import LottieView from 'lottie-react-native';
import { Spacer } from "../../restaurants/components/spacer/SpacerComponent"
import { AccountContainer, AccountCover, AuthButton, BackImage, AnimationWrapper } from "../components/AccountStyles"

export const AccountScreen = ({navigation}) => {
    return (
        <BackImage>
            <AccountCover />
            <AnimationWrapper>
                <LottieView 
                    key="animation"
                    autoPlay
                    loop
                    resizeMode="cover"
                    source={require("../../../../assets/watermelon.json")}
                />
            </AnimationWrapper>
            <Text variant="appName" >Meals To Go</Text>
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