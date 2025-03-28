import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Router from "./Router.tsx";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import { Toaster } from "../components/ui/sonner";

declare global {
  interface Window {
    electronAPI: {
      // Videos
      getVideos: () => Promise<{ name: string; path: string }[]>;
      openVideoFolder: () => Promise<void>;

      // PDFs
      getPdfs: () => Promise<{ name: string; path: string }[]>;
      openPdfFolder: () => Promise<void>;

      // Notes
      saveText: (data: { filename: string; text: string }) => Promise<string | null>;
      loadTextFiles: () => Promise<{ name: string; path: string }[]>;
      readTextFile: (filePath: string) => Promise<{ success: boolean; text?: string; error?: string }>;
      openNotesFolder: () => Promise<void>;

      // Authentication
      authenticateUser: (username: string, password: string) => Promise<{ success: boolean; message: string }>;
      setAuthenticatedUser: (username: string) => Promise<void>;
      getAuthenticatedUser: () => Promise<string | null>;
      logoutUser: () => Promise<{ success: boolean; message: string }>;
    };
  }
}


createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
      <StrictMode>
        <Router/>
        <Toaster richColors position="top-right"/>
      </StrictMode>
  </Provider>
);
