import { useState } from "react";

export const useHistory = ({ setLayouts, setLayoutsMapData }) => {
  const [history, setHistory] = useState({
    past: [],
    present: null,
    future: [],
  });
  console.log(history, "historyhistoryhistoryhistory");
  const onSaveHistory = (present) => {
    const past = [...history.past, history.present];
    setHistory({
      ...history,
      ...{
        past,
        present,
      },
    });
  };

  const onUndo = () => {
    if (history.past.length === 0) {
      return;
    }
    const lastPastIndex = history.past.length - 1;
    const future = [history.present, ...history.future];
    const present = history.past[lastPastIndex];
    const past =
      lastPastIndex === 0 ? [] : history.past.slice(0, lastPastIndex);
    console.log(past, "past");
    setHistory({
      ...{
        present,
        past,
        future,
      },
    });

    setLayouts(present?.layouts || []);
    setLayoutsMapData(present?.layoutsMapData || {});
  };

  const onRedo = () => {
    if (history.future.length === 0) {
      return;
    }
    const past = [...history.past, history.present];
    const [present, ...future] = history.future;

    setHistory({
      ...{
        present,
        past,
        future,
      },
    });

    setLayouts(present?.layouts);
    setLayoutsMapData(present?.layoutsMapData);
  };
  return {
    onUndo,
    onRedo,
    onSaveHistory,
    history,
  };
};
