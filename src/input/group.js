import React, { cloneElement } from "react";

function Group({ children, onSubmit, labelRight, title, onChange }) {
  
  const passedProps = {
    labelRight,
    onChange
  };
  
  const childrenWithPassedProps = React.Children.toArray(children).map(el =>
    cloneElement(el, passedProps)
  );

  function handleSubmit(e) {
    e.preventDefault();
    const inputItems = e.target.getElementsByTagName("input");
    const filteredItems = [...inputItems].filter(el => el.type != "submit");
    onSubmit(filteredItems);
  }
  
  return (
    <form className="acomp inputGroup" onSubmit={handleSubmit}>
      <h2 className="title">{title}</h2>
      {childrenWithPassedProps}
    </form>
  );
}

export default Group;
