import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

// Screens
import Favorite from "../screens/Favorite";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{ title: "Favoritos" }}
      />
    </Stack.Navigator>
  );
}
