import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";

/* LAYOUTS */
import AdminLayout from "./components/AdminLayout";
import RecruiterLayout from "./components/RecruiterLayout";
import CandidateLayout from "./components/CandidateLayout";

/* ADMIN PAGES */
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateSkills from "./pages/admin/CreateSkills";
import CreateTask from "./pages/admin/CreateTask";
import AllTasks from "./pages/admin/AllTasks";
import Recruiters from "./pages/admin/Recruiters";
import Candidates from "./pages/admin/Candidates";

/* RECRUITER PAGES 
import RecruiterDashboard from "./pages/recruiter/Dashboard";
import RecruiterTasks from "./pages/recruiter/AllTasks";
import RecruiterCandidates from "./pages/recruiter/Candidates";*/

/* CANDIDATE PAGES 
import CandidateDashboard from "./pages/candidate/Dashboard";
import CandidateProfile from "./pages/candidate/Profile";
import CandidateTasks from "./pages/candidate/AllTasks";*/

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================= ADMIN ================= */}
        <Route path="/admin" element={<AdminLayout />}>

          <Route index element={<AdminDashboard />} />
          <Route path="/admin/create-skills" element={<CreateSkills />} />
          <Route path="/admin/create-task" element={<CreateTask />} />
          <Route path="/admin/tasks" element={<AllTasks />} />
          <Route path="/admin/recruiters" element={<Recruiters />} />
          <Route path="/admin/candidates" element={<Candidates />} />

        </Route>

        {/* ================= RECRUITER ================= 
        <Route path="/recruiter" element={<RecruiterLayout />}>

          <Route index element={<RecruiterDashboard />} />
          <Route path="tasks" element={<RecruiterTasks />} />
          <Route path="candidates" element={<RecruiterCandidates />} />

        </Route>*/}

        {/* ================= CANDIDATE ================= 
        <Route path="/candidate" element={<CandidateLayout />}>

          <Route index element={<CandidateDashboard />} />
          <Route path="profile" element={<CandidateProfile />} />
          <Route path="tasks" element={<CandidateTasks />} />

        </Route>*/}

      </Routes>
    </BrowserRouter>
  );
}

export default App;