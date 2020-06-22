import GridLayout from "react-grid-layout";
import React from "react";
import { map } from "lodash";
import Layout from "./components/Layout";

const PageBuilder = ({
  onLayoutClick,
  layout,
  updateComponent,
  focusComponentId,
  layoutMapData,
}) => {
  const onItemClick = (key) => () => {
    onLayoutClick(key);
  };
  const generateDOM = () => {
    const h = layout.map((item) => ({ ...layoutMapData[item] }));
    return map(h, function (component) {
      return (
        <div
          onClick={onItemClick(component.i)}
          key={component.i}
          data-grid={component}
          style={{
            display: "flex",
            flex: 1,
            border: focusComponentId === component.i ? "1px solid red" : "",
            ...component.containerStyle,
          }}
        >
          <Layout key={component.i} layout={component} />{" "}
        </div>
      );
    });
  };

  return (
    <GridLayout
      onDragStop={(layout) => {
        updateComponent(layout);
      }}
      onResizeStop={(layout) => {
        updateComponent(layout);
      }}
      className="layout"
      rowHeight={60}
      width={900}
      isDraggable
      cols={10}
      layout={layout.map((item) => ({ ...layoutMapData[item] }))}
    >
      {generateDOM()}
    </GridLayout>
  );
};
export default PageBuilder;
