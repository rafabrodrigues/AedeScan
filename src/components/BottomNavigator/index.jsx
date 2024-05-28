import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// screens
import PerfilScreen from './../../screens/PerfilScreen/';
import HomeScreen from './../../screens/HomeScreen'
import DenunciaScreen from './../../screens/DenunciaScreen'
import DuvidaScreen from './../../screens/DuvidaScreen';
import AvisoScreen from './../../screens/AvisoScreen';
import LoginScreen from '../../screens/LoginScreen';

// icons
import { Octicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';




const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#2b2d42',
        borderTopWidth: 0.18,
        height: 56,
      },
      tabBarActiveTintColor: '#d90429',
      tabBarInactiveTintColor: '#edf2f4',
      tabBarLabelStyle: {
        fontSize: 12,
        marginBottom: 8,
        fontFamily: 'Poppins_400Regular'
      },
    }}>
      <Tab.Screen
        name='home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Octicons name="home" color={color} size={22} />,
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name='duvida'
        component={DuvidaScreen}
        options={{
          tabBarIcon: ({ color, size }) => <SimpleLineIcons name="question" color={color} size={22} />,
          tabBarLabel: 'Dúvidas'
        }}
      />
      <Tab.Screen
        name='denuncia'
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="warning" color={color} size={22} />
          ),
          tabBarLabel: 'Denúncias'
        }}
      />
      <Tab.Screen
        name='aviso'
        component={AvisoScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="notifications-outline" color={color} size={22} />,
          tabBarLabel: 'Avisos'
        }}
      />
      <Tab.Screen
        name='perfil'
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome6 name="circle-user" color={color} size={22} />,
          tabBarLabel: 'Perfil'
        }}
      />
    </Tab.Navigator>
  );
}