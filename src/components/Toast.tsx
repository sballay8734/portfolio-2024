import { MdError } from "react-icons/md";

interface MyProps {
  title: string;
  text: string;
  color: string;
}

// TODO: Need to conditionally render icons or find another way

// TODO: Need to fix toast for light theme

export const Toast = ({ title, text, color }: MyProps) => {
  return (
    <div className="flex items-center gap-3">
      <MdError size={25} className={`${color}`} />
      <div className="flex flex-col">
        <p className={`${color}`}>{title}</p>
        {/* !TODO: One-off text color here */}
        <p className="msg-description text-[10px] text-[374253]">{text}</p>
      </div>
    </div>
  );
};

// USE IT
// toaster.success(
//   {
//     title: "You did it!",
//     text: "Good job!",
//   },
//   { autoClose: false },
// );
