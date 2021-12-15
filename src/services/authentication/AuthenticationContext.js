import React, {useState, createContext} from "react"
import {loginRequest} from "./AuthenticationService"

export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)

    const onLogin = (email, password) => {
        setIsLoading(true)
        loginRequest(email, password)
        .then((u)=> {
            setUser(u)
            setIsLoading(false)
        })
        .catch((err)=> {
            setIsLoading(false)
            setError(err)
        })
    }

    return (
        <AuthenticationContext.Provider
            value={{
                user,
                isLoading,
                error,
                onLogin
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    ) 
}