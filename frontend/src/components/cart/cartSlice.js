import { createSlice } from "@reduxjs/toolkit";
import { decimalFormatter, storeLocalCart } from "../../utils";

const initialState = !localStorage.getItem("cart")
  ? { cart: [] }
  : JSON.parse(localStorage.getItem("cart"));

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addItem(state, action) {
      state.cart.push({ ...action.payload, quantity: 1 });
      storeLocalCart(state.cart);
    },

    incrementQtyItem: {
      prepare: (product, max) => {
        return { payload: { product, max } };
      },
      reducer: (state, action) => {
        const { product, max } = action.payload;
        const currItem = state.cart.find((item) => item.product === product);
        if (!currItem || currItem.quantity >= max) return;
        currItem.quantity++;
        storeLocalCart(state.cart);
      },
    },

    decrementQtyItem: {
      prepare: (product) => {
        return { payload: { product } };
      },
      reducer: (state, action) => {
        const { product } = action.payload;
        const currItem = state.cart.find((item) => item.product === product);
        if (!currItem) return;
        if (currItem.quantity === 1) {
          state.cart = state.cart.filter((item) => item.product !== product);
        } else {
          currItem.quantity--;
        }
        storeLocalCart(state.cart);
      },
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.product !== action.payload);
      storeLocalCart(state.cart);
    },
  },
});

export const { addItem, incrementQtyItem, decrementQtyItem, deleteItem } =
  cartSlice.actions;

export const getItemQty = (product) => (state) =>
  state.cart.cart?.find((item) => item.product === product)?.quantity || 0;

export const getAllItemsQty = (state) =>
  state.cart.cart.reduce((acc, item) => item.quantity + acc, 0);

export const getTotalSum = (state) =>
  decimalFormatter(
    state.cart.cart.reduce((acc, item) => item.quantity * item.price + acc, 0)
  );

export default cartSlice.reducer;
