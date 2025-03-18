import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Router from "./Router.tsx";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import { Toaster } from "../components/ui/sonner";


createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
      <StrictMode>
        <Router/>
        <Toaster richColors position="top-right"/>
      </StrictMode>
  </Provider>
);
