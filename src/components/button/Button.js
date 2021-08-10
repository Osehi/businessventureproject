import React from "react";

const Button = (...props) => (
  <button onClick={props.handleClick} className={props.className}>{props.children}</button>
);

export default Button;
