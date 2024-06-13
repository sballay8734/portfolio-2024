import { Link, useLocation } from "react-router-dom";

import { URL } from "../../data/navigationRoutes";

interface Props {
  url: URL;
}

export default function NavLink({ url }: Props): React.JSX.Element {
  const location = useLocation();
  const { pathname } = location;

  return (
    <li>
      <Link
        to={url}
        className={`bg-transparent hover:bg-base-200 ${url === pathname} ? "text-accent underline underline-offset-4" : ""}`}
      >
        Home
      </Link>
    </li>
  );
}
