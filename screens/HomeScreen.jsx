import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Button
          title="Go to Contacts"
          onPress={() => navigation.navigate("Contacts")}
        />
        <Button
          title="Go to Gallery"
          onPress={() => navigation.navigate("Gallery")}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    justifyContent: "space-around",
  },
  footer: {
    backgroundColor: "black",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "white",
    fontSize:20
  },
});
export default HomeScreen;
