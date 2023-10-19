import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { checkCrypto } from "../store/slices/crypto/cryptoSlice";

function MarketScreen() {
  const cryptos = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      {cryptos.map((item) => (
        <View style={styles.itemContainer} key={item.id}>
          <Image source={item.src} style={styles.itemImage} />
          <View>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCurrency}>${item.dollarCurrency}</Text>
          </View>
          <TouchableOpacity
            onPress={()=>dispatch(checkCrypto(item.id))}
            style={styles.addToCartButton}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  addToCartButton: {
    position: "absolute",
    right: 100,
    backgroundColor: "#3498db",
    padding: 15,
    opacity: 0.7,
    borderRadius: 5,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemCurrency: {
    fontSize: 14,
  },
});

export default MarketScreen;
