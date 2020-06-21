import { WidthProvider, Responsive } from "react-grid-layout";
import React, { useEffect, useState } from "react";
import { map } from "lodash";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const PageBuilder = ({ loeaded }: any) => {
  // const [load, setLoad] = useState(false);
  // useEffect(() => {
  //   setLoad(loeaded);
  // }, [loeaded]);
  const onResize = (layout, oldLayoutItem, layoutItem, placeholder) => {
    if (layoutItem.h < 3 && layoutItem.w > 2) {
      layoutItem.w = 2;
      placeholder.w = 2;
    }

    if (layoutItem.h >= 3 && layoutItem.w < 2) {
      layoutItem.w = 2;
      placeholder.w = 2;
    }
  };
  const generateLayout = () => {
    const items = [
      { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
      { i: "b", x: 1, y: 0, w: 3, h: 12, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ];
    return map(items, function (item, i) {
      return {
        ...item,
      };
    });
  };
  const generateDOM = () => {
    // Generate items with properties from the layout, rather than pass the layout directly
    const layout = generateLayout();

    return map(layout, function (l) {
      return (
        <div key={l.i} data-grid={l} style={{ background: "grey" }}>
          <span className="text">{l.i}</span>
        </div>
      );
    });
  };

  return (
    <ResponsiveReactGridLayout
      className="layout"
      rowHeight={60}
      // width={1200}
      // useCSSTransforms={true}
      isResizable
      isDraggable
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      // onResize={onResize}
    >
      {generateDOM()}
    </ResponsiveReactGridLayout>
  );
};
export default PageBuilder;
