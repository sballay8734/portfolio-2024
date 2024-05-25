import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "./error-page";
import Root from "./routes/root";

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
  </React.StrictMode>
);

// !TODO: WAVE, ANDI and AXE-CORE web browser extensions for accessibility

// TODO: Theme change for daisyUI
// https://github.com/saadeghi/theme-change

/* 
  "devDependencies": {
    "@eslint/js": "^9.3.0",
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",

    "@typescript-eslint/eslint-plugin": "^7.2.0",
    "@typescript-eslint/parser": "^7.2.0",
    
    "@vitejs/plugin-react-swc": "^3.5.0",
    "autoprefixer": "^10.4.19",
    "daisyui": "^4.11.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "globals": "^15.3.0",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "typescript": "^5.2.2",
    "typescript-eslint": "^7.10.0",
    "vite": "^5.2.0"
  }

*/
