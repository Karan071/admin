import { Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import Layout from "./layout/Layout";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard/*"
        element={
          <Layout>
            <AppRoutes />
          </Layout>
        }
      />
    </Routes>
  );
}
