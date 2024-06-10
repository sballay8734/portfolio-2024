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
      // {
      //   path: "/skills",
      //   element: <SkillsPage />,
      // },
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

// !TODO: Add theme toggle to drawer

// TODO: Add custom cursor and other cool hover effects

// TODO: Change font of name in top left

// website for 3d stuff: https://app.spline.design/file/9a810b0b-eb3d-4139-96bb-300743df8600

// TODO: Add tooltips

// REVIEW: REFACTOR LIST
// Marquee display
// Drawer does not animate when closed because of key={pathname}

// BEFORE DEPLOYING
// !TODO: Theme change in drawer
// !TODO: Responsive layout for Component Showcase
// !TODO: Fix light theme everywhere
// !TODO: Clean up semantics
// !TODO: Add D3, Skia, & React-Spring
// !TODO: Refactor confimation modal before legacy projects are shown
// !TODO: handle showcase hover states on mobile
