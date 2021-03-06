import React, { useState } from "react";
import "../index.scss";
import "./alert.scss";

// TODO
// custom width

function Alert({ text = "Alert!", show = false, title }) {
  const [visible, setVisible] = useState(show);
  function clickHandler() {
    setVisible(false);
  }

  return (
    <div className={"acomp alert " + (visible ? "show" : "")}>
      {title && <h3 className="title">{title}</h3>}
      <span className="closebtn" onClick={clickHandler}>
        &times;
      </span>
      <p>{text}</p>
    </div>
  );
}

export default Alert;
