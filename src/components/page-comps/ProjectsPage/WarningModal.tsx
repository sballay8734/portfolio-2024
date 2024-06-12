import { IoIosWarning } from "react-icons/io";

import { Filter } from "../../../routes/projects";

interface Props {
  modalIsShown: boolean;
  handleFilter: (filter: Filter) => void;
  handleAccept: () => void;
}

export default function WarningModal({
  modalIsShown,
  handleFilter,
  handleAccept,
}: Props): React.JSX.Element {
  return (
    <dialog
      open={modalIsShown}
      id="warnLegacy"
      className="modal border-none outline-none"
    >
      <div className="modal-box flex flex-col gap-4">
        <h3 className="font-bold text-3xl text-warning flex items-center justify-between">
          WARNING! <IoIosWarning size={30} />
        </h3>
        <p className="text-sm">
          Exposure to code from my early projects may cause severe eye strain,
          mental exhaustion, and migranes. These projects were created during a
          learning phase where the focus was on building functional software
          rather than adhering to best practices and writing clean, maintainable
          code. They reflect my journey of breaking free from tutorial-hell and
          tackling larger, real-world challenges.
        </p>
        <p className="text-sm">
          The code contains spaghetti logic, inefficient algorithms,{" "}
          <code className="bg-base-300 text-xs p-1 rounded-md">divs</code>{" "}
          everywhere, massive components, suboptimal design patterns and many
          other issues. Proceed with caution, as these projects serve as a
          nostalgic reminder of my growth as a developer. Examine at your own
          risk!
        </p>
        <p className="text-warning font-bold text-lg text-center bg-base-200 py-2 px-10 rounded-md">
          View legacy projects?
        </p>
        <div className="flex justify-between">
          <button
            className="btn"
            onClick={() => handleFilter("In Development")}
          >
            No. I like my sanity.
          </button>
          <form method="dialog">
            <button onClick={handleAccept} className="btn btn-warning">
              Yes. I've got Advil ready.
            </button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop border-none outline-none">
        <button className="border-none outline-none">close</button>
      </form>
    </dialog>
  );
}
