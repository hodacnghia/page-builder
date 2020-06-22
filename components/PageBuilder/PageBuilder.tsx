import GridLayout, { WidthProvider } from "react-grid-layout";
import React from "react";
import { map, isEqual } from "lodash";
import Layout from "./components/Layout";

const ResponsiveReactGridLayout = WidthProvider(GridLayout);

const PageBuilder = ({
  onLayoutClick,
  layouts,
  updateLayout,
  layoutFocus,
  layoutsMapData,
}: any) => {
  console.log("render lai");
  const onItemClick = (key) => () => {
    onLayoutClick(key);
  };
  const generateDOM = () => {
    const h = layouts.map((item) => ({ ...layoutsMapData[item] }));
    return map(h, function (layout) {
      return (
        <div
          onClick={onItemClick(layout.i)}
          key={layout.i}
          data-grid={layout}
          style={{
            display: "flex",
            flex: 1,
            border: layoutFocus === layout.i ? "1px solid red" : "",
            ...layout.containerStyle,
          }}
        >
          <Layout key={layout.i} layout={layout} />{" "}
        </div>
      );
    });
  };
  console.log(
    layouts.map((item) => ({ ...layoutsMapData?.[item] })),
    "layouts.map((item) => ({ ...layoutsMapData[item] })"
  );
  return (
    <GridLayout
      onDragStop={(layout) => {
        console.log(layout, "drag stop");
        updateLayout(layout);
      }}
      onResizeStop={(layout) => {
        console.log(layout, "resize stop");
        updateLayout(layout);
      }}
      className="layout"
      rowHeight={60}
      width={900}
      isDraggable
      cols={10}
      layout={layouts.map((item) => ({ ...layoutsMapData[item] }))}
    >
      {generateDOM()}
    </GridLayout>
  );
};
export default PageBuilder;
