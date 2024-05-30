import { useToaster } from "../hooks/useToaster";

export default function ProjectsPage() {
  const { toastSuccess, toastError, toastWarning, toastInfo } = useToaster();
  return (
    <>
      <h1>Projects</h1>
      <div className="flex">
        <button
          className="btn btn-success"
          onClick={() =>
            toastSuccess(
              {
                title: "Success",
                text: "You are logged in",
                color: "text-success",
              },
              { autoClose: 2000 },
            )
          }
        >
          Success
        </button>
        <button
          className="btn btn-error"
          onClick={() =>
            toastError(
              { title: "Error", text: "Login failed", color: "text-error" },
              { autoClose: false },
            )
          }
        >
          Error
        </button>
        <button
          className="btn btn-warning"
          onClick={() =>
            toastWarning(
              {
                title: "Warning",
                text: "Wait a sec...",
                color: "text-warning",
              },
              { autoClose: false },
            )
          }
        >
          Warning
        </button>
        <button
          className="btn btn-info"
          onClick={() =>
            toastInfo(
              {
                title: "Info",
                text: "Update available...",
                color: "text-info",
              },
              { autoClose: false },
            )
          }
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
