import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage";
import Create from "./pages/Create/Create";
import ViewModel from "./pages/View/View";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "marketplace",
        element: <Home />,
      },
      {
        path: "about",
        element: <Home />,
      },
    ],
  },
  {
    path: "view",
    element: <ViewModel />,
  },
  {
    path: "*",
    element: <NoPage />
  },
]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
