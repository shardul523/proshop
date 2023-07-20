import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  ChakraProvider,
  theme as baseTheme,
  extendTheme,
} from "@chakra-ui/react";
import { theme as proTheme } from "@chakra-ui/pro-theme";

const theme = extendTheme(
  { colors: { ...baseTheme.colors, brand: baseTheme.colors.blue } },
  proTheme
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
