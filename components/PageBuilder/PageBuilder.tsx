import { WidthProvider, Responsive } from "react-grid-layout";
import React from "react";
import { map } from "lodash";
import Layout from "./components/Layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const PageBuilder = ({ onLayoutClick, layouts, layoutFocus }: any) => {
  const onItemClick = (key) => () => {
    onLayoutClick(key);
  };
  const generateDOM = () => {
    // Generate items with properties from the layout, rather than pass the layout directly

    return map(layouts, function (l) {
      return (
        <div
          onClick={onItemClick(l.i)}
          key={l.i}
          data-grid={l}
          style={{
            display: "flex",
            border: layoutFocus === l.i ? "1px solid red" : "",
            ...l.containerStyle,
          }}
        >
          <Layout key={l.i} layout={l} />{" "}
        </div>
      );
    });
  };

  return (
    <ResponsiveReactGridLayout
      className="layout"
      rowHeight={60}
      width={500}
      // isResizable
      isDraggable
      // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      {generateDOM()}
    </ResponsiveReactGridLayout>
  );
};
export default PageBuilder;
