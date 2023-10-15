import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
const root = ReactDOM.createRoot(document.getElementById("root"));
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
root.render(
  <>
    <CacheProvider value={cacheRtl}>
      <App />
    </CacheProvider>
  </>
);