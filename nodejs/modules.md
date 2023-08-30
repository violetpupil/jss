# modules

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
