import { Login, Profile } from "../pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

export default router;
