import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import { Provider, useDispatch } from "react-redux";
import store from "./store/store";
import MarketScreen from "./screens/MarketScreen";
import { useEffect, useState } from "react";
import { createTable, deleteTable, fetchData, insertData } from "./db/db";
import { setCryptos } from "./store/slices/crypto/cryptoSlice";

const initialState = {
  cryptos: [
    {
      amountToBuy: 0,
      src: require("./img/png/bitcoin.png"),
      name: "Bitcoin",
      checked: true,
      dollarCurrency: 28500,
    },
    {
      amountToBuy: 0,
      src: require("./img/png/bnb.png"),
      name: "BNB",
      checked: false,
      dollarCurrency: 211,
    },
    {
      amountToBuy: 0,
      src: require("./img/png/cardano.png"),
      name: "Cardano",
      checked: false,
      dollarCurrency: 0.24,
    },
    {
      amountToBuy: 0,
      src: require("./img/png/USDcoin.png"),
      name: "USD coin",
      checked: false,
      dollarCurrency: 0.5,
    },
    {
      amountToBuy: 0,
      src: require("./img/png/ethereum.png"),
      name: "Ethereum",
      checked: false,
      dollarCurrency: 1558,
    },
    {
      amountToBuy: 0,
      src: require("./img/png/solana.png"),
      name: "Solana",
      checked: false,
      dollarCurrency: 23.75,
    },
    {
      amountToBuy: 0,
      src: require("./img/png/tether.png"),
      name: "Tether",
      checked: false,
      dollarCurrency: 1,
    },
    {
      amountToBuy: 0,
      src: require("./img/png/XRP.png"),
      name: "XRP",
      checked: false,
      dollarCurrency: 0.48,
    },
  ],
};

function Router() {
  const dispatch = useDispatch();
  useEffect(() => {
    // createTable("crypto");
    // for (const item of initialState.cryptos) {
    //   insertData([
    //     item.amountToBuy,
    //     item.src,
    //     item.name,
    //     item.checked,
    //     item.dollarCurrency,
    //   ]);
    // }
    fetchData()
      .then((data) => {
        console.log("Fetched data:", data);
        dispatch(setCryptos(data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // deleteTable("crypto");
  }, []);
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
            gestureEnabled: true,
            cardStyleInterpolator: ({ current, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.width, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        >
          <Stack.Screen
            name="Market"
            component={MarketScreen}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Router;
