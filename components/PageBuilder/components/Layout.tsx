import React from "react";
import { Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";

const renderComponentByKey = (key, layout) => {
  const { style } = layout;
  switch (key) {
    case "Button":
      return <Button {...style}>{style.text}</Button>;
    case "TextInput":
      const TextInput = style.type === "text" ? Input : TextArea;

      return <TextInput autoSize={{ minRows: 1, maxRows: 3 }} {...style} />;
    default:
      return <div />;
  }
};

const Layout = ({ layout }: { layout: any }) => {
  return renderComponentByKey(layout.key, layout);
};
export default Layout;
