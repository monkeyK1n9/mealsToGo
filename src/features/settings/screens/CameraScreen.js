import React, {useState, useEffect, useRef, useContext} from "react"
import { Dimensions } from "react-native"
import { Camera } from "expo-camera"
import styled from "styled-components/native"
import { TouchableOpacity, View } from "react-native"
import { Text } from "../../restaurants/components/typography/TextComponent"

import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext"
import { Avatar } from "react-native-paper"

const ProfileCamera = styled(Camera)`
    width: 100%;
    height: 100%
`
const PhotoContainer = styled(View)`
    align-items: center;
    padding: ${props => props.theme.space[2]};
    position: absolute;
    bottom: 30px;
    left: ${Dimensions.get("window").width / 2 - 42}px
`
export const CameraScreen = ({navigation}) => {
    const cameraRef = useRef()
    const [hasPermission, setHasPermission] = useState(null)
    const [u, setU] = useState(null)
    const {user} = useContext(AuthenticationContext)

    const requestPermission = async () => {
        const {status} = await Camera.requestCameraPermissionsAsync()
        setHasPermission(status === "granted")
    }

    const snap = async () => { //pictures and videos are taken asynchronously
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync()
            AsyncStorage.setItem(`${user.uid}-photo`, photo.uri)
            setU(photo)
            navigation.goBack()
        }

    }

    useEffect(() => {
        requestPermission()
        return () => requestPermission.abort()
    }, [])

    if (hasPermission === null) {
        return <View />
    }

    if (hasPermission === false) {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>You do not have access to the camera</Text>
            </View>
        )
    }
    return (
        <ProfileCamera 
            type={Camera.Constants.Type.front}
            ref={cameraRef}
        >
        <PhotoContainer>
            <TouchableOpacity onPress={snap}> 
                <Avatar.Icon icon="circle-slice-8" size={84} backgroundColor="#2182BD"/>
            </TouchableOpacity>
        </PhotoContainer>
        </ProfileCamera>     
    )
} 