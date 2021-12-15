import React, {useContext, useState, useEffect} from "react"
import { View } from "react-native"
import styled from "styled-components/native"
import { Searchbar } from "react-native-paper"
import { LocationContext } from "../../../services/location/LocationContext"

const SearchbarSection = styled(View)`
    padding-top: ${props => props.theme.space[3]};
    padding-left: ${props => props.theme.space[3]};
    padding-right: ${props => props.theme.space[3]};
    padding-bottom: ${props => props.theme.space[3]};
`

export const Search = ({isFavoriteToggle, onFavoriteToggle}) => {
    const {keyword, search} = useContext(LocationContext)
    const [searchKeyword, setSearchKeyword] = useState(keyword)

    useEffect(() => {
        setSearchKeyword(keyword)
    }, [keyword])

    return (
        <SearchbarSection>
            <Searchbar 
                icon={isFavoriteToggle ? "heart" : "heart-outline"}
                onIconPress={onFavoriteToggle}
                placeholder = "Search for a location"
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword)
                }}
                onChangeText={(e) => {
                    setSearchKeyword(e)
                }}
            ></Searchbar>
        </SearchbarSection>
    )
}