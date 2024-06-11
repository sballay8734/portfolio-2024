import { Filter } from "../../../routes/projects";

interface Props {
  filter: Filter;
  handleFilter: (filter: Filter) => void;
}

export default function TabFilter({ filter, handleFilter }: Props) {
  return (
    <div role="tablist" className="tabs tabs-boxed bg-base-100">
      <a
        role="tab"
        className={`tab ${filter === "In Development" ? "tab-active" : "text-neutral"} transition-colors duration-200`}
        onClick={() => handleFilter("In Development")}
      >
        In Development
      </a>
      <a
        role="tab"
        className={`tab flex gap-2 ${filter === "Legacy" ? "tab-active" : " text-neutral"} transition-colors duration-200`}
        onClick={() => handleFilter("Legacy")}
      >
        Legacy
      </a>
    </div>
  );
}
