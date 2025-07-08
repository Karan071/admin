import { Routes, Route } from "react-router-dom";
import Coaches from "@/pages/AdminDesk/Coaches";
import Explorers from "@/pages/AdminDesk/Explorers";
import Organisations from "@/pages/AdminDesk/Organisations";
import Activities from "@/pages/AdminDesk/Activities";
import Assessments from "@/pages/AdminDesk/Manage/Assessments";
import Sessions from "@/pages/AdminDesk/Manage/Sessions";
import SessionPool from "@/pages/AdminDesk/Manage/SessionPool";
import ConsultantPremium from "@/pages/AdminDesk/Manage/Consultant";
import Masterclasses from "@/pages/AdminDesk/Manage/Masterclass";
import Courses from "@/pages/AdminDesk/Manage/Courses";
import AccessCodes from "@/pages/AdminDesk/Manage/Access";
import DeskUsers from "@/pages/AdminDesk/Manage/Users";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Admin Desk Routes */}
      <Route path="coaches" element={<Coaches />} />
      <Route path="explorers" element={<Explorers />} />
      <Route path="organisations" element={<Organisations />} />
      <Route path="activities" element={<Activities />} />
      <Route path="assessments" element={<Assessments />} />
      <Route path="sessions" element={<Sessions />} />
      <Route path="session-pool" element={<SessionPool />} />
      <Route path="consultant-premium" element={<ConsultantPremium />} />
      <Route path="masterclasses" element={<Masterclasses />} />
      <Route path="courses" element={<Courses />} />
      <Route path="access-codes" element={<AccessCodes />} />
      <Route path="users" element={<DeskUsers />} />

      {/* Coach Desk Routes */}
    </Routes>
  );
}
