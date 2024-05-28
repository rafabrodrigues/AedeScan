import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import TabRoutes from './TabRoutes'

export default function Routes() {
  return (
      <NavigationContainer>
        <TabRoutes />
      </NavigationContainer>
  )
}