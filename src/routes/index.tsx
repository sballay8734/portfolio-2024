import Footer from "../components/page-specific-comps/HomePage/Footer";
import Marquee from "../components/shared-comps/Marquee";

export default function Index(): React.JSX.Element {
  return (
    <main className="flex items-center justify-center flex-1 h-svh w-full relative pb-[78px]">
      <div className="absolute hero"></div>
      <h1 className="flex flex-col items-center flex-1">
        <span className="text-6xl xs:text-7xl sm:text-8xl font-semibold">
          Humanized
        </span>
        <span className="text-6xl xs:text-7xl sm:text-8xl font-thin text-primary">
          Design.
        </span>
      </h1>
      <Marquee type="home" />
      <Footer />
    </main>
  );
}
