import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import SignUp from "./pages/auth/SignUp.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Lessons from "./pages/Lessons/Lessons.tsx";
import Player from "./pages/Lessons/Player.tsx";
import Notebook from "./pages/Notebook.tsx";
import TextBooks from "./pages/TextBooks/TextBooks.tsx";
import Quiz from "./pages/Quiz.tsx";
import CourseSelect from "./pages/auth/CourseSelect.tsx";
import { Provider } from "react-redux";
import { store, persistor } from "./state/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "../components/ui/sonner";
const isAuthenticated = () => true;

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/courseselect" element={<CourseSelect />} />
            {/* Protected Routes */}
            <Route
              path="/"
              element={isAuthenticated() ? <App /> : <Navigate to="/signup" />}
            >
              <Route index element={<Dashboard />} />
              <Route path="lessons" element={<Lessons />} />
              <Route path="player" element={<Player />} />
              <Route path="textbooks" element={<TextBooks />} />
              <Route path="notebook" element={<Notebook />} />
              <Route path="quiz" element={<Quiz />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster richColors position="top-right"/>
      </StrictMode>
    </PersistGate>
  </Provider>
);
