type Route = {
  url: string;
  text: string;
  new: boolean;
};

export const routes: Route[] = [
  {
    url: "/",
    text: "Home",
    new: false,
  },
  {
    url: "/projects",
    text: "Projects",
    new: false,
  },
  {
    url: "/contact",
    text: "Get In Touch",
    new: false,
  },
  {
    url: "/showcase",
    text: "Component Showcase",
    new: true,
  },
  {
    url: "/about",
    text: "More About me",
    new: false,
  },
];
