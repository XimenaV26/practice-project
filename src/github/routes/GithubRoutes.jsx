import { Navigate, Route, Routes } from "react-router-dom";
import { ProfilePage } from "../pages";
export const GithubRoutes = () => {
  return (
    <Routes>
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};
