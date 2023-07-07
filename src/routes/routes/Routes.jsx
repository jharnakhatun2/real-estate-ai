import Blog from "components/blog/Blog";
import PropertyForm from "components/dashboard/propertyForm/PropertyForm";
import DashboardLayout from "layout/dasboardLayout/DashboardLayout";
import NotFound from "pages/notFound/NotFound";
import Properties from "pages/properties/Properties";
import Register from "pages/signUP/Register";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "routes/privateRoute/PrivateRoute";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Faqf from "components/faq/Faqf";
import BlogDetail from "components/blog/BlogDetail";
import PrivacyPolicyPage from "components/privacyPolicyPage/PrivacyPolicyPage";
import TermsOfServicePage from "components/TermsOfServicePage/TermsOfServicePage";
import Login from "pages/SignUP/Login";

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
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/blog/:_id",
        element: <BlogDetail/>
      },
      {
        path: "/faq",
        element: <Faqf/>
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicyPage/>,
      },
      {
        path: "/term",
        element: <TermsOfServicePage/>,
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
