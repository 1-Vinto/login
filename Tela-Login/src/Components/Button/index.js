import React from "react";
import { BtnCustom } from "./styles";

const Button = (props) => {
  return (
    <BtnCustom {...props}>
      {props.children}
    </BtnCustom>
  );
};
 
export default Button;