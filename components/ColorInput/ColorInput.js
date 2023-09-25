import { View } from "react-native";

export default function ColorInput(props) {
  return (
    <View
      style={{
        backgroundColor: `rgb(${props.red},${props.green},${props.blue})`,
        width: "100%",
        height: "100%",
      }}
    ></View>
  );
}
