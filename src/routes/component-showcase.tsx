import { useToaster } from "../hooks/useToaster";

export default function ComponentShowcase() {
  const { toastSuccess, toastError, toastWarning, toastInfo } = useToaster();

  return (
    <>
      <h1>Component Showcase</h1>
      <div className="flex">
        <button
          className="btn btn-success"
          onClick={() => toastSuccess("You are logged in!")}
        >
          Success
        </button>
        <button
          className="btn btn-error"
          onClick={() => toastError("Email or password is incorrect")}
        >
          Error
        </button>
        <button
          className="btn btn-warning"
          onClick={() => toastWarning("Are you sure you want to do that?")}
        >
          Warning
        </button>
        <button
          className="btn btn-info"
          onClick={() => toastInfo("Update available...")}
        >
          Info
        </button>
      </div>
    </>
  );
}
