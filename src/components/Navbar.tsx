import { MdLocationPin } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const DROPDOWN_PATHS = ["/showcase", "/about", "/other"];

export default function Navbar() {
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
      className="navbar bg-base-300 w-full fixed top-0 px-20 py-6 z-20 border-b-[1px] border-base-200"
    >
      <div className="flex-1">
        {/* TODO: Weird flicker on hover here */}
        <Link
          className="cursor-pointer text-3xl font-display hover:text-accent transition-all duration-100"
          to="/"
        >
          Shawn Ballay
        </Link>
      </div>
      {/* Right nav */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-2 flex items-center py-0 gap-6">
          {/* Main Links */}
          <li>
            <Link
              to="/"
              className={`bg-transparent hover:bg-base-200 ${pathname === "/" ? "text-accent underline underline-offset-4" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`bg-transparent hover:bg-base-200 ${pathname === "/projects" ? "text-accent underline underline-offset-4" : ""}`}
            >
              Projects
            </Link>
          </li>
          {/* <li>
            <Link
              to="/skills"
              className={`bg-transparent hover:bg-base-200 ${pathname === "/skills" ? "text-secondary underline underline-offset-4" : ""}`}
            >
              Skills
            </Link>
          </li> */}
          <li>
            <Link
              to="/contact"
              className={`bg-transparent hover:bg-base-200 ${pathname === "/contact" ? "text-accent underline underline-offset-4" : ""}`}
            >
              Get In Touch
            </Link>
          </li>
          {/* Menu dropdown */}
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
              className={`menu menu-sm myDropdown-content mt-3 z-[1] p-2 shadow bg-base-200 w-64 rounded-sm`}
            >
              <li onClick={handleDropdown}>
                <Link
                  to="/showcase"
                  className={`flex justify-between ${pathname === "/showcase" ? "text-accent" : ""}`}
                >
                  Component Showcase{" "}
                  <span className="badge badge-neutral text-xs">NEW</span>
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
              <li onClick={handleDropdown}>
                <Link
                  to="/other"
                  className={`justify-between ${pathname === "/other" ? "text-accent" : ""}`}
                >
                  Other....
                </Link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  );
}

// TODO: Dropdown refactor (Avoid js if possible) - need to research html tags and their behavior

// mTODO: Color the nav based on what is selected. Active page should be accent or other

// TODO: "text-base-content" does not work. It might not be a valid class from daisyUI

// TODO: Nav dropdown has some janky transtions
