import {
  IoIosCheckmarkCircle,
  IoIosWarning,
  IoIosInformationCircle,
} from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { toast, Id } from "react-toastify";

import { Toast } from "../components/Toast";

export type Position =
  | "top-right"
  | "top-center"
  | "top-left"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left";

export const useToaster = () => {
  const toastSuccess = (text: string, position: Position, title?: string): Id =>
    toast.success(
      <Toast
        text={text && text.length > 0 ? text : "Something good happened!"}
        title={`${title && title?.length > 0 ? title : "Success"}`}
      />,
      {
        hideProgressBar: true,
        icon: <IoIosCheckmarkCircle className="text-success" size={30} />,
        position: position ? position : "bottom-right",
        autoClose: 2000,
      },
    );

  const toastError = (text: string, position: Position, title?: string): Id =>
    toast.error(
      <Toast
        text={text && text.length > 0 ? text : "Something went wrong"}
        title={`${title && title?.length > 0 ? title : "Error"}`}
      />,
      {
        hideProgressBar: true,
        icon: <RiErrorWarningFill className="text-error" size={30} />,
        position: position ? position : "bottom-right",
        autoClose: false,
      },
    );

  const toastWarning = (text: string, position: Position, title?: string): Id =>
    toast.warning(
      <Toast
        text={
          text && text.length > 0
            ? text
            : "You should be careful about something"
        }
        title={`${title && title?.length > 0 ? title : "Warning"}`}
      />,
      {
        hideProgressBar: true,
        icon: <IoIosWarning className="text-warning" size={30} />,
        position: position ? position : "bottom-right",
        autoClose: false,
      },
    );

  const toastInfo = (text: string, position: Position, title?: string): Id =>
    toast.info(
      <Toast
        text={text && text.length > 0 ? text : "You should know something"}
        title={`${title && title?.length > 0 ? title : "Info"}`}
      />,
      {
        hideProgressBar: true,
        icon: <IoIosInformationCircle className="text-info" size={30} />,
        position: position ? position : "bottom-right",
        autoClose: false,
      },
    );

  return { toastSuccess, toastError, toastWarning, toastInfo };
};
