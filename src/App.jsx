import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./assets/pages/Register";
import Login from "./assets/pages/Login";
import Home from "./assets/pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;