import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ErrorPage from "./error-page";
import Index from "./routes";
import Root from "./routes/_layout";
import AboutMe from "./routes/about-me";
import ComponentShowcase from "./routes/component-showcase";
import ContactPage from "./routes/contact";
import ProjectsPage from "./routes/projects";

import "react-toastify/dist/ReactToastify.css";
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
        path: "/about",
        element: <AboutMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
);

// !TODO: WAVE, ANDI and AXE-CORE web browser extensions for accessibility

// !TODO: Add READMEs to all projects

// TODO: Add custom cursor and other cool hover effects

// TODO: Change font of name in top left

// website for 3d stuff: https://app.spline.design/file/9a810b0b-eb3d-4139-96bb-300743df8600

// BEFORE DEPLOYING
// !TODO: Clean up semantics

// !TODO: Add D3, Skia, & React-Spring
// !TODO: Refactor confimation modal before legacy projects are shown
// !TODO: handle showcase hover states on mobile
// !TODO: Improve about me page
// !TODO: Form validation
// !TODO: Make header component that accepts title and description
// !TODO: Replace images on projects
// !TODO: Refactor contact page (Other pages are done)
// !TODO: Check other components for refactoring
// !TODO: Reorganize project (maybe by feature? or by page?)
// !TODO: Organize types
