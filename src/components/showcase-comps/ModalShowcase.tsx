import { useState } from "react";

type ModalLocation = "top" | "center" | "bottom";

const ModalOptions: ModalLocation[] = ["top", "center", "bottom"];

const defaultHeader = "This is a header.";
const defaultContent = "This is some content.";

export default function ModalShowcase() {
  const [location, setLocation] = useState<ModalLocation>("center");
  const [header, setHeader] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const classMap = {
    top: "modal-top",
    center: "",
    bottom: "modal-bottom",
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <h3 className="pl-1 pt-2 pb-1 font-semibold">Position</h3>
        <div className="flex flex-wrap w-full gap-2">
          {ModalOptions.map((option) => {
            return (
              <button
                key={option}
                className={`btn bg-neutral text-neutral-content text-xs flex-1 hover:bg-primary hover:text-primary-content transition-colors duration-200 ${location === option ? "bg-primary text-primary-content" : ""}`}
                onClick={() => setLocation(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
        {/* Modal Header */}
        <h3 className="pl-1 pt-2 pb-1 font-semibold">Header</h3>
        <input
          type="text"
          placeholder="Header"
          className="input input-bordered w-full placeholder:text-neutral-content/30"
          maxLength={25}
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
        {/* Modal Content */}
        <h3 className="pl-1 pt-2 pb-1 font-semibold">Content</h3>
        <input
          type="text"
          placeholder="Content"
          className="input input-bordered w-full placeholder:text-neutral-content/30"
          maxLength={500}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          className={`btn bg-neutral/30 text-neutral mt-4 xs:ml-auto xs:px-16 group-hover:btn-secondary group-hover:bg-secondary group-hover:text-secondary-content`}
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
          <h3 className="font-bold text-lg">
            {header !== "" ? header : defaultHeader}
          </h3>
          <p className="py-4">{content !== "" ? content : defaultContent}</p>
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
