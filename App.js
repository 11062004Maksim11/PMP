import ButtonCounter from "./components/ButtonCounter";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <ButtonCounter
      count={count}
      incrementCount={incrementCount}
      decrementCount={decrementCount}
    />
  );
}
