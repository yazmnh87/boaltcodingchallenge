import React,{useEffect} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent'
import { RootStack } from './stacks/RootStack';
const Drawer = createDrawerNavigator();

export const DrawerNavigator = (props) => {
  useEffect(()=>{
    // console.log("drawerrProps",props.route.params)
  },[])
  return (
    <Drawer.Navigator initialRouteName="Home" drawerType={'front'} hideStatusBar={true} drawerContent={(props)=> <DrawerContent {...props}/>}>
      <Drawer.Screen 
      name="Home" 
      component={RootStack}
      />
    </Drawer.Navigator>
  );
};