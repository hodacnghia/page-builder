import { useState } from "react";
import { useHistory } from "hooks/useHistory";
import { reduce, filter, throttle } from "lodash";

export default () => {
  const [focusComponentId, setFocusedComponentId] = useState(null);
  const [layout, setLayout] = useState<any>([]);
  const [layoutMapData, setLayoutMapData] = useState<any>([]);
  const { onSaveHistory, history, onUndo, onRedo } = useHistory({
    setLayout,
    setLayoutMapData,
  });
  console.log(history, "history");
  const saveLayout = () => {
    const obj = history.present;
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
      type: "application/json",
    });

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `layout-build${new Date().toISOString()}.json`;
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
        setLayoutMapData(obj.layoutMapData);
        setLayout(obj.layout);
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
        layout: [...layout, i],
        layoutMapData: {
          ...layoutMapData,
          [i]: newData,
        },
      },
      true
    );
  };

  const deleteLayout = () => {
    setLayout([]);
    setLayoutMapData({});
    onSaveHistory(
      {
        layout: [],
        layoutMapData: {},
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
      layout,
      layoutMapData: newLayoutsMapData,
    });
  };
  const updateComponentStyle = (component) => {
    setLayoutMapData({
      ...layoutMapData,
      [component.i]: { ...layoutMapData[component.i], ...component },
    });
    onSaveHistory({
      layout,
      layoutMapData: {
        ...layoutMapData,
        [component.i]: { ...layoutMapData[component.i], ...component },
      },
    });
  };
  const setFocusComponent = (key) => {
    if (focusComponentId === key) {
      setFocusedComponentId(null);
    }
    setFocusedComponentId(key);
  };
  const deleteComponent = (focusComponent) => {
    const newLayout = filter(layout, (compId) => compId !== focusComponent.i);

    const newLayoutsMapData = layoutMapData;
    delete newLayoutsMapData[focusComponent.i];
    setLayout(newLayout);
    setLayoutMapData(newLayoutsMapData);
    onSaveHistory(
      {
        layout: newLayout,
        layoutMapData: newLayoutsMapData,
      },
      true
    );
  };
  return {
    saveLayout,
    deleteLayout,
    importFile,
    createComponent,
    updateComponent,
    updateComponentStyle,
    setFocusComponent,
    undoLayout: throttle(onUndo, 1000),
    redoLayout: throttle(onRedo, 1000),
    focusComponentId,
    layout,
    layoutMapData,
    history,
    deleteComponent,
  };
};
