import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./components/cart/cartSlice";
import authReducer from "./components/user/authSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
