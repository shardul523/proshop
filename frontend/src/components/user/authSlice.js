import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : { isLoggedIn: false };

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    authenticate(state) {
      state.isLoggedIn = true;
      localStorage.setItem("auth", JSON.stringify(state));
    },
    unauthenticate(state) {
      state.isLoggedIn = false;
      localStorage.setItem("auth", JSON.stringify(state));
    },
  },
});

export const { authenticate, unauthenticate } = authSlice.actions;

export default authSlice.reducer;
