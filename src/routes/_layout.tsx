import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";
import { themeChange } from "theme-change";

export default function RootLayout() {
  // This state is for handling active states. Theme switching works without it.
  const [activeTheme, setActiveTheme] = useState<string | null>(null);

  function handleThemeChange(theme: "cupcake" | "night") {
    if (theme === activeTheme) return;

    setActiveTheme(theme);
  }

  // set theme from storage on initial render
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project

    const persistedTheme = localStorage.getItem("theme");
    setActiveTheme(persistedTheme);
  }, []);

  // hide dropdown
  function handleDropdown() {
    const elem = document.activeElement;
    if (elem instanceof HTMLElement) {
      elem?.blur();
    }
  }

  return (
    <>
      <nav className="navbar bg-transparent w-full fixed top-0 px-20 py-8 z-10">
        <div className="flex-1">
          {/* TODO: Weird flicker on hover here */}
          <Link className="btn btn-ghost text-xl font-display" to="/">
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
      <div className="w-full h-svh flex flex-col items-center justify-center relative">
        {/* light/dark toggle */}
        <div className="rotate flex gap-4 items-center absolute left-0 ml-8 z-20">
          <div className="btn-group flex bg-base-300 relative z-0 rounded-full overflow-hidden">
            <button
              onClick={() => handleThemeChange("cupcake")}
              data-set-theme="cupcake"
              className={`px-1 py-4 text-xs flex items-center justify-center rounded-sm font-semibold h-[50%] relative bg-transparent z-10 text-neutral-content`}
            >
              <CiLight />
            </button>
            <button
              onClick={() => handleThemeChange("night")}
              data-set-theme="night"
              className={`px-1 py-4 text-xs flex items-center justify-center font-semibold h-[50%] relative bg-transparent z-10 text-neutral-content`}
            >
              <MdOutlineDarkMode className={`rotate-180`} />
            </button>
            {/* Sliding BG for theme toggle */}
            <div
              className={`absolute bg-neutral h-[50%] w-full ${activeTheme === "night" ? "translate-y-full" : "translate-y-0"} transition-all duration-300`}
            ></div>
          </div>
        </div>
        {/* Right text */}
        <div className="rotate flex gap-4 absolute right-0 mr-8">
          <p className="font-semibold text-xs cursor-default">Some Text</p>
        </div>
        <Outlet />
      </div>
    </>
  );
}

// mTODO: "More about me" in bottom left

// TODO: Dropdown refactor (Avoid js if possible) - need to research html tags and their behavior

// TODO: Refactor this page or move elements to their own components
