import React, {useState} from "react"
import { Spacer } from "../../restaurants/components/spacer/SpacerComponent"
import { AccountContainer, AccountCover, LoginButton, AuthInput, BackImage } from "../components/AccountStyles"

export const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <BackImage>
            <AccountCover />
            <AccountContainer>
               <AuthInput 
                label="E-mail"
                mode="outlined"
                placeholder="email@example.com"
                value={email}
                onChangeText = {(t) => setEmail(t)}
               /> 

               <Spacer size="large">
                   <AuthInput 
                        label="Password"
                        secure={true}
                        mode="outlined"
                        placeholder="*****"
                        value={password}
                        onChangeText={(t) => setPassword(t)}
                   />
               </Spacer>

               <Spacer size="large">
                    <LoginButton 
                       icon="lock-open-outline"
                       mode="contained"
                       onPress={() => null} 
                    > Login </LoginButton>
               </Spacer>
            </AccountContainer>
        </BackImage>
    )
}