import { WidthProvider, Responsive } from "react-grid-layout";
import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";

const renderComponentByKey = (key, layout) => {
  switch (key) {
    case "Button":
      const { style } = layout;
      return (
        <Button block {...style}>
          Primary Button
        </Button>
      );
    case "TextInput":
      return <Input />;
    default:
      return <div />;
  }
};

const Layout = ({ layout }: { layout: any }) => {
  return (
    <div key={layout.i} data-grid={layout}>
      {renderComponentByKey(layout.key, layout)}
    </div>
  );
};
export default Layout;
