import { Text, SafeAreaView, Button } from "react-native";
import React from "react";

export default function Pokedex({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
      <Button title="Go to Pokemon" onPress={() => navigation.navigate('Pokemon')} />
    </SafeAreaView>
  );
}
