import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Router from "./Router.tsx";
import { Provider } from "react-redux";
import { store, persistor } from "./state/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "../components/ui/sonner";


createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <Router/>
        <Toaster richColors position="top-right"/>
      </StrictMode>
    </PersistGate>
  </Provider>
);
