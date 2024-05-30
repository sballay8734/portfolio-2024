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
