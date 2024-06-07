import ModalShowcase from "../components/showcase-comps/ModalShowcase";
import ToastShowcase from "../components/showcase-comps/ToastShowcase";
import TemplateShowcase from "../components/showcase-comps/_templateShowcase";

export default function ComponentShowcase() {
  const componentList = [
    {
      title: "Modals",
      component: <ModalShowcase />,
    },
    {
      title: "Toasts",
      component: <ToastShowcase />,
    },
    {
      title: "Tooltips",
      component: <TemplateShowcase />,
    },
    {
      title: "Loading States",
      component: <TemplateShowcase />,
    },
    // {
    //   title: "Dropdowns",
    //   component: <TemplateShowcase />,
    // },
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

  return (
    <section className="flex w-full h-full items-center flex-col gap-10 overflow-auto px-10 py-12 sm:px-20">
      <header className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold">Components</h1>
        <p>Check out some of the components I use often!</p>
      </header>
      <div className="components w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 grow">
        {componentList.map((component) => {
          return (
            <article
              key={component.title}
              className="border-[1px] border-neutral rounded-md px-4 py-2 flex flex-col bg-base-200 group hover:bg-base-100 transition-colors duration-200"
            >
              <h2 className="text-2xl font-bold text-center text-neutral-content/30 group-hover:text-neutral-content transition-colors duration-200">
                {component.title}
              </h2>
              <div className="divider my-0"></div>
              <div className="flex-1 flex justify-center text-neutral-content/30 group-hover:text-neutral-content transition-colors duration-200">
                {component.component}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

// Modals
// Toasts (normal & async)
// Tooltips
// Loading States
// Dropdown
// Accordion
// Carousel
// Drawer
