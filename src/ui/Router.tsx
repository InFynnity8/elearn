import App from "./App.tsx";
import SignUp from "./pages/auth/SignUp.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Lessons from "./pages/Lessons/Lessons.tsx";
import Player from "./pages/Lessons/Player.tsx";
import Notebook from "./pages/Notebook.tsx";
import TextBooks from "./pages/TextBooks/TextBooks.tsx";
import Quiz from "./pages/Quiz/Quiz.tsx";
import CourseSelect from "./pages/auth/CourseSelect.tsx";
import { MemoryRouter, Routes, Route, Navigate } from "react-router-dom";
import Reader from "./pages/TextBooks/Reader.tsx";
import { useSelector } from "react-redux";
import { ReactState } from "./state/store.ts";
import Quizlet from "./pages/Quiz/Quizlet.tsx";
import { useEffect, useState } from "react";

const Router = () => {
  const [user, setUser] = useState(localStorage.getItem("user"))
  const { isAuthenticated } = useSelector((state: ReactState) => state.auth);
  console.log(isAuthenticated);

  window.electronAPI.getAuthenticatedUser().then((results) => results ? localStorage.setItem("user", results) : "");
  useEffect(() => {
    setUser(localStorage.getItem("user"))
    console.log(user, 2 );
  }, [])
     
  console.log(user, 1);
  
  return (
    <div>
      <MemoryRouter>
        <Routes>
          {/* Public Routes */}  
          <Route path="/signup" element={<SignUp />} />
          <Route path="/courseselect" element={<CourseSelect />} />
          {/* Protected Routes */}
          <Route
            path="/"
            // element={ <App />}
            element={user ? <App /> : <Navigate to="/signup" />}
          >
            <Route index  element={<Dashboard />} />
            <Route path="lessons" element={<Lessons />} />
            <Route path="player/:subject" element={<Player />} />
            <Route path="textbooks" element={<TextBooks />} />
            <Route path="reader/:subject" element={<Reader />} />
            <Route path="notebook" element={<Notebook />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="quizlet/:subject" element={<Quizlet />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </div>
  );
};

export default Router;
