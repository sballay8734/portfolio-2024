import {
  IoIosCheckmarkCircle,
  IoIosWarning,
  IoIosInformationCircle,
} from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { toast, Id } from "react-toastify";

import { Toast } from "../components/shared-comps/Toast";
import { ToastType, ToastPosition, AsyncResult } from "../types/showcase";

type ToastOptions = {
  defaultText: string;
  defaultTitle: string;
  Icon: React.ComponentType<{ className?: string; size?: number }>;
  toastFunc: typeof toast.success;
};

const TOAST_OPTIONS: Record<ToastType, ToastOptions> = {
  success: {
    defaultText: "Something good happened!",
    defaultTitle: "Success",
    Icon: IoIosCheckmarkCircle,
    toastFunc: toast.success,
  },
  error: {
    defaultText: "Something went wrong",
    defaultTitle: "Error",
    Icon: RiErrorWarningFill,
    toastFunc: toast.error,
  },
  warning: {
    defaultText: "You should be careful about something",
    defaultTitle: "Warning",
    Icon: IoIosWarning,
    toastFunc: toast.warning,
  },
  info: {
    defaultText: "You should know something",
    defaultTitle: "Info",
    Icon: IoIosInformationCircle,
    toastFunc: toast.info,
  },
};

export const useToaster = () => {
  // Normal Toast
  const createToast =
    (type: ToastType) =>
    (
      text: string,
      position: ToastPosition,
      autoHide: number | false,
      title?: string,
    ): Id => {
      const { defaultText, defaultTitle, Icon, toastFunc } =
        TOAST_OPTIONS[type];
      return toastFunc(
        <Toast
          text={text && text.length > 0 ? text : defaultText}
          title={`${title && title?.length > 0 ? title : defaultTitle}`}
        />,
        {
          hideProgressBar: true,
          icon: <Icon className={`text-${type}`} size={30} />,
          position: position || "bottom-right",
          autoClose: autoHide,
        },
      );
    };

  // Async Toast
  const toastPromise = (
    desiredResult: AsyncResult,
    position: ToastPosition,
    autoClose: number | false,
  ) => {
    const resolveWithSomeData = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (desiredResult === "success") {
          resolve("Promise resolved successfully");
        } else {
          reject(new Error("Promise rejected"));
        }
      }, 2000);
    });

    toast.promise(resolveWithSomeData, {
      pending: {
        render: "Pretending to wait for something...",
        isLoading: true,
        position,
        autoClose,
      },
      success: {
        render({ data }) {
          return `${data}`;
        },
        icon: <IoIosCheckmarkCircle className="text-success" size={30} />,
        hideProgressBar: true,
        position,
        autoClose,
      },
      error: {
        icon: <RiErrorWarningFill className="text-error" size={30} />,
        render: "Something went wrong!",
        hideProgressBar: true,
        position,
        autoClose,
      },
    });
  };

  return {
    toastSuccess: createToast("success"),
    toastError: createToast("error"),
    toastWarning: createToast("warning"),
    toastInfo: createToast("info"),
    toastPromise,
  };
};
