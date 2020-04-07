import React from 'react'
import Receivealerts from '../Screens/Receivealerts';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../Screens/Header';
const Stack = createStackNavigator()

export default function ReceiveAlerts(){
  return(
    <Stack.Navigator initialRouteName="Receivealerts">
        <Stack.Screen name='Receivealerts' 
        component={Receivealerts} 
        options = {({navigation}) => {
          return {
            headerTitle: () => <Header/>,
          }
        }}
        />
    </Stack.Navigator>
  )
}