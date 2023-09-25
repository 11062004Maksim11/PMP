import { AppRegistry, View, StyleSheet, TextInput } from "react-native";
import FlexContainer from "./HOC/FlexContainer/FlexContainer";
import ColorInput from "./components/ColorInput/ColorInput";
import { useState } from "react";

export default function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const handleRed = (value) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const parsedValue =
      numericValue === "" || isNaN(numericValue)
        ? 0
        : parseInt(numericValue, 10);

    parsedValue > 255 ? setRed(255) : setRed(parsedValue);
  };
  const handleGreen = (value) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const parsedValue =
      numericValue === "" || isNaN(numericValue)
        ? 0
        : parseInt(numericValue, 10);

    parsedValue > 255 ? setGreen(255) : setGreen(parsedValue);
  };
  const handleBlue = (value) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const parsedValue =
      numericValue === "" || isNaN(numericValue)
        ? 0
        : parseInt(numericValue, 10);
    parsedValue > 255 ? setBlue(255) : setBlue(parsedValue);
  };
  return (
    <View style={styles.body}>
      <FlexContainer>
        <ColorInput red={red} green={green} blue={blue}></ColorInput>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="R (0-255)"
          onChangeText={(value) => handleRed(value)}
          value={red.toString()}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="G (0-255)"
          onChangeText={(value) => handleGreen(value)}
          value={green.toString()}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="B (0-255)"
          onChangeText={(value) => handleBlue(value)}
          value={blue.toString()}
        />
      </FlexContainer>
    </View>
  );
}

AppRegistry.registerComponent("MyApp", () => App);
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
    marginBottom: 20,
  },
});
