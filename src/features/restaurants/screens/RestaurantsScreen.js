import React from "react"
import styled from "styled-components/native"
import {View, FlatList} from 'react-native'
import { Searchbar } from "react-native-paper"
import {RestaurantInfoCard} from "../components/RestaurantInfoCard"
import { SafeAreaViewSection } from "../components/Utility/SafeAreaViewSection"

const SearchbarSection = styled(View)`
    padding-top: ${props => props.theme.space[3]};
    padding-left: ${props => props.theme.space[3]};
    padding-right: ${props => props.theme.space[3]};
    padding-bottom: ${props => props.theme.space[3]};
`
const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle : {
        paddingTop: 0,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
    }
})``

export const RestaurantsScreen = () => {
    return (
        <SafeAreaViewSection>
            <SearchbarSection>
                <Searchbar 
                    placeholder = "Search"
                ></Searchbar>
            </SearchbarSection>
            <RestaurantList
                data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}, {name: 6}, {name: 7}, {name: 8}, {name: 9}, {name: 10}]}
                renderItem={() =><RestaurantInfoCard/>} 
                keyExtractor={(item) => item.name}
            />
        </SafeAreaViewSection>
    )
}
