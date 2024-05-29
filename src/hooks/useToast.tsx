import { toast, Bounce } from "react-toastify";

interface ToastProps {
  message: string;
  autoClose: number | false;
}

export function useToast({ message, autoClose }: ToastProps) {
  console.log("FIRING!");
  toast(message, {
    position: "top-right",
    autoClose,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
}
