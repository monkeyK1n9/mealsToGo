import React, {useContext, useState} from "react"
import styled from "styled-components/native"
import { FlatList, TouchableOpacity} from 'react-native'
import { ActivityIndicator } from "react-native-paper"
import {RestaurantInfoCard} from "../components/RestaurantInfoCard"
import { SafeAreaViewSection } from "../components/Utility/SafeAreaViewSection"

import { RestaurantsContext } from "../../../services/restaurants/RestaurantContext"
import { Search } from "../components/SearchComponent"
import { FavoriteBar } from "../../../components/Favorites/FavoriteBar"
import { FavoritesContext } from "../../../services/favorites/FavoritesContext"

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle : {
        paddingTop: 0,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
    }
})``

export const RestaurantsScreen = ({navigation}) => {
    const {isLoading, error, restaurants} = useContext(RestaurantsContext)
    const [isToggled, setIsToggled] = useState(false)
    const {favorites} = useContext(FavoritesContext)

    return (
        <SafeAreaViewSection>
           <Search 
            isFavoriteToggle={isToggled}
            onFavoriteToggle={()=>setIsToggled(!isToggled)} />

            {isToggled && <FavoriteBar favorites={favorites} onNavigate={navigation.navigate} />}

            {isLoading ? 
                (<ActivityIndicator animating={true} color="red" size="large" style={{flex:1}}/>
                ):(
                <RestaurantList
                data={restaurants}
                renderItem={({item}) =>{
                    return (
                    <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {restaurant: item})}>
                        <RestaurantInfoCard restaurant={item} />
                    </TouchableOpacity>
                )}} 
                keyExtractor={(item) => item.name}/>)
            }
        </SafeAreaViewSection>
    )
}
