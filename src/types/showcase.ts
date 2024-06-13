export type CustomLocation =
  | "top-left"
  | "top-center"
  | "top-right"
  | "left"
  | "center"
  | "right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

type Status = "error" | "pending" | "success" | "warning" | "info";

export interface ComponentOptions {
  // title: string;
  // component: React.FunctionComponent;
  options: {
    location: CustomLocation | null; // tooltip should not accept "center"
    titleInput: boolean;
    textInput: boolean;
    status: Status | null;
    isLoading: boolean;
    reqResult: "success" | "fail";
  };
}

// TOAST POSITIONS
const TOAST_POSITIONS = {
  TopLeft: "top-left",
  TopCenter: "top-center",
  TopRight: "top-right",
  BottomLeft: "bottom-left",
  BottomCenter: "bottom-center",
  BottomRight: "bottom-right",
} as const;

export type ToastPosition =
  (typeof TOAST_POSITIONS)[keyof typeof TOAST_POSITIONS];

// TOAST TYPES
const TOAST_TYPES = {
  Success: "success",
  Error: "error",
  Warning: "warning",
  Info: "info",
} as const;

export type ToastType = (typeof TOAST_TYPES)[keyof typeof TOAST_TYPES];

// BEHAVIORS
const BEHAVIORS = {
  Sync: "sync",
  Async: "async",
} as const;

export type Behavior = (typeof BEHAVIORS)[keyof typeof BEHAVIORS];

// ASYNC RESULTS
const ASYNC_RESULTS = {
  Success: "success",
  Error: "error",
} as const;

export type AsyncResult = (typeof ASYNC_RESULTS)[keyof typeof ASYNC_RESULTS];

export type AutoClose = number | false | undefined;

export const ToastTypes: ToastType[] = Object.values(TOAST_TYPES);
export const ToastPositions: ToastPosition[] = Object.values(TOAST_POSITIONS);
export const Behaviors: Behavior[] = Object.values(BEHAVIORS);
export const AsyncResults: AsyncResult[] = Object.values(ASYNC_RESULTS);
