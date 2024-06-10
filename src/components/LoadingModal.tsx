import LoadingSpinner from "./LoadingSpinner";

interface Props {
  loading: boolean;
}

export default function LoadingModal({ loading }: Props) {
  return (
    <dialog open={loading} id="showcaseModal" className={`modal`}>
      <div className="modal-box flex items-center justify-center w-fit bg-neutral/20 gap-4">
        <LoadingSpinner />
      </div>
      <form method="dialog" className="modal-backdrop bg-black/50"></form>
    </dialog>
  );
}
