import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cryptos: [
    {
      id: nanoid(),
      amountToBuy: 0,
      src: require("../../../img/png/bitcoin.png"),
      name: "Bitcoin",
      checked: true,
      dollarCurrency: 28500,
    },
    {
      id: nanoid(),
      amountToBuy: 0,
      src: require("../../../img/png/bnb.png"),
      name: "BNB",
      checked: false,
      dollarCurrency: 211,
    },
    {
      id: nanoid(),
      amountToBuy: 0,
      src: require("../../../img/png/cardano.png"),
      name: "Cardano",
      checked: false,
      dollarCurrency: 0.24,
    },
    {
      id: nanoid(),
      amountToBuy: 0,
      src: require("../../../img/png/USDcoin.png"),
      name: "USD coin",
      checked: false,
      dollarCurrency: 0.5,
    },
    {
      id: nanoid(),
      amountToBuy: 0,
      src: require("../../../img/png/ethereum.png"),
      name: "Ethereum",
      checked: false,
      dollarCurrency: 1558,
    },
    {
      id: nanoid(),
      amountToBuy: 0,
      src: require("../../../img/png/solana.png"),
      name: "Solana",
      checked: false,
      dollarCurrency: 23.75,
    },
    {
      id: nanoid(),
      amountToBuy: 0,
      src: require("../../../img/png/tether.png"),
      name: "Tether",
      checked: false,
      dollarCurrency: 1,
    },
    {
      id: nanoid(),
      amountToBuy: 0,
      src: require("../../../img/png/XRP.png"),
      name: "XRP",
      checked: false,
      dollarCurrency: 0.48,
    },
  ],
};

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    checkCrypto: (state, action) => {
      const idx = state.cryptos.findIndex(
        (crypto) => crypto.id == action.payload
      );
      state.cryptos[idx].checked = true;
    },
    buyCrypto: (state) => {
      state.cryptos = state.cryptos.map((crypto) => ({
        ...crypto,
        amountToBuy: 0,
        checked: false,
      }));
      //buying logic
    },
    unCheckCrypto: (state, action) => {
      const idx = state.cryptos.findIndex(
        (crypto) => crypto.id == action.payload
      );
      state.cryptos[idx].checked = false;
      state.cryptos[idx].amountToBuy = 0;
    },
    decrementCrypto: (state, action) => {
      const idx = state.cryptos.findIndex(
        (crypto) => crypto.id == action.payload
      );
      if (state.cryptos[idx].amountToBuy > 0) {
        state.cryptos[idx].amountToBuy--;
      }
    },
    incrementCrypto: (state, action) => {
      const idx = state.cryptos.findIndex(
        (crypto) => crypto.id == action.payload
      );
      state.cryptos[idx].amountToBuy++;
    },
  },
});
const cryptoReducer = cryptoSlice.reducer;

export const {
  checkCrypto,
  buyCrypto,
  unCheckCrypto,
  incrementCrypto,
  decrementCrypto,
} = cryptoSlice.actions;
export default cryptoReducer;
