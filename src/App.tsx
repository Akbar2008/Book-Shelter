import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { Login } from "./Components/Pages/Login"
import { Section } from "./Components/Pages/Section";
import { Leot } from "./Components/Pages/Leot";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Leot />} >
      <Route path="/" element={<Section />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App
