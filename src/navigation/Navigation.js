import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Favorite from "../screens/Favorite";
import Pokedex from "../screens/Pokedex";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          height: 90,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      }}
    >
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={require("../assets/corazon.png")}
                style={{ width: 40, height: 40 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={require("../assets/pokebola.png")}
                style={{ width: 70, height: 70 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={require("../assets/jugador.png")}
                style={{ width: 40, height: 40 }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
