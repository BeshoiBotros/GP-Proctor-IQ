import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TeacherLayout } from "./Layouts/Teacher/TeacherLayout"
import Exam from "./pages/Teacher/Exams"
import Register from "./pages/global/Register"
import Login from "./pages/global/Login"
import { LandingPage } from "./pages/global/LandingPage"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route path="exams" element={<Exam />} />
        </Route>

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
