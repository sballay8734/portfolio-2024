import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page";
import App from "./routes";
import Root from "./routes/_layout";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// !TODO: WAVE, ANDI and AXE-CORE web browser extensions for accessibility

// TODO: Theme change for daisyUI
// https://github.com/saadeghi/theme-change

// TODO: Change font of name in top left
