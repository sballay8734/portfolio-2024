import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";

import { projects } from "../data/projectData";

type Filter = "Legacy" | "In Development" | "New";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("In Development");
  const [modalSeen, setModalSeen] = useState<boolean>(false);

  // TODO: This function works be desparately needs refactor
  // TODO: If they choose NOT to view legacy, handle localstorage item should not be set to true
  function handleFilter(modalId: string, filter: Filter) {
    const elementToClose = document.getElementById(
      modalId,
    ) as HTMLDialogElement;

    if (!elementToClose) return;

    if (modalSeen === false) {
      elementToClose.showModal();
    }

    setModalSeen(true);
    localStorage.setItem("warnModalSeen", "true");

    setFilter(filter);

    if (filter === "In Development") {
      elementToClose.close();
    }
  }

  useEffect(() => {
    const modalSeen = localStorage.getItem("warnModalSeen");

    if (modalSeen === "true") {
      setModalSeen(true);
    }
  }, []);

  return (
    <section className="flex w-full h-full sm:px-20 pb-10 items-center flex-col gap-10 pt-[112px] overflow-auto px-0">
      <header className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p>Check out some of the projects I'm working on!</p>
      </header>
      <div role="tablist" className="tabs tabs-boxed bg-neutral">
        <a
          role="tab"
          className={`tab ${filter === "In Development" ? "tab-active" : "text-neutral-content"} transition-colors duration-200`}
          onClick={() => handleFilter("warnLegacy", "In Development")}
        >
          In Development
        </a>
        <a
          role="tab"
          className={`tab flex gap-2 ${filter === "Legacy" ? "tab-active" : " text-neutral-content"} transition-colors duration-200`}
          onClick={() => handleFilter("warnLegacy", "Legacy")}
        >
          Legacy
        </a>
      </div>
      <section className="flex flex-wrap w-full items-top justify-center gap-4 pt-2">
        {projects.map((project) => {
          if (project.status !== filter) return;

          return (
            // TODO: Add these border colors and bg-color to theme
            <article
              className="border-[1px] w-64 bg-base-100 border-neutral rounded-md flex flex-col group overflow-hidden hover:bg-base-300 hover:border-primary transition-colors duration-200"
              key={project.title}
            >
              <header className="relative h-[150px] flex items-center justify-center">
                <img
                  className="absolute rounded-sm overflow-hidden w-full h-full object-cover opacity-60"
                  src={project.imgUrl}
                  alt={`${project.title} image`}
                />
                <div className="flex gap-6 px-3 pt-2 relative z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <a
                    // TODO: Need to add more theme colors for hover stuff vv
                    className="text-[0.75rem] flex items-center text-primary hover:text-primary/70 transition-colors duration-200"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code <MdArrowOutward size={10} />
                  </a>
                  {project.liveDemoUrl && (
                    <a
                      className="text-[0.75rem] flex items-center text-primary hover:text-primary/70 transition-colors duration-200"
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo <MdArrowOutward />
                    </a>
                  )}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 transition-opacity duration-200 group-hover:opacity-100 z-0"></div>
              </header>
              <section className="flex flex-col gap-1 px-3 py-2 cursor-default">
                <h2 className="text-sm font-bold group-hover:text-primary text-base-content transition-colors duration-200">
                  {project.title}
                </h2>
                <p className="text-[0.625rem] text-faded group-hover:text-primary/60 transition-colors duration-200">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 pt-2">
                  {project.technologies.map((tech) => {
                    return (
                      <span
                        key={tech + project.title}
                        className="inline-block bg-neutral group-hover:bg-primary group-hover:text-primary-content rounded-full px-[.4rem] py-[.3rem] text-[0.5rem] text-neutral-content transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </section>
            </article>
          );
        })}
      </section>
      <dialog id="warnLegacy" className="modal border-none outline-none">
        <div className="modal-box flex flex-col gap-4">
          <h3 className="font-bold text-3xl text-warning flex items-center justify-between">
            WARNING! <IoIosWarning size={30} />
          </h3>
          <p className="text-sm">
            Exposure to code from my early projects may cause severe eye strain,
            mental exhaustion, and migranes. These projects were created during
            a learning phase where the focus was on building functional software
            rather than adhering to best practices and writing clean,
            maintainable code. They reflect my journey of breaking free from
            tutorial-hell and tackling larger, real-world challenges.
          </p>
          <p className="text-sm">
            The code contains spaghetti logic, inefficient algorithms,{" "}
            <code className="bg-base-300 text-xs p-1 rounded-md">divs</code>{" "}
            everywhere, massive components, suboptimal design patterns and many
            other issues. Proceed with caution, as these projects serve as a
            nostalgic reminder of my growth as a developer. Examine at your own
            risk!
          </p>
          <p className="text-warning font-bold text-lg text-center bg-base-200 py-2 px-10 rounded-md">
            View legacy projects?
          </p>
          <div className="flex justify-between">
            <button
              className="btn"
              onClick={() => handleFilter("warnLegacy", "In Development")}
            >
              No. I like my sanity.
            </button>
            <form method="dialog">
              <button className="btn btn-warning">
                Yes. I've got Advil ready.
              </button>
            </form>
          </div>
        </div>
        <form
          method="dialog"
          className="modal-backdrop border-none outline-none"
        >
          <button className="border-none outline-none">close</button>
        </form>
      </dialog>
    </section>
  );
}

// !TODO: Add disclaimer to old projects!

// !TODO: No way to view project links on mobile (can't hover on mobile)

// TODO: Style modal better

// TODO: Project p text hard to see in light mode

// TODO: If possible, should NOT need hook to call toasts. Just one import of a function/action should be enough

// TODO: Have "Old projects" and "New projects" sections

/// Now The dialog that pops open gives two options after being asked "Are you Sure". I want one to say something like "Yes I have Advil ready". And the other to say something like, "No thanks, I like my sanity". Can you give some more options?
