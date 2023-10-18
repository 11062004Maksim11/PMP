import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const goods = [
  {
    source: require("../img/colla_pink_mango.webp"),
    name: "Cola pink with mango",
    checked: false,
  },
  {
    source: require("../img/hydrtator_gb_grey.webp"),
    name: "Gym Beam water bottle",
    checked: false,
  },
  {
    source: require("../img/just_whey_chocolate_milkshake_1_kg_gymbeam_1.webp"),
    name: "Just Whey chocolate milkshake",
    checked: false,
  },
  {
    source: require("../img/jw2kg_gift_011.webp"),
    name: "Just Whey mixed milkshake and gifts",
    checked: false,
  },
  {
    source: require("../img/peanut_butter_smooth_900g.webp"),
    name: "Peanut butter",
    checked: false,
  },
  {
    source: require("../img/vitality_complex_120_tabs_gymbeam.webp"),
    name: "Vitality complex box",
    checked: false,
  },
  {
    source: require("../img/vitamin_d3_1000_iu_120_caps_gymbeam.webp"),
    name: "Vitamin D3 box",
    checked: false,
  },
  {
    source: require("../img/vitaminc_30_1.webp"),
    name: "Vitamin C box",
    checked: false,
  },
];

const GalleryScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {goods.map((good, index) => (
        <View key={index} style={styles.goodsItem}>
          <Image source={good.source} style={styles.image} />
          <Text style={styles.name}>{good.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  goodsItem: {
    width: "40%",
    margin: 5,
    backgroundColor: "lightgray",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
  name: {
    marginTop: 10,
    textAlign: "center",
  },
});

export default GalleryScreen;
