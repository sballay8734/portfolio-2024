import { useState } from "react";

import CountdownTimer from "./CountdownTimer";
import LoadingModal from "./LoadingModal";
import LoadingSpinner from "../../shared-comps/LoadingSpinner";

type LoadingLocation = "In Button" | "Full Screen";

const LoadingOptions: LoadingLocation[] = ["In Button", "Full Screen"];

export default function LoadingShowcase(): React.JSX.Element {
  const [duration, setDuration] = useState<number | "">(2000); // ms
  const [loading, setLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<LoadingLocation>("In Button");

  function handleDurationChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const numericValue = parseInt(value, 10);
    if (!isNaN(numericValue) && numericValue <= 10000) {
      setDuration(numericValue);
    } else if (numericValue > 10000) {
      setDuration(10000);
    } else {
      setDuration("");
    }
  }

  function simulateLoading() {
    if (duration === "") return;
    setLoading(true);
    const updateDuration = duration < 500 ? 500 : duration;

    setTimeout(() => {
      setLoading(false);
    }, updateDuration);
  }

  return (
    <div className="flex flex-col w-full">
      <h3 className="pl-1 pt-2 pb-1 font-semibold">Position</h3>
      <div className="flex flex-wrap w-full gap-2">
        {LoadingOptions.map((option) => {
          return (
            <button
              key={option}
              className={`btn opacity-30 group-hover:opacity-100 text-neutral-content text-xs flex-1 hover:bg-primary hover:text-primary-content transition-colors duration-200 ${location === option ? "bg-primary text-primary-content" : "bg-neutral"}`}
              onClick={() => setLocation(option)}
            >
              {!loading ? (
                option
              ) : option === location ? (
                <CountdownTimer duration={duration === "" ? 0 : duration} />
              ) : (
                option
              )}
            </button>
          );
        })}
      </div>
      <label className="flex flex-col pt-2">
        <span className="text-xs text-neutral-content/60 pb-1">
          Duration in ms (min=500, max=10000)
        </span>
        <input
          type="number"
          max="10000"
          placeholder="0"
          className="max-w-xs input input-bordered flex-grow"
          value={duration}
          onChange={handleDurationChange}
        />
      </label>
      <button
        onClick={simulateLoading}
        className={`btn border-[1px] border-primary special-btn opacity-30 mt-4 group-hover:opacity-60 text-black font-bold hover:group-hover:opacity-100 transition-opacity duration-200 active:group-hover:opacity-75`}
      >
        {loading && location === "In Button" ? (
          <LoadingSpinner />
        ) : (
          "Start Loading"
        )}
      </button>
      <LoadingModal loading={location === "Full Screen" ? loading : false} />
    </div>
  );
}

// Loading Modal
// Loading Button
