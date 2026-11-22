
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./assets/pages/Register";
import Login from "./assets/pages/Login";
import Home from "./assets/pages/Home";
import Dashboard from "./assets/pages/Dashboard";
import ProductDescription from "./assets/pages/ProductDesci";
import IngredientBenefits from "./assets/pages/IngredientBenefits";
import PackagingLabels from "./assets/pages/PackagingLabels";
import MarketplaceListing from "./assets/pages/MarketplaceListing";
import History from "./assets/pages/History";
import GoogleSuccess from "./assets/pages/GoogleSuccess";
import Profile from "./assets/pages/Profile";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/google-success" element={<GoogleSuccess />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard/description"
            element={<ProductDescription />}
          />
          <Route
            path="/dashboard/ingredient-benefits"
            element={<IngredientBenefits />}
          />
          <Route
            path="/dashboard/product-label"
            element={<PackagingLabels />}
          />
          <Route
            path="/dashboard/marketplace"
            element={<MarketplaceListing />}
          />
          <Route path="/dashboard/history" element={<History />} />
          <Route path="/dashboard/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
