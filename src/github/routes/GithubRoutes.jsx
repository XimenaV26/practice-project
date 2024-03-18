import { Navigate, Route, Routes } from "react-router-dom";
import { ProfilePage } from "../pages";
export const GithubRoutes = () => {
  return (
    <Routes>
      <Route path="/profile" element={<ProfilePage />} />

      <Route path="/*" element={<Navigate to="/github/profile" />} />
    </Routes>
  );
};
