import {mockImages, mocks} from "./mock"
import camelize from "camelize"

export const restaurantsResquest = (location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location]
        if(!mock) {
            reject("Nothing Found")
        }
        resolve(mock)
    })
}
export const restaurantsTransform = ({results = []}) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random()*(mockImages.length - 1))]
        })
        
        return {
            ...restaurant,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
            isOpenedNow: restaurant.opening_hours && restaurant.opening_hours.open_now
        }
    })
    // console.log(camelize(mappedResults))
    return camelize(mappedResults)
}
