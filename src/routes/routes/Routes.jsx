import PropertyForm from "components/dashboard/propertyForm/PropertyForm";
import DashboardLayout from "layout/dasboardLayout/DashboardLayout";
import NotFound from "pages/notFound/NotFound";
import Properties from "pages/properties/Properties";
import Property from "pages/properties/Property";
import Login from "pages/signUP/Login";
import Register from "pages/signUP/Register";
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "routes/privateRoute/PrivateRoute";
import Loading from "ui/loading/Loading";
import Home from "../../pages/home/Home";
const LazyMain = lazy(() => import("../../layout/Main"));


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading/>}>
        <LazyMain />
      </Suspense>
    ),
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
