import { useState } from "react";

import { skills } from "../data/skillsData.tsx";

type filter = "frontend" | "backend" | "go-tos" | "developing";

export default function SkillsPage() {
  const [activeFilter, setActiveFilter] = useState<filter>("frontend");
  return (
    <div className="flex w-full h-full px-20 items-center">
      <div className="w-full flex flex-col rounded-md p-6 gap-2 bg-base-300 grow h-[500px] shadow-sm border border-1=2 border-base-300">
        <h2 className="font-display text-3xl">SKILLS</h2>
        <div className="w-full flex items-center justify-center join">
          <button
            onClick={() => setActiveFilter("frontend")}
            className={`join-item btn btn-sm rounded-sm ${activeFilter === "frontend" ? "btn-accent" : "btn-neutral text-neutral-content"}`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveFilter("backend")}
            className={`join-item btn btn-sm rounded-sm ${activeFilter === "backend" ? "btn-accent" : "btn-neutral text-neutral-content"}`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveFilter("go-tos")}
            className={`join-item btn btn-sm rounded-sm ${activeFilter === "go-tos" ? "btn-accent" : "btn-neutral text-neutral-content"}`}
          >
            Go-tos
          </button>
          <button
            onClick={() => setActiveFilter("developing")}
            className={`join-item btn btn-sm rounded-sm ${activeFilter === "developing" ? "btn-accent" : "btn-neutral text-neutral-content"}`}
          >
            Developing
          </button>
        </div>
        <div className="divider divider-neutral w-[80%] mx-auto rounded-full"></div>
        <div className="w-full grid grid-cols-2 gap-x-16 gap-y-6">
          {skills.map((skill) => {
            if (skill.category !== activeFilter) return;

            const skillWidth = `${skill.proficiency * 100}%`;

            return (
              <div
                key={skill.title}
                className="skillUI flex items-center w-full gap-4"
              >
                <div className="logo rounded-sm">{skill.icon}</div>
                <div className="flex flex-col w-full gap-1">
                  <h3 className="font-semibold">
                    {skill.title.toLocaleUpperCase()}
                  </h3>
                  <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
                    {/* REMEMBER: Need to use full tailwind classnames */}
                    <div
                      className={`h-full bg-secondary`}
                      style={{ width: skillWidth }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// TODO: Add link to example where a skill is relevant

// mTODO: Have main categories of FE and BE, and an additional category for things daisyUI etc...

// mTODO: Change filter button style (hover should not be so close to active)

// mTODO: Combine buttons
