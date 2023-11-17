// https://procomponents.ant.design/components/layout
// 解决警告
// Warning: Prop `className` did not match.
// Server: "css-dev-only-do-not-override-1vd92qf ant-design-pro ant-pro-layout ant-pro-layout-fix-siderbar ant-pro-layout-side"
// Client: "css-dev-only-do-not-override-1vd92qf ant-design-pro ant-pro-layout screen-xxl ant-pro-layout-fix-siderbar ant-pro-layout-side"
// 删除缓存文件的以下语句
// (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classNames, \"screen-\".concat(colSize), colSize),
// .next\server\vendor-chunks\@ant-design.js
// .next\static\chunks\app\layout.js
"use client";

import { ProLayout } from "@ant-design/pro-components";

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  // 不渲染左上角的 title 和 logo
  return <ProLayout menuHeaderRender={false}>{children}</ProLayout>;
}
