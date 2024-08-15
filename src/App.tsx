import React from "react";
import { GlobalStyle } from "./styles";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "~/provider";

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <GlobalStyle />
        <ModalProvider>
          <Layout />
        </ModalProvider>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
