import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";

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
        component={FavoriteNavigation}
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
        component={PokedexNavigation}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={require("../assets/pokebola.png")}
                style={{ width: 75, height: 75, marginBottom: 15 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
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
