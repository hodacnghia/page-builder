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
  const { onSaveHistory, onUndo, onRedo, history } = useHistory({
    setLayouts,
    setLayoutsMapData,
  });
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  const onSave = () => {
    const obj = history.present;
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
      type: "application/json",
    });
    console.log(blob, "jijijijijij");
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `Daily_FS_Secondary_Sales_Report.json`;
    link.click();
  };
  const importFile = (file) => {
    console.log(event,'event')
    if (!file) return;
    setLayoutsMapData({});
    setLayouts([]);
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(file);
  };
  const onReaderLoad = (event) => {
    try {
      var obj = JSON.parse(event.target.result);


      onSaveHistory(obj);
      setLayoutsMapData(obj.layoutsMapData);
      setLayouts(obj.layouts);
    } catch (error) {}
  };
  const createLayout = (key, props = {}) => {
    const i = "n" + new Date().toISOString();
    const newData = {
      ...props,
      i,
      x: 0,
      y: 0, // puts it at the bottom
      w: 2,
      h: 1,
      key,
    };
    setLayouts([...layouts, i]);
    setLayoutsMapData({
      ...layoutsMapData,
      [i]: newData,
    });
    onSaveHistory(
      {
        layouts: [...layouts, i],
        layoutsMapData: {
          ...layoutsMapData,
          [i]: newData,
        },
      },
      true
    );
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

    setLayoutsMapData(newLayoutsMapData);
    onSaveHistory({
      layouts,
      layoutsMapData: newLayoutsMapData,
    });
  };
  const updateStyleLayout = (layout) => {
    setLayoutsMapData({
      ...layoutsMapData,
      [layout.i]: { ...layoutsMapData[layout.i], ...layout },
    });
    onSaveHistory({
      layouts,
      layoutsMapData: {
        ...layoutsMapData,
        [layout.i]: { ...layoutsMapData[layout.i], ...layout },
      },
    });
  };
  const onLayoutClick = (key) => {
    if (layoutFocus === key) {
      setLayoutFocus(null);
    }
    setLayoutFocus(key);
  };

  return (
    <Box display={loaded ? "flex" : "block"} p={2} opacity={loaded ? 1 : 0}>
      <Box width={300}>
        <ComponentMenu
          createLayout={createLayout}
          {...{ onUndo, onRedo, onSave, importFile }}
        />
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
          updateLayout={updateStyleLayout}
          layoutFocus={layoutFocus}
          currentLayout={layoutsMapData?.[layoutFocus] || null}
        />
      </Box>
    </Box>
  );
};
