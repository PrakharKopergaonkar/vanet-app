import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import Homestack from './HomeStack';
import Aboutstack from './AboutStack';
import ViewCurrentScenariostack from './ViewCurrentScenariostack'
import EmergencyAlertStack from './EmergencyAlertStack'

const Drawer = createDrawerNavigator();

export default function Draw() {
    return (
    <NavigationContainer theme={DarkTheme}>
      <Drawer.Navigator initialRouteName="HomeStack" >
        <Drawer.Screen name="Home" component={Homestack}/>
        <Drawer.Screen name="About" component={Aboutstack} />
        <Drawer.Screen name="View Current Scenario" component={ViewCurrentScenariostack} />
        <Drawer.Screen name="Emergency Alert" component={EmergencyAlertStack} />
      </Drawer.Navigator>
    </NavigationContainer>
    );
}
