import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<Home />} />
      <Route path="/product/:productId" element={<Product />} />
    </Route>
  )
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);
