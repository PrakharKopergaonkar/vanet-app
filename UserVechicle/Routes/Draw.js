import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import Homestack from './HomeStack';
import Aboutstack from './AboutStack';
import ViewCurrentScenariostack from './ViewCurrentScenariostack'


const Drawer = createDrawerNavigator();

export default function Draw() {
    return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeStack" >
        <Drawer.Screen name="Home" component={Homestack}/>
        <Drawer.Screen name="About" component={Aboutstack} />
        <Drawer.Screen name="ViewCurrenScenario" component={ViewCurrentScenariostack} />
      </Drawer.Navigator>
    </NavigationContainer>
    );
}
