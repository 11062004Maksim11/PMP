import React, { useRef, useEffect, useState, Children } from "react";
import {
  View,
  Text,
  Animated,
  Easing,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Welcome = ({ children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [faded, setFaded] = useState(false);
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    setFaded(true);
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    setFaded(false);
  };

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { opacity: fadeAnim }]}>
        <Text style={styles.text}>Hello, Gym Beam</Text>
        <View style={styles.content}>{children}</View>
      </Animated.View>
      <TouchableOpacity
        onPress={faded ? fadeOut : fadeIn}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          {faded ? "Curtains off" : "Curtains on"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    position: "absolute",
    top: 100,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  button: {
    position: "absolute",
    marginTop: 20,
    backgroundColor: "tomato",
    padding: 10,
    borderRadius: 5,
    top: 10,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    position: "absolute",
  },
});

export default Welcome;
