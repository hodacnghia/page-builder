import { Menu, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownSquareOutlined,
  EditOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";

const ComponentMenu = ({ createLayout }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick = ({ item, key, keyPath, domEvent }) => {
    const props =
      key === "Button"
        ? {
            style: {
              size: "medium",
              type: "primary",
            },
            containerStyle: {
              justifyContent: "center",
              alignItems: "center",
            },
          }
        : {
            containerStyle: {
              justifyContent: "center",
              alignItems: "center",
            },
          };
    createLayout(key, props);
  };
  return (
    <div>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        // defaultSelectedKeys={["1"]}
        // defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        onClick={onClick}
      >
        <Menu.Item key="Button" icon={<DownSquareOutlined />}>
          Button
        </Menu.Item>
        <Menu.Item key="TextInput" icon={<EditOutlined />}>
          Text Input
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default ComponentMenu;
