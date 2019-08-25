import React, {useState} from "react";

import Input from "../src/input";



function Form() {

  const [state, setState] = useState({});

  function onSubmit (values) {
    values.forEach(el => console.log(el));
  };

  const onChange = function (e) {
    console.log(e);
    
    setState({...state, [e.target.name]:e.target.value})
  }

  return (
    <Input.Group title="A Title" onSubmit={onSubmit} onChange={onChange}>
      <Input type="email" value={state.Email} label="Email" />
      <Input type="text" value={state.Name} label="Name" />
      {/* <Input type="checkbox" label="Check!" onChange={onChange}/> */}
      <Input type="submit" />
    </Input.Group>
  );
}

export default Form;
