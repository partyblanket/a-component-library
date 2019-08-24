//Toggle Switch
import React, { useState } from "react";

function Toggle({ checked }) {
  const [checkedState, setCheckedState] = useState(false || checked);
  function clickHandler() {
    setCheckedState(!checkedState);
  }
  return (
    <div>
      <input checked={checkedState} type="checkbox" onClick={clickHandler} />
    </div>
  );
}

export default Toggle;
