import { Outlet } from "react-router-dom";

import Drawer from "../components/Drawer";
import Navbar from "../components/Navbar";
import VerticalElements from "../components/VerticalElements";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      {/* REVIEW: Global paddding for navbar WAS set here mt-[112px] vvvvv */}
      <div className="w-full h-svh flex flex-col items-center justify-center relative">
        <VerticalElements />
        <Outlet />
        <Drawer />
      </div>
    </>
  );
}
