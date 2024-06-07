import { useState } from "react";
import { Id } from "react-toastify";

import { Position, useToaster } from "../../hooks/useToaster";

type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

type ToastType = "success" | "error" | "warning" | "info";

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

const classMap = {
  success: "bg-success text-success-content",
  error: "bg-error text-error-content",
  warning: "bg-warning text-warning-content",
  info: "bg-info text-info-content",
};

export default function ToastShowcase() {
  const [position, setPosition] = useState<ToastPosition>("bottom-right");
  const [header, setHeader] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<ToastType>("success");
  const [autoClose, setAutoClose] = useState<AutoClose>(2000);

  const toaster = useToaster();

  // REVIEW: Why do you need to type these here?
  const FuncMap = {
    success: (text: string, position: Position, title?: string) =>
      toaster.toastSuccess(text, position, title),
    error: (text: string, position: Position, title?: string) =>
      toaster.toastError(text, position, title),
    warning: (text: string, position: Position, title?: string) =>
      toaster.toastWarning(text, position, title),
    info: (text: string, position: Position, title?: string) =>
      toaster.toastInfo(text, position, title),
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

  // REVIEW: Maybe just limit modal options to "top", "center", "bottom". "top-left", "bottom-right", etc... only makes sense for Toasts
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
                className={`btn bg-neutral text-xs ${position === option ? "bg-primary text-primary-content" : ""}`}
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
          className="input input-bordered w-full placeholder:text-neutral-content/30"
          maxLength={25}
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
        {/* Toast Message */}
        <h3 className="pl-1 pt-2 pb-1 font-semibold">Message (optional)</h3>
        <input
          type="text"
          placeholder="Message"
          className="input input-bordered w-full placeholder:text-neutral-content/30"
          maxLength={500}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="divider my-2"></div>
        {/* Toast Type */}
        <h3 className="pl-1 pb-1 font-semibold">Type</h3>
        <div className="flex flex-wrap w-full gap-2">
          {ToastTypes.map((option) => {
            return (
              <button
                key={option}
                // Have to do it like this because tailwind classes cannot be dynamic (You could create a map though)
                className={`btn bg-neutral text-xs ${type === option ? classMap[option] : ""}`}
                onClick={() => setType(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
        <div className="divider my-2"></div>
        {/* Autohide? */}
        <h3 className="pl-1 pb-1 font-semibold">Auto Close</h3>
        <div className="flex w-full gap-2">
          <button
            className={`btn bg-neutral text-xs self-end ${autoClose === false ? "bg-orange-300 text-orange-950" : ""}`}
            onClick={() => setAutoClose(false)}
          >
            False
          </button>
          <label className="flex flex-col pt-2">
            <span className="text-xs text-neutral-content/60 pb-1">
              Duration (ms)
            </span>
            <input
              type="number"
              max="10000"
              placeholder="0"
              className="max-w-xs input input-bordered flex-grow"
              value={autoClose === false ? "" : autoClose?.toString()}
              onChange={handleAutoCloseChange}
            />
          </label>
        </div>
        <button
          onClick={() => FuncMap[type](message, position, header)}
          className={`btn bg-neutral/30 text-neutral mt-4 xs:ml-auto xs:px-16 group-hover:btn-secondary group-hover:bg-secondary group-hover:text-secondary-content`}
        >
          Show Toast
        </button>
      </div>
    </>
  );
}
