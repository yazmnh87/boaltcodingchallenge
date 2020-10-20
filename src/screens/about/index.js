import React from 'react'
import styled from 'styled-components'

const Container = styled.View`
flex: 1;
border:1px solid red;
`

const Title = styled.Text`
font-size: 24px;
color: black;
`

export default function About(props){
    return (
        <Container>
            <Title>ABOUT</Title>
        </Container>
    )
}