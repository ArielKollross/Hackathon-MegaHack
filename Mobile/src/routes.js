import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const AppStack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()

import HomePage from './pages/Home'
import SalesPage from './pages/Sales'
import QRCode from './pages/QRcode'


export default function Routes() {
    return(
        // <NavigationContainer>
        //     <AppStack.Navigator screenOptions={{ headerShown: false}}>
        //         <AppStack.Screen name="Home" component={HomePage} />
        //     </AppStack.Navigator>
        // </NavigationContainer>
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Buy" component={QRCode} />
            <Tab.Screen name="Sales" component={SalesPage} />
        </Tab.Navigator>
        </NavigationContainer>
    )
}