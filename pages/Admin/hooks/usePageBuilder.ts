import { useState } from "react";
import { useHistory } from "hooks/useHistory";
import { reduce } from "lodash";

export default () => {
  const [focusComponentId, setFocusedComponentId] = useState(null);
  const [layout, setLayout] = useState<any>([]);
  const [layoutMapData, setLayoutMapData] = useState<any>([]);
  const { onSaveHistory, history, onUndo, onRedo } = useHistory({
    setLayout,
    setLayoutMapData,
  });

  const saveLayout = () => {
    const obj = history.present;
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
      type: "application/json",
    });

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `Daily_FS_Secondary_Sales_Report.json`;
    link.click();
  };
  const importFile = (file) => {
    if (!file) return;
    setLayoutMapData({});
    setLayout([]);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      try {
        var obj = JSON.parse(event.target.result);

        onSaveHistory(obj);
        setLayoutMapData(obj.layoutsMapData);
        setLayout(obj.layouts);
      } catch (error) {}
    };
    reader.readAsText(file);
  };

  const createComponent = (key, props = {}) => {
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
    setLayout([...layout, i]);
    setLayoutMapData({
      ...layoutMapData,
      [i]: newData,
    });
    onSaveHistory(
      {
        layouts: [...layout, i],
        layoutsMapData: {
          ...layoutMapData,
          [i]: newData,
        },
      },
      true
    );
  };

  const updateComponent = (newLayouts) => {
    const newLayoutsMapData = reduce(
      newLayouts,
      (res, layout) => {
        res[layout.i] = { ...layoutMapData[layout.i], ...layout };
        return res;
      },
      {}
    );

    setLayoutMapData(newLayoutsMapData);
    onSaveHistory({
      layouts: layout,
      layoutsMapData: newLayoutsMapData,
    });
  };
  const updateComponentStyle = (layout) => {
    setLayoutMapData({
      ...layoutMapData,
      [layout.i]: { ...layoutMapData[layout.i], ...layout },
    });
    onSaveHistory({
      layouts: layout,
      layoutsMapData: {
        ...layoutMapData,
        [layout.i]: { ...layoutMapData[layout.i], ...layout },
      },
    });
  };
  const setFocusComponent = (key) => {
    if (focusComponentId === key) {
      setFocusedComponentId(null);
    }
    setFocusedComponentId(key);
  };

  return {
    saveLayout,
    importFile,
    createComponent,
    updateComponent,
    updateComponentStyle,
    setFocusComponent,
    undoLayout: onUndo,
    redoLayout: onRedo,
    focusComponentId,
    layout,
    layoutMapData,
  };
};
