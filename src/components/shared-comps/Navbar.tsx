import { MdLocationPin } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

import Drawer from "./Drawer";
import NavLink from "./NavLink";
import { URL, routes } from "../../data/navigationRoutes";

const DROPDOWN_PATHS = ["/showcase", "/about", "/other"];

export default function Navbar(): React.JSX.Element {
  const location = useLocation();
  const { pathname } = location;
  // hide dropdown
  function handleDropdown() {
    const elem = document.activeElement;
    if (elem instanceof HTMLElement) {
      elem?.blur();
    }
  }

  return (
    // REVIEW: I'm not sure if using key={pathname} is the most optimal solution. Try and find a way to avoid using state and avoid re-rendering the entire nav on path change
    <nav
      key={pathname}
      className={`navbar bg-base-300 w-full fixed top-0 px-8 xs:px-10 sm:px-14 py-6 z-20 border-b-[1px] border-base-200 sm:flex h-[78px]`}
    >
      <div className="flex-1">
        <Link
          className="cursor-pointer text-2xl font-display hover:text-accent transition-all duration-200"
          to="/"
        >
          Shawn Ballay
        </Link>
      </div>
      {/* Right nav */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-2 items-center py-0 gap-4 hidden sm:flex">
          {/* Main Links */}
          {routes.map((route) => {
            if (route.inDropdown) return null;

            return (
              <NavLink
                key={route.url}
                url={route.url}
                text={route.text}
                currentPath={pathname as URL}
              />
            );
          })}

          {/* Dropdown in right nav */}
          <div className={`myDropdown myDropdown-end ml-12 relative`}>
            <label tabIndex={0} role="button" className="btn btn-circle">
              <div className="w-10 rounded-full flex items-center justify-center">
                <RxHamburgerMenu
                  className={`${DROPDOWN_PATHS.includes(pathname) ? "text-accent" : ""}`}
                  size={18}
                />
                {DROPDOWN_PATHS.includes(pathname) && (
                  <MdLocationPin
                    size={18}
                    className="absolute -top-3 text-accent"
                  />
                )}
              </div>
            </label>
            <ul
              tabIndex={-1}
              className={`menu menu-sm myDropdown-content mt-3 z-[1] p-2 shadow bg-base-200 w-64 rounded-md`}
            >
              <li onClick={handleDropdown}>
                <Link
                  to="/showcase"
                  className={`flex justify-between ${pathname === "/showcase" ? "text-accent" : ""}`}
                >
                  Component Showcase{" "}
                  <span className="badge badge-neutral text-xs bg-secondary text-secondary-content">
                    NEW
                  </span>
                </Link>
              </li>
              <li onClick={handleDropdown}>
                <Link
                  to="/about"
                  className={`justify-between ${pathname === "/about" ? "text-accent" : ""}`}
                >
                  More About Me
                </Link>
              </li>
            </ul>
          </div>
        </ul>
        <Drawer />
      </div>
    </nav>
  );
}
