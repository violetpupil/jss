# [routing](https://nextjs.org/docs/app/building-your-application/routing)

Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files.

`layout.tsx` Shared UI for a segment and its children

`page.tsx` Unique UI of a route and make routes publicly accessible

`not-found.tsx` Not found UI for a segment and its children

## [Project Structure](https://nextjs.org/docs/getting-started/project-structure)

- app 网站根目录页面
  - favicon.ico 网站图标
- public 静态文件，代码可以用/引用

## [layout](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)

layout 组件应该接收 `{ children }` 子页面参数

根布局可以自动生成

Root layouts must contain html and body tags.
