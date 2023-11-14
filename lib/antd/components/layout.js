// https://ant-design.antgroup.com/components/layout-cn
// 使用 Header, Sider, Content, Footer 时必须指定
"use client";

// 布局容器
// className 类名
// style 样式
import { Layout } from "antd";

// 顶部 侧边栏 内容部分 底部
// 只能放在 Layout 中
const { Header, Sider, Content, Footer } = Layout;

// 默认布局
export function DefaultLayout({ children }) {
  // 默认背景色为灰色，改为白色
  return <Layout style={{ backgroundColor: "white" }}>{children}</Layout>;
}
