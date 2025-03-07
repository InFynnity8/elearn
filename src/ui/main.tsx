import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Login from "./pages/auth/Login.tsx";
import SignUp from "./pages/auth/SignUp.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Lessons from "./pages/Lessons.tsx";
import Notes from "./pages/Notes.tsx";
import Homework from "./pages/Homework.tsx";
import Timetable from "./pages/Timetable.tsx";

const isAuthenticated = () => true;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

         {/* Protected Routes */}
        <Route
          path="/"
          element={isAuthenticated() ? <App /> : <Navigate to="/login" />}
        >
          <Route index element={<Dashboard />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="notes" element={<Notes />} />
          <Route path="homework" element={<Homework />} />
          <Route path="timetable" element={<Timetable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
