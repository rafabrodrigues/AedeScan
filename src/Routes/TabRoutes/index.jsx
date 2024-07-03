import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
// screens
import HomeScreen from "../../screens/HomeScreen";
import DuvidaScreen from "../../screens/DuvidaScreen";
import DenunciaScreen from "../../screens/DenunciaScreen";
import AvisoScreen from "../../screens/AvisoScreen";
import PerfilScreen from "../../screens/PerfilScreen";
import LoginScreen from "../../screens/LoginScreen";
// icons
import { Octicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// styles
import { DenunciaContainer, TextDenuncia } from "./style";
import { useAuth } from "../../hooks/useAuth"; // Adicione o hook useAuth

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const { session } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#2b2d42",
          borderTopWidth: 0.18,
          height: 60,
        },
        tabBarActiveTintColor: "#d90429",
        tabBarInactiveTintColor: "#edf2f4",
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 8,
          fontFamily: "Poppins_400Regular",
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" color={color} size={22} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="duvida"
        component={DuvidaScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="question" color={color} size={22} />
          ),
          tabBarLabel: "Dúvidas",
        }}
      />

      <Tab.Screen
        name="denuncia"
        component={session ? DenunciaScreen : LoginScreen}
        options={{
          tabBarActiveTintColor: "#edf2f4",
          tabBarIcon: ({ color, size }) => (
            <DenunciaContainer>
              <AntDesign name="warning" color={color} size={32} />
              <TextDenuncia>Denúncia</TextDenuncia>
            </DenunciaContainer>
          ),
          tabBarLabel: "",
        }}
      />
 

      <Tab.Screen
        name="aviso"
        component={AvisoScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" color={color} size={22} />
          ),
          tabBarLabel: "Avisos",
        }}
      />
      <Tab.Screen
        name="perfil"
        component={session ? PerfilScreen : LoginScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="circle-user" color={color} size={22} />
          ),
          tabBarLabel: "Perfil",
        }}
      />
    </Tab.Navigator>
  );
}
