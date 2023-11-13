# [Ant Design](https://ant-design.antgroup.com/index-cn)

[dev](https://ant-design.antgroup.com/docs/react/introduce-cn)

[components](https://ant-design.antgroup.com/components/overview-cn/)

## [在 Next.js 中使用](https://ant-design.antgroup.com/docs/react/use-with-next-cn)

```bash
# 安装 antd
npm install antd
```

### 解决页面闪动

1 安装typescript开发依赖

2 安装依赖 `npm install @ant-design/cssinjs`

3 创建文件 lib/AntdRegistry.tsx

```ts
'use client';

import React from 'react';
// 适用于 Next.js 14 以下版本
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
// 适用于 Next.js 14 版本
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs/lib';
import type Entity from '@ant-design/cssinjs/es/Cache';
import { useServerInsertedHTML } from 'next/navigation';

const StyledComponentsRegistry = ({ children }: React.PropsWithChildren) => {
  const cache = React.useMemo<Entity>(() => createCache(), []);
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ));
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default StyledComponentsRegistry;
```

4 修改 RootLayout

```js
import StyledComponentsRegistry from "../lib/AntdRegistry";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
```
