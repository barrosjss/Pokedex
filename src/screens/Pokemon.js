import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonDetailsApi } from "../api/pokemon";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getPokemonDetailsApi(params.id);
        setPokemon(data);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <View>
      <Text>{pokemon.name}</Text>
    </View>
  );
}
