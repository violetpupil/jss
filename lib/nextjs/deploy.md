# [deploy](https://nextjs.org/docs/app/building-your-application/deploying)

## [static](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

```js
// next.config.mjs
// 构建静态文件，默认输出在 out 目录
// distDir 指定输出目录
const nextConfig = {
  output: 'export',
  distDir: 'html',
};

export default nextConfig;
```
