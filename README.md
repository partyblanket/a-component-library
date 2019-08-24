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
defaultValue  | *none* | *any string* |
placeholder | *none* | *any string* |
label | *none* | *any string* | 
titleRight | false | true, false |

```javascript
<Input.Group>
  <Input />
</Input.Group>
```
Name | Default | Values | Description
------------ | ------------- | - | -
onSubmit | *none* | *any function* |
labelRight | false | true | 


### Toggle Switch
```javascript
<Toggle />
```
### Notice / Alert
```javascript
<Alert />
```