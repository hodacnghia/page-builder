import React from "react";
import EditLayoutBtnMenu from "./EditLayoutBtnMenu";
import EditLayoutInputMenu from "./EditLayoutInputMenu";
import { Box } from "@xstyled/styled-components";
import { Button } from "antd";

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

const EditLayoutMenu = ({
  updateComponentStyle,
  focusComponent,
  deleteComponent,
}) => {
  const onDeleteComponent = () => {
    deleteComponent(focusComponent);
  };
  return (
    <Box
      p={2}
      backgroundColor="white"
      mx="auto"
      flex={1}
      display="flex"
      flexDirection="column"
      height="100%"
    >
      {renderComponentByKey(focusComponent?.key, {
        focusComponent,
        updateComponentStyle,
      })}
      {focusComponent && (
        <Button danger onClick={onDeleteComponent}>
          Delete
        </Button>
      )}
    </Box>
  );
};
export default EditLayoutMenu;
