import { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { toast } from "react-toastify";

import { useToaster } from "../../../hooks/useToaster";
import { typeActiveMap, typeHoverMap } from "../../../tailwindMaps/toastMaps";
import {
  AutoClose,
  ToastTypes,
  ToastPositions,
  Behaviors,
  AsyncResults,
  AsyncResult,
  ToastPosition,
  ToastType,
  Behavior,
} from "../../../types/showcase";

// !TODO: Buttons are too bright when group is not hovered.

export default function ToastShowcase(): React.JSX.Element {
  const [position, setPosition] = useState<ToastPosition>("bottom-right");
  const [header, setHeader] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<ToastType>("success");
  const [autoClose, setAutoClose] = useState<AutoClose>(2000);

  const [behavior, setBehavior] = useState<Behavior>("sync");
  const [asyncResult, setAsyncResult] = useState<AsyncResult>("success");

  const { toastSuccess, toastError, toastWarning, toastInfo, toastPromise } =
    useToaster();

  const FuncMap = {
    success: toastSuccess,
    error: toastError,
    warning: toastWarning,
    info: toastInfo,
  };

  function handleAutoCloseChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value === "") {
      setAutoClose(false);
    } else {
      const numericValue = parseInt(value, 10);
      if (!isNaN(numericValue) && numericValue <= 10000) {
        setAutoClose(numericValue);
      }
    }
  }

  function handleToastSubmit() {
    if (behavior === "async") {
      toastPromise(asyncResult, position, autoClose!);
    } else {
      FuncMap[type](message, position, autoClose!, header);
    }
  }

  return (
    <>
      <div className="flex flex-col w-full">
        {/* Toast Position */}
        <h3 className="pl-1 pt-2 pb-1 font-semibold">Position</h3>
        <div className="grid grid-cols-3 w-full gap-2">
          {ToastPositions.map((option) => {
            return (
              <button
                key={option}
                className={`btn opacity-30 group-hover:opacity-100 hover:text-primary-content hover:bg-primary text-xs ${position === option ? "bg-primary text-primary-content" : "text-neutral-content bg-neutral"}`}
                onClick={() => setPosition(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
        <div className="divider my-2"></div>
        {/* Toast Header */}
        <h3
          className={`pl-1 pb-1 font-semibold ${behavior === "async" ? "opacity-10 pointer-events-none" : ""}`}
        >
          Header (optional)
        </h3>
        <input
          type="text"
          placeholder="Header"
          className={`input input-bordered w-full placeholder:text-neutral-content/30 max-h-10 ${behavior === "async" ? "opacity-10 pointer-events-none" : ""}`}
          maxLength={25}
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
        {/* Toast Message */}
        <h3
          className={`pl-1 pt-2 pb-1 font-semibold ${behavior === "async" ? "opacity-10 pointer-events-none" : ""}`}
        >
          Message (optional)
        </h3>
        <input
          type="text"
          placeholder="Message"
          className={`input input-bordered w-full placeholder:text-neutral-content/30 max-h-10 ${behavior === "async" ? "opacity-10 pointer-events-none" : ""}`}
          maxLength={500}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="divider my-2"></div>
        {/* Toast Type */}
        <h3
          className={`pl-1 pb-1 font-semibold ${behavior === "async" ? "opacity-10 pointer-events-none" : ""}`}
        >
          Type
        </h3>
        <div
          className={`flex w-full gap-2 h-fit ${behavior === "async" ? "opacity-10 pointer-events-none" : ""}`}
        >
          {ToastTypes.map((option) => {
            return (
              <button
                key={option}
                className={`text-xs px-5 py-3 rounded-md opacity-30 group-hover:opacity-100 ${typeHoverMap[option]} hover:text-primary-content transition-colors duration-200 ${type === option ? typeActiveMap[option] : "bg-neutral text-neutral-content"}`}
                onClick={() => setType(option)}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="divider my-2"></div>

        {/* Auto Close */}
        <h3 className={`pl-1 pb-1 font-semibold`}>Auto Close</h3>
        <div className={`flex w-full gap-2`}>
          <button
            className={`btn bg-base-300 opacity-30 group-hover:opacity-100 text-neutral text-xs self-end hover:bg-orange-200 hover:text-primary-content ${autoClose === false ? "bg-orange-400 text-black" : ""}`}
            onClick={() => setAutoClose(false)}
          >
            False
          </button>
          <label className={`flex flex-col opacity-30 group-hover:opacity-100`}>
            <span className="text-xs text-base-content">Duration (ms)</span>
            <input
              type="number"
              max="10000"
              placeholder="0"
              className="max-w-xs input input-bordered flex-grow max-h-10"
              value={autoClose === false ? "" : autoClose?.toString()}
              onChange={handleAutoCloseChange}
            />
          </label>
        </div>

        {/* Divider */}
        <div className="divider my-2"></div>

        {/* Async or Non-Async */}
        <h3 className="pl-1 pb-1 font-semibold flex w-full justify-between">
          <span>Behavior</span>
          <span
            className={`${behavior === "sync" ? "opacity-10 pointer-events-none" : ""}`}
          >
            Async Result
          </span>
        </h3>
        <div className="flex w-full justify-between">
          <div className="flex w-full gap-2">
            {Behaviors.map((mode) => {
              return (
                <button
                  key={mode}
                  className={`text-xs px-5 py-3 rounded-md opacity-30 group-hover:opacity-100 ${
                    mode === behavior
                      ? "bg-accent text-accent-content"
                      : "bg-base-300 text-neutral"
                  } hover:bg-accent/30 hover:text-primary-content transition-colors duration-200`}
                  onClick={() => setBehavior(mode)}
                >
                  {mode}
                </button>
              );
            })}
          </div>
          <div
            className={`flex w-full gap-2 justify-end ${behavior === "sync" ? "opacity-10 pointer-events-none" : ""}`}
          >
            {AsyncResults.map((type) => {
              return (
                <button
                  key={type}
                  className={`text-xs px-5 py-3 opacity-30 group-hover:opacity-100 rounded-md ${typeHoverMap[type]} hover:text-primary-content transition-colors duration-200 ${type === asyncResult ? typeActiveMap[type] : "bg-base-300 text-neutral"}`}
                  onClick={() => setAsyncResult(type)}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Show Toast Button */}
        <button
          onClick={handleToastSubmit}
          className={`btn border-[1px] border-base-300 special-btn opacity-30 group-hover:opacity-60 text-black font-bold hover:group-hover:opacity-100 transition-opacity duration-200 mt-4 active:group-hover:opacity-75`}
        >
          Show Toast
        </button>
      </div>
    </>
  );
}

// !TODO: Toasts should be "swipeable" (LATER)
