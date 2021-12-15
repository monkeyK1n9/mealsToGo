import React from "react"
import styled from "styled-components/native"
import { Image, View, Platform } from "react-native"
import {WebView} from "react-native-webview"
import { Text } from "../../features/restaurants/components/typography/TextComponent"

const CompactImage = styled(Image)`
  width: 120px;
  height: 100px;
  border-radius: 10px
`
const CompactWebView = styled(WebView)`
    width: 120px;
    height: 100px;
    border-radius: 10px
`
const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center
`
const isAndroid = Platform.OS === "android"
export const CompactRestaurantInfo = ({restaurant, isMap}) => {
    return (
        <Item>
            {(isAndroid && isMap) ? (
            <CompactWebView source ={{uri: restaurant.photos[0]}}
            />
            ) : (
            <CompactImage source ={{uri: restaurant.photos[0]}}
            />
            )}
            
            <Text variant="caption" numberOfLines={3}>
                {restaurant.name}
            </Text>
        </Item>
    )
}