import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";

import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import SigninPage from "./pages/SigninPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import ShippingAddressPage from "./pages/ShippingAddressPage.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";

import store from "./store.js";
import "./index.css";
import PaymentPage from "./pages/PaymentPage.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools position="left" initialIsOpen />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<App />}>
              <Route index element={<HomePage />} />
              <Route path="/products/:productId" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/sign-in" element={<SigninPage />} />
              <Route path="/sign-up" element={<SignupPage />} />
              <Route path="" element={<PrivateRoute />}>
                <Route path="/shipping" element={<ShippingAddressPage />} />
                <Route path="/payment" element={<PaymentPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
