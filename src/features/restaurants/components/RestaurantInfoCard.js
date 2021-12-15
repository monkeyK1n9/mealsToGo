import React from "react"
import { SvgXml } from "react-native-svg"

import star from "../../../../assets/stars"
import open from "../../../../assets/open"
import {Spacer} from "./spacer/SpacerComponent"
import {Text} from "../components/typography/TextComponent"
import {RestaurantCard, RestaurantCardCover, Info, Note, OpenStatus, Address, Rating, Icon} from "./RestaurantInfoStyles"
import { Favorite } from "../../../components/Favorites/FavoriteComponent"

export const RestaurantInfoCard =({restaurant={}}) => {
    const {
        name = "Resto Mami Poisson",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos =["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
        vicinity="Nkomkana, Yaounde",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true
    } = restaurant
    
    const ratingArray = Array.from(new Array(Math.floor(rating)))
    
    return (
        <RestaurantCard elevation = {5}>
            <Favorite restaurant={restaurant} />
            <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
            <Info>
                <Text variant="label">{name}</Text>
                <Note>
                    <Rating>
                    {ratingArray.map((rate, index) => {
                        return (
                            <SvgXml key={index} xml={star} width={20} height={20}/>
                        )
                    })}
                    </Rating>
                    <OpenStatus>
                        {isClosedTemporarily && (
                            <Text variant="error">
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <Spacer position="left" size="large">
                            {isOpenNow && (<SvgXml xml={open} width={30} height={30}/>)}
                        </Spacer>
                        <Spacer position="left" size="large">
                            <Icon source={{uri: icon}} />
                        </Spacer>
                    </OpenStatus>
                </Note>
                <Address>{vicinity}</Address>
            </Info>
        </RestaurantCard>
    )
}
