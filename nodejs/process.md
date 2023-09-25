# [Process](https://nodejs.org/api/process.html)

非windows平台，nodejs会处理SIGHUP信号，终止程序

```js
import process from "node:process";
// 忽略SIGHUP信号，防止关闭终端时，程序被终止
process.on("SIGHUP", () => {});
```
