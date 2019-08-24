import React, { useState } from "react";
import "../index.scss";
import "./alert.scss";

function Alert({ text = "Alert!", show = false, title }) {
  const [visible, setVisible] = useState(show);
  function clickHandler() {
    setVisible(false);
  }

  return (
    <div class={"acomp alert " + (visible ? "show" : "")}>
      <h3 class="title">{title}</h3>
      <span class="closebtn" onClick={clickHandler}>
        &times;
      </span>
      <p>{text}</p>
    </div>
  );
}

export default Alert;
