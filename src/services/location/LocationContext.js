import React, {useState, useEffect, createContext} from 'react';
import { locationRequest, locationTransform } from './LocationService';

export const LocationContext = createContext()

export const LocationContextProvider = ({children}) => {
    const [location, setLocation] = useState(null)
    const [keyword, setKeyword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const onSearch = (searchKeyword) => {
        setIsLoading(true)
        setKeyword(searchKeyword)
        
        
    }

    useEffect(() => {
        if(!keyword.length) {
            // don't do anything
            return
        }
        
        locationRequest(keyword.toLowerCase())
            .then(locationTransform)
            .then((results) => {
                setIsLoading(false)
                setLocation(results)
            })
            .catch((err) => {
                setIsLoading(false)
                setError(err)
            })
    }, [keyword])

    return(
        <LocationContext.Provider 
            value={{
                isLoading,
                error,
                search: onSearch,
                keyword,
                location
            }}    
        >
            {children}
        </LocationContext.Provider>
    )
}
