import { useRouteError } from "react-router-dom";

interface RouterError extends Error {
  statusText: string;
}

export default function ErrorPage(): React.JSX.Element {
  const error = useRouteError() as RouterError;
  console.error(error);

  return (
    <div id="error-page" className="flex items-center flex-col">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-error">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

// mTODO: Style error page (this page)
