import { createDrawerNavigator } from '@react-navigation/drawer'
import { FontAwesome5, MaterialIcons, Foundation } from '@expo/vector-icons';
import Roll from '../../views/Roll';
import Vote from '../../views/Vote';
import History from '../../views/History';
import React from 'react';
import { Result } from '../../views/Result';

const Drawer = () => {
    const DRAWER = createDrawerNavigator();
    return (
    <DRAWER.Navigator useLegacyImplementation={true} initialRouteName="Roll" screenOptions={{
      headerShown:true,
      headerTransparent:true
    }}>
        <DRAWER.Screen name="Roll" component={Roll}
          options={{
            headerTitle:'',
            drawerIcon:() => (
              <FontAwesome5 name="dice" size={24} color="black" />
            )
          }}
        />
        <DRAWER.Screen name="Vote" component={Vote}
          options={{
            headerTitle:'',
            drawerIcon:() => (
              <MaterialIcons name="how-to-vote" size={24} color="black" />
            )
          }}
        />
        <DRAWER.Screen name="History" component={History}
        options={{
          headerTitle:'',
          drawerIcon:() => (
            <FontAwesome5 name="history" size={24} color="black" />
          )
        }}
        />
        <DRAWER.Screen name="Result" component={Result}
        options={{
          headerTitle:'',
          drawerIcon:() => (
            <Foundation name="results-demographics" size={24} color="black" />
          )
        }}
        />
    </DRAWER.Navigator>
  )
}


export default Drawer