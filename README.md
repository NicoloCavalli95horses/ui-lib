# Vue.js UI components library
## How to use this library
1) Install with `npm i nicolo_cavalli_ui_lib`
2) In the root `index.html` import the CSS:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
      ...
     <link rel="stylesheet" href="../node_modules/nicolo_cavalli_ui_lib/dist/style.css" />
  </head>
  <body> ... </body>
</html>
```
3) In a `.vue` file, import the library components you need and use them in the template:
```html
<template>
  ...
  <Btn> click me </Btn>
  ...
<template/>

<script setup>
import { Btn } from 'nicolo_cavalli_ui_lib';

<script />
```

## Available components
- Btn
- Checkbox
- DropDown
- SwitchBtn
- Modal
