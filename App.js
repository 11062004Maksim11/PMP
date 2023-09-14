import { useState } from "react";
import ButtonCounter from "./components/ButtonCounter";
import TextDoubler from "./components/TextDoubler";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";

export default function App() {
  [componentAmount, setComponentAmount] = useState(1);
  const incrementComponent = () => {
    setComponentAmount(componentAmount + 1);
  };

  const decrementComponent = () => {
    if (componentAmount > 0) {
      setComponentAmount(componentAmount - 1);
    }
  };
  return (
    <>
      <ScrollView>
        <View>
          <TouchableOpacity style={{ margin: 50 }}>
            <Button
              title={"Add component"}
              color="green"
              onPress={incrementComponent}
            />
            <Button
              title={"Delete component"}
              color="red"
              onPress={decrementComponent}
            />
          </TouchableOpacity>
        </View>
        <View>
          {Array.from({ length: componentAmount }, (_, index) => (
            <View key={index}>
              <TextDoubler />
              <ButtonCounter />
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
