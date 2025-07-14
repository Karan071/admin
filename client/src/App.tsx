import { Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import Layout from "./layout/Layout";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "@/components/theme-provider";
//import AuthRoute from "@/auth/AuthRoute";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
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
    </ThemeProvider>
  );
}
