import { memo } from "react";
import { Link } from "react-router-dom";

import { URL } from "../../data/navigationRoutes";

interface Props {
  url: URL;
  text: string;
  currentPath: URL;
}

export default memo(function NavLink({ url, text, currentPath }: Props) {
  return (
    <li>
      <Link
        to={url}
        className={`bg-transparent hover:bg-base-200 ${url === currentPath ? "text-accent underline underline-offset-4" : ""}`}
      >
        {text}
      </Link>
    </li>
  );
});
