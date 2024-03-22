import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cart: [] };

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
