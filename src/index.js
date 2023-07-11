import { Auth0Provider } from "@auth0/auth0-react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Auth0Provider
    domain="dev-x3rkxciwz4ic2tfc.us.auth0.com"
    clientId="7FAzutQh2W7iSzBpTqPMw9hkQHT7qpVg"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
