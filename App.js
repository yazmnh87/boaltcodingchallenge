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
const Stack = createStackNavigator();

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
