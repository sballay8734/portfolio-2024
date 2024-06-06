import Marquee from "../components/Marquee";

export default function AboutMe() {
  return (
    <section className="flex flex-col gap-6 w-full h-full px-10 sm:px-20 items-center py-[37.79px] sm:py-0 overflow-auto sm:justify-center max-w-[1200px] relative sm:mt-[83px]">
      {/* TOP */}
      <div className="top flex flex-col sm:flex-row gap-10 items-center">
        <div className="rounded-xl shadow-default">
          <img
            className="max-h-96 max-w-96 object-cover object-top rounded-xl brightness-75 hover:brightness-100 transition-brightness duration-200"
            src="/headshot.jpg"
            alt="headshot"
          />
        </div>
        <div className="flex-[3_3_0%] flex flex-col gap-4">
          <h1 className="text-3xl font-bold">
            I'm Shawn, a Teacher turned Full Stack Developer.
          </h1>
          <p className="text-sm">
            I've spent 7+ years working with different age groups in education;
            elementary (1st-2nd), middle school (6th-8th), and high school
            (9th-12th).
          </p>
          <p className="text-sm">
            These days I'm still doing that, but my free time is spent almost
            exclusively on development. Whether that means working on a personal
            project, learning a new library/framework, brushing up on best
            practices, or just messing around, I'm probably in front of my
            computer with my IDE open.
          </p>
          <p className="text-sm">
            When I'm not coding, you'll find me at the gym, relaxing with
            friends, at a students' athletic event, or petting all the good
            dogs.
          </p>
        </div>
      </div>
      <div className="divider my-0"></div>
      {/* The long version */}
      <div className="flex flex-col w-full gap-3">
        <h2 className="text-2xl font-semibold">The Longer Version</h2>
        <p className="text-sm">
          In 2014, I graduated from Arizona State University with an
          undergraduate degree in criminal justice. I quickly realized that
          being a trooper was not something I would enjoy doing for the rest of
          my life. I ended up taking a job at a summer camp while I figured out
          what I wanted to do.
        </p>
        <p className="text-sm">
          Having never worked with kids before, I was unsure what to expect.
          Thankfully, it took me less than a day to realize I wanted to be a
          teacher. Two months later I was back in school for my M.Ed. in
          Elementary Education. About five awesome years later, the desire to
          pay off my student loans as quickly as possible had me reluctantly
          searching for a new career. I landed on software development.
        </p>
        <p className="text-sm">
          I'm happy to say that what started as a reluctant endeavor, quickly
          turned into a passion. There are no words to express the level of
          excitement I have for this new possibility.
        </p>
      </div>
      <Marquee type="other" />
    </section>
  );
}
