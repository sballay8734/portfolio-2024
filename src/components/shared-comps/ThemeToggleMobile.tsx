import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { themeChange } from "theme-change";

export default function ThemeToggleMobile(): React.JSX.Element {
  // This state is for handling active states. Theme switching works without it.
  const [activeTheme, setActiveTheme] = useState<string | null>(null);

  function handleThemeChange(theme: "emerald" | "dark") {
    if (theme === activeTheme) return;

    setActiveTheme(theme);
  }

  // set theme from storage on initial render
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project

    const persistedTheme = localStorage.getItem("theme");
    if (!persistedTheme) {
      setActiveTheme("dark");
    } else {
      setActiveTheme(persistedTheme);
    }
  }, []);

  return (
    <>
      {/* light/dark toggle */}
      <div className="flex sm:hidden gap-4 items-center left-0">
        <div className="btn-group flex bg-base-300 relative z-0 rounded-full overflow-hidden w-full">
          <button
            onClick={() => handleThemeChange("emerald")}
            data-set-theme="emerald"
            className={`px-1 py-4 text-xs flex items-center justify-center rounded-sm font-semibold relative z-10 w-[50%] ${activeTheme === "dark" ? "text-secondary-content bg-neutral" : ""}`}
          >
            <MdLightMode size={15} />
          </button>
          <button
            onClick={() => handleThemeChange("dark")}
            data-set-theme="dark"
            className={`px-1 py-4 text-xs flex items-center justify-center font-semibold w-[50%] relative z-10 ${activeTheme === "emerald" ? "text-neutral bg-base-100" : "text-secondary-content"}`}
          >
            <MdDarkMode size={15} className={``} />
          </button>
          {/* Sliding BG for theme toggle */}
          <div
            className={`absolute bg-accent w-[50%] h-full ${activeTheme === "dark" ? "translate-x-full" : "translate-x-0"} transition-all duration-200`}
          ></div>
        </div>
      </div>
    </>
  );
}
