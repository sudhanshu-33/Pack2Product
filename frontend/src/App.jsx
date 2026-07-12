import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./assets/pages/Register";
import Login from "./assets/pages/Login";
import Home from "./assets/pages/Home";
import Dashboard from "./assets/pages/Dashboard";
import ProductDescription from "./assets/components/dashboard/productDesci";
import History from "./assets/pages/History";
import GoogleSuccess from "./assets/pages/GoogleSuccess";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/description" element={<ProductDescription />} />
        <Route path="/dashboard/history" element={<History />} />
        <Route path="/google-success" element={<GoogleSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
