import React from "react";
import { Box } from "@xstyled/styled-components";
import InformationRow from "./InformationRow";

const sizeData = [
  { key: "large", label: "large" },
  { key: "small", label: "small" },
  { key: "middle", label: "middle" },
];
const justifyData = [
  { key: "center", label: "center" },
  { key: "flex-start", label: "left" },
  { key: "flex-end", label: "right" },
];
const alignData = [
  { key: "center", label: "center" },
  { key: "flex-start", label: "left" },
  { key: "flex-end", label: "right" },
];

const EditLayoutBtntMenu = ({ updateLayout, currentLayout }) => {
  const { style, containerStyle } = currentLayout;

  const onChangeStyle = (styleKey) => ({ item, key, keyPath, domEvent }) => {
    updateLayout({
      ...currentLayout,
      style: {
        ...currentLayout.style,
        [styleKey]: key,
      },
    });
  };
  const onChangeContainerStyle = (styleKey) => ({
    item,
    key,
    keyPath,
    domEvent,
  }) => {
    updateLayout({
      ...currentLayout,
      containerStyle: {
        ...currentLayout.containerStyle,
        [styleKey]: key,
      },
    });
  };
  const onClick = ({ item, key, keyPath, domEvent }) => {
    updateLayout(key);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box>Style:</Box>
      <Box pl={5}>
        <InformationRow
          title="Size"
          value={style?.size}
          data={sizeData}
          onItemSelected={onChangeStyle}
        />
      </Box>

      <Box>Container Style:</Box>
      <Box pl={5}>
        <InformationRow
          title="Justify"
          value={containerStyle?.justifyContent}
          data={justifyData}
          onItemSelected={onChangeContainerStyle}
        />
        <InformationRow
          title="Align"
          value={containerStyle?.alignItems}
          data={alignData}
          onItemSelected={onChangeContainerStyle}
        />
      </Box>
    </Box>
  );
};
export default EditLayoutBtntMenu;
