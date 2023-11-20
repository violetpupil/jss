# [Linking and Navigating](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)

```js
// 使用 Link 组件代替 a 标签
// 页面不重新加载，只部分渲染
import Link from 'next/link'
 
export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```

## [redirect](https://nextjs.org/docs/app/api-reference/functions/redirect)

```js
// page.js 路由重定向
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/example");
}
```
