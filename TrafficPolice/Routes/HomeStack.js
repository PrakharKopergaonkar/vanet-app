import React from 'react'
import Home from '../Screens/Home'
import Sucessfull from '../Screens/Sucessfull'
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../Screens/Header'
const Stack = createStackNavigator()

export default function Homestack(){
  return(
    <Stack.Navigator initialRouteName="HomeStack">
        <Stack.Screen 
          name='Home' 
          component={Home} 
          options = {({navigation}) => {
            return {
              headerTitle: () => <Header/>,
            }
          }}
          />
        <Stack.Screen 
          name='Sucessfull' 
          component={Sucessfull}
          options = {({navigation}) => {
            return {
              headerTitle: () => <Header/>,
            }
          }}
          />
    </Stack.Navigator>
  )
}
