import React from "react";
import EditLayoutBtnMenu from "./EditLayoutBtnMenu";
import EditLayoutInputMenu from "./EditLayoutInputMenu";
import { Box } from "@xstyled/styled-components";

const renderComponentByKey = (key, props) => {
  switch (key) {
    case "Button":
      return <EditLayoutBtnMenu {...props} />;
    case "TextInput":
      return <EditLayoutInputMenu {...props} />;
    default:
      return <div />;
  }
};

const EditLayoutMenu = ({ updateLayout, currentLayout, layoutFocus }) => {
  return (
    <Box p={2}>
      {renderComponentByKey(currentLayout?.key, {
        currentLayout,
        updateLayout,
      })}
    </Box>
  );
};
export default EditLayoutMenu;
