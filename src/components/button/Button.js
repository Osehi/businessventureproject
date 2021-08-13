import React from "react";

const Button = (props) => (
  // <button onClick={props.handleClick}>{props.children}</button>
  <button onClick={props.handleClick}  className={props.className}>{props.children}</button>
);

export default Button;
