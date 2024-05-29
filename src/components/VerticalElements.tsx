import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { themeChange } from "theme-change";

export default function VerticalElements() {
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

  return (
    <>
      {/* light/dark toggle */}
      <div className="rotate flex gap-4 items-center absolute left-0 ml-8 z-20">
        <div className="btn-group flex bg-base-300 relative z-0 rounded-full overflow-hidden">
          <button
            onClick={() => handleThemeChange("cupcake")}
            data-set-theme="cupcake"
            className={`px-1 py-4 text-xs flex items-center justify-center rounded-sm font-semibold h-[50%] relative bg-transparent z-10 text-secondary-content ${activeTheme === "night" ? "text-base-content" : ""}`}
          >
            <CiLight size={20} />
          </button>
          <button
            onClick={() => handleThemeChange("night")}
            data-set-theme="night"
            className={`px-1 py-4 text-xs flex items-center justify-center font-semibold h-[50%] relative bg-transparent z-10 text-secondary-content ${activeTheme === "cupcake" ? "text-neutral-content" : ""}`}
          >
            <MdOutlineDarkMode size={20} className={`rotate-180`} />
          </button>
          {/* Sliding BG for theme toggle */}
          <div
            className={`absolute bg-accent h-[50%] w-full ${activeTheme === "night" ? "translate-y-full" : "translate-y-0"} transition-all duration-300`}
          ></div>
        </div>
      </div>
      {/* Right text */}
      <div className="rotate flex gap-4 absolute right-0 mr-8">
        <p className="font-semibold text-xs cursor-default">Some Text</p>
      </div>
    </>
  );
}
