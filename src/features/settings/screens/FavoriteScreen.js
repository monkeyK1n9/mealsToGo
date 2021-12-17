import React, {useContext} from "react"
import { Alert, TouchableOpacity, View } from "react-native"
import { Text } from "../../restaurants/components/typography/TextComponent"
import { FavoritesContext } from "../../../services/favorites/FavoritesContext"
import { RestaurantInfoCard } from "../../restaurants/components/RestaurantInfoCard"
import { SafeAreaViewSection } from "../../restaurants/components/Utility/SafeAreaViewSection"
import { RestaurantList } from "../../restaurants/screens/RestaurantsScreen"
import styled from "styled-components/native"

const WarningArea = styled(View)`
    padding-top: ${props => props.theme.space[3]};
    align-items: center
`

export const FavoritePage = ({navigation}) => {
    const {favorites} = useContext(FavoritesContext)

    return favorites.length ? 
    (
        <SafeAreaViewSection >
                
            <RestaurantList
            data={favorites}
            renderItem={({item}) =>{
                return (
                <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {restaurant: item})}>
                    <RestaurantInfoCard restaurant={item} />
                </TouchableOpacity>
            )}} 
            keyExtractor={(item) => item.name}
            />
        </SafeAreaViewSection>         
        
    ):(
        <SafeAreaViewSection>
            <WarningArea>
                <Text variant="appName">{`        Oops ! ! ! \nNo Favorites found`}</Text>
            </WarningArea>
            {Alert.alert(
                "Alert",
                "You don't have any favorite. Add favorites to view them here.",
                [
                    {text:"Okay", onPress: ()=>navigation.navigate("SettingScreen")},
                ],
                {title: "Alert"}
            )}
        </SafeAreaViewSection>
    )
}