interface MyProps {
  title: string;
  text: string;
}

// TODO: Need to conditionally render icons or find another way

// TODO: Need to fix toast for light theme

export const Toast = ({ title, text }: MyProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col">
        <p className="customTitle">{title}</p>
        {/* !TODO: One-off text color here */}
        <p className="msg-description text-[10px] text-[374253]">{text}</p>
      </div>
    </div>
  );
};