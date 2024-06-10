import { useState } from "react";

import CountdownTimer from "../CountdownTimer";
import LoadingModal from "../LoadingModal";
import LoadingSpinner from "../LoadingSpinner";

type LoadingLocation = "In Button" | "Full Screen";

const LoadingOptions: LoadingLocation[] = ["In Button", "Full Screen"];

export default function LoadingShowcase() {
  const [duration, setDuration] = useState<number | "">(500); // ms
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

  function simulateLoading(location: LoadingLocation) {
    if (duration === "") return;
    setLoading(true);
    const updateDuration = duration < 500 ? 500 : duration;

    setTimeout(() => {
      setLoading(false);
    }, updateDuration);
  }

  function onComplete() {
    console.log("DONE!");
  }

  return (
    <div className="flex flex-col">
      <h3 className="pl-1 pt-2 pb-1 font-semibold">Position</h3>
      <div className="flex flex-wrap w-full gap-2">
        {LoadingOptions.map((option) => {
          return (
            <button
              key={option}
              className={`btn bg-neutral hover:text-neutral-content text-xs flex-1 ${location === option ? "bg-primary text-primary-content" : ""}`}
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
        onClick={() => simulateLoading(location)}
        className={`btn bg-neutral/30 text-neutral mt-4 group-hover:btn-secondary group-hover:bg-secondary group-hover:text-secondary-content`}
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
