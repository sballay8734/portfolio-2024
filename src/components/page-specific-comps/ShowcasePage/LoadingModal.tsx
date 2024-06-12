import LoadingSpinner from "../../shared-comps/LoadingSpinner";

interface Props {
  loading: boolean;
}

export default function LoadingModal({ loading }: Props): React.JSX.Element {
  return (
    <dialog open={loading} id="showcaseModal" className={`modal`}>
      <div className="modal-box flex items-center justify-center w-fit gap-4 bg-neutral">
        <LoadingSpinner />
      </div>
      <form method="dialog" className="modal-backdrop bg-black/50"></form>
    </dialog>
  );
}
