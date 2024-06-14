import { MdArrowOutward } from "react-icons/md";

import { Project } from "../../../data/projectData";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props): React.JSX.Element {
  return (
    <article
      className="border-[1px] flex flex-col xs:flex-row max-w-[1050px] bg-base-100 border-neutral rounded-md group overflow-hidden sm:hover:bg-base-300 sm:hover:border-primary transition-colors duration-200"
      key={project.title}
    >
      <header className="relative min-h-[150px] xs:w-[150px] flex xs:flex-[1_1_0%] items-center justify-center xs:min-w-[150px]">
        <img
          className="absolute rounded-sm overflow-hidden w-full h-full object-cover object-top opacity-80"
          src={project.imgUrl}
          alt={`${project.title} image`}
        />
        <div className="flex gap-6 px-3 pt-2 relative z-10 opacity-0 transition-opacity duration-200 sm:group-hover:opacity-100">
          <a
            className="text-sm flex items-center text-primary hover:text-primary/70 transition-colors duration-200"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            Code <MdArrowOutward size={10} />
          </a>
          {project.liveDemoUrl && (
            <a
              className="text-sm flex items-center text-primary hover:text-primary/70 transition-colors duration-200"
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Demo <MdArrowOutward />
            </a>
          )}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 transition-opacity duration-200 sm:group-hover:opacity-100 z-0"></div>
      </header>
      <section className="flex flex-col gap-1 px-3 py-2 cursor-default bg-base-100 sm:group-hover:bg-base-200 transition-colors duration-200 flex-[3_3_0%]">
        <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 xs:gap-0">
          <h2 className="text-lg font-bold sm:group-hover:text-primary text-base-content transition-colors duration-200">
            {project.title}
          </h2>
          <a
            className="flex items-center text-link underline hover:text-primary/70 transition-colors duration-200 md:hidden pb-1 xs:pb-0"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Code <MdArrowOutward size={12} />
          </a>
        </div>
        <p className="text-sm text-faded transition-colors duration-200">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 pt-2 mt-auto">
          {project.technologies.map((tech) => {
            return (
              <span
                key={tech + project.title}
                className="inline-block bg-neutral sm:group-hover:bg-primary sm:group-hover:text-primary-content rounded-full px-[.7rem] py-[.4rem] text-xs text-neutral-content transition-colors duration-200"
              >
                {tech}
              </span>
            );
          })}
        </div>
      </section>
    </article>
  );
}
