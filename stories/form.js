import React from "react";

import Input from "../src/input";

function Form() {
  const onSubmit = function(values) {
    values.forEach(el => console.log(el));
  };
  return (
    <Input.Group title="A Title" onSubmit={onSubmit}>
      <Input type="email" defaultValue="jjbraam@gmail.com" label="Email" />
      <Input type="text" defaultValue="Jan Jaap Braam " label="Name" />
      <Input type="checkbox" label="Check!" />
      <Input type="submit" />
    </Input.Group>
  );
}

export default Form;
