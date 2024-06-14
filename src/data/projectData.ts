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

export type Project = {
  title: string;
  description: string;
  technologies: technology[];
  githubUrl: string;
  liveDemoUrl: string | null;
  imgUrl: string;
  status: "Legacy" | "New" | "In Development";
};

export const projects: Project[] = [
  {
    title: "FF Companion (Web App)",
    description:
      "For leagues that maybe take fantasy football a little too seriously. This web app acts as an extension to any fantasy football league by providing advanced stats, custom modules, advanced payout stuctures, the ability to make bets with your league mates, and much more. NOTE: This project is no longer being maintained as all development time is being devoted to the native app.",
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
    imgUrl: "/leagueWebsite.png",
    status: "Legacy",
  },
  {
    title: "Rap or Crap?",
    description:
      "A game that might just convince you that you've got what it takes to be a rapper. Inspired by long car rides with a bunch of goofy kids just trying to kill some time. The game is simple. You will be given a lyric. Then all you need to do is decide if it's real rap, or made up by a user. Good luck!",
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
    imgUrl: "/rapOrCrap.png",
    status: "Legacy",
  },
  {
    title: "FF Companion (Native App)",
    description:
      "The official successor to the Web App (see legacy projects), originally designed specifically for my group of friends. We play fantasy football to keep in touch. Before the web app, we mainly talked during football season. Now, our chat is active all year round, in large part due to the features provided in the app. My hope is that this app can enhance the bonds of other friend groups, just as it has done for mine.",
    technologies: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "Redux Toolkit",
      "Supabase",
    ],
    githubUrl: "https://github.com/sballay8734/ff-companion-app",
    liveDemoUrl: null,
    imgUrl: "/inProgress.png",
    status: "In Development",
  },
  {
    title: "Name Nodes",
    description:
      "A decade ago, I had a memorable encounter with the CEO of Starwood Hotels, my employer at the time. Despite the company's vast size, he greeted me by name, even though we had never met. Inspired by this, I am developing an app that will help users effortlessly keep track of the names and connections of people they meet. The app will function as a network of nodes, with each person serving as a central node connected to branches representing their various relationships, such as family, friends, and even friends of friends.",
    technologies: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "Redux Toolkit",
      "Supabase",
      "Lottie",
    ],
    githubUrl: "https://github.com/sballay8734/name-nodes",
    liveDemoUrl: null,
    imgUrl: "/forceGraph.png",
    status: "In Development",
  },
  {
    title: "Lyric Lens",
    description:
      "An app that allows users to quickly search for a song and filter its lyrics based on their preferences. By simply entering the name of the song and selecting the words they want to exclude, users can instantly see if the song contains any of those words. Lyric Lens aims to provide a convenient tool for anyone who wants to make informed decisions about the music they (or their kids) listen to, without the need to manually review each song's lyrics.",
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
    githubUrl: "https://github.com/sballay8734/lyric-lens",
    liveDemoUrl: null,
    imgUrl: "/inProgress.png",
    status: "In Development",
  },
  // {
  //   title: "Tac Shooter HQ",
  //   description: "A web app designed to...",
  //   technologies: [
  //     "React",
  //     "TypeScript",
  //     "Tailwind",
  //     "React Router",
  //     "Redux Toolkit",
  //     "Supabase",
  //     "daisyUI",
  //   ],
  //   githubUrl: "https://github.com/sballay8734/tac-shooter-hq",
  //   liveDemoUrl: null,
  //   imgUrl: "/placeholder.png",
  //   status: "In Development",
  // },
];
