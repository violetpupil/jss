# [npm](https://www.npmjs.com/)

[文档](https://docs.npmjs.com/)

[cli](https://docs.npmjs.com/cli/v10)

## Q&A

Q: npm install 警告

(node:27336) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 close listeners added to [TLSSocket]. Use emitter.setMaxListeners() to increase limit

A: 升级 npm 到最新版可能会解决 `npm install -g npm@10.2.3`
