# [Events](https://developer.mozilla.org/en-US/docs/Web/Events) 事件对象

## [事件类型](https://developer.mozilla.org/en-US/docs/Web/API/Element#events)

监听事件方法

1. 使用 dom 对象的 addEventListener() 方法绑定处理函数 `e.addEventListener("click", handle)`
2. 使用 dom 对象的 oneventname 属性绑定处理函数 `e.onclick=handle`
3. 在 html 标签的 oneventname 属性调用处理函数 `<button onclick="handle()"></button>`

### Mouse events

`click` 鼠标点击

`mouseenter` 鼠标移入

`mouseleave` 鼠标移出

### Keyboard events

`keydown` Fired when a key is pressed.

`keyup` Fired when a key is released.
