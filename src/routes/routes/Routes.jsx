import { createBrowserRouter } from "react-router-dom";
import Welcome from "../../pages/dashboard/Welcome";
import Home from "../../pages/home/home/Home";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Welcome></Welcome>,
      },
    ],
  },
]);
export default router;
