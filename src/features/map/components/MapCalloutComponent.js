import React from "react";
import {CompactRestaurantInfo} from "../../../components/restaurant/CompactRestaurantInfo"


export const MapCallout = ({restaurant = {}}) => {

    return (
        <CompactRestaurantInfo isMap restaurant={restaurant} />
    )
}