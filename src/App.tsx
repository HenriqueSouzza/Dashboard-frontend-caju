import React from "react";
import { GlobalStyle } from "./styles";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <GlobalStyle />
        <Layout />
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
