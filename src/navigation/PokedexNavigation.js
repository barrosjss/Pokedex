import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

// Screens
import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{ title: "Pokedex" }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{ title: "Pokemon" }}
      />
    </Stack.Navigator>
  );
}
