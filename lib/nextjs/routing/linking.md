# [Linking and Navigating](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)

## [redirect](https://nextjs.org/docs/app/api-reference/functions/redirect)

```js
// page.js 路由重定向
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/example");
}
```
