type technology =
  | "React"
  | "React Native"
  | "Redux Toolkit"
  | "TypeScript"
  | "Express"
  | "Node"
  | "MongoDB"
  | "Mongoose"
  | "Tailwind"
  | "Supabase"
  | "daisyUI"
  | "React Router"
  | "Odds Api"
  | "Firebase"
  | "React Hook Form"
  | "Expo Router"
  | "Lottie"
  | "Lyrics API"
  | "Expo";

type Project = {
  title: string;
  description: string;
  technologies: technology[];
  githubUrl: string;
  liveDemoUrl: string | null;
  imgUrl: string;
  status: "Old" | "New" | "In Development";
};

// mTODO: Split tech into "main" and "secondary"?

export const projects: Project[] = [
  {
    title: "FF Companion (Web App)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "Redux Toolkit",
      "Express",
      "Mongoose",
      "Odds Api",
      "Firebase",
    ],
    githubUrl: "https://github.com/sballay8734/mern-league-website",
    liveDemoUrl: "https://www.lloea.com/",
    imgUrl: "/placeholder.png",
    status: "Old",
  },
  {
    title: "Rap or Crap?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "React Router",
      "Redux Toolkit",
      "Express",
      "Mongoose",
    ],
    githubUrl: "https://github.com/sballay8734/rap-or-crap",
    liveDemoUrl: "https://rap-or-crap.onrender.com",
    imgUrl: "/placeholder.png",
    status: "Old",
  },
  {
    title: "FF Companion (Native App)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "Redux Toolkit",
      "Supabase",
    ],
    githubUrl: "https://github.com/sballay8734/ff-companion-app",
    liveDemoUrl: null,
    imgUrl: "/placeholder.png",
    status: "In Development",
  },
  {
    title: "Tac Shooter HQ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "React Router",
      "Redux Toolkit",
      "Supabase",
      "daisyUI",
    ],
    githubUrl: "https://github.com/sballay8734/tac-shooter-hq",
    liveDemoUrl: null,
    imgUrl: "/placeholder.png",
    status: "In Development",
  },
  {
    title: "Name Nodes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "Redux Toolkit",
      "Supabase",
      "Lottie",
    ],
    githubUrl: "https://www.google.com/search/q=nodes",
    liveDemoUrl: null,
    imgUrl: "/placeholder.png",
    status: "In Development",
  },
  {
    title: "Lyric Lens",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "React Router",
      "Redux Toolkit",
      "Supabase",
      "Lyrics API",
      "daisyUI",
    ],
    githubUrl: "https://www.google.com/search/q=lyrics",
    liveDemoUrl: null,
    imgUrl: "/placeholder.png",
    status: "In Development",
  },
];
