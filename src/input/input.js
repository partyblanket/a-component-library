import React, { useState } from "react";

import "../index.scss";
import "./input.scss";

function Input({
  type = "text",
  defaultValue,
  placeholder,
  label,
  labelRight
}) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    setValue(e.target.value);
  }
  const labelComp = label && <label>{label}</label>;
  if (type === "submit")
    return (
      <input
        class="acomp input "
        type="submit"
        value={defaultValue || "Submit"}
      />
    );
  return (
    <div class={"acomp input " + (labelRight ? "labelRight" : "")}>
      {!labelRight && labelComp}
      <input
        type={type}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {labelRight && labelComp}
    </div>
  );
}

export default Input;
