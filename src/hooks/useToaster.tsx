import {
  IoIosCheckmarkCircle,
  IoIosWarning,
  IoIosInformationCircle,
} from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { toast, ToastOptions, Id } from "react-toastify";

import { Toast } from "../components/Toast";

export const useToaster = () => {
  const toastSuccess = (text: string): Id =>
    toast.success(<Toast text={text} title="Success" />, {
      hideProgressBar: true,
      icon: <IoIosCheckmarkCircle className="text-success" size={30} />,
      position: "bottom-right",
      autoClose: 2000,
    });

  const toastError = (text: string): Id =>
    toast.error(<Toast text={text} title="Error" />, {
      hideProgressBar: true,
      icon: <RiErrorWarningFill className="text-error" size={30} />,
      position: "bottom-right",
      autoClose: false,
    });

  const toastWarning = (text: string): Id =>
    toast.warning(<Toast text={text} title="Warning" />, {
      hideProgressBar: true,
      icon: <IoIosWarning className="text-warning" size={30} />,
      position: "bottom-right",
      autoClose: false,
    });

  const toastInfo = (text: string): Id =>
    toast.info(<Toast text={text} title="Info" />, {
      hideProgressBar: true,
      icon: <IoIosInformationCircle className="text-info" size={30} />,
      position: "bottom-right",
      autoClose: false,
    });

  return { toastSuccess, toastError, toastWarning, toastInfo };
};
