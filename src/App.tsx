import React from "react";
import { GlobalStyle } from "./styles";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider, LoadingProvider } from "~/provider";

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <GlobalStyle />
        <LoadingProvider>
          <ModalProvider>
            <Layout />
          </ModalProvider>
        </LoadingProvider>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
