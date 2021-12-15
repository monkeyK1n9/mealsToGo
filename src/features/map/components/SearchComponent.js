import React, {useContext, useState, useEffect} from "react"
import { View } from "react-native"
import styled from "styled-components/native"
import { Searchbar } from "react-native-paper"
import { LocationContext } from "../../../services/location/LocationContext"

const SearchbarSection = styled(View)`
    padding: ${props => props.theme.space[3]};
    z-index: 999;
    width: 100%;
    top: 35px;
    position: absolute;
`

export const Search = () => {
    const {keyword, search} = useContext(LocationContext)
    const [searchKeyword, setSearchKeyword] = useState(keyword)

    useEffect(() => {
        setSearchKeyword(keyword)
    }, [keyword])

    
    return (
        <SearchbarSection>
            <Searchbar 
                placeholder = "Search for a location"
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword)
                }}
                onChangeText={(e) => {
                    setSearchKeyword(e)
                }}
                icon="map"
            ></Searchbar>
        </SearchbarSection>
    )
}