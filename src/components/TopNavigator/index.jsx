import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { View, Text } from 'react-native'
import React from 'react'
import AvisoScreen from '../../screens/AvisoScreen';
import { Ionicons } from '@expo/vector-icons';
const Tab = createMaterialTopTabNavigator();

export default function TopNavigator() {
    return (
        <Tab.Navigator screenOptions={{}}>
            <Tab.Screen
                name='aviso'
                component={AvisoScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="notifications-outline" color={color} size={22} />,
                    tabBarLabel: 'Avisos'
                }}
            />
        </Tab.Navigator>
    )
}