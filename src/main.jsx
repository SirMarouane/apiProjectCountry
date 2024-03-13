import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import App from "./App";
import ErrorPage from "./components/ErrorPage";
import InfoCard from "./components/CardsDisplay/InfoCard"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },

  {
    path: "/:id",
    element: <InfoCard/>,
  },

  // {
  //   path: "/",
  //   element: <App/>,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);