import React from 'react'
import {TouchableOpacity, View , Text} from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'

const Touchable = styled.TouchableOpacity`
height: 50px;
width:100%;
`
const StyledView = styled.View`
flex: 1;
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
/* border:1px solid red; */
`

const StyledIcon = styled(Icon)`
margin-right: 25px;
font-size: 24px;
color: red;
`

const StyledText = styled.Text`
margin-left: 15px;
font-size: 16px;
color: rgb(77, 77, 77);
`

export const DrawerItem = (props) => {
    // console.log("item", props)
    return (
        <Touchable onPress={() => props.navigate(props.label)}>
            <StyledView>
                <StyledText>{props.label}</StyledText>
            </StyledView>
        </Touchable>

    )
    
}