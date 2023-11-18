import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import GifExpertApp from "./Pages/GifExpertApp";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: ""
      }
    })
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GifExpertApp />
    </ChakraProvider>
  </React.StrictMode>
);
