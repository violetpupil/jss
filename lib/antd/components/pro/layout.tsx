// https://procomponents.ant.design/components/layout
"use client";

import { ProLayout } from "@ant-design/pro-components";

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  // 不渲染左上角的 title 和 logo
  return <ProLayout menuHeaderRender={false}>{children}</ProLayout>;
}
