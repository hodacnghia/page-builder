import PageBuilder from "components/PageBuilder/PageBuilder";
import ComponentMenu from "./components/ComponentMenu";
import { Box } from "@xstyled/styled-components";
import { useState, useEffect } from "react";
import EditLayoutMenu from "./components/EditLayoutMenu";
import { useHistory } from "hooks/useHistory";
import { reduce } from "lodash";

export default () => {
  const [loaded, setLoaded] = useState(false);
  const [layoutFocus, setLayoutFocus] = useState(null);
  const [layouts, setLayouts] = useState<any>([]);
  const [layoutsMapData, setLayoutsMapData] = useState<any>([]);
  const { onSaveHistory, onUndo, onRedo } = useHistory({
    setLayouts,
    setLayoutsMapData,
  });
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  const createLayout = (key, props = {}) => {
    const i = "n" + new Date().toISOString();
    const newData = {
      i,
      x: 0,
      y: 0, // puts it at the bottom
      w: 2,
      h: 1,
      key,
      ...props,
    };
    setLayouts([...layouts, i]);
    setLayoutsMapData({
      ...layoutsMapData,
      [i]: newData,
    });
    onSaveHistory({
      layouts: [...layouts, i],
      layoutsMapData: {
        ...layoutsMapData,
        [i]: newData,
      },
    });
  };

  const updateLayout = (newLayouts) => {
    const newLayoutsMapData = reduce(
      newLayouts,
      (res, layout) => {
        res[layout.i] = { ...layoutsMapData[layout.i], ...layout };
        return res;
      },
      {}
    );
    console.log(newLayoutsMapData,'newLayoutsMapData')
    setLayoutsMapData(newLayoutsMapData);
    onSaveHistory({
      layouts,
      layoutsMapData: newLayoutsMapData,
    });
  };
  const onLayoutClick = (key) => {
    if (layoutFocus === key) {
      setLayoutFocus(null);
    }
    setLayoutFocus(key);
  };

  return (
    <Box display={loaded ? "flex" : "block"} opacity={loaded ? 1 : 0}>
      <Box width={300}>
        <ComponentMenu createLayout={createLayout} {...{ onUndo, onRedo }} />
      </Box>
      <Box
        px={20}
        opacity={loaded ? 1 : 0}
        style={
          loaded
            ? {
                display: "flex",
                flex: 1,
                minWidth: 900,
              }
            : {}
        }
      >
        <PageBuilder
          layoutFocus={layoutFocus}
          onLayoutClick={onLayoutClick}
          layouts={layouts}
          updateLayout={updateLayout}
          layoutsMapData={layoutsMapData}
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
