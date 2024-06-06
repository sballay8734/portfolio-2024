export default function ToastShowcase() {
  return (
    <>
      <button className="btn">Show Toast</button>
      <dialog id="showcaseModal" className="modal">
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
