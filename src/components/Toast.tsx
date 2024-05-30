interface MyProps {
  title: string;
  text: string;
}

export const Toast = ({ title, text }: MyProps) => {
  return (
    <div className="bg-neutral h-16 w-48 p-0 m-0">
      <p className="msg-title">{title}</p>
      <p className="msg-description">{text}</p>
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
