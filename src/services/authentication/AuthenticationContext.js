import React, {useState, createContext} from "react"
import {loginRequest, registerRequest} from "./AuthenticationService"
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"

export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)

    const auth = getAuth();
    onAuthStateChanged(auth, (usr) => {
    if (usr) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(usr)
        setIsLoading(false)
    } else {
        // User is signed out
        setIsLoading(false)
    }
    });


    const onLogin = (email, password) => {
        setIsLoading(true)
        loginRequest(email, password)
        .then((u)=> {
            setUser(u)
            setIsLoading(false)
        })
        .catch((err)=> {
            setIsLoading(false)
            setError(err.toString(err))
        })
    }

    const onRegister = (email, password, confirmPassword) => {
        setIsLoading(true)
        if(password !== confirmPassword) {
            setError("Error: Passwords do not match")
            return
        }
        registerRequest(email, password)
        .then((u)=> {
            setUser(u)
            setIsLoading(false)
        })
        .catch((err)=> {
            setIsLoading(false)
            setError(err.toString(err))
        })
    }

    const onLogout = () => {
        setUser(null)
        const auth = getAuth()
        signOut(auth)
    }

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    ) 
}