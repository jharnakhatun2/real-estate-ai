import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Dashboard from "../../pages/dashboard/Dashboard";
import Home from "../../pages/home/Home";
import Register from "pages/signUP/Register";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/signIn',
        element: <Register />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  }
]);