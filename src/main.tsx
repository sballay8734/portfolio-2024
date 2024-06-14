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

// DO NOW TO DEPLOY
// !TODO: Replace images on projects

// PRIORITY AFTER DEPLOYING
// TODO: Test component showcase "hover" states on mobile
// TODO: Add hover state to "Legacy" tabs on Projects page
// TODO: Take a look a the Marquee again and refactor
// TODO: Clean up semantics
// TODO: handle showcase hover states on mobile
// TODO: Form validation
// TODO: WAVE, ANDI and AXE-CORE web browser extensions for accessibility

// BONUS STUFF
// mTODO: Add custom cursor and other cool hover effects
// mTODO: Add D3, Skia, & React-Spring
// mTODO: Reorganize project (maybe by feature? or by page?)
// mTODO: Add READMEs to all projects (not just this one)
// mTODO: I don't love the light theme colors
