import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

import Marquee from "../components/Marquee";
import { socialLinks } from "../data/contactData";

export default function Index() {
  return (
    <main className="flex items-center justify-center flex-1 h-svh w-full px-8 relative">
      <div className="absolute hero"></div>
      <h1 className="flex flex-col items-center flex-1">
        <span className="text-6xl xs:text-8xl font-semibold">Humanized</span>
        <span className="text-6xl xs:text-8xl font-thin text-primary">
          Design.
        </span>
      </h1>
      <Marquee type="home" />
      <footer className="w-full fixed top-0 sm:bottom-0 px-14 pt-10 sm:pb-10 flex justify-between items-end z-10">
        {/* TODO: Break description onto three lines like reference */}
        <div className="max-w-96 text-sm hidden sm:flex flex-col gap-2">
          <p className="flex flex-col text-base-content leading-relaxed pb-1">
            <span>I create software that brings people together</span>
            <span>like a virtual campfire—minus the </span>
            <span>burnt marshmallows.</span>
          </p>
          <Link
            to="/about"
            className="cursor-pointer font-semibold text-primary flex items-center gap-2 hover:text-secondary transition-all duration-100"
          >
            More about me{" "}
            <LiaLongArrowAltRightSolid
              size={20}
              className="mt-[3px] animate-pulse"
            />
          </Link>
        </div>
        <div className="mx-auto sm:mt-auto sm:mx-0">
          <ul className="flex gap-4">
            {socialLinks.map((link) => {
              return (
                <a
                  key={link.name}
                  className="text-base-content hover:text-primary transition-all duration-200"
                  href={`${link.url}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              );
            })}
          </ul>
        </div>
      </footer>
    </main>
  );
}

// TODO: It should be more clear which theme button is active

// TODO: Add "featured" or something to component showcase tab

// TODO: Replace "some text" on right
