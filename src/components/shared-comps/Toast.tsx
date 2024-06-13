interface MyProps {
  title: string;
  text: string;
}

export const Toast = ({ title, text }: MyProps): React.JSX.Element => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col">
        <p className="customTitle">{title}</p>
        <p className="msg-description text-[0.625rem] text-neutral-content">
          {text}
        </p>
      </div>
    </div>
  );
};
