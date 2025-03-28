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
      readTextFile: (filePath: string) => Promise<{ success: boolean; text?: string; error?: string }>;
      loadTextFiles: () => Promise<{ name: string; path: string }[]>;
      getVideos: () => Promise<{ name: string; path: string }[]>;
      getVideoMetadata: (videoPath: string) => Promise<{ duration: number; title: string }>;
      saveText: (content: { filename: string; text: string }) => Promise<string | null>;
      getPdfs: () => Promise<{ name: string; path: string }[]>;
      authenticateUser: (username: string, password: string) => Promise<{ success: boolean; message: string }>;
      setAuthenticatedUser: (username: string) => Promise<void>;
      getAuthenticatedUser: () => Promise<string | null>;
      logoutUser: () => Promise<{ success: boolean; message: string }>;
      openVideoFolder: () => Promise<void>;
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
