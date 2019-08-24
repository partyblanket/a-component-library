import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import Input from "../src/input";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Input", module)
  .add("nothing added", () => <Input />)
  .add("default value", () => <Input defaultValue="hi!" />)
  .add("placeholder value", () => <Input placeholder="im here" />)
  .add("placeholder and default value", () => <Input defaultValue="hi!" placeholder="im here"/>)
  .add("type text", () => <Input type='text' defaultValue="hi!" />)
  .add("type password", () => <Input type='password' defaultValue="im hidden" />)
  .add("type email", () => <Input type='email' defaultValue="not email" />)
