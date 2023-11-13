// https://ant-design.antgroup.com/components/menu-cn
"use client";

import { Menu } from "antd";
import { getMenuItem } from "../../../util/antd/menu";

export default function Page() {
  return (
    <Menu
      // 指定菜单栏宽度，像素
      style={{ width: 256 }}
      // 初始选中的菜单项 key 数组
      defaultSelectedKeys={["n1"]}
      // 菜单项
      items={[getMenuItem("Navigation One", "n1")]}
    />
  );
}
