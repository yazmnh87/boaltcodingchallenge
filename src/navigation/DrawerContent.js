import React, {useEffect, useContext, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, StatusBar, Linking, ScrollView} from 'react-native';
import styled from 'styled-components';
import {DrawerItem} from './DrawerItem';


const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
`;

const TopSectionGroup = styled.View``;


const SubContainer = styled.View`
  width: 100%;
`;

const Header = styled.View`
  flex-direction: row;
  height:  85px;
  width: 100%;
  align-items: center;
  padding-left: 15px;
  background-color: ${(props) => props.theme.colors.primary};
`;





export const DrawerContent = (props) => {
console.log("name?",props.state.routeNames[1])

  return (
    <Container>
      <TopSectionGroup>
        <Header >
         
        </Header>
        <SubContainer>

          <DrawerItem
            navIcon
            {...props.navigation}
            label={props.state.routeNames[0]}
          />
          <DrawerItem
            navIcon
            {...props.navigation}
            label={props.state.routeNames[1]}
          />
        </SubContainer>
      </TopSectionGroup>
    </Container>
  );
};
