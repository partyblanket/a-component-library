import React, { useState } from "react";

function Input({ type = 'text', defaultValue, placeholder }) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    setValue(e.target.value);
  }
  return (
    <input
      class={'acomp'}
      type={type}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
