import { useToaster } from "../hooks/useToaster";

export default function ProjectsPage() {
  const { toastSuccess, toastError, toastWarning, toastInfo } = useToaster();
  return (
    <>
      <h1>Projects</h1>
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

// !TODO: Need to overwrite css from toastify to get rid of their styles

// TODO: Need to render different icons for different toasts

// TODO: If possible, should NOT need hook to call toasts. Just one import of a function/action should be enough

// TODO: Have "Old projects" and "New projects" sections
