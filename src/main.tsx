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

// BEFORE DEPLOYING
// !TODO: Clean up semantics
// !TODO: handle showcase hover states on mobile
// !TODO: Improve about me page
// !TODO: Form validation
// !TODO: Replace images on projects
// !TODO: WAVE, ANDI and AXE-CORE web browser extensions for accessibility

// BONUS STUFF
// TODO: Add custom cursor and other cool hover effects
// !TODO: Add D3, Skia, & React-Spring
// !TODO: Reorganize project (maybe by feature? or by page?)
// !TODO: Add READMEs to all projects (not just this one)
