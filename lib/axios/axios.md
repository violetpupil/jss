# [axios](https://axios-http.com/)

[文档](https://axios-http.com/docs/intro)

Axios is a promise-based HTTP Client for node.js and the browser.

On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

```html
<!-- 引入 -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

## [Request Config](https://axios-http.com/docs/req_config)

`headers` 请求头对象 {"key": "value"}

`params` 查询字符串对象 {key: "value"}

## [响应](https://axios-http.com/docs/res_schema)

`data` 响应体，json响应自动转为对象
