export default function ComponentShowcase() {
  const componentList = [
    {
      title: "Modals",
      keyword: "Show",
      name: "Modal",
    },
    {
      title: "Toasts",
      keyword: "Show",
      name: "Toast",
    },
    {
      title: "Tooltips",
      keyword: "Show",
      name: "Tooltip",
    },
    {
      title: "Loading States",
      keyword: "Show",
      name: "Loading",
    },
    {
      title: "Dropdowns",
      keyword: "Toggle",
      name: "Dropdown",
    },
    {
      title: "Accordions",
      keyword: "",
      name: "Accordion",
    },
    {
      title: "Carousels",
      keyword: "",
      name: "Carousel",
    },
    {
      title: "Drawer",
      keyword: "Show",
      name: "Drawer",
    },
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
              className="border-[1px] border-neutral rounded-md px-4 py-2 flex flex-col bg-base-200"
            >
              <h2 className="text-xl font-semibold">{component.title}</h2>
              <div className="divider my-0"></div>
              <div className="flex-1 flex items-center justify-center">
                {/* Add checkboxes here for option select where necessary */}
                {/* TODO: You don't need button for some */}
                <button className="btn btn-primary">
                  {component.keyword} {component.name}
                </button>
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
