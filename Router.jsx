import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import { useDispatch } from "react-redux";
import MarketScreen from "./screens/MarketScreen";
import { useEffect } from "react";
import { setCryptos } from "./store/slices/crypto/cryptoSlice";
import { Realm } from "@realm/react";
const initialState = {
  cryptos: [
    {
      id: 1,
      amountToBuy: 0,
      src: require("./img/png/bitcoin.png"),
      name: "Bitcoin",
      checked: true,
      dollarCurrency: 28500,
    },
    {
      id: 2,
      amountToBuy: 0,
      src: require("./img/png/bnb.png"),
      name: "BNB",
      checked: false,
      dollarCurrency: 211,
    },
    {
      id: 3,
      amountToBuy: 0,
      src: require("./img/png/cardano.png"),
      name: "Cardano",
      checked: false,
      dollarCurrency: 0.24,
    },
    {
      id: 4,
      amountToBuy: 0,
      src: require("./img/png/USDcoin.png"),
      name: "USD coin",
      checked: false,
      dollarCurrency: 0.5,
    },
    {
      id: 5,
      amountToBuy: 0,
      src: require("./img/png/ethereum.png"),
      name: "Ethereum",
      checked: false,
      dollarCurrency: 1558,
    },
    {
      id: 6,
      amountToBuy: 0,
      src: require("./img/png/solana.png"),
      name: "Solana",
      checked: false,
      dollarCurrency: 23.75,
    },
    {
      id: 7,
      amountToBuy: 0,
      src: require("./img/png/tether.png"),
      name: "Tether",
      checked: false,
      dollarCurrency: 1,
    },
    {
      id: 8,
      amountToBuy: 0,
      src: require("./img/png/XRP.png"),
      name: "XRP",
      checked: false,
      dollarCurrency: 0.48,
    },
  ],
};

class Crypto extends Realm.Object {
  static schema = {
    name: "Crypto",
    primaryKey: "id",
    properties: {
      id: "int",
      amountToBuy: "double",
      src: "int",
      name: "string",
      checked: "bool",
      dollarCurrency: "double",
    },
  };
}

const realm = new Realm({ schema: [Crypto], schemaVersion: 5 });

function Router() {
  const dispatch = useDispatch();
  useEffect(() => {
    // realm.write(() => {
    //   realm.deleteAll("Crypto");
    // });
    // realm.write(() => {
    //   initialState.cryptos.forEach((cryptoData) => {
    //     realm.create("Crypto", cryptoData);
    //   });
    // });
    const state = realm.objects("Crypto");
    // console.log(state);
    // console.log(initialState.cryptos);
    const arr = JSON.parse(JSON.stringify(state));
    console.log(arr);
    dispatch(setCryptos(arr));
    // realm.close();
  }, []);
  const Stack = createStackNavigator();
  return (
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
        <Stack.Screen name="Market" component={MarketScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
