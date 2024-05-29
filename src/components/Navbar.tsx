import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Navbar() {
  // hide dropdown
  function handleDropdown() {
    const elem = document.activeElement;
    if (elem instanceof HTMLElement) {
      elem?.blur();
    }
  }

  return (
    <nav className="navbar bg-base-100 w-full fixed top-0 px-20 py-8 z-10">
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
            <Link to="/" className="bg-transparent hover:bg-base-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="bg-transparent hover:bg-base-200">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" className="bg-transparent hover:bg-base-200">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" className="bg-transparent hover:bg-base-200">
              Get in touch
            </Link>
          </li>
          {/* Menu dropdown */}
          <div className={`myDropdown myDropdown-end ml-12`}>
            <label tabIndex={0} role="button" className="btn btn-circle">
              <div className="w-10 rounded-full flex items-center justify-center">
                <RxHamburgerMenu size={20} />
              </div>
            </label>
            <ul
              tabIndex={-1}
              className={`menu menu-sm myDropdown-content mt-3 z-[1] p-2 shadow bg-base-200 w-52 rounded-sm`}
            >
              <li onClick={handleDropdown}>
                <Link to="/showcase" className="justify-between">
                  Component Showcase
                </Link>
              </li>
              <li onClick={handleDropdown}>
                <Link to="/other">Other....</Link>
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
