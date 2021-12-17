import React, {useState, useContext} from "react"
import { ActivityIndicator, Colors } from "react-native-paper"
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext"
import { Spacer } from "../../restaurants/components/spacer/SpacerComponent"
import { AccountContainer, AccountCover, LoginButton, AuthInput, BackImage, AuthButton } from "../components/AccountStyles"
import { Text } from "../../restaurants/components/typography/TextComponent"

export const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {onLogin, isLoading, error} = useContext(AuthenticationContext)
    
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

                {error ? (
                    <Text variant="error">Email or Password is incorrect*</Text>
                    ):(
                    null
                )}

               <Spacer size="large">
                {!isLoading ? (
                    <LoginButton 
                        icon="lock-open-outline"
                        mode="contained"
                        onPress={() => onLogin(email, password)} 
                    > Login </LoginButton>
                ):(
                    <ActivityIndicator animating={true} color={Colors.red800} size="large" />
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