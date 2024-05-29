import { socialLinks } from "../data/contactData";

export default function Index() {
  return (
    <main className="flex items-center justify-center flex-1 h-svh w-full px-8 relative">
      <div className="absolute hero"></div>
      <h1 className="flex flex-col items-center flex-1">
        <span className="text-8xl font-semibold">Humanized</span>
        <span className="text-8xl font-thin text-primary">Design.</span>
      </h1>
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
        <div className="mt-auto">
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

// mTODO: "More about me" in bottom left
