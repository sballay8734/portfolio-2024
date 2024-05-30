import { toast, ToastOptions, Id } from "react-toastify";

interface MyProps {
  title: string;
  text: string;
  type: "success" | "error" | "warning" | "info"; // needed to render icon?
}

export const Toast = ({ title, text }: MyProps) => {
  return (
    <div className="msg-container">
      <p className="msg-title">{title}</p>
      <p className="msg-description">{text}</p>
    </div>
  );
};

const toaster = (myProps: MyProps, toastProps: ToastOptions): Id =>
  toast(<Toast {...myProps} />, { ...toastProps });

toaster.success = (myProps: MyProps, toastProps: ToastOptions): Id =>
  toast.success(<Toast {...myProps} />, { ...toastProps });

toaster.error = (myProps: MyProps, toastProps: ToastOptions): Id =>
  toast.error(<Toast {...myProps} />, { ...toastProps });

toaster.warning = (myProps: MyProps, toastProps: ToastOptions): Id =>
  toast.warning(<Toast {...myProps} />, { ...toastProps });

toaster.info = (myProps: MyProps, toastProps: ToastOptions): Id =>
  toast.info(<Toast {...myProps} />, { ...toastProps });

// add more here

// USE IT
// toaster.success(
//   {
//     title: "You did it!",
//     text: "Good job!",
//   },
//   { autoClose: false },
// );
