import React, { useMemo } from "react";
import { Box } from "@xstyled/styled-components";
import InformationRow from "./InformationRow";
import { typeData, justifyData, alignData } from "../utils/constants";

const EditLayoutInputMenu = ({ updateComponentStyle, focusComponent }) => {
  const { style, containerStyle } = focusComponent;

  const onChangeStyle = (styleKey) => (value) => {
    updateComponentStyle({
      ...focusComponent,
      style: {
        ...focusComponent.style,
        [styleKey]: value,
      },
    });
  };
  const onChangeContainerStyle = (styleKey) => (value) => {
    updateComponentStyle({
      ...focusComponent,
      containerStyle: {
        ...focusComponent.containerStyle,
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
    [style, containerStyle, focusComponent]
  );
};
export default EditLayoutInputMenu;
