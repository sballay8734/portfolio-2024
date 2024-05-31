import { projects } from "../data/projectData";

export default function ProjectsPage() {
  return (
    <div className="flex w-full h-full px-20 pb-10 items-center flex-col gap-10 pt-[112px] max-w-[1200px] cursor-default">
      <header className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p>Check out some of the projects I'm working on!</p>
      </header>
      <section className="flex flex-wrap border-[1px] border-red-300 w-full items-center justify-center gap-4 flex-grow py-2">
        {projects.map((project) => {
          return (
            <article
              className="w-60 border-[1px] border-red-500 rounded-md p-2 flex flex-col gap-2 group"
              key={project.title}
            >
              <header className="relative h-[150px]">
                <img
                  className="absolute -z-10 rounded-sm overflow-hidden w-full h-full object-cover"
                  src={project.imgUrl}
                  alt={`${project.title} image`}
                />
                <div className="flex justify-between">
                  <a className="text-xs" href={project.githubUrl}>
                    View Code -
                  </a>
                  {project.liveDemoUrl && (
                    <a className="text-xs" href={project.liveDemoUrl}>
                      Live Demo -
                    </a>
                  )}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </header>
              <section className="flex flex-col gap-2">
                <h2 className="text-sm">{project.title}</h2>
                <p className="text-xs">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => {
                    return (
                      <span
                        key={tech + project.title}
                        className="inline-block bg-gray-200 rounded-full px-2 py-1 text-[6px] text-gray-700"
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
    </div>
  );
}

// !TODO: Add disclaimer to old projects!

// TODO: If possible, should NOT need hook to call toasts. Just one import of a function/action should be enough

// TODO: Have "Old projects" and "New projects" sections
