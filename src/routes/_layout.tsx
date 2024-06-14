import { Outlet } from "react-router-dom";

import Navbar from "../components/shared-comps/Navbar";
import VerticalElements from "../components/shared-comps/ThemeToggleDesktop";

export default function RootLayout(): React.JSX.Element {
  return (
    <>
      <Navbar />
      <div className="w-full h-svh flex flex-col items-center justify-center relative pt-[78px]">
        <VerticalElements />
        <Outlet />
      </div>
    </>
  );
}
