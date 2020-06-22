import React, { useMemo } from "react";
import { Box } from "@xstyled/styled-components";
import InformationRow from "./InformationRow";

const typeData = [
  { key: "textarea", label: "Textarea" },
  { key: "text", label: "Text" },
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

const EditLayoutInputMenu = ({ updateLayout, currentLayout }) => {
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

  return useMemo(
    () => (
      <Box display="flex" flexDirection="column">
        <Box>Style:</Box>
        <Box pl={3}>
          <InformationRow
            title="Type"
            value={style?.type}
            data={typeData}
            onItemSelected={onChangeStyle("type")}
          />
          <InformationRow
            title="Placeholder"
            value={style?.placeholder}
            type="input"
            onChange={onChangeStyle("placeholder")}
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
    ),
    [style, containerStyle, currentLayout]
  );
};
export default EditLayoutInputMenu;
