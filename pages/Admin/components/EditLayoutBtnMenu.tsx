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
  { key: "flex-start", label: "top" },
  { key: "flex-end", label: "bottom" },
];

const EditLayoutBtnMenu = ({ updateLayout, currentLayout }) => {
  const { style, containerStyle } = currentLayout;

  const onChangeStyle = (styleKey) => (value) => {
    updateLayout({
      ...currentLayout,
      style: {
        ...currentLayout.style,
        [styleKey]: value,
      },
    });
  };

  const onChangeContainerStyle = (styleKey) => (value) => {
    updateLayout({
      ...currentLayout,
      containerStyle: {
        ...currentLayout.containerStyle,
        [styleKey]: value,
      },
    });
  };
  return (
    <Box display="flex" flexDirection="column">
      <Box>Style:</Box>
      <Box pl={3}>
        <InformationRow
          title="Size"
          value={style?.size}
          data={sizeData}
          onItemSelected={onChangeStyle("size")}
        />
        <InformationRow
          title="Block"
          value={style?.block}
          data={sizeData}
          type="checkbox"
          onChange={onChangeStyle("block")}
        />
        <InformationRow
          title="Text"
          value={style?.text}
          type="input"
          onChange={onChangeStyle("text")}
        />
      </Box>

      <Box>Container Style:</Box>
      <Box pl={3}>
        <InformationRow
          title="Justify"
          value={{ key: containerStyle?.justifyContent }}
          data={justifyData}
          onItemSelected={onChangeContainerStyle("justifyContent")}
        />
        <InformationRow
          title="Align"
          value={containerStyle?.alignItems}
          data={alignData}
          onItemSelected={onChangeContainerStyle("alignItems")}
        />
      </Box>
    </Box>
  );
};
export default EditLayoutBtnMenu;
