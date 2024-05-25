import { RxHamburgerMenu } from "react-icons/rx";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <nav className="navbar bg-transparent w-full fixed top-0 px-20 py-8 z-10">
        <div className="flex-1">
          {/* TODO: Weird flicker on hover here */}
          <a className="btn btn-ghost text-xl">Shawn Ballay</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-2 flex items-center py-0 gap-6">
            <li>
              <a className="bg-transparent hover:bg-base-200">Home</a>
            </li>
            <li>
              <a className="bg-transparent hover:bg-base-200">Projects</a>
            </li>
            <li>
              <a className="bg-transparent hover:bg-base-200">Skills</a>
            </li>
            <li>
              <a className="bg-transparent hover:bg-base-200">Get in touch</a>
            </li>
            <div className="dropdown dropdown-end ml-12">
              <div tabIndex={0} role="button" className="btn btn-circle">
                <div className="w-10 rounded-full flex items-center justify-center">
                  <RxHamburgerMenu size={20} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </nav>
      <Outlet />
      {/* mTODO: Might need to move footer or add another layout */}
      <footer className="w-full fixed bottom-0 px-20 pb-10 flex justify-between items-end z-10">
        {/* TODO: Break description onto three lines like reference */}
        <div className="max-w-96 text-sm flex flex-col gap-2">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            expedita asperiores similique earum voluptatum, quidem quas, omnis
            exercitationem vero harum eaque? !
          </p>
          <a className="cursor-pointer">More about me ---</a>
        </div>
        <div className="flex items-center gap-2">
          <p className="h-14 w-14 bg-primary rounded-full flex items-center justify-center">
            X
          </p>
          <p>Something</p>
        </div>
      </footer>
    </>
  );
}

// mTODO: "More about me" in bottom left
