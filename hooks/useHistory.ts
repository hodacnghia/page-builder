import { useState } from "react";

export const useHistory = ({ setLayout, setLayoutMapData }) => {
  const [history, setHistory] = useState({
    past: [],
    present: null,
    future: [],
  });

  const onSaveHistory = (present, resetFuture: boolean | undefined = false) => {
    const past = [...history.past, history.present];
    setHistory({
      ...history,
      ...{
        past,
        present,
        future: resetFuture ? [] : history.future,
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

    setHistory({
      ...{
        present,
        past,
        future,
      },
    });

    setLayout(present?.layouts || []);
    setLayoutMapData(present?.layoutsMapData || {});
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

    setLayout(present?.layouts);
    setLayoutMapData(present?.layoutsMapData);
  };
  return {
    onUndo,
    onRedo,
    onSaveHistory,
    history,
  };
};
