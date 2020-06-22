import PageBuilder from "components/PageBuilder/PageBuilder";
import ComponentMenu from "./components/ComponentMenu";
import { Box } from "@xstyled/styled-components";
import { useState, useEffect } from "react";
import EditLayoutMenu from "./components/EditLayoutMenu";
import usePageBuilder from "./hooks/usePageBuilder";

import OptionBar from "./components/OptionBar";

export default () => {
  const [loaded, setLoaded] = useState(false);

  const {
    saveLayout,
    importFile,
    createComponent,
    updateComponent,
    updateComponentStyle,
    setFocusComponent,
    undoLayout,
    redoLayout,
    focusComponentId,
    layout,
    layoutMapData,
    deleteLayout,
    history,
    deleteComponent,
  } = usePageBuilder();

  useEffect(() => {
    // Set timeout to avoid grid build break UI
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  return (
    <Box display={loaded ? "flex" : "block"} p={2} opacity={loaded ? 1 : 0}>
      <Box maxWidth={200} backgroundColor="white">
        <ComponentMenu
          {...{
            createComponent,
          }}
        />
      </Box>
      <Box
        px={20}
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        flex={1}
        opacity={loaded ? 1 : 0}
      >
        <OptionBar
          {...{
            undoLayout,
            redoLayout,
            saveLayout,
            importFile,
            deleteLayout,
            history,
            layout,
          }}
        />
        <PageBuilder
          focusComponentId={focusComponentId}
          setFocusComponent={setFocusComponent}
          layout={layout}
          updateComponent={updateComponent}
          layoutMapData={layoutMapData}
        />
      </Box>
      <Box width={200}>
        <EditLayoutMenu
          deleteComponent={deleteComponent}
          updateComponentStyle={updateComponentStyle}
          focusComponent={layoutMapData?.[focusComponentId] || null}
        />
      </Box>
    </Box>
  );
};
