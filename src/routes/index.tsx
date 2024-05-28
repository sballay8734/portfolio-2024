export default function Index() {
  return (
    <main className="flex items-center justify-center flex-1 h-svh w-full px-8 relative">
      <div className="absolute hero"></div>
      <h1 className="flex flex-col items-center flex-1">
        <span className="text-8xl font-semibold">Humanized</span>
        <span className="text-8xl font-thin text-primary">Design.</span>
      </h1>
      <footer className="w-full fixed bottom-0 px-20 pb-10 flex justify-between items-end z-10">
        {/* TODO: Break description onto three lines like reference */}
        <div className="max-w-96 text-sm flex flex-col gap-2">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            expedita asperiores similique earum voluptatum, quidem quas, omnis
            exercitationem vero harum eaque? !
          </p>
          <a className="cursor-pointer">More about me ---</a>
        </div>
        <div className="flex items-center gap-2">
          <p className="h-14 w-14 bg-primary rounded-full flex items-center justify-center">
            X
          </p>
          <p>Something</p>
        </div>
      </footer>
    </main>
  );
}

// TODO: It should be more clear which theme button is active

// TODO: Move theme toggle and right text to layout
