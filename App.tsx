import React from "react";
import { View } from "react-native";

import { TextInput } from "./src/components/TextInput";

export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20
    }}>
      <TextInput.Root>
        <TextInput.OutLined
          label="E-mail"
        >
          <TextInput.Icon />
          <TextInput.Input
            placeholder="Digite seu e-mail"
          />
        </TextInput.OutLined>
      </TextInput.Root>
    </View>
  );
}