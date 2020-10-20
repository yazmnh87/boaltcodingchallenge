import React from 'react'
import {View} from 'react-native'
import styled from 'styled-components'

const ProgressLine = styled.View`
  flex: ${props => props.flex};
  background-color: ${props => props.color};
`;

export const Progress = ({duration=0, progress=0}) => {
    console.log("MONEY!!",progress /1000)
    return (
    <View style={{width: '80%', height: 7, borderRadius: 8,alignSelf:'center'}}>
      <View
        style={{
          flex: Math.round(duration),
          flexDirection: 'row',
          width: '100%',
          backgroundColor: 'blue'
        }}>
        <ProgressLine
          flex={progress/100}
          color={'white'}
        />
      </View>
    </View>
    )
}