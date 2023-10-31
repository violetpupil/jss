# [nextjs](https://nextjs.org/)

[react](https://nextjs.org/learn/react-foundations)

[example](https://nextjs.org/learn/dashboard-app)

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

### 手动安装

```bash
# 安装项目依赖
npm install next@latest react@latest react-dom@latest
# 安装typescript开发依赖
npm install typescript@latest @types/node@latest @types/react@latest @types/react-dom@latest -D
```

```json
// Open your package.json file and add the following scripts:
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## [Project Structure](https://nextjs.org/docs/getting-started/project-structure)

- app 网站根目录页面
  - favicon.ico 网站图标
- public 静态文件，代码可以用/引用

## faq

Q: app/globals.css提示Unknown at rule @tailwind

A: vscode安装PostCSS Language Support插件
