import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TeacherLayout } from "./Layouts/Teacher/TeacherLayout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="teacher" element={<TeacherLayout />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
