import React, {useState, useContext} from "react"
import { ActivityIndicator, Colors } from "react-native-paper"
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext"
import { Spacer } from "../../restaurants/components/spacer/SpacerComponent"
import { AccountContainer, AccountCover, LoginButton, AuthInput, BackImage, AuthButton } from "../components/AccountStyles"
import { Text } from "../../restaurants/components/typography/TextComponent"

export const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const {onRegister, isLoading, error} = useContext(AuthenticationContext)
    return (
        <BackImage>
            <AccountCover />
            <Text variant="title" >Meals To Go</Text>
            <AccountContainer>
               <AuthInput 
                label="E-mail"
                mode="outlined"
                placeholder="email@example.com"
                autoCapitalize="none"
                value={email}
                onChangeText = {(t) => setEmail(t)}
               /> 

               <Spacer size="large">
                   <AuthInput 
                        label="Password"
                        secureTextEntry={true}
                        mode="outlined"
                        placeholder="*****"
                        autoCapitalize="none"
                        value={password}
                        onChangeText={(t) => setPassword(t)}
                   />
               </Spacer>

               <Spacer size="large">
                   <AuthInput 
                        label="Confirm Password"
                        secureTextEntry={true}
                        mode="outlined"
                        placeholder="*****"
                        autoCapitalize="none"
                        value={confirmPassword}
                        onChangeText={(t) => setConfirmPassword(t)}
                   />
               </Spacer>

                {error ? (
                    <Text variant="error">Email or Password is incorrect*</Text>
                    ):(
                    null
                )}

               <Spacer size="large">
                    {isLoading ? (
                        <ActivityIndicator animating={true} color={Colors.red800} size="large" />
                    ):(
                        <LoginButton 
                            icon="account-box-outline"
                            mode="contained"
                            onPress={() => {
                                onRegister(email, password, confirmPassword)
                            }} 
                        > Register </LoginButton>    
                    )}
               </Spacer>
            </AccountContainer>
            <Spacer size="large">
                <AuthButton 
                    mode="contained"
                    onPress={() => navigation.goBack()}
                > Back </AuthButton>
            </Spacer>
        </BackImage>
    )
}