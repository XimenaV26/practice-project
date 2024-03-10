import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { GithubRoutes } from "../github/routes/GithubRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/github/*" element={<GithubRoutes />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
