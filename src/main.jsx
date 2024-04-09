import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import FullNameContext from "./context/FullNameContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeContextComponent>
    <FullNameContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FullNameContext>
  </DarkModeContextComponent>
);
