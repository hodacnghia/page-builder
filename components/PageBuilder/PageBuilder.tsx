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
  console.log('render lai')
  const onItemClick = (key) => () => {
    onLayoutClick(key);
  };
  const generateDOM = () => {
    // Generate items with properties from the layout, rather than pass the layout directly

    return map(layouts, function (item) {
      const layout = layoutsMapData[item];
      console.log(layout,'????????????')
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

  return (
    <ResponsiveReactGridLayout
      // onLayoutChange={(layout) => {
      //   console.log(layout);
      //   console.log(layoutsMapData[layout.i]);
      //   if (isEqual(layout, layoutsMapData[layout.i])) return;
      //   console.log("onLayoutChange");
      //   updateLayout(layout);
      // }}
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
      // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      {generateDOM()}
    </ResponsiveReactGridLayout>
  );
};
export default PageBuilder;
