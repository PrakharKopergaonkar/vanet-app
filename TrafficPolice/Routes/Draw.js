import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import Homestack from './HomeStack';
import Aboutstack from './AboutStack';
import ViewCurrentScenariostack from './ViewCurrentScenariostack'
import ReceiveAlertStack from './ReceiveAlertStack'
const Drawer = createDrawerNavigator();

export default function Draw() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(400, 113, 123)',
    },
  };
    return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator initialRouteName="HomeStack">
        <Drawer.Screen name="Home" component={Homestack}/>
        <Drawer.Screen name="About" component={Aboutstack} />
        <Drawer.Screen name="View Current Scenario" component={ViewCurrentScenariostack} />
        <Drawer.Screen name="Receive Alert" component={ReceiveAlertStack} />
      </Drawer.Navigator>
    </NavigationContainer>
    );
}
