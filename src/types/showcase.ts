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
