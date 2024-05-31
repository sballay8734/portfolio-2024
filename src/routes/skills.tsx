import { useState } from "react";

import { skills } from "../data/skillsData.tsx";

type filter = "frontend" | "backend" | "go-tos" | "developing";

export default function SkillsPage() {
  const [activeFilter, setActiveFilter] = useState<filter>("frontend");
  return (
    <div className="flex w-full h-full px-20 pb-10 items-center flex-col gap-10 pt-[112px] max-w-[1200px]">
      <header className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold">Skills</h1>
        <p>Check out what I know, what I like, and what I'm learning!</p>
      </header>
      {/* !TODO: Why is bg-neutral not working for light here? vvvvvv */}
      {/* NOTE: IT'S THE CUPCAKE THEME NEUTRAL COLOR */}
      <div className="w-full flex flex-col rounded-xl p-6 gap-2 bg-neutral grow h-content shadow-sm">
        <h2 className="font-display text-3xl">SKILLS</h2>
        <div className="w-full flex items-center justify-center join">
          <button
            onClick={() => setActiveFilter("frontend")}
            className={`join-item btn btn-md px-8 rounded-sm ${activeFilter === "frontend" ? "btn-accent" : "btn-neutral-content text-neutral-content"}`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveFilter("backend")}
            className={`join-item btn btn-md px-8 rounded-sm ${activeFilter === "backend" ? "btn-accent" : "btn-neutral-content text-neutral-content"}`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveFilter("go-tos")}
            className={`join-item btn btn-md px-8 rounded-sm ${activeFilter === "go-tos" ? "btn-accent" : "btn-neutral-content text-neutral-content"}`}
          >
            Go-tos
          </button>
          <button
            onClick={() => setActiveFilter("developing")}
            className={`join-item btn btn-md px-8 rounded-sm ${activeFilter === "developing" ? "btn-accent" : "btn-neutral-content text-neutral-content"}`}
          >
            Developing
          </button>
        </div>
        <div className="divider divider-neutral-content w-[80%] mx-auto rounded-full"></div>
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
                  <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden border-[1px] border-neutral-content">
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
