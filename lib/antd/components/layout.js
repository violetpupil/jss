// https://ant-design.antgroup.com/components/layout-cn
// 使用 Header, Sider, Content, Footer 时必须指定
"use client";

// 布局容器
// className 类名
// style 样式
import { Layout } from "antd";

// 只能放在 Layout 中
// Header 顶部 默认背景色为黑蓝色
// Sider 侧边栏 默认背景色为黑蓝色
// Content 内容部分 默认背景色为浅灰色
// Footer 底部 默认背景色为浅灰色
//
// 改变布局方向时，需要嵌套一层 Layout
// 竖向为主
// <Layout>
//   <Header />
//   <Layout>
//     <Sider />
//     <Content />
//   </Layout>
//   <Footer />
// </Layout>
// 横向为主
// <Layout>
//   <Sider />
//   <Layout>
//     <Header />
//     <Content />
//     <Footer />
//   </Layout>
// </Layout>
const { Header, Sider, Content, Footer } = Layout;

// 默认布局
export function DefaultLayout({ children }) {
  // 默认背景色为灰色，改为白色
  return <Layout style={{ backgroundColor: "white" }}>{children}</Layout>;
}

// 默认侧边栏
export function DefaultSider({ children }) {
  // 默认背景色为黑蓝色，改为白色
  return <Sider style={{ backgroundColor: "white" }}>{children}</Sider>;
}
