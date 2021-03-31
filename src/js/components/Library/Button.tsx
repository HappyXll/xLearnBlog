import * as React from "react";
import "./button.css";
// import * as cx from 'classnames';

type ButtonProps ={
  fill:Boolean;
  children: React.ReactNode;
}

const Button =({fill,children}:ButtonProps)  => {
  let classNames: any;
  return (
    <div>
      <a className="button">{children}</a>
    </div>
  );
};
export default Button;
