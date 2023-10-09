# [安装](https://nextjs.org/docs/getting-started/installation)

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

## 手动安装

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

```typescript
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

```ts
// app/page.tsx
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```
