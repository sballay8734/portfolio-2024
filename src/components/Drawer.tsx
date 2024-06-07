import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

export default function Drawer() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav key={pathname} className="drawer z-20 sm:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="btn btn-accent drawer-button flex items-center justify-center w-16 h-16 rounded-full fixed bottom-0 right-0 mb-8 mr-10"
        >
          <RxHamburgerMenu size={22} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-300 text-base-content">
          {/* Sidebar content here */}
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
          <li>
            <Link
              to="/contact"
              className={`bg-transparent hover:bg-base-200 ${pathname === "/contact" ? "text-accent underline underline-offset-4" : ""}`}
            >
              Get In Touch
            </Link>
          </li>
          <li>
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
          <li>
            <Link
              to="/about"
              className={`justify-between ${pathname === "/about" ? "text-accent" : ""}`}
            >
              More About Me
            </Link>
          </li>
          <li className="px-4 py-8 text-red-500 mt-auto">
            Add Theme Toggle Here
          </li>
        </ul>
      </div>
    </nav>
  );
}
