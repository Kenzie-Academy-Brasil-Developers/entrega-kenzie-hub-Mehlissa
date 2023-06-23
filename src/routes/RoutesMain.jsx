import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};
