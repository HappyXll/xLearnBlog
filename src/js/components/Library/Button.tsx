import * as React from "react";
import "./button.css";
 

  type ButtonProps ={
  theme:string
  children: React.ReactNode;
}

const Button =(props:ButtonProps)  => {
  const {children,theme,...rest}=props;
  return (
      <button className={`lx-btn lx-btn-${theme} a` } {...rest}>{children}</button>
    
  );
};
export default Button;
