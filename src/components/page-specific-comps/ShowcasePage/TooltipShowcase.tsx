import { useState } from "react";

type TooltipPosition = "top" | "left" | "right" | "bottom";

const TooltipOptions: TooltipPosition[] = ["top", "left", "right", "bottom"];

const classMap = {
  top: "tooltip-top",
  left: "tooltip-left",
  right: "tooltip-right",
  bottom: "tooltip-bottom",
};

export default function TooltipShowcase(): React.JSX.Element {
  const [position, setPosition] = useState<TooltipPosition>("top");

  const gridPlacementMap = {
    top: "col-start-2 row-start-1",
    left: "col-start-1 row-start-2",
    right: "col-start-3 row-start-2",
    bottom: "col-start-2 row-start-3",
  };

  return (
    <div className="flex flex-col w-full">
      {/* Tooltip Position */}
      <div className="grid grid-cols-3 grid-rows-3 w-full gap-4 h-full items-center">
        {TooltipOptions.map((option) => {
          return (
            <button
              key={option}
              className={`btn opacity-30 group-hover:opacity-100 text-neutral-content text-xs hover:bg-primary hover:text-primary-content transition-colors duration-200 ${position === option ? "bg-primary text-primary-content" : "bg-neutral"} ${gridPlacementMap[option]}`}
              onClick={() => setPosition(option)}
            >
              {option}
            </button>
          );
        })}
        <div
          className={`tooltip w-full self-center col-start-2 row-start-2 ${classMap[position]}`}
          data-tip="Peekaboo!"
        >
          <button className="btn border-[1px] border-base-300 special-btn opacity-30 group-hover:opacity-100 text-black font-bold hover:group-hover:opacity-90 transition-opacity duration-200 cursor-default pointer-events-none w-full">
            Hover me!
          </button>
        </div>
      </div>
    </div>
  );
}
