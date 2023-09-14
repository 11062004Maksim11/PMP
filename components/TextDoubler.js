import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

export default TextDoubler = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={inputValue}
        placeholder="Type here"
      />
      <Text>{inputValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
