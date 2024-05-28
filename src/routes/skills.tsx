import { useState } from "react";

import { skills } from "../data/skillsData.tsx";

type filter = "frontend" | "backend" | "go-tos" | "developing";

export default function SkillsPage() {
  const [activeFilter, setActiveFilter] = useState<filter>("frontend");
  return (
    <div className="flex w-full h-full border-4 border-green-500 px-20 items-center">
      <div className="w-full flex flex-col rounded-md p-6 gap-8 bg-neutral grow h-[500px]">
        <h2>SKILLS</h2>
        <div className="btnFilter w-full flex items-center justify-center gap-2">
          <button
            onClick={() => setActiveFilter("frontend")}
            className={`btn btn-primary btn-sm rounded-sm ${activeFilter === "frontend" ? "" : "btn-outline"}`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveFilter("backend")}
            className={`btn btn-primary btn-sm rounded-sm ${activeFilter === "backend" ? "" : "btn-outline"}`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveFilter("go-tos")}
            className={`btn btn-primary btn-sm rounded-sm ${activeFilter === "go-tos" ? "" : "btn-outline"}`}
          >
            Go-tos
          </button>
          <button
            onClick={() => setActiveFilter("developing")}
            className={`btn btn-primary btn-sm rounded-sm ${activeFilter === "developing" ? "" : "btn-outline"}`}
          >
            Developing
          </button>
        </div>
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
                  <div className="w-full bg-gray-50 h-2 rounded-full overflow-hidden">
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
