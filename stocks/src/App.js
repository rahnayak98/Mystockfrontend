import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Components/Auth"
import Dashboard from "./Components/Dashboard"
import AdminDashboard from './Components/AdminDashboard';
function App() {
  return (
    <div>
     <BrowserRouter>
       <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
       </Routes>
     </BrowserRouter>
   </div>

  );
}

export default App;
