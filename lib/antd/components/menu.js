// https://ant-design.antgroup.com/components/menu-cn
"use client";

import { Menu } from "antd";

// 默认菜单
export function DefaultMenu() {
  const onClick = (e) => console.log(e);

  return (
    <Menu
      // 指定菜单栏宽度，像素
      style={{ width: 256 }}
      // 初始选中的菜单项 key 数组
      defaultSelectedKeys={["n1"]}
      // 菜单项
      items={[getMenuItem("Navigation One", "n1")]}
      // 点击 MenuItem 调用
      onClick={onClick}
    />
  );
}

// 创建 MenuItemType 对象
// label 菜单项标题
// key 菜单项唯一标志
export function getMenuItem(label, key) {
  return { label, key };
}
