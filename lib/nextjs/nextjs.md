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

### 手动安装

```bash
npm install next@latest react@latest react-dom@latest
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

## faq

Q: app/globals.css提示Unknown at rule @tailwind

A: vscode安装PostCSS Language Support插件
