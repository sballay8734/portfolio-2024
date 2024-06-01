import { MdArrowOutward } from "react-icons/md";

import { projects } from "../data/projectData";

export default function ProjectsPage() {
  return (
    <section className="flex w-full h-full sm:px-20 pb-10 items-center flex-col gap-10 pt-[112px] overflow-auto px-0">
      <header className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p>Check out some of the projects I'm working on!</p>
      </header>
      <section className="flex flex-wrap w-full items-center justify-center gap-4 flex-grow pt-2">
        {projects.map((project) => {
          return (
            // TODO: Add these border colors and bg-color to theme
            <article
              className="border-[2px] w-64 bg-base-100 border-[#2a313d] rounded-md flex flex-col group overflow-hidden hover:bg-base-300 hover:border-[#162647] transition-colors duration-200"
              key={project.title}
            >
              <header className="relative h-[150px] flex items-center justify-center">
                <img
                  className="absolute rounded-sm overflow-hidden w-full h-full object-cover opacity-50"
                  src={project.imgUrl}
                  alt={`${project.title} image`}
                />
                <div className="flex gap-6 px-3 pt-2 relative z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <a
                    // TODO: Need to add more theme colors for hover stuff vv
                    className="text-[0.75rem] flex items-center text-primary hover:text-[#75d3ff] transition-colors duration-200"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code <MdArrowOutward size={10} />
                  </a>
                  {project.liveDemoUrl && (
                    <a
                      className="text-[0.75rem] flex items-center text-primary hover:text-[#75d3ff] transition-colors duration-200"
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo <MdArrowOutward />
                    </a>
                  )}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-95 opacity-0 transition-opacity duration-200 group-hover:opacity-100 z-0"></div>
              </header>
              <section className="flex flex-col gap-1 px-3 py-2 cursor-default">
                <h2 className="text-sm font-bold group-hover:text-primary text-base-content transition-colors duration-200">
                  {project.title}
                </h2>
                <p className="text-[0.625rem] text-faded group-hover:text-fadedPrimary transition-colors duration-200">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {project.technologies.map((tech) => {
                    return (
                      <span
                        key={tech + project.title}
                        className="inline-block bg-primary-content group-hover:bg-primary/10 rounded-full px-[.4rem] py-[.3rem] text-[0.5rem] text-primary transition-colors duration-200"
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
    </section>
  );
}

// !TODO: Add disclaimer to old projects!

// TODO: If possible, should NOT need hook to call toasts. Just one import of a function/action should be enough

// TODO: Have "Old projects" and "New projects" sections
