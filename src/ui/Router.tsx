import React from 'react'
import App from "./App.tsx";
import SignUp from "./pages/auth/SignUp.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Lessons from "./pages/Lessons/Lessons.tsx";
import Player from "./pages/Lessons/Player.tsx";
import Notebook from "./pages/Notebook.tsx";
import TextBooks from "./pages/TextBooks/TextBooks.tsx";
import Quiz from "./pages/Quiz/Quiz.tsx";
import CourseSelect from "./pages/auth/CourseSelect.tsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Reader from "./pages/TextBooks/Reader.tsx";
import {useSelector} from "react-redux"
import { ReactState } from './state/store.ts';

const Router = () => {
    const isAuthenticated = useSelector((state: ReactState) => state.auth)
  return (
    <div>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/courseselect" element={<CourseSelect />} />
            {/* Protected Routes */}
            <Route
              path="/"
              // element={ <App />}
              element={isAuthenticated ? <App /> : <Navigate to="/signup" />}
            >
              <Route index element={<Dashboard />} />
              <Route path="lessons" element={<Lessons />} />
              <Route path="player" element={<Player />} />
              <Route path="textbooks" element={<TextBooks />} />
              <Route path="reader" element={<Reader />} />
              <Route path="notebook" element={<Notebook />} />
              <Route path="quiz" element={<Quiz />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router