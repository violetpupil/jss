# component

React component names must always start with a capital letter, while HTML tags must be lowercase.

Functions starting with use are called Hooks.

## state

By moving state up, you’ve shared it between components.

```js
import { useState } from 'react';

function Page() {
  // count用来显示，setCount用来更新，参数设置初始值
  const [count, setCount] = useState(0);
}
```

## [Props](https://react.dev/learn/passing-props-to-a-component)

组件元素的属性都将作为参数对象属性传给组件

组件标签中的内容将作为 children prop 传给组件
