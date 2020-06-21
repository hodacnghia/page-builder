import PageBuilder from "components/PageBuilder/PageBuilder";
import ComponentMenu from "./components/ComponentMenu";
import { Box } from "@xstyled/styled-components";
import { useState, useEffect } from "react";
import EditLayoutMenu from "./components/EditLayoutMenu";

export default () => {
  const [loaded, setLoaded] = useState(false);
  const [layoutFocus, setLayoutFocus] = useState(null);
  const [layouts, setLayouts] = useState<any>([]);
  const [layoutsMapData, setLayoutsMapData] = useState<any>([]);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  const createLayout = (key, props = {}) => {
    const i = "n" + new Date().toISOString();
    const newData = {
      i: "n" + new Date().toISOString(),
      x: 0,
      y: 0, // puts it at the bottom
      w: 2,
      h: 1,
      key,
      ...props,
    };
    setLayouts([...layouts, newData]);
    setLayoutsMapData({
      ...layoutsMapData,
      [i]: newData,
    });
  };
  const updateLayout = (layout) => {
    setLayoutsMapData({
      ...layoutsMapData,
      [layout.i]: layout,
    });
  };
  const onLayoutClick = (key) => {
    if (layoutFocus === key) {
      setLayoutFocus(null);
    }
    setLayoutFocus(key);
  };

  return (
    <Box
      display={loaded ? "flex" : "block"}
      style={{ maxWidth: 1200 }}
      opacity={loaded ? 1 : 0}
    >
      <ComponentMenu createLayout={createLayout} />
      <Box
        px={20}
        opacity={loaded ? 1 : 0}
        style={
          loaded
            ? {
                display: "flex",
                flex: 1,

              }
            : {}
        }
      >
        <PageBuilder
          layoutFocus={layoutFocus}
          onLayoutClick={onLayoutClick}
          layouts={layouts}
        />
      </Box>
      <Box width={300}>
        <EditLayoutMenu
          updateLayout={updateLayout}
          layoutFocus={layoutFocus}
          currentLayout={layoutsMapData?.[layoutFocus] || null}
        />
      </Box>
    </Box>
  );
};
