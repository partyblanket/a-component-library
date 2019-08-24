import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Input from "../src/input";
import Toggle from "../src/toggle";
import Alert from "../src/alert";

import Form from "./form";

storiesOf("Input", module)
  .add("nothing added", () => <Input />)
  .add("default value", () => <Input defaultValue="hi!" />)
  .add("placeholder value", () => <Input placeholder="im here" />)
  .add("placeholder and default value", () => (
    <Input defaultValue="hi!" placeholder="im here" />
  ))
  .add("type text", () => <Input type="text" defaultValue="hi!" />)
  .add("type password", () => (
    <Input type="password" defaultValue="im hidden" />
  ))
  .add("type email", () => <Input type="email" defaultValue="not email" />)
  .add("two inputs", () => (
    <div>
      <Input type="email" defaultValue="not email" title="email" />
      <Input defaultValue="hi!" title="name" />
    </div>
  ))
  .add("label right", () => (
    <Input
      type="email"
      defaultValue="not email"
      label="right side"
      labelRight
    />
  ))
  .add("Group", () => (
    <Input.Group  onSubmit={() => console.log("executing!")}>
      <Input type="text" labelRight defaultValue="not email" label="left" />
    </Input.Group>
  ));

storiesOf("Form", module).add("form", () => <Form />);

storiesOf("Toggle", module)
  .add("default", () => <Toggle />)
  .add("checked", () => <Toggle checked />)
  .add("label", () => <Toggle label="label text" />);
// .add("checked", () => <Toggle checked />)

storiesOf("Alert", module)
  .add("default", () => <Alert />)
  .add("custom alert & show", () => <Alert text="custom alert" show={true} />)
  .add("long alert & show", () => (
    <Alert
      text="A very long alert with a lot of information that is very long and longer and longer and longer "
      show={true}
    />
  ))
  .add("Max width", () => (
    <Alert
      text="A very long alert with a lot of information that is very long and longer and longer and longer "
      show={true}
    />
  ))
  .add("Max width with title", () => (
    <Alert
      title="A title"
      text="A very long alert with a lot of information that is very long and longer and longer and longer "
      show={true}
    />
  ));
