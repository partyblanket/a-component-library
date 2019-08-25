import React, { useState } from "react";
import "../index.scss";
import './toggle.scss';

// TODO
// css transition (float doesnt allow transition)
// make rounded version

function Toggle({ checked, label, onChange }) {
  const [checkedState, setCheckedState] = useState(checked);
  function clickHandler() {
    const newState = !checkedState;
    setCheckedState(newState);
    onChange && onChange(newState);
  }
  return (
    <label className={"acomp toggle"}>
      <input
        defaultChecked={checkedState}
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
