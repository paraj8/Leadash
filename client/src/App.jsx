import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";

/* LAYOUTS */
import AdminLayout from "./layouts/AdminLayout";
import ManagerLayout from "./layouts/ManagerLayout.jsx";
import WorkerLayout from "./layouts/WorkerLayout.jsx";

/* ADMIN PAGES */
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCreateSkills from "./pages/admin/AdminCreateSkills.jsx";
import AdminCreateTask from "./pages/admin/AdminCreateTask.jsx";
import AdminAllTasks from "./pages/admin/AdminAllTasks.jsx";
import AdminManagers from "./pages/admin/AdminManagers.jsx";
import AdminWorkers from "./pages/admin/AdminWorkers.jsx";

/* MANAGER PAGES */
import ManagerDashboard from "./pages/manager/ManagerDashboard";
import ManagerAllTasks from "./pages/manager/ManagerAllTasks.jsx";
import ManagerCreateTask from "./pages/manager/ManagerCreateTask.jsx";
import ManagerWorkers from "./pages/manager/ManagerWorkers.jsx";

/* WORKER PAGES */
import WorkerDashboard from "./pages/worker/WorkerDashboard.jsx";
import WorkerProfile from "./pages/worker/WorkerProfile.jsx";
import WorkerAllTasks from "./pages/worker/WorkerAllTasks.jsx";

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
          <Route path="/admin/admin-create-skills" element={<AdminCreateSkills />} />
          <Route path="/admin/admin-create-task" element={<AdminCreateTask />} />
          <Route path="/admin/admin-all-tasks" element={<AdminAllTasks />} />
          <Route path="/admin/admin-managers" element={<AdminManagers />} />
          <Route path="/admin/admin-workers" element={<AdminWorkers />} />

        </Route>

        {/* ================= MANAGER ================= */}
        <Route path="/manager" element={<ManagerLayout />}>

          <Route index element={<ManagerDashboard />} />
          <Route path="/manager/manager-create-tasks" element={<ManagerCreateTask />} />
          <Route path="/manager/manager-all-tasks" element={<ManagerAllTasks />} />
          <Route path="/manager/manager-workers" element={<ManagerWorkers />} />

        </Route>

        {/* ================= WORKER ================= */}
        <Route path="/worker" element={<WorkerLayout />}>

          <Route index element={<WorkerDashboard />} />
          <Route path="/worker/worker-profile" element={<WorkerProfile />} />
          <Route path="/worker/worker-all-tasks" element={<WorkerAllTasks />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;