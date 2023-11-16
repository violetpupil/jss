# [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

```js
// 尝试转换并比较不同类型
// 以下结果是true
console.log(0 == false);
console.log(0 == "");
// 只有相同类型才能相等
console.log(0 === false);
```

```js
// 解构赋值
const { a, b } = { a: 1, b: 2 };
```

## [&&](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)

```js
// 第一个操作数为真，返回第二个操作数
// 第一个操作数为假，返回第一个操作数
console.log(0 && 2);
```
