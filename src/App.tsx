import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TeacherLayout } from "./Layouts/Teacher/TeacherLayout"
import ExamPage from "./pages/Teacher/Exams"
import Register from "./pages/global/Register"
import Login from "./pages/global/Login"
import { LandingPage } from "./pages/global/LandingPage"
import Students from "./pages/Teacher/Students"
import Proctoring from "./pages/Teacher/Proctoring"
import Settings from "./pages/Teacher/Settings"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route path="exams" element={<ExamPage />} />
          <Route path="students" element={<Students />} />
          <Route path="proctoring" element={<Proctoring />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
