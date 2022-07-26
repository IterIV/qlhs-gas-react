import "./index.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import DesignNew from "./pages/DesignNew";
import { useSelector } from "react-redux";
export default function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Routes>
      <Route
        path="/"
        element={
          user ? <Navigate to="home/dashboard" /> : <Navigate to="login" />
        }
      />

      <Route
        path="home"
        element={user ? <MainLayout /> : <Navigate to="../login" />}
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="design/new" element={<DesignNew />} />
      </Route>

      <Route
        path="login"
        element={user ? <Navigate to="../home/dashboard" /> : <Login />}
      />
    </Routes>
  );
}
