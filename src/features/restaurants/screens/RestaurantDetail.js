import React, {useState} from "react"
import {ScrollView} from "react-native"
import {List} from "react-native-paper"
import { RestaurantInfoCard } from "../components/RestaurantInfoCard"
import { SafeAreaViewSection } from "../components/Utility/SafeAreaViewSection"

export const RestaurantDetail = ({route}) => {
    const {restaurant} = route.params
    const [expanded, setExpanded] = useState(false)
    
    const handlePress = () => setExpanded(!expanded)

    return (
        <SafeAreaViewSection>
            <RestaurantInfoCard restaurant={restaurant} />
            <ScrollView>
                <List.Section title="Different menus">
                    <List.Accordion
                        title="Breakfast"
                        left={props => <List.Icon {...props} icon="bread-slice" />}
                        
                    >
                        <List.Item title="Eggs Benedict" />
                        <List.Item title="Classic breakfast" />
                    </List.Accordion>

                    <List.Accordion
                        title="Lunch"
                        left={props => <List.Icon {...props} icon="food" />}
                        
                    >
                        <List.Item title="Burger w/ fries" />
                        <List.Item title="Steak sandwich" />
                        <List.Item title="Mushroom soup" />
                    </List.Accordion>

                    <List.Accordion
                        title="Dinner"
                        left={props => <List.Icon {...props} icon="food-variant" />}
                        
                    >
                        <List.Item title="Taro" />
                        <List.Item title="Couscous Gombo" />
                    </List.Accordion>

                    <List.Accordion
                        title="Drinks"
                        left={props => <List.Icon {...props} icon="bottle-wine" />}
                        expanded={expanded}
                        onPress={handlePress}
                    >
                        <List.Item title="Vimto" />
                        <List.Item title="Kadji" />
                        <List.Item title="33" />
                        <List.Item title="Guinness" />
                        <List.Item title="Heineken" />
                        <List.Item title="Orangina" />
                    </List.Accordion>
                </List.Section>
            </ScrollView>    
        </SafeAreaViewSection>
    )
}