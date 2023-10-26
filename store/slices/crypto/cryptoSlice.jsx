import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchData } from "../../../db/db";

const initialState = {
  cryptos: [],
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
    setCryptos: (state, action) => {
      state.cryptos = action.payload;
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
  setCryptos,
} = cryptoSlice.actions;
export default cryptoReducer;
