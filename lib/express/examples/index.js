const express = require("express");

// 创建应用
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // 填充响应体并发送
  res.send("hello");
});

// 监听连接
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
