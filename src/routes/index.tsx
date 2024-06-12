import Marquee from "../components/Marquee";
import Footer from "../components/page-comps/HomePage/Footer";

export default function Index(): React.JSX.Element {
  return (
    <main className="flex items-center justify-center flex-1 h-svh w-full relative pb-0 sm:pb-[78px]">
      <div className="absolute hero"></div>
      <h1 className="flex flex-col items-center flex-1">
        <span className="text-5xl xs:text-7xl sm:text-8xl font-semibold">
          Humanized
        </span>
        <span className="text-5xl xs:text-7xl sm:text-8xl font-thin text-primary">
          Design.
        </span>
      </h1>
      <Marquee type="home" />
      <Footer />
    </main>
  );
}
