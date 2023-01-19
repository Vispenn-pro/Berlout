import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../../views/Login';
import Drawer from '../DrawerNavigation';

export const StackNavigation = () => {
    const STACK = createStackNavigator();
  return (
    <STACK.Navigator useLegacyImplementation={true} initialRouteName='Login' screenOptions={{
        headerShown:true,
        headerTransparent:true
    }}
    >
        <STACK.Screen name='Login' component={Login} options={{ headerTitle:'' }}/>
        <STACK.Screen name='Drawer' component={Drawer} options={{ headerTitle:'', headerLeft:'' }}/>
    </STACK.Navigator>
  )
}
