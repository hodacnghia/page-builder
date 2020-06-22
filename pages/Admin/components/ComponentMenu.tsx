import { Menu, Button, Upload } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownSquareOutlined,
  UploadOutlined,
  EditOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Box } from "@xstyled/styled-components";

const ComponentMenu = ({
  createLayout,
  onUndo,
  onRedo,
  onSave,
  importFile,
}) => {
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
    createLayout(key, props);
  };

  return (
    <div>
      <Box display="flex" flex={1} pb={5} justifyContent="space-between">
        <Button type="primary" onClick={toggleCollapsed}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
        <Button type="primary" onClick={onUndo}>
          Undo
        </Button>

        <Button type="primary" onClick={onRedo}>
          Redo
        </Button>
      </Box>
      <Upload beforeUpload={importFile}>
        <Button>
          <UploadOutlined /> Upload
        </Button>
      </Upload>

      <Button type="primary" onClick={onSave}>
        Save
      </Button>

      <Menu
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
