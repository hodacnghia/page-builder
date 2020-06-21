import { Menu, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownSquareOutlined,
  EditOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import EditLayoutBtntMenu from "./EditLayoutBtntMenu";

const renderComponentByKey = (key, props) => {
  switch (key) {
    case "Button":
      return <EditLayoutBtntMenu {...props} />;
    case "TextInput":
      return <div />;
    default:
      return <div />;
  }
};

const EditLayoutMenu = ({ updateLayout, currentLayout, layoutFocus }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick = ({ item, key, keyPath, domEvent }) => {
    updateLayout(key);
  };
  console.log(currentLayout, "currentLayout");
  return (
    <>
      {JSON.stringify(currentLayout)}
      {renderComponentByKey(currentLayout?.key, {
        currentLayout,
        updateLayout,
      })}
    </>
  );
};
export default EditLayoutMenu;
