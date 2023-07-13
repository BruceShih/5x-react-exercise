import React from "react";

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { children, ...rest } = props;
  console.log("MyButton render");

  return (
    <button className="btn btn-danger" {...rest}>
      {children}
    </button>
  );
}

const MyButton = React.memo(Button);

export default MyButton;
