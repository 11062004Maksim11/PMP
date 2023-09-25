import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
const numRows = 3;
const numColumns = 3;
const cellSize = 50;
export default function FlexContainer(props) {
  [scale, setScale] = useState(cellSize);
  const increaseScale = () => {
    if (scale < 90) {
      setScale(scale + 20);
    }
  };
  const reduceScale = () => {
    if (scale > 30) {
      setScale(scale - 20);
    }
  };
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        {[...Array(numRows)].map((_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {[...Array(numColumns)].map((_, columnIndex) => (
              <View key={columnIndex}>
                {
                  <View style={[styles.cell, { width: scale, height: scale }]}>
                    {props.children[0]}
                  </View>
                }
              </View>
            ))}
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.input}>{props.children[1]}</View>
        <View style={styles.input}>{props.children[2]}</View>
        <View style={styles.input}>{props.children[3]}</View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button color={"darkgreen"} title="+" onPress={increaseScale} />
        </View>
        <View style={styles.button}>
          <Button color={"darkred"} title="-" onPress={reduceScale} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    width: "50%",
  },
  body: {
    flex: 1,
    backgroundColor: "beige",
  },
  container: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    borderWidth: 1,
    borderColor: "gray",
    margin: 5,
  },
});
