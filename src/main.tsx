import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page";
import Index from "./routes";
import Root from "./routes/_layout";
import ComponentShowcase from "./routes/component-showcase";
import ContactPage from "./routes/contact";
import OtherPage from "./routes/other";
import ProjectsPage from "./routes/projects";
import SkillsPage from "./routes/skills";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/skills",
        element: <SkillsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/showcase",
        element: <ComponentShowcase />,
      },
      {
        path: "/other",
        element: <OtherPage />,
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

// TODO: Add custom cursor and other cool hover effects

// TODO: Change font of name in top left

// website for 3d stuff: https://app.spline.design/file/9a810b0b-eb3d-4139-96bb-300743df8600

// TODO: Add tooltips

// TODO: Add toasts

// TODO: Maybe add a page dedicated to common components and making them appear in various areas the user can select
