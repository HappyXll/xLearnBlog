import * as React from "react";
import "./button.css";

type ButtonProps = {
  children?: JSX.Element | JSX.Element[];
};

const Button = (props:ButtonProps): JSX.Element => {
  const {children,...rest}=props;
  React.Children.map(children, (child) => {
    console.log("child", child);
  });
  return (
    <div>
      {React.Children.map(children, (children) => {
        return React.cloneElement(children, {
          style: { opacity: 0.5 },
          name: "hahah",
        });
      })}
      111
    </div>
  );
};
export default Button;
