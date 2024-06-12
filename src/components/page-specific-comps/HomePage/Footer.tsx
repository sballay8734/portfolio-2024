import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

import { socialLinks } from "../../../data/contactData";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="w-full fixed top-0 sm:bottom-0 sm:top-auto px-14 pt-10 sm:pb-10 flex justify-between items-end z-10">
      <div className="max-w-96 text-sm hidden sm:flex flex-col gap-2">
        <p className="flex flex-col text-base-content leading-relaxed pb-1">
          <span>I create software that brings people together</span>
          <span>like a virtual campfire—minus the </span>
          <span>burnt marshmallows.</span>
        </p>
        <Link
          to="/about"
          className="cursor-pointer font-semibold text-primary flex items-center gap-2 hover:text-secondary transition-all duration-200"
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
  );
}
