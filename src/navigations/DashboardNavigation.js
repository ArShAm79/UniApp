import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Dashboard from '../pages/main/Dashboard/Dashboard'
const Stack = createStackNavigator()

export default function DashboardNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="mainpage-">
      <Stack.Screen name="landing-page" component={Dashboard} />
    </Stack.Navigator>
  )
}