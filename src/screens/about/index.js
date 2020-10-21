import React from 'react'
import styled from 'styled-components'

const Container = styled.View`
flex: 1;
/* border:1px solid red; */
`

const Title = styled.Text`
font-size: 24px;
color: ${(props) => props.theme.colors.primary};
text-align: center;
margin-top: 10px;
`

const Wrapper = styled.View`
flex: 1;
align-items: center;
padding: 10px;
/* border:1px solid red; */
`


const SubText = styled.Text`
font-size: 18px;
color: ${(props) => props.theme.colors.primary};
text-align: center;
`

const MappedContainer = styled.View`
  flex-shrink: 1;
  flex-direction: row;
  width: 60%;
  overflow: hidden;
  align-self: center;
  padding: 10px 10px;
  /* border: 1px solid red; */
  margin: 0 auto;
`;

const BulletContainer = styled.View`
  flex-shrink: 1;
  height: 100%;
  /* border: 1px solid red; */
`;

const BulletTextContainer = styled.View`
  flex-shrink: 1;
  flex-direction: row;
  margin-left: 5px;
  /* border:1px solid lime; */
`;

const BulletTitle = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
`;

const Bullet = styled.View`
  height: 10px;
  margin-top: 7px;
  width: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primary};
`;

const packages = ['react-navigation', 'expo-av', 'react native vector icons', 'styled components']


const mappedPackages = packages.map((item, i) => {
    return (
      <MappedContainer key={i}>
        <BulletContainer>
          <Bullet />
        </BulletContainer>
        <BulletTextContainer>
          <BulletTitle>{item}</BulletTitle>
        </BulletTextContainer>
      </MappedContainer>
    );
  });

export default function About(props){
    return (
        <Container>
            <Wrapper>
            <SubText>Thank you for reviewing my coding challenge.  I've implemented this app using the following libraries, </SubText>
            {mappedPackages}
            </Wrapper>
        </Container>
    )
}