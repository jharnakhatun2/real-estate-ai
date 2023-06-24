import PropertyForm from "components/dashboard/propertyForm/PropertyForm";
import NotFound from "pages/notFound/NotFound";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import DashboardLayout from "layout/dasboardLayout/DashboardLayout";
import Register from "pages/signUP/Register";
import Login from "pages/signUP/Login";
import Properties from "pages/properties/Properties";
import Property from "pages/properties/Property";


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
      {
        path: "/properties",
        element: <Properties/>,
      },
      {
        path: "/properties/:id",
        element: <Property/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/signIn",
        element: <Login/>,
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
      }
    ],
  },
]);
