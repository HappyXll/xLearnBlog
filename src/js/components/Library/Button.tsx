import * as React from "react";
import "./button.css";
 

  type ButtonProps ={
  theme:string
  children: React.ReactNode;
}

const Button =(props:ButtonProps)  => {
  const {children,theme,...rest}=props;
  return (
      <button className={`btn btn-${theme}` } {...rest}>{children}</button>
    
  );
};
export default Button;
