import React from "react"
import { ScrollView, TouchableOpacity, View } from "react-native"
import { Text } from "../../features/restaurants/components/typography/TextComponent"
import styled from "styled-components/native"
import { CompactRestaurantInfo } from "../restaurant/CompactRestaurantInfo"
import { Spacer } from "../../features/restaurants/components/spacer/SpacerComponent"

const FavoritesWrapper = styled(View)`
    padding: 10px
`

export const FavoriteBar = ({favorites, onNavigate}) => {

    if(!favorites.length) {
        return null
    }

    return (
        <FavoritesWrapper>
            <Spacer variant="left.large">
                <Text variant="caption">Favorites</Text>
            </Spacer>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favorites.map((restaurant)=> {
                    const key = restaurant.name.split(" ").join("")
                    return (
                        <Spacer position="left" size="medium" key={key}>
                            <TouchableOpacity onPress={() => onNavigate("RestaurantDetail", {restaurant})} >
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </TouchableOpacity>
                        </Spacer>
                    )
                })}
            </ScrollView>
        </FavoritesWrapper>
    )
}