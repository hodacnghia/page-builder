import React from "react";
import { Box } from "@xstyled/styled-components";
import InformationRow from "./InformationRow";
import {
  sizeData,
  justifyData,
  alignData,
  shapeData,
} from "../utils/constants";

const EditLayoutBtnMenu = ({ updateComponentStyle, focusComponent }) => {
  const { style, containerStyle } = focusComponent;

  const onChangeStyle = (styleKey) => (value) => {
      console.log(value,'value')
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
  return (
    <Box display="flex" flexDirection="column">
      <Box color="primary" fontWeight={500}>
        Style:
      </Box>
      <Box pl={3}>
        <InformationRow
          title="Size"
          value={style?.size}
          data={sizeData}
          onItemSelected={onChangeStyle("size")}
        />
        <InformationRow
          title="Shape"
          value={style?.shape}
          data={shapeData}
          onItemSelected={onChangeStyle("shape")}
        />
        <InformationRow
          title="Block"
          value={style?.block}
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

      <Box color="primary" fontWeight={500}>
        Container Style:
      </Box>
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
