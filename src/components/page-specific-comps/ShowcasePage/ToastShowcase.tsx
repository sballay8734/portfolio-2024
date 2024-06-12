import { useState } from "react";
import { toast } from "react-toastify";

import { Position, useToaster } from "../../../hooks/useToaster";

type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

type ToastType = "success" | "error" | "warning" | "info";

type Behavior = "sync" | "async";

type AsyncResult = "success" | "error";

type AutoClose = number | false | undefined;

const ToastTypes: ToastType[] = ["success", "error", "warning", "info"];

const ToastOptions: ToastPosition[] = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

const Behaviors: Behavior[] = ["sync", "async"];

const AsyncResults: AsyncResult[] = ["success", "error"];

const classMap = {
  success: "bg-success/80 text-success-content",
  error: "bg-error/80 text-error-content",
  warning: "bg-warning/80 text-warning-content",
  info: "bg-info/80 text-info-content",
};

const hoverMap = {
  success: "hover:bg-success/30",
  error: "hover:bg-error/30",
  warning: "hover:bg-warning/30",
  info: "hover:bg-info/30",
};

// !TODO: Add async toast (LATER)

// !TODO: Toasts should be "swipeable" (LATER)

export default function ToastShowcase(): React.JSX.Element {
  const [position, setPosition] = useState<ToastPosition>("bottom-right");
  const [header, setHeader] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<ToastType>("success");
  const [autoClose, setAutoClose] = useState<AutoClose>(2000);
  const [behavior, setBehavior] = useState<Behavior>("sync");
  const [asyncResult, setAsyncResult] = useState<AsyncResult>("success");

  const toaster = useToaster();

  // REVIEW: Why do you need to type these here?
  const FuncMap = {
    success: (
      text: string,
      position: Position,
      autoHide: number | false,
      title?: string,
    ) => toaster.toastSuccess(text, position, autoHide, title),
    error: (
      text: string,
      position: Position,
      autoHide: number | false,
      title?: string,
    ) => toaster.toastError(text, position, autoHide, title),
    warning: (
      text: string,
      position: Position,
      autoHide: number | false,
      title?: string,
    ) => toaster.toastWarning(text, position, autoHide, title),
    info: (
      text: string,
      position: Position,
      autoHide: number | false,
      title?: string,
    ) => toaster.toastInfo(text, position, autoHide, title),
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

  async function handlePromiseToast(shouldResolve) {
    const mockPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve(FuncMap["success"](message, position, autoClose!, header));
        } else {
          reject(FuncMap["error"](message, position, autoClose!, header));
        }
      }, 2000); // Simulate a 2-second delay
    });

    try {
      await toast.promise(mockPromise, {
        pending: "Processing...",
        success: "Promise resolved successfully",
        error: "Promise rejected",
      });
    } catch (error) {
      console.error("Promise error:", error);
    }
  }

  return (
    <>
      <div className="flex flex-col w-full">
        {/* Toast Position */}
        <h3 className="pl-1 pt-2 pb-1 font-semibold">Position</h3>
        <div className="grid grid-cols-3 w-full gap-2">
          {ToastOptions.map((option) => {
            return (
              <button
                key={option}
                className={`btn bg-neutral hover:text-primary-content hover:bg-primary text-xs ${position === option ? "bg-primary text-primary-content" : "text-neutral-content"}`}
                onClick={() => setPosition(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
        <div className="divider my-2"></div>
        {/* Toast Header */}
        <h3 className="pl-1 pb-1 font-semibold">Header (optional)</h3>
        <input
          type="text"
          placeholder="Header"
          className="input input-bordered w-full placeholder:text-neutral-content/30 max-h-10"
          maxLength={25}
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
        {/* Toast Message */}
        <h3 className="pl-1 pt-2 pb-1 font-semibold">Message (optional)</h3>
        <input
          type="text"
          placeholder="Message"
          className="input input-bordered w-full placeholder:text-neutral-content/30 max-h-10"
          maxLength={500}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="divider my-2"></div>
        {/* Toast Type */}
        <h3 className="pl-1 pb-1 font-semibold">Type</h3>
        <div className="flex w-full gap-2 h-fit">
          {ToastTypes.map((option) => {
            return (
              <button
                key={option}
                className={`text-xs px-5 py-3 rounded-md ${hoverMap[option]} hover:text-primary-content transition-colors duration-200 ${type === option ? classMap[option] : "bg-neutral text-neutral-content"}`}
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
        <h3 className="pl-1 pb-1 font-semibold">Auto Close</h3>
        <div className="flex w-full gap-2">
          <button
            className={`btn bg-base-300 text-neutral text-xs self-end hover:bg-orange-200 hover:text-primary-content ${autoClose === false ? "bg-orange-400 text-black" : ""}`}
            onClick={() => setAutoClose(false)}
          >
            False
          </button>
          <label className="flex flex-col">
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
          {behavior === "sync" ? "" : <span>Async Result</span>}
        </h3>
        <div className="flex w-full justify-between">
          <div className="flex w-full gap-2">
            {Behaviors.map((mode) => {
              return (
                <button
                  key={mode}
                  className={`text-xs px-5 py-3 rounded-md ${
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
          {behavior === "sync" ? null : (
            <div className="flex w-full gap-2 justify-end">
              {AsyncResults.map((type) => {
                return (
                  <button
                    key={type}
                    className={`text-xs px-5 py-3 rounded-md ${hoverMap[type]} hover:text-primary-content transition-colors duration-200 ${type === asyncResult ? classMap[type] : "bg-base-300 text-neutral"}`}
                    onClick={() => setAsyncResult(type)}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Show Toast */}
        <button
          // REVIEW: You shouldn't need "!" here (it will never be undefined)
          onClick={() => FuncMap[type](message, position, autoClose!, header)}
          className={`btn border-[1px] border-base-300 special-btn opacity-30 group-hover:opacity-60 text-black font-bold hover:group-hover:opacity-100 transition-opacity duration-200 mt-4 active:group-hover:opacity-75`}
        >
          Show Toast
        </button>
      </div>
    </>
  );
}