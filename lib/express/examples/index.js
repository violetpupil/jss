const express = require("express");

// 创建应用
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // 填充响应体并发送
  res.send("hello");
});

// 如果查询字符串中有text参数
// 则返回参数值，否则返回空
app.get("/echo", (req, res) => {
  if ("text" in req.query) {
    res.send(req.query.text);
  } else {
    res.send("");
  }
});

// 监听连接
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
