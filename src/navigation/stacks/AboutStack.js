import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from '../../screens/about'
import {HeadMain} from '../../components/Header'



const Stack = createStackNavigator();

export function AboutStack() {
  return (
    <Stack.Navigator headerMode="screen">
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