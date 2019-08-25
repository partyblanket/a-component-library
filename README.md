> A Component library for React 16.8+

## Installation

```
npm i a-component-library
```
in your top react component import css:

```javascript
import '../node_modules/a-component-library/dist/a-component-library.min.css';  
```
in your individual components import component as such:
```javascript
import {Input} from "a-component-library";
```



## Components

### Input Field
```javascript
<Input />
```
#### API
Name | Default | Values | Description
------------ | ------------- | - | -
type | text | text, email, password, submit |
defaultValue  | *none* | *string* |
placeholder | *none* | *string* |
label | *none* | *string* | 
titleRight | false | *bool* |
onChange | *parent's onChange* | *callback function* | use onChange if you want to manage input state yourself
value | *none* | *your app's state* | use in combination with onChange to handle change

```javascript
<Input.Group>
  <Input />
</Input.Group>
```
Name | Default | Values | Description
------------ | ------------- | - | -
onSubmit | *none* | *callback function* |
labelRight | false | *bool* | 
title | *none* | *string* |
onChange | *none* | *callback function* | use onChange if you want to manage state yourself



### Toggle Switch
```javascript
<Toggle />
```
### Notice / Alert
```javascript
<Alert />
```