import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

import ThemeToggleMobile from "./ThemeToggleMobile";
import { routes } from "../data/navigationRoutes";

export default function Drawer() {
  const location = useLocation();
  const { pathname } = location;
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  return (
    <nav className="drawer z-20 sm:hidden">
      <input
        checked={isDrawerOpen}
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        readOnly
      />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="btn btn-accent drawer-button flex items-center justify-center w-16 h-16 rounded-full fixed bottom-0 right-0 mb-8 mr-10"
          onClick={() => setIsDrawerOpen(true)}
        >
          <RxHamburgerMenu size={22} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={() => setIsDrawerOpen(false)}
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-300 text-base-content">
          {/* Sidebar content here */}
          {routes.map((route) => {
            return (
              <li key={route.url}>
                <Link
                  to={route.url}
                  className={`bg-transparent hover:bg-base-200 ${pathname === route.url ? "text-accent underline underline-offset-4" : ""}`}
                >
                  {route.text}
                  {route.new && (
                    <span className="badge badge-neutral text-xs bg-secondary text-secondary-content">
                      NEW
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
          <li className="mt-auto">
            <ThemeToggleMobile />
          </li>
        </ul>
      </div>
    </nav>
  );
}
