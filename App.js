import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Alert,
  Button,
  TouchableHighlight,
} from "react-native";

export default function App() {
  const handleButtonPress = () => {
    console.log("Button pressed");
  };
  const handleTextPress = () =>
    Alert.alert("Press OK", "Please", [
      {
        text: "OK",
        onPress: () => console.log("Congrats!!!"),
      },
    ]);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        activeOpacity={0.6}
        onPress={handleTextPress}
        underlayColor="#DDDDDD"
      >
        <Text numberOfLines={1} style={styles.text}>
          Click me
        </Text>
      </TouchableHighlight>
      <Button onPress={handleButtonPress} title="Button" color={"orange"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "green",
    fontSize: 24,
  },
});
