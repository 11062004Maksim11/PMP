import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  buyCrypto,
  decrementCrypto,
  incrementCrypto,
  unCheckCrypto,
} from "../store/slices/crypto/cryptoSlice";

const HomeScreen = ({ navigation }) => {
  const cryptos = useSelector((state) =>
    state.cryptos.filter((v) => v.checked)
  );
  const buyPrice = cryptos.reduce(
    (total, crypto) => total + crypto.amountToBuy * crypto.dollarCurrency,
    0
  );
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Market")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go to market</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <ScrollView>
          {cryptos.map((item) => (
            <View style={styles.itemContainer} key={item.id}>
              <Image source={item.src} style={styles.itemImage} />
              <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCurrency}>${item.dollarCurrency}</Text>
              </View>
              <View style={styles.cartButtons}>
                <TouchableOpacity
                  style={{
                    marginRight: 20,
                  }}
                  onPress={() => dispatch(decrementCrypto(item.id))}
                >
                  <Text style={{ fontSize: 40 }}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => dispatch(unCheckCrypto(item.id))}
                  style={{
                    backgroundColor: "red",
                    padding: 15,
                    opacity: 0.7,
                    borderRadius: 5,
                  }}
                >
                  <Text style={styles.buttonText}>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginLeft: 20 }}
                  onPress={() => dispatch(incrementCrypto(item.id))}
                >
                  <Text style={{ fontSize: 30 }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
        {cryptos.length ? (
          <View style={styles.header}>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: "green" }}
              onPress={() => dispatch(buyCrypto())}
            >
              <Text style={styles.buttonText}>Buy {buyPrice}$</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    alignItems: "flex-start",
    flexDirection: "row",
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
    fontSize: 20,
  },
  button: {
    width: "100%",
    backgroundColor: "#3498db",
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  itemContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cartButtons: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    right: 50,
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
export default HomeScreen;
