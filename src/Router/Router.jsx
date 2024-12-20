import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { AllJobs } from "../Pages/AllJobs";
import { JobDetails } from "../Pages/JobDetails";
import { ApplyNow } from "../Pages/ApplyNow";
import { MyAppliedJobs } from "../Pages/MyAppliedJobs";

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
        path: "/JobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/jobDetails/${params.id}`),
      },
      {
        path: "/applyNow/:id",
        element: <ApplyNow></ApplyNow>,
      },
      {
        path: "myAppliedJobs",
        element: <MyAppliedJobs></MyAppliedJobs>,
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
