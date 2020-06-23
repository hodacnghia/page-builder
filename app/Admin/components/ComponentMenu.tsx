import { Menu } from "antd";
import { DownSquareOutlined, EditOutlined } from "@ant-design/icons";
import React from "react";
import { Box } from "@xstyled/styled-components";

const ComponentMenu = ({ createComponent }) => {
  const onClick = ({ key }) => {
    let props = {};
    switch (key) {
      case "Button":
        props = {
          style: {
            size: "middle",
            type: "primary",
            text: "Button",
            shape: "omitted",
          },
          containerStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
        };
        break;
      case "TextInput":
        props = {
          style: {
            type: "text",
          },
          containerStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
        };
      case "Picture":
        props = {
          style: {
            type: "text",
          },
          containerStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
        };
      default:
        break;
    }

    createComponent(key, props);
  };

  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <Menu onClick={onClick}>
        <Menu.Item key="Button" icon={<DownSquareOutlined />}>
          Button
        </Menu.Item>
        <Menu.Item key="TextInput" icon={<EditOutlined />}>
          Text Input
        </Menu.Item>
      </Menu>
    </Box>
  );
};
export default ComponentMenu;
