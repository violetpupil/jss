# [jsx](https://react.dev/learn/writing-markup-with-jsx)

[转换器](https://transform.tools/html-to-jsx)

包含 jsx 的 typescript 文件扩展名 .tsx

## 规则

1) jsx 只能返回一个父元素，可以使用 `<div></div>` 或 `<></>`
2) JSX requires tags to be explicitly closed
3) JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects.
    - 标签属性 class -> className
    - 标签带 - 的属性，转为小驼峰

4) 在jsx中，使用{}写js表达式，标签属性 `<img src={v} />`
5) 用对象写内联css样式，属性用小驼峰
    - `<div style={{ fontSize: "30px" }}>hi</div>`
    - 单位默认为px `<div style={{ fontSize: 30 }}>hi</div>`

6) 布尔值不会显示

    ```tsx
    // 根据条件决定显示的元素
    let isLoggedIn = false;
    let div = <div>{isLoggedIn && <AdminPanel />}</div>;
    ```

7) react 需要用列表元素的 key 属性做唯一标识
8) react 事件属性用驼峰，只需指定函数名 `<button onClick={handleClick}></button>`
9) 用 ... 将整个对象的字段作为属性 `<button {...{ onClick: handleClick }}></button>`
