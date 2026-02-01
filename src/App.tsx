import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardHome from './pages/dashboard/Home';
import Kitchens from './pages/dashboard/Kitchens';
import Inventory from './pages/dashboard/Inventory';
import Shopping from './pages/dashboard/Shopping';
import Recipes from './pages/dashboard/Recipes';
import Settings from './pages/dashboard/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboard/kitchens" element={<Kitchens />} />
        <Route path="/dashboard/inventory" element={<Inventory />} />
        <Route path="/dashboard/shopping" element={<Shopping />} />
        <Route path="/dashboard/recipes" element={<Recipes />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
