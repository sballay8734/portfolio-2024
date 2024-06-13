export type URL = "/" | "/projects" | "/contact" | "/showcase" | "/about";

type Route = {
  url: URL;
  text: string;
  new: boolean;
  inDropdown: boolean;
};

export const routes: Route[] = [
  {
    url: "/",
    text: "Home",
    new: false,
    inDropdown: false,
  },
  {
    url: "/projects",
    text: "Projects",
    new: false,
    inDropdown: false,
  },
  {
    url: "/contact",
    text: "Get In Touch",
    new: false,
    inDropdown: false,
  },
  {
    url: "/showcase",
    text: "Component Showcase",
    new: true,
    inDropdown: true,
  },
  {
    url: "/about",
    text: "More About me",
    new: false,
    inDropdown: true,
  },
];
