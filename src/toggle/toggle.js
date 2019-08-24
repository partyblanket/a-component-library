import React, { useState } from "react";
import "../index.scss";
import './toggle.scss';

function Toggle({ checked, label }) {
  const [checkedState, setCheckedState] = useState(checked);
  function clickHandler() {
    setCheckedState(!checkedState);
  }
  return (
    <label class={"acomp toggle"}>
      <input
        checked={checkedState}
        type="checkbox"
      />
      <span class={'switch ' + (checkedState ? 'checked' : '')} onClick={clickHandler}>
        <span class='move '></span>
      </span>
      <p>{label}</p>
    </label>
  );
}

export default Toggle;
