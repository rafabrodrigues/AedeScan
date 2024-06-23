// StackRoutes.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import TabRoutes from "./TabRoutes";
const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}> 
      <Stack.Screen name="tabRoutes" component={TabRoutes}/>
      <Stack.Screen name="signInStack" component={SignInScreen}/>
      <Stack.Screen name="signUpStack" component={SignUpScreen}/>
    </Stack.Navigator>
  );
}


