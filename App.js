import 'react-native-gesture-handler';
import React from 'react';
// import SplashScreen from 'react-native-splash-screen';
import { Constants } from 'react-native-unimodules';
import { StatusBar } from 'react-native';
import Theme from './src/providers/ThemeProvider'
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerNavigator} from './src/navigation';
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
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Theme>
        <PaperProvider>
          <SafeAreaProvider>
            <NavigationContainer>
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
                name="Root"
                component={DrawerNavigator}
                options={({navigation, route}) => ({
                  headerShown: false,
                })}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        </PaperProvider>
      </Theme>
    </>
  );
};



export default App;
