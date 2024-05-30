import { useToaster } from "../hooks/useToaster";

export default function ProjectsPage() {
  const { toastSuccess, toastError } = useToaster();
  return (
    <>
      <h1>Projects</h1>
      <div className="flex">
        <button
          className="btn btn-primary"
          onClick={() =>
            toastSuccess(
              { title: "Success", text: "You are logged in" },
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
              { title: "Error", text: "Login failed" },
              { autoClose: false },
            )
          }
        >
          Error
        </button>
      </div>
    </>
  );
}

// !TODO: Need to overwrite css from toastify to get rid of their styles

// TODO: Need to render different icons for different toasts

// TODO: If possible, should NOT need hook to call toasts. Just one import of a function/action should be enough
