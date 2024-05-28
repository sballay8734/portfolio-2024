import { useEffect } from "react";
import { themeChange } from "theme-change";

function Index() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <main className="flex items-center justify-center flex-1 h-svh w-full px-8 relative">
      <div className="absolute hero"></div>
      {/* light/dark toggle */}
      <div className="rotate flex gap-4 items-center">
        <p className="font-semibold text-xs cursor-pointer">Theme</p>
        <div className="btn-group flex">
          <button
            data-set-theme="cupcake"
            className="h-10 w-4 bg-red-300"
          ></button>
          <button
            data-set-theme="night"
            className="h-10 w-4 bg-red-600"
          ></button>
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
