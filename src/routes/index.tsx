import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

function Index() {
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
    <main className="flex items-center justify-center flex-1 h-svh w-full px-8 relative">
      <div className="absolute hero"></div>
      {/* light/dark toggle */}
      <div className="rotate flex gap-4 items-center">
        <div className="btn-group flex bg-base-300 relative z-0 rounded-sm">
          <button
            onClick={() => handleThemeChange("cupcake")}
            data-set-theme="cupcake"
            className={`px-1 py-4 text-xs flex items-center justify-center rounded-sm font-semibold h-[50%] relative bg-transparent z-10 text-neutral-content`}
          >
            Light
          </button>
          <button
            onClick={() => handleThemeChange("night")}
            data-set-theme="night"
            className={`px-1 py-4 text-xs flex items-center justify-center rounded-sm font-semibold h-[50%] relative bg-transparent z-10 text-neutral-content`}
          >
            Dark
          </button>
          {/* Slider */}
          <div
            className={`absolute bg-neutral h-[50%] w-full rounded-sm ${activeTheme === "night" ? "translate-y-full" : "translate-y-0"} transition-all duration-300`}
          ></div>
        </div>
      </div>
      <h1 className="flex flex-col items-center flex-1">
        <span className="text-8xl font-semibold">Humanized</span>
        <span className="text-8xl font-thin text-primary">Design.</span>
      </h1>
      <div className="rotate flex gap-4">
        <p className="font-semibold text-xs cursor-default">Some Text</p>
      </div>
    </main>
  );
}

export default Index;
