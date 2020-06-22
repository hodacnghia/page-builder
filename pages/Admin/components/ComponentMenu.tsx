import { Menu, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownSquareOutlined,
  EditOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Box } from "@xstyled/styled-components";

const ComponentMenu = ({ createComponent }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick = ({ key }) => {
    const props =
      key === "Button"
        ? {
            style: {
              size: "middle",
              type: "primary",
              text: "Button",
              shape: 'omitted'
            },
            containerStyle: {
              justifyContent: "center",
              alignItems: "center",
            },
          }
        : {
            style: {
              type: "text",
            },
            containerStyle: {
              justifyContent: "center",
              alignItems: "center",
            },
          };
    createComponent(key, props);
  };

  return (
    <div>
      <Box display="flex" flex={1} pb={5} justifyContent="space-between">
        <Button type="primary" onClick={toggleCollapsed}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
      </Box>

      <Menu
        mode="inline"
        // theme="light"
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
