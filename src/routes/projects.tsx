import { useEffect, useState } from "react";

import ProjectCard from "../components/page-specific-comps/ProjectsPage/ProjectCard";
import TabFilter from "../components/page-specific-comps/ProjectsPage/TabFilter";
import WarningModal from "../components/page-specific-comps/ProjectsPage/WarningModal";
import PageHeader from "../components/shared-comps/PageHeader";
import { projects } from "../data/projectData";

export type Filter = "Legacy" | "In Development" | "New";

export default function ProjectsPage(): React.JSX.Element {
  const [filter, setFilter] = useState<Filter>("In Development");
  const [modalSeen, setModalSeen] = useState<boolean>(false);
  const [modalIsShown, setModalIsShown] = useState<boolean>(false);

  function handleFilter(filter: Filter) {
    if (modalSeen || filter === "In Development") {
      setFilter(filter);
      if (filter === "In Development") {
        setModalIsShown(false);
      }
    } else if (filter === "Legacy") {
      if (!modalSeen) {
        setModalIsShown(true);
      } else {
        setFilter(filter);
      }
    }
  }

  // Show warning everytime until they accept
  function handleAccept() {
    if (!modalSeen) {
      localStorage.setItem("warnModalSeen", "true");
      setModalIsShown(false);
      setModalSeen(true);
    }
    setFilter("Legacy");
  }

  useEffect(() => {
    const cacheModalSeen = localStorage.getItem("warnModalSeen");

    if (cacheModalSeen === "true") {
      setModalSeen(true);
    }
  }, []);

  return (
    <section className="flex w-full h-full items-center flex-col gap-10 overflow-auto px-10 py-12 sm:px-20">
      {/* HEADER */}
      <PageHeader pageKey="projects" />

      {/* TAB FILTER */}
      <TabFilter filter={filter} handleFilter={handleFilter} />

      {/* PROJECTS MAP */}
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-stretch gap-4 pt-2">
        {projects.map((project) => {
          if (project.status !== filter) return null;

          return <ProjectCard key={project.title} project={project} />;
        })}
      </section>

      {/* WARNING MODAL */}
      <WarningModal
        modalIsShown={modalIsShown}
        handleFilter={handleFilter}
        handleAccept={handleAccept}
      />
    </section>
  );
}

// !TODO: No way to view project links on mobile (can't hover on mobile)

// TODO: Need to layout project card vertically for sm and below

// mTODO: Style modal better
