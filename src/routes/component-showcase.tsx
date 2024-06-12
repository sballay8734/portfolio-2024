import LoadingShowcase from "../components/page-specific-comps/ShowcasePage/LoadingShowcase";
import ModalShowcase from "../components/page-specific-comps/ShowcasePage/ModalShowcase";
import ToastShowcase from "../components/page-specific-comps/ShowcasePage/ToastShowcase";
import TooltipShowcase from "../components/page-specific-comps/ShowcasePage/TooltipShowcase";
import PageHeader from "../components/shared-comps/PageHeader";

const componentList = [
  {
    title: "Toasts",
    component: <ToastShowcase />,
  },
  {
    title: "Modals",
    component: <ModalShowcase />,
  },
  {
    title: "Tooltips",
    component: <TooltipShowcase />,
  },
  {
    title: "Loading States",
    component: <LoadingShowcase />,
  },
  // {
  //   title: "Accordions",
  //   component: <TemplateShowcase />,
  // },
  // {
  //   title: "Carousels",
  //   component: <TemplateShowcase />,
  // },
  // {
  //   title: "Drawer",
  //   component: <TemplateShowcase />,
  // },
];

export default function ComponentShowcase(): React.JSX.Element {
  return (
    <section className="flex w-full h-full items-center flex-col gap-10 overflow-auto px-10 py-12 sm:px-20">
      <PageHeader pageKey="showcase" />
      <div className="components w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {componentList.map((component) => {
          const spanClass =
            component.title === "Toasts" ? "row-span-2 h-full" : "";
          return (
            <article
              key={component.title}
              className={`border-[1px] opacity-80 border-neutral rounded-md px-4 py-2 flex flex-col bg-base-200 group hover:bg-base-100 hover:opacity-100 transition-opacity duration-500 h-fit cursor-default ${spanClass}`}
            >
              <h2 className="text-2xl font-bold text-center text-base-content/30 group-hover:text-base-content transition-colors duration-200">
                {component.title}
              </h2>
              <div className="divider my-0"></div>
              <div className="flex-1 flex justify-center text-base-content/30 group-hover:text-base-content transition-colors duration-200">
                {component.component}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
