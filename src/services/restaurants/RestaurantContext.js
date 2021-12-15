import React, {useState, createContext, useEffect, useContext} from 'react'
import { restaurantsResquest, restaurantsTransform } from './RestaurantService'
import { LocationContext } from '../location/LocationContext'

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const {location} = useContext(LocationContext)
    
    const retrieveRestaurants =(loc) => {
        setIsLoading(true)
        setTimeout(() => {
            restaurantsResquest(loc)
                .then(restaurantsTransform)
                .then((results) => {
                    setIsLoading(false)
                    setRestaurants(results)
                })
                .catch((err) => setError(err))
        }, 500)
    }

    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`
            retrieveRestaurants(locationString)
            return
        }
        retrieveRestaurants("37.7749295,-122.4194155")
    }, [location])

    // console.log(restaurants)

    return (
        <RestaurantsContext.Provider
            value = {{
                restaurants,
                isLoading,
                error
            }} >
            {children}
        </RestaurantsContext.Provider>
    )
}