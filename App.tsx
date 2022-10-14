import React from "react";
import { View, Text } from "react-native";

import { TextInput } from "./src/components/TextInput";

export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20
    }}>
      <TextInput.Container
        label="E-mail"
      >
        <TextInput.Input
          placeholder="Digite seu e-mail"
        />
      </TextInput.Container>
    </View>
  );
}