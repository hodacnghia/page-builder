import RGL, { WidthProvider } from "react-grid-layout";
import React from "react";
import { map } from "lodash";
import Layout from "./components/Layout";
import { Box } from "@xstyled/styled-components";
const ReactGridLayout = WidthProvider(RGL);

const PageBuilder = ({
  setFocusComponent,
  layout,
  updateComponent,
  focusComponentId,
  layoutMapData,
}) => {
  const onItemClick = (key) => () => {
    setFocusComponent(key);
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
    <Box backgroundColor="white" minHeight={500}>
      <ReactGridLayout
        onDragStop={(layout) => {
          updateComponent(layout);
        }}
        onResizeStop={(layout) => {
          updateComponent(layout);
        }}
        className="layout"
        rowHeight={60}
        // width={910}
        isDraggable
        cols={10}
        layout={(layout || []).map((item) => ({ ...layoutMapData[item] }))}
      >
        {generateDOM()}
      </ReactGridLayout>
    </Box>
  );
};
export default PageBuilder;
