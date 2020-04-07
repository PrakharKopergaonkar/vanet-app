import React from 'react'
import EmergencyAlert from '../Screens/EmergencyAlert'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function Aboutstack(){
  return(
    <Stack.Navigator>
        <Stack.Screen name='Emergency Alert' component={EmergencyAlert} options={{headerTitleAlign: "center"}}/>
    </Stack.Navigator>
  )
}