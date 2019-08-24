import React, { cloneElement } from "react";

function Group({ children, onSubmit, labelRight, title }) {
  const childrenWithPassedProps = React.Children.toArray(children).map(el =>
    cloneElement(el, labelRight && { labelRight })
  );

  function handleSubmit(e) {
    e.preventDefault();
    const inputItems = e.target.getElementsByTagName("input");
    const filteredItems = [...inputItems].filter(el => el.type != "submit");
    onSubmit(filteredItems);
  }
  return (
    <form class="acomp inputGroup" onSubmit={handleSubmit}>
      <h2 class="title">{title}</h2>
      {childrenWithPassedProps}
    </form>
  );
}

export default Group;
