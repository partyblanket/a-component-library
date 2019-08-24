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
type | text | text, email, password |
defaultValue  | *none* | *any string* |
placeholder | *none* | *any string* |

### Toggle Switch
```javascript
<Toggle />
```
### Notice / Alert
```javascript
<Alert />
```