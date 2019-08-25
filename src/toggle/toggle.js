import React, { useState } from "react";
import "../index.scss";
import './toggle.scss';

function Toggle({ checked, label }) {
  const [checkedState, setCheckedState] = useState(checked);
  function clickHandler() {
    setCheckedState(!checkedState);
  }
  return (
    <label className={"acomp toggle"}>
      <input
        checked={checkedState}
        type="checkbox"
      />
      <span className={'switch ' + (checkedState ? 'checked' : '')} onClick={clickHandler}>
        <span className='move '></span>
      </span>
      <p>{label}</p>
    </label>
  );
}

export default Toggle;
