// https://ant-design.antgroup.com/components/layout-cn
// 使用 Header, Sider, Content, Footer 时必须指定
"use client";

// Layout 布局容器 默认背景色为灰色
// className 类名
// style 样式
import { Layout, Menu } from "antd";
import { getMenuItem } from "./menu";

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
  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Sider style={{ backgroundColor: "white" }}>
        <Menu
          // 初始选中的菜单项 key 数组
          defaultSelectedKeys={["n1"]}
          // 菜单项
          items={[
            getMenuItem("Navigation One", "n1", "/n1"),
            getMenuItem("Navigation Two", "n2", "/n2"),
          ]}
        />
      </Sider>
      <Content style={{ margin: "0 16px" }}>{children}</Content>
    </Layout>
  );
}
