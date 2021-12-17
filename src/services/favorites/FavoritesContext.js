import React, {createContext, useState, useEffect, useContext} from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthenticationContext } from "../authentication/AuthenticationContext"

export const FavoritesContext = createContext()

export const FavoritesContextProvider = ({children}) => {
    const {user} = useContext(AuthenticationContext)
    const [favorites, setFavorites] = useState([])

    const add = (restaurant) => {
        setFavorites([...favorites, restaurant])
    }
    const remove = (restaurant) => {
        const newFavorites = favorites.filter((fav) => fav.placeId !== restaurant.placeId)
        setFavorites(newFavorites)
    }

    const saveFavorites = async (value, uid) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue)
        } catch (e) {
          // saving error
          console.log("Error saving", e)
        }
    }

    const loadFavorites = async (uid) => {
        try {
            const value = await AsyncStorage.getItem(`@favorites-${uid}`)
            if(value !== null) {
              // value previously stored
              setFavorites(JSON.parse(value))
            }
        } catch(e) {
            // error reading value
            console.log("Error loading", e)
        }
    }

    useEffect(()=> {
        if (user) {
            loadFavorites(user.uid)    
        }
    }, [user])

    useEffect(()=> {
        if (user) {
            saveFavorites(favorites, user.uid)    
        }
    }, [favorites, user])

    return(
        <FavoritesContext.Provider 
            value ={{
                anyFavorites: !!favorites,
                favorites,
                addToFavorites: add,
                removeFromFavorites: remove
            }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}