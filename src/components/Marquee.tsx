import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMongoose, SiRedux } from "react-icons/si";

// !TODO: Change text color on theme change

// REMEMBER: Must be full tailwind class
const textOpacity = "opacity-20";
const iconOpactiy = "opacity-30";

interface MarqueeProps {
  type: "home" | "other";
}

export default function Marquee({ type }: MarqueeProps) {
  const positionClasses =
    type === "home" ? "justify-center gap-96" : "justify-between";

  return (
    <div
      className={`absolute hidden sm:flex sm:flex-col w-full h-full ${positionClasses}`}
    >
      {/* FRONTEND */}
      <div className="frontend flex flex-col w-screen">
        {/* TOP */}
        <div className={`marquee ${textOpacity}`}>
          <ul className="marquee__content">
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
          </ul>
          {/* <!-- Mirrors the content above --> */}
          <ul className="marquee__content" aria-hidden="true">
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
          </ul>
        </div>
        {/* ICONS */}
        <div className={`marquee3`}>
          <ul className="marquee__icons">
            <li>
              <FaHtml5
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#eb6228"
              />
            </li>
            <li>
              <FaCss3Alt
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#32ace0"
              />
            </li>
            <li>
              <BiLogoTypescript
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#3075c1"
              />
            </li>
            <li>
              <SiRedux
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#7b51bc"
              />
            </li>
            <li>
              <FaReact
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#65dbfa"
              />
            </li>
            <li>
              <RiTailwindCssFill
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#4fb0b7"
              />
            </li>
            <li>
              <img
                className={`h-[40px] w-[40px] ${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                src="react-native.svg"
                alt=""
              />
            </li>
          </ul>
          {/* <!-- Mirrors the content above --> */}
          <ul className="marquee__icons" aria-hidden="true">
            <li>
              <FaHtml5
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#eb6228"
              />
            </li>
            <li>
              <FaCss3Alt
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#32ace0"
              />
            </li>
            <li>
              <BiLogoTypescript
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#3075c1"
              />
            </li>
            <li>
              <SiRedux
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#7b51bc"
              />
            </li>
            <li>
              <FaReact
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#65dbfa"
              />
            </li>
            <li>
              <RiTailwindCssFill
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#4fb0b7"
              />
            </li>
            <li>
              <img
                className={`h-[40px] w-[40px] ${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                src="react-native.svg"
                alt=""
              />
            </li>
          </ul>
        </div>
        {/* BOTTOM */}
        <div className={`marquee2 ${textOpacity}`}>
          <ul className="marquee__reverse">
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
          </ul>
          <ul className="marquee__reverse" aria-hidden="true">
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
            <li>FRONTEND</li>
          </ul>
        </div>
      </div>
      {/* BACKEND */}
      <div className="backend flex flex-col w-screen">
        {/* TOP */}
        <div className={`marquee ${textOpacity}`}>
          <ul className="marquee__reverse">
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
          </ul>
          {/* <!-- Mirrors the content above --> */}
          <ul className="marquee__reverse" aria-hidden="true">
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
          </ul>
        </div>
        {/* ICONS */}
        <div className={`marquee3`}>
          <ul className="marquee__icons__reverse">
            <li>
              <SiExpress
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#677568"
              />
            </li>
            <li>
              <FaNodeJs
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#8ccd34"
              />
            </li>
            <li>
              <SiMongodb
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#55ad48"
              />
            </li>
            <li>
              <SiMongoose
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#b82827"
              />
            </li>
            <li>
              <RiSupabaseFill
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#44d093"
              />
            </li>
          </ul>
          {/* <!-- Mirrors the content above --> */}
          <ul className="marquee__icons__reverse" aria-hidden="true">
            <li>
              <SiExpress
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#677568"
              />
            </li>
            <li>
              <FaNodeJs
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#8ccd34"
              />
            </li>
            <li>
              <SiMongodb
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#55ad48"
              />
            </li>
            <li>
              <SiMongoose
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#b82827"
              />
            </li>
            <li>
              <RiSupabaseFill
                className={`${iconOpactiy} hover:opacity-100 transition-opacity duration-200`}
                size={40}
                color="#44d093"
              />
            </li>
          </ul>
        </div>
        {/* BOTTOM */}
        <div className={`marquee2 ${textOpacity}`}>
          <ul className="marquee__content">
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
          </ul>
          <ul className="marquee__content" aria-hidden="true">
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
            <li>BACKEND</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
