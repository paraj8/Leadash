import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";

import RecruiterLayout from "./components/RecruiterLayout";
import CandidateLayout from "./components/CandidateLayout";
import AdminLayout from "./components/AdminLayout";

import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Recruiter from "./pages/Recruiter";
import Admin from "./pages/Admin";
import Candidates from "./pages/Candidates";
//import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>

<Routes>

  {/* PUBLIC */}
  <Route path="/" element={<HomePage />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  {/* CANDIDATE */}
  <Route path="/dashboard" element={<CandidateLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="tasks" element={<Leads />} />
    <Route path="recruiters" element={<Recruiter />} />
  </Route>

  {/* RECRUITER */}
  <Route path="/recruiter" element={<RecruiterLayout />}>
    <Route index element={<Recruiter />} />
    <Route path="leads" element={<Leads />} />
    <Route path="candidates" element={<Candidates />} />
  </Route>

  {/* ADMIN */}
  <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<Admin />} />
    <Route path="leads" element={<Leads />} />
    <Route path="recruiters" element={<Recruiter />} />
    <Route path="candidates" element={<Candidates />} />
  </Route>

</Routes>

    </BrowserRouter>
  );
}

export default App;