import PropertyForm from "components/dashboard/propertyForm/PropertyForm";
import NotFound from "pages/notFound/NotFound";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Profile from "pages/dashboard/profile/Profile";
import DashboardLayout from "layout/dasboardLayout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/dashboard",
        element: <PropertyForm />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
