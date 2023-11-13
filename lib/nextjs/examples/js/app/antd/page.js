import { DatePicker } from "antd";
// 线框风格设置图标组件
import { SettingOutlined } from "@ant-design/icons";
import { DefaultMenu } from "../../util/antd/menu";

export default function Page() {
  return (
    <>
      <DatePicker />
      <hr />
      <SettingOutlined />
      <hr />
      <DefaultMenu />
    </>
  );
}
