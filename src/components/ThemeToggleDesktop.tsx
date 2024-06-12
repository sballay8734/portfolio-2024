import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { themeChange } from "theme-change";

export default function ThemeToggleDesktop(): React.JSX.Element {
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
      <div className="rotate hidden sm:flex gap-4 items-center absolute left-0 ml-6 z-10">
        <div className="btn-group flex bg-base-300 relative z-0 rounded-full overflow-hidden">
          <button
            onClick={() => handleThemeChange("emerald")}
            data-set-theme="emerald"
            className={`px-1 py-4 text-xs flex items-center justify-center rounded-sm font-semibold h-[50%] relative z-10 ${activeTheme === "dark" ? "text-secondary-content bg-neutral" : ""}`}
          >
            <MdLightMode size={15} />
          </button>
          <button
            onClick={() => handleThemeChange("dark")}
            data-set-theme="dark"
            className={`px-1 py-4 text-xs flex items-center justify-center font-semibold h-[50%] relative z-10 ${activeTheme === "emerald" ? "text-neutral bg-base-100" : "text-secondary-content"}`}
          >
            <MdDarkMode size={15} className={`rotate-180`} />
          </button>
          {/* Sliding BG for theme toggle */}
          <div
            className={`absolute bg-accent h-[50%] w-full ${activeTheme === "dark" ? "translate-y-full" : "translate-y-0"} transition-all duration-300`}
          ></div>
        </div>
      </div>
    </>
  );
}
