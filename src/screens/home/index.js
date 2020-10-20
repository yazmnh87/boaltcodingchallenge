import React,{useMemo,useReducer} from 'react'
import {Dimensions} from 'react-native'
import styled from 'styled-components'
import {VideoPlayer} from '../../components/videoPlayer'
const Container = styled.View`
flex: 1;
justify-content: center;
background-color: ${props=> props.theme.colors.grey};
/* border:1px solid red; */
`

const StyledText = styled.Text`
font-size: 20px;
`

export default function Home(props){

    return (
        <Container>
            <VideoPlayer />
        </Container>

    )
}