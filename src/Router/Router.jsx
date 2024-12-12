import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { AllJobs } from "../Pages/AllJobs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
        loader: () => fetch("http://localhost:4000/allJobs"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signIn",
        element: <Login></Login>,
      },
    ],
  },
]);
