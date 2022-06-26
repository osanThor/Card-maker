import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import { BrowserRouter } from "react-router-dom";

const authService = new AuthService();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App authService={authService} />
    </BrowserRouter>
  </React.StrictMode>
);
