import { NavigationContainer } from "@react-navigation/native";
import ContactsScreen from "./screens/MarketScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";
import store from "./store/store";
import MarketScreen from "./screens/MarketScreen";

function App() {
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
            gestureEnabled: true, // Enable swipe gestures
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
    </Provider>
  );
}

export default App;
