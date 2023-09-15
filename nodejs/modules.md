# modules

Node.js默认使用CommonJS模块，可通过以下方式指定ECMAScript

- .mjs文件扩展名
- package.json "type": "module"

## [CommonJS](https://nodejs.org/api/modules.html)

In Node.js, each file is treated as a separate module.

```js
// 导出
const { PI } = Math;
exports.area = (r) => PI * r ** 2;
exports.circumference = (r) => 2 * PI * r;
// 导入
const circle = require('./circle.js');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
```

## [ECMAScript](https://nodejs.org/api/esm.html)

```js
// addTwo.mjs导出
function addTwo(num) {
  return num + 2;
}

export { addTwo };
```

```js
// app.mjs导入
import { addTwo } from './addTwo.mjs';
console.log(addTwo(4));
```
