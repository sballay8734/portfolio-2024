export default function AboutMe() {
  return (
    <section className="flex w-full h-full sm:px-20 pb-10 items-center gap-10 pt-[112px] overflow-auto px-0 justify-center">
      <div className="rounded-xl shadow-default">
        <img
          className="-rotate-90 h-96 w-96 object-cover object-top rounded-xl brightness-75 hover:brightness-100 transition-brightness duration-200"
          src="/headshot.jpg"
          alt="headshot"
        />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-3xl">
          I'm Shawn, a Teacher turned Full Stack Developer.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio id,
          repellat fuga molestias doloremque sapiente distinctio animi, illo
          nisi odio porro, eum nemo quod eius autem esse veritatis? Nostrum, ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio id,
          repellat fuga molestias doloremque sapiente distinctio animi, illo
          nisi odio porro, eum nemo quod eius autem esse veritatis? Nostrum, ut.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </section>
  );
}

// box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
