import { useState } from "react";

type ModalLocation = "top" | "center" | "bottom";

const ModalOptions: ModalLocation[] = ["top", "center", "bottom"];

const defaultHeader = "This is a header.";
const defaultContent = "This is some content.";

export default function ModalShowcase(): React.JSX.Element {
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
                className={`btn opacity-30 group-hover:opacity-100 text-neutral-content text-xs flex-1 hover:bg-primary/60 hover:text-primary-content transition-colors duration-200 ${location === option ? "bg-primary text-primary-content" : "bg-neutral"}`}
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

        {/* Show Modal Button */}
        <button
          className={`btn border-[1px] border-base-300 special-btn opacity-30 mt-4 group-hover:opacity-60 text-black font-bold hover:group-hover:opacity-100 transition-opacity duration-200 active:group-hover:opacity-75`}
          onClick={() =>
            (document.getElementById(
              "showcaseModal",
            ) as HTMLDialogElement)!.showModal()
          }
        >
          Show Modal
        </button>
      </div>

      {/* MODAL */}
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
