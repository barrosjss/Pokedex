import { Text, SafeAreaView, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonsApi } from "../api/pokemon";

export default function Pokedex({ navigation }) {
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
      <Button
        title="Go to Pokemon"
        onPress={() => navigation.navigate("Pokemon")}
      />
    </SafeAreaView>
  );
}
