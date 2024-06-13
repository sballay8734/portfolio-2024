interface PageHeaderProps {
  // headerShown: boolean; Don't need this, just don't import Header
  pageKey: PageKey;
}

// pages without headers are not included
export type PageKey = "projects" | "contact" | "showcase"; // | "about";

const pageMap = {
  projects: {
    title: "Projects",
    description: "Check out some of the projects I'm working on!",
  },
  contact: {
    title: "Contact Me",
    description: "Want to react out? Just send me a message!",
  },
  showcase: {
    title: "Component Showcase",
    description: "Check out some of the components I use often!",
  },
};

export default function PageHeader({
  pageKey,
}: PageHeaderProps): React.JSX.Element {
  const pageTitle = pageMap[pageKey].title;
  const pageDescription = pageMap[pageKey].description;
  return (
    <header className="flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold">{pageTitle}</h1>
      <p className="text-center px-8">{pageDescription}</p>
    </header>
  );
}
