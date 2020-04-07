import React from 'react'
import ViewCurrenScenario from '../Screens/ViewCurrentScenario'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function ViewCurrentScenariostack(){
  return(
    <Stack.Navigator>
        <Stack.Screen name='View Current Scenario' component={ViewCurrenScenario} options={{headerTitleAlign: "center"}}/>
    </Stack.Navigator>
  )
}