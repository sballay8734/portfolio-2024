import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { themeChange } from "theme-change";
import { quoteList } from "../data/quoteList";

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

  const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];

  return (
    <>
      {/* light/dark toggle */}
      <div className="rotate flex gap-4 items-center absolute left-0 ml-8 z-20">
        <div className="btn-group flex bg-base-300 relative z-0 rounded-full overflow-hidden">
          <button
            onClick={() => handleThemeChange("cupcake")}
            data-set-theme="cupcake"
            className={`px-1 py-4 text-xs flex items-center justify-center rounded-sm font-semibold h-[50%] relative z-10 ${activeTheme === "night" ? "text-secondary-content bg-neutral" : ""}`}
          >
            <MdLightMode size={15} />
          </button>
          <button
            onClick={() => handleThemeChange("night")}
            data-set-theme="night"
            className={`px-1 py-4 text-xs flex items-center justify-center font-semibold h-[50%] relative bg-transparent z-10 ${activeTheme === "cupcake" ? "text-neutral-content" : "text-secondary-content"}`}
          >
            <MdDarkMode size={15} className={`rotate-180`} />
          </button>
          {/* Sliding BG for theme toggle */}
          <div
            className={`absolute bg-accent h-[50%] w-full ${activeTheme === "night" ? "translate-y-full" : "translate-y-0"} transition-all duration-300`}
          ></div>
        </div>
      </div>
      {/* Right text
      <div className="rotate flex gap-4 absolute right-0 mr-8">
        <p className="text-[7px] cursor-default text-neutral-content tracking-wide font-thin">
          "{randomQuote}"
        </p>
      </div> */}
    </>
  );
}
