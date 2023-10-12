# [Project Structure](https://nextjs.org/docs/getting-started/project-structure)

Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files.

- app 网站根目录页面
  - favicon.ico 网站图标
  - layout.tsx Shared UI for a segment and its children
  - page.tsx Unique UI of a route and make routes publicly accessible
  - not-found.tsx Not found UI for a segment and its children
- public 静态文件，代码可以用/引用
- .eslintrc.json ESLint配置
- next.config.js Next.js配置
- postcss.config.js postcss配置
- tailwind.config.ts tailwind css配置
- tsconfig.json TypeScript配置

当运行 npm run dev 时，app/layout.tsx 会自动创建

Next.js 有内置的 not-found 界面
