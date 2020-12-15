import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";
import App from "./App";
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import { Auth0Provider, withAuthenticationRequired } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory >
  </BrowserRouter>,
  document.getElementById("root")
);