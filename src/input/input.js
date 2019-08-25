import React, { useState } from "react";

import "../index.scss";
import "./input.scss";

function Input({
  type = "text",
  defaultValue = '',
  placeholder,
  label,
  labelRight,
  name,
  value,
  onChange
}) {
  const [localValue, setLocalValue] = useState(defaultValue);
  function localOnChange(e) {
    if(onChange){
      onChange(e);
    }else{
      setLocalValue(e.target.value);
    }
  }
  const labelComp = label && <label>{label}</label>;
  if (type === "submit")
    return (
      <input
        className="acomp input "
        type="submit"
        value={defaultValue || "Submit"}
      />
    );
  return (
    <div className={"acomp input " + (labelRight ? "labelRight" : "")}>
      {!labelRight && labelComp}
      <input
        type={type}
        value={value || localValue}
        onChange={localOnChange}
        placeholder={placeholder}
        name={name || label}
      />
      {labelRight && labelComp}
    </div>
  );
}

export default Input;
