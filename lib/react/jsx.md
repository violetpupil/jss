# [jsx](https://react.dev/learn/writing-markup-with-jsx)

[转换器](https://transform.tools/html-to-jsx)

包含 jsx 的 typescript 文件扩展名 .tsx

## 规则

1) jsx 只能返回一个父元素，可以使用 `<div></div>` 或 `<></>`
2) JSX requires tags to be explicitly closed
3) JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects.
    - 标签属性 class -> className
    - 标签带 - 的属性，转为小驼峰
4) 在jsx中，使用{}写js，标签属性 `<img src={v} />`
5) 用对象写内联css样式，属性用小驼峰
    - `<div style={{ fontSize: "30px" }}>hi</div>`
    - 单位默认为px `<div style={{ fontSize: 30 }}>hi</div>`
