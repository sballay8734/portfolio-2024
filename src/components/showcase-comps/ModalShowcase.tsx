import { useState } from "react";

import { CustomLocation } from "../../types/showcase";

const locationOptions: CustomLocation[] = [
  "top-left",
  "top-center",
  "top-right",
  "left",
  "center",
  "right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

export default function ModalShowcase() {
  const [location, setLocation] = useState<CustomLocation>("center");

  // !TODO: Need to configure the other options. (top-center, center, and bottom-center are working)
  const classMap = {
    "top-left": "",
    "top-center": "modal-top",
    "top-right": "",
    left: "",
    center: "",
    right: "",
    "bottom-left": "",
    "bottom-center": "modal-bottom",
    "bottom-right": "",
  };

  // TODO: Need to add inputs for title and text
  return (
    <>
      <div className="flex flex-col">
        <h3 className="pl-1 pt-2 pb-3">Location</h3>
        <div className="grid grid-cols-3 w-full gap-2">
          {locationOptions.map((option) => {
            return (
              <button
                className={`btn bg-neutral w-full text-xs ${location === option ? "bg-primary text-primary-content" : ""}`}
                onClick={() => setLocation(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
        <button
          className="btn btn-accent mt-auto"
          onClick={() =>
            (document.getElementById(
              "showcaseModal",
            ) as HTMLDialogElement)!.showModal()
          }
        >
          Show Modal
        </button>
      </div>
      <dialog id="showcaseModal" className={`modal ${classMap[location]}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Placeholder Title</h3>
          <p className="py-4">Placeholder Text</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

// .modal {
//   pointer-events: none;
//   position: fixed;
//   inset: 0px;
//   margin: 0px;
//   display: grid;
//   height: 100%;
//   max-height: none;
//   width: 100%;
//   max-width: none;
//   justify-items: center;
//   padding: 0px;
//   opacity: 0;
//   overscroll-behavior: contain;
//   overscroll-behavior: contain;
//   z-index: 999;
//   background-color: transparent;
//   color: inherit;
//   transition-duration: 200ms;
//   transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
//   transition-property: transform, opacity, visibility;
//   overflow-y: hidden;
// }

// export interface ComponentOptions {
//   options: {
//     location: CustomLocation | null;
//     titleInput: boolean;
//     textInput: boolean;
//     status: Status | null;
//     isLoading: boolean;
//     reqResult: "success" | "fail";
//   };
// }
