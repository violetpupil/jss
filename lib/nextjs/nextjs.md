# [nextjs](https://nextjs.org/)

[教程](https://nextjs.org/learn/foundations/about-nextjs)

[文档](https://nextjs.org/docs)

## [安装](https://nextjs.org/docs/getting-started/installation)

```bash
# 自动创建项目文件夹
npx create-next-app@latest
# Run the Development Server
# http://localhost:3000
npm run dev
# 运行生产服务器
npm run start
# 构建
npm run build
```

## [Project Structure](https://nextjs.org/docs/getting-started/project-structure)

Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files.

- app 网站根目录页面
  - favicon.ico 网站图标
- public 静态文件，代码可以用/引用
- .eslintrc.json ESLint配置
- next.config.js Next.js配置
- postcss.config.js postcss配置
- tailwind.config.ts tailwind css配置
- tsconfig.json TypeScript配置

## faq

Q: app/globals.css提示Unknown at rule @tailwind

A: vscode安装PostCSS Language Support插件
