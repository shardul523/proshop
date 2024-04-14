import { createSlice } from "@reduxjs/toolkit";
import { decimalFormatter, storeLocalCart } from "../../utils";

const initialState = !localStorage.getItem("state")
  ? { cartItems: [], shippingAddress: {}, paymentMethod: "PayPal" }
  : JSON.parse(localStorage.getItem("state"));

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addItem(state, action) {
      state.cartItems.push({
        ...action.payload,
        quantity: 1,
        unitPrice: action.payload.price,
      });
      storeLocalCart({ ...state });
    },

    incrementQtyItem: {
      prepare: (product, max) => {
        return { payload: { product, max } };
      },
      reducer: (state, action) => {
        const { product, max } = action.payload;
        const currItem = state.cartItems.find(
          (item) => item.product === product
        );
        if (!currItem || currItem.quantity >= max) return;
        currItem.quantity++;
        storeLocalCart(state);
      },
    },

    decrementQtyItem: {
      prepare: (product) => {
        return { payload: { product } };
      },
      reducer: (state, action) => {
        const { product } = action.payload;
        const currItem = state.cartItems.find(
          (item) => item.product === product
        );
        console.log(currItem.quantity);
        if (currItem.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.product !== product
          );
        } else {
          currItem.quantity--;
        }
        if (!currItem) return;
        storeLocalCart(state);
      },
    },

    deleteItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.product !== action.payload
      );
      storeLocalCart(state);
    },

    saveShippingAddress(state, action) {
      state.shippingAddress = action.payload;
      storeLocalCart(state);
    },

    savePaymentMethod(state, action) {
      state.paymentMethod = action.payload;
      storeLocalCart(state);
    },

    clearCart(state) {
      state.cartItems = [];
      storeLocalCart(state);
    },
  },
});

export const {
  addItem,
  incrementQtyItem,
  decrementQtyItem,
  deleteItem,
  saveShippingAddress,
  savePaymentMethod,
  clearCart,
} = cartSlice.actions;

export const getItemQty = (product) => (state) =>
  state.cart.cartItems?.find((item) => item.product === product)?.quantity || 0;

export const getAllItemsQty = (state) =>
  state.cart.cartItems?.reduce((acc, item) => item.quantity + acc, 0);

export const getTotalSum = (state) =>
  decimalFormatter(
    state.cart.cartItems?.reduce(
      (acc, item) => item.quantity * item.price + acc,
      0
    )
  );

export default cartSlice.reducer;
