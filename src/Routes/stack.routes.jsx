// StackRoutes.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import TabRoutes from "./TabRoutes";
import PerfilScreen from "../screens/PerfilScreen";
import DenunciaScreen from "../screens/DenunciaScreen";
const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}> 
      <Stack.Screen name="tabRoutes" component={TabRoutes}/>
      <Stack.Screen name="signInStack" component={SignInScreen}/>
      <Stack.Screen name="signUpStack" component={SignUpScreen}/>
      <Stack.Screen name="perfilStack" component={PerfilScreen}/>
      <Stack.Screen name="denunciaStack" component={DenunciaScreen}/>
    </Stack.Navigator>
  );
}


