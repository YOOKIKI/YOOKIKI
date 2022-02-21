import React from "react";
import "./Button.scss"

function Button({ className, disabled, onclick }) {

  return (
    <button
      id="loginClick"
      className={className}
      disabled={disabled}
      onClick={onclick}
    >로그인</button>
  )
};

export default Button;