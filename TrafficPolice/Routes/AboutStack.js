import React from 'react'
import Aboutus from '../Screens/Aboutus'
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../Screens/Header'
const Stack = createStackNavigator()

export default function Aboutstack(){
  return(
    <Stack.Navigator>
        <Stack.Screen name='About' 
        component={Aboutus} 
        options = {({navigation}) => {
          return {
            headerTitle: () => <Header/>,
          }
        }}
        />
    </Stack.Navigator>
  )
}