import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";

import App from "./App.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import AdminRoute from "./routes/AdminRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import SigninPage from "./pages/SigninPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import ShippingAddressPage from "./pages/ShippingAddressPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import OrdersList from "./pages/admin/OrdersList.jsx";
import UsersList from "./pages/admin/UsersList.jsx";
import ProductsList from "./pages/admin/ProductsList.jsx";
import AddProductForm from "./pages/admin/AddProductForm.jsx";
import EditProductForm from "./pages/admin/EditProductForm.jsx";
import EditUserForm from "./pages/admin/EditUserForm.jsx";

import store from "./store.js";
import "./globals.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools position="left" initialIsOpen /> */}
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
                <Route path="/checkout">
                  <Route path="place-order" element={<PlaceOrder />} />
                  <Route path="payment" element={<PaymentPage />} />
                  <Route path="shipping" element={<ShippingAddressPage />} />
                </Route>
                <Route path="/orders/:orderId" element={<OrderPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/admin" element={<AdminRoute />}>
                  <Route path="orders" element={<OrdersList />} />
                  <Route path="users">
                    <Route index element={<UsersList />} />
                    <Route path=":userId/edit" element={<EditUserForm />} />
                  </Route>
                  <Route path="products">
                    <Route index element={<ProductsList />} />
                    <Route path="new" element={<AddProductForm />} />
                    <Route
                      path=":productId/edit"
                      element={<EditProductForm />}
                    />
                  </Route>
                </Route>
              </Route>
              <Route path="*" element={<Navigate to={"/"} replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
