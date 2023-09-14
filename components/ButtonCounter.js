import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ButtonCounter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            setCount(count + 1);
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCount(count - 1);
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Undo</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.counterText}>Button pressed: {count} times</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    margin: 100,
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  counterText: {
    marginTop: 20,
    fontSize: 16,
  },
});
