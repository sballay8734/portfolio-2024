import { useState } from "react";

type TooltipPosition = "top" | "left" | "right" | "bottom";

const TooltipOptions: TooltipPosition[] = ["top", "left", "right", "bottom"];

const classMap = {
  top: "tooltip-top",
  left: "tooltip-left",
  right: "tooltip-right",
  bottom: "tooltip-bottom",
};

// !TODO: No hover on mobile

export default function TooltipShowcase() {
  const [position, setPosition] = useState<TooltipPosition>("top");

  return (
    <div className="flex flex-col w-full">
      {/* Tooltip Position */}
      <h3 className="pl-1 pt-2 pb-1 font-semibold">Position</h3>
      <div className="grid grid-cols-2 w-full gap-2">
        {TooltipOptions.map((option) => {
          return (
            <button
              key={option}
              className={`btn bg-neutral text-neutral-content text-xs hover:bg-primary hover:text-primary-content transition-colors duration-200 ${position === option ? "bg-primary text-primary-content" : ""}`}
              onClick={() => setPosition(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
      <div
        className={`tooltip my-12 w-fit self-center ${classMap[position]}`}
        data-tip="Peekaboo!"
      >
        <button className="btn border-[1px] border-primary special-btn opacity-30 group-hover:opacity-60 text-black font-bold hover:group-hover:opacity-100 transition-opacity duration-200">
          Hover me!
        </button>
      </div>
    </div>
  );
}
