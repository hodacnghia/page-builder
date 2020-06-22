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

const EditLayoutMenu = ({ updateComponentStyle, focusComponent }) => {
  return (
    <Box p={2}>
      {renderComponentByKey(focusComponent?.key, {
        focusComponent,
        updateComponentStyle,
      })}
    </Box>
  );
};
export default EditLayoutMenu;
