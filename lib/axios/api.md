# [api](https://axios-http.com/docs/api_intro)

```js
// post请求，json请求体
// axios.post(url[, data[, config]])
axios.post(`http://httpbin.org/post`, { "key": "value" }).
  then(response => console.log(response)).
  catch(error => console.log(error))
// get请求
// axios.get(url[, config])
axios.get(`http://httpbin.org/get`).
  then(response => console.log(response)).
  catch(error => console.log(error))
```
