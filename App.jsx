import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Text,
  useWindowDimensions,
} from "react-native";
import Welcome from "./components/Welcome/Welcome";

const App = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();

  const [goods, setGoods] = useState([
    {
      source: require("./img/colla_pink_mango.webp"),
      name: "Cola pink with mango",
      checked: false,
    },
    {
      source: require("./img/hydrtator_gb_grey.webp"),
      name: "Gym Beam water bottle",
      checked: false,
    },
    {
      source: require("./img/just_whey_chocolate_milkshake_1_kg_gymbeam_1.webp"),
      name: "Just Whey chocolate milkshake",
      checked: false,
    },
    {
      source: require("./img/jw2kg_gift_011.webp"),
      name: "Just Whey mixed milkshake and gifts",
      checked: false,
    },
    {
      source: require("./img/peanut_butter_smooth_900g.webp"),
      name: "Peanut butter",
      checked: false,
    },
    {
      source: require("./img/vitality_complex_120_tabs_gymbeam.webp"),
      name: "Vitality complex box",
      checked: false,
    },
    {
      source: require("./img/vitamin_d3_1000_iu_120_caps_gymbeam.webp"),
      name: "Vitamin D3 box",
      checked: false,
    },
    {
      source: require("./img/vitaminc_30_1.webp"),
      name: "Vitamin C box",
      checked: false,
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Welcome>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            style={styles.scrollViewStyle}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ])}
            scrollEventThrottle={1}
          >
            {goods.map((image, imageIndex) => {
              return (
                <View
                  style={{ ...styles.container, width: windowWidth }}
                  key={imageIndex}
                >
                  <ImageBackground source={image.source} style={styles.card}>
                    <View style={styles.textContainer}>
                      <Text style={styles.infoText}>{image.name}</Text>
                    </View>
                  </ImageBackground>
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {goods.map((_, imageIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                outputRange: [8, 16, 8],
                extrapolate: "clamp",
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, { width }]}
                />
              );
            })}
          </View>
        </View>
      </Welcome>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
