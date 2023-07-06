import Blog from "components/blog/Blog";
import PropertyForm from "components/dashboard/propertyForm/PropertyForm";
import DashboardLayout from "layout/dasboardLayout/DashboardLayout";
import NotFound from "pages/notFound/NotFound";
import Properties from "pages/properties/Properties";
import Property from "pages/properties/Property";
import Login from "pages/signUP/Login";
import Register from "pages/signUP/Register";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "routes/privateRoute/PrivateRoute";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Faq from "components/faq/Faq";

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
        element: <Properties />,
      },
      {
        path: "/properties/:id",
        element: <Property />,
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/faq",
        element: <Faq/>
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
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
        element: (
          <PrivateRoute>
            <PropertyForm />
          </PrivateRoute>
        ),
      }
    ],
  },
]);
