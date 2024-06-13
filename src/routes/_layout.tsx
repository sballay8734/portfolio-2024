import { Outlet } from "react-router-dom";

import Drawer from "../components/shared-comps/Drawer";
import VerticalElements from "../components/shared-comps/ThemeToggleDesktop";
import Navbar from "../components/shared-comps/_Navbar";

export default function RootLayout(): React.JSX.Element {
  return (
    <>
      <Navbar />
      {/* REVIEW: Global paddding for navbar WAS set here mt-[112px] vvvvv */}
      <div className="w-full h-svh flex flex-col items-center justify-center relative pt-0 sm:pt-[78px]">
        <VerticalElements />
        <Outlet />
        <Drawer />
      </div>
    </>
  );
}
