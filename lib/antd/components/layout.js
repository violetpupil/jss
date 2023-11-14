// https://ant-design.antgroup.com/components/layout-cn
// 布局容器
// className 类名
// style 样式
import { Layout } from "antd";

// 顶部 侧边栏 内容部分 底部
// 只能放在 Layout 中
const { Header, Sider, Content, Footer } = Layout;

// 默认布局
export function DefaultLayout({ children }) {
  return children;
}
