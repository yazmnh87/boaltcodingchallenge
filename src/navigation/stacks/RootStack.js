import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../../screens/home'
import {HeadMain} from '../../components/Header'



const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation, route }) => ({
          header: ({scene, previous, navigation}) => (
            <HeadMain
              main
              hasSearch={true}
              logo="Home"
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