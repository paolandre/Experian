import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/views/home/home";
import LeaderView from "./components/views/leaderView/leaderView";
import EmployeeView from "./components/views/employeeView/employeeView";
import "./index.css"

const link = document.createElement('link');

link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap';
document.head.appendChild(link);



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/leader-view",
    element: <LeaderView />,
  },
  {
    path: "/employee-view",
    element: <EmployeeView />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      
    <RouterProvider router={router} />
  </React.StrictMode>
);
