import { toast, ToastOptions, Id } from "react-toastify";

import { Toast } from "../components/Toast";

interface MyProps {
  title: string;
  text: string;
  color: string;
}

export const useToaster = () => {
  const toastSuccess = (myProps: MyProps, toastProps: ToastOptions): Id =>
    toast.success(<Toast {...myProps} color="text-success" />, {
      ...toastProps,
      hideProgressBar: true,
      icon: false,
      position: "bottom-right",
    });

  const toastError = (myProps: MyProps, toastProps: ToastOptions): Id =>
    toast.error(<Toast {...myProps} color="text-error" />, {
      ...toastProps,
      hideProgressBar: true,
      icon: false,
      position: "bottom-right",
    });

  const toastWarning = (myProps: MyProps, toastProps: ToastOptions): Id =>
    toast.warning(<Toast {...myProps} color="text-warning" />, {
      ...toastProps,
      hideProgressBar: true,
      icon: false,
      position: "bottom-right",
    });

  const toastInfo = (myProps: MyProps, toastProps: ToastOptions): Id =>
    toast.info(<Toast {...myProps} color="text-info" />, {
      ...toastProps,
      hideProgressBar: true,
      icon: false,
      position: "bottom-right",
    });

  return { toastSuccess, toastError, toastWarning, toastInfo };
};
