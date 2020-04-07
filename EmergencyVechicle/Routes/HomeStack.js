import React from 'react'
import Home from '../Screens/Home'
import Sucessfull from '../Screens/Sucessfull'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

export default function Homestack(){
  return(
    <Stack.Navigator initialRouteName="HomeStack">
        <Stack.Screen name='Home' component={Home} options={{headerTitleAlign: "center"}}/>
        <Stack.Screen name='Sucessfull' component={Sucessfull} options={{headerTitleAlign: "center"}}/>
    </Stack.Navigator>
  )
}
