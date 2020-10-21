import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from '../../screens/about'
import {HeadMain} from '../../components/Header'
import {Easing} from 'react-native-reanimated'



const Stack = createStackNavigator();
const openConfig = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};


const closeConfig = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear
  },
};
export function AboutStack() {
  return (
    <Stack.Navigator 
    headerMode="screen"
    screenOptions={{
      gestureEnabled: true,
      gestureDirection: "vertical",
      transitionSpec: {
        open: openConfig,
        close: closeConfig
      }
    }} 
    >
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation, route }) => ({
          header: ({scene, previous, navigation}) => (
            <HeadMain
              main
              hasSearch={true}
              scene={scene}
              route={route}
              navigation={navigation}
            />
          )
        })}
      />
    </Stack.Navigator>
  );
}