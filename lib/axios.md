# [axios](https://axios-http.com/)

[文档](https://axios-http.com/docs/intro)

Axios is a promise-based HTTP Client for node.js and the browser.

On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

```html
<!-- 引入 -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

```js
// post请求，json请求体
axios.post(`http://httpbin.org/post`, { "key": "value" }).
  then(response => console.log(response)).
  catch(error => console.log(error))
// get请求
axios.get(`http://httpbin.org/get`).
  then(response => console.log(response)).
  catch(error => console.log(error))
```

## [响应](https://axios-http.com/docs/res_schema)

`data` 响应体，json响应自动转为对象
