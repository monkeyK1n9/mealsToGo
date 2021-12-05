import styled from "styled-components/native"
import { Text, View, Image} from "react-native"
import {Card} from "react-native-paper"

export const RestaurantCard = styled(Card)`
    backgroundColor: ${props => props.theme.colors.ui.quaternary};
    border-radius: ${props => props.theme.space[2]};
    margin: ${props => props.theme.space[2]}
`

export const RestaurantCardCover = styled(Card.Cover)`
    padding: ${props => props.theme.space[3]};
    background-color: ${props => props.theme.colors.ui.quaternary};
`

export const Info = styled(View)`
    padding: ${props => props.theme.space[3]};
`

export const Note = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center
`
export const OpenStatus = styled(View)`
    flex-direction: row;
`
export const Address = styled(Text)`
    font-family: ${props => props.theme.fonts.body}
    font-size: ${props => props.theme.fontSizes.caption }
    color: ${props => props.theme.colors.ui.primary}
`
export const Rating = styled(View)`
    flex-direction: row;
    padding-top: ${props => props.theme.space[2]};
    padding-bottom: ${props => props.theme.space[2]};
`
export const Icon = styled.Image`
    width: 15px;
    height: 15px
`