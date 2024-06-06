export default function TemplateShowcase() {
  return (
    <>
      <button
        className="btn text-error"
        onClick={() =>
          (document.getElementById(
            "showcaseModal",
          ) as HTMLDialogElement)!.showModal()
        }
      >
        N/A
      </button>
      <dialog id="showcaseModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">NEED TO ADD</h3>
          <p className="py-4">NEED TO ADD</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
