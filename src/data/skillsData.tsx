import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  RiTailwindCssFill,
  RiSupabaseFill,
  RiNextjsFill,
} from "react-icons/ri";
import {
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiDaisyui,
  SiReactrouter,
  SiSupabase,
  SiExpo,
  SiRemix,
} from "react-icons/si";

type skill = {
  category: "frontend" | "backend" | "go-tos" | "developing";
  title: string;
  icon: React.ReactNode;
  proficiency: number; // percentage (0.7 = 70%)
};

export const skills: skill[] = [
  // Frontend
  {
    category: "frontend",
    title: "HTML 5",
    icon: <FaHtml5 size={40} color="#eb6228" />,
    proficiency: 0.7,
  },
  {
    category: "frontend",
    title: "CSS 3",
    icon: <FaCss3Alt size={40} color="#32ace0" />,
    proficiency: 0.72,
  },
  {
    category: "frontend",
    title: "TypeScript",
    icon: <BiLogoTypescript size={40} color="#3075c1" />,
    proficiency: 0.82,
  },
  {
    category: "frontend",
    title: "Redux Toolkit",
    icon: <SiRedux size={40} color="#7b51bc" />,
    proficiency: 0.8,
  },
  {
    category: "frontend",
    title: "React",
    icon: <FaReact size={40} color="#65dbfa" />,
    proficiency: 0.9,
  },
  {
    category: "frontend",
    title: "React Native",
    // mTODO: Get ReactNative logo
    icon: <FaReact size={40} color="#65dbfa" />,
    proficiency: 0.75,
  },
  {
    category: "frontend",
    title: "Tailwind",
    icon: <RiTailwindCssFill size={40} color="#4fb0b7" />,
    proficiency: 0.84,
  },
  // Backend
  {
    category: "backend",
    title: "Express",
    icon: <SiExpress size={40} color="#677568" />,
    proficiency: 0.72,
  },
  {
    category: "backend",
    title: "Node JS",
    icon: <FaNodeJs size={40} color="#8ccd34" />,
    proficiency: 0.7,
  },
  {
    category: "backend",
    title: "MongoDB",
    icon: <SiMongodb size={40} color="#55ad48" />,
    proficiency: 0.81,
  },
  {
    category: "backend",
    title: "Mongoose",
    icon: <SiMongoose size={40} color="#b82827" />,
    proficiency: 0.79,
  },
  {
    category: "backend",
    title: "Supabase",
    icon: <RiSupabaseFill size={40} color="#44d093" />,
    proficiency: 0.6,
  },
  // Go-tos
  {
    category: "go-tos",
    title: "daisyUI",
    icon: <SiDaisyui size={40} color="#ff9906" />,
    proficiency: 0.9,
  },
  {
    category: "go-tos",
    title: "React Router",
    icon: <SiReactrouter size={40} color="#f44250" />,
    proficiency: 0.9,
  },
  {
    category: "go-tos",
    title: "Expo",
    icon: <SiExpo size={40} color="#ecedee" />,
    proficiency: 0.8,
  },
  {
    category: "go-tos",
    title: "Supabase",
    icon: <SiSupabase size={40} color="#3bc98b" />,
    proficiency: 0.6,
  },
  // Developing
  {
    category: "developing",
    title: "Remix",
    icon: <SiRemix size={40} color="" />,
    proficiency: 0.4,
  },
  {
    category: "developing",
    title: "Next JS",
    icon: <RiNextjsFill size={40} color="" />,
    proficiency: 0.3,
  },
];

// TO ADD:
// mTODO: Vite, WAVE (Dev tool), AXE (Dev tool),
