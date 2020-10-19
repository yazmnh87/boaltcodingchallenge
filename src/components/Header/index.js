import React, {useEffect, useState, useContext} from 'react';
import {View, StatusBar, Text, ActivityIndicator, Image, TouchableWithoutFeedback} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';



export const Container = styled.View`
  height: 85px;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  /* padding: 5px 10px; */
  /* border: 1px solid lime; */
  /* border-bottom-color: #fff; */
  /* border-bottom-width: 1; */
`;

const StyledText = styled.Text`

  color: ${props=> props.days >= 24 ? props.theme.colors.primary : props.theme.colors.white};
  font-size: 10px;
  margin: auto 10px auto;
  font-weight: 700;
  z-index: ${props=> props.days >= 24 ? 99 : 0};
  /* border: 1px solid red; */
`;

export const StyledIcon = styled(Icon)`
color: ${props=>  props.theme.colors.white};
`


export const HeadMain = props => {
  const {navigation} = props;
  const [loading, setLoading] = useState(true)

 
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{backgroundColor: '#1C3463'}} edges={['top']}/>
      <Container>
        <View
          style={{
            flex: 1,
            height: '100%',
            // borderColor:'lime',
            // borderWidth: 1
          }}>
            <View
              style={{
               flex: 1,
               flexDirection:'row',
               justifyContent:'space-between',
               alignItems:'center',
                height: 28,
                width: '100%',
                // borderColor:'pink',
                // borderWidth: 1
              }}>
              
          
              <StyledIcon
                style={{
                  position: 'absolute',
                  left: 25,
                  top: 25,
                  fontWeight: '700',
                }}
                name="menu"
                size={20}
                color="#416cb7"
                onPress={() => navigation.openDrawer()}
              />
            </View>
          
         
        </View>
      </Container>
      </>
  );
};


