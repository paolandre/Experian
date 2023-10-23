import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/views/home/home";
import PersonalFow from "./components/views/personalFow/personalFow";
import TeamFow from "./components/views/teamFow/teamFow";
import EmployeeFow from "./components/views/employeeFow/employeeFow";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/personal-fow",
    element: <PersonalFow />,
  },
  {
    path: "/team-fow",
    element: <TeamFow />
  },
  {
    path: "/employee-fow",
    element: <EmployeeFow />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
