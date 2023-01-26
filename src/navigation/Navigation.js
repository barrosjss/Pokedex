import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Favorite from "../screens/Favorite";
import Pokedex from "../screens/Pokedex";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorite" component={Favorite} options={options} />
      <Tab.Screen name="Pokedex" component={Pokedex} options={options} />
      <Tab.Screen name="Account" component={Account} options={options} />
    </Tab.Navigator>
  );
}

const options = {
  headerShown: false,
};
