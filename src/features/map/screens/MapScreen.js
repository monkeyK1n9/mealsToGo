import React, {useState, useEffect, useContext} from "react"
import {Text} from "react-native"
import MapView, {PROVIDER_GOOGLE} from "react-native-maps"
import styled from "styled-components/native"
import { LocationContext } from "../../../services/location/LocationContext"
import { RestaurantsContext } from "../../../services/restaurants/RestaurantContext"
import {Search} from "../components/SearchComponent"
import { MapCallout } from "../components/MapCalloutComponent"

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`

export const MapScreen = ({navigation}) => {
    const {location} = useContext(LocationContext)
    const {restaurants = []} = useContext(RestaurantsContext)
    const [latDelta, setLatDelta] = useState(0)
    // const [lngDelta, setLngDelta] = useState(0)
    
    const locate =  {
        lat: 37.7749295, 
        lng: -122.4194155,
        viewport: {
            northeast: { lat: 37.812, lng: -122.3482 },
            southwest: { lat: 37.70339999999999, lng: -122.527 },
        }
    }    
    const {lat, lng, viewport} = location ? location : locate

    useEffect(() => {
        const northeastLat = viewport.northeast.lat
        const southwestLat = viewport.southwest.lat
        
        const latSize = northeastLat - southwestLat
        setLatDelta(latSize)

        // const northeastLng = viewport.northeast.lng
        // const southwestLng = viewport.southwest.lng
        
        // const lngSize = northeastLng - southwestLng
        // setLngDelta(lngSize)
    }, [location])

    return(
        <>
            <Search />
            <Map
                provider = {PROVIDER_GOOGLE}
                region = {{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02
                }}
                >
                {restaurants.map((restaurant) => {
                    return (
                        <MapView.Marker
                            key={restaurant.name}
                            title={restaurant.name}
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng
                            }}
                        >
                            <MapView.Callout
                                onPress={() => navigation.navigate("RestaurantDetail", {restaurant: restaurant})}>
                                <MapCallout restaurant = {restaurant}
                                />
                            </MapView.Callout>
                        </MapView.Marker>
                    )
                })}
            </Map> 
        </>
    )
}