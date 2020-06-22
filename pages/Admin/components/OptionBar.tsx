import { Button, Upload } from "antd";
import { LeftOutlined, RightOutlined, UploadOutlined } from "@ant-design/icons";
import React from "react";
import styled, { Box } from "@xstyled/styled-components";

const UploadContainer = styled(Box)`
  color: white;
  padding: 10px;
`;
const OptionBar = ({ undoLayout, redoLayout, saveLayout, importFile }) => {
  return (
    <Box display="flex" width="100%" background={"success"}>
      <Button shape="circle" onClick={undoLayout} style={{ marginRight: 5 }}>
        <LeftOutlined />
      </Button>

      <Button shape="circle" onClick={redoLayout}>
        <RightOutlined />
      </Button>
      <UploadContainer display="flex" flex={1} px={2}>
        <Upload beforeUpload={importFile}>
          <Button>
            <UploadOutlined /> Upload
          </Button>
        </Upload>
      </UploadContainer>
      <Button onClick={saveLayout}>Save</Button>
      <Button onClick={saveLayout}>Delete All</Button>
    </Box>
  );
};
export default OptionBar;
