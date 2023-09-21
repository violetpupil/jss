# [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

```javascript
// 等待指定毫秒数
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
```

promise有三个状态，初始为pending，成功为fulfilled，失败为rejected

A promise is said to be settled if it is either fulfilled or rejected, but not pending.

## Static methods

all() 处理多个promise，有一个失败则调用异常处理

## Instance methods

catch() 添加异常处理器，返回新的promise

then() 添加处理器，返回新的promise
