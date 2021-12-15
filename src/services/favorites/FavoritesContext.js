import React, {createContext, useState, useEffect} from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'

export const FavoritesContext = createContext()

export const FavoritesContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    const add = (restaurant) => {
        setFavorites([...favorites, restaurant])
    }
    const remove = (restaurant) => {
        const newFavorites = favorites.filter((fav) => fav.placeId !== restaurant.placeId)
        setFavorites(newFavorites)
    }

    const saveFavorites = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@favorites', jsonValue)
        } catch (e) {
          // saving error
          console.log("Error saving", e)
        }
    }

    const loadFavorites = async () => {
        try {
            const value = await AsyncStorage.getItem('@favorites')
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
        loadFavorites()
    }, [])

    useEffect(()=> {
        saveFavorites(favorites)
    }, [favorites])

    return(
        <FavoritesContext.Provider 
            value ={{
                favorites,
                addToFavorites: add,
                removeFromFavorites: remove
            }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}