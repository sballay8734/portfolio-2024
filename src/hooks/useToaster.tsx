import { toast, ToastOptions, Id } from "react-toastify";

import { Toast } from "../components/Toast";

interface MyProps {
  title: string;
  text: string;
}

export const useToaster = () => {
  const toastSuccess = (myProps: MyProps, toastProps: ToastOptions): Id =>
    toast.success(<Toast {...myProps} />, { ...toastProps });

  const toastError = (myProps: MyProps, toastProps: ToastOptions): Id =>
    toast.error(<Toast {...myProps} />, { ...toastProps });

  const toastWarning = (myProps: MyProps, toastProps: ToastOptions): Id =>
    toast.warning(<Toast {...myProps} />, { ...toastProps });

  const toastInfo = (myProps: MyProps, toastProps: ToastOptions): Id =>
    toast.info(<Toast {...myProps} />, { ...toastProps });

  return { toastSuccess, toastError, toastWarning, toastInfo };
};
