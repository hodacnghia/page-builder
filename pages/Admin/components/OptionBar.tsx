import { Button, Upload } from "antd";
import { LeftOutlined, RightOutlined, UploadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styled, { Box } from "@xstyled/styled-components";

const UploadContainer = styled(Box)`
  > span {
    > .ant-upload-list-text {
      padding-bottom: 7px;
      color: black;
    }
    display: flex;
    align-items: center;
  }
  color: white;
`;

const OptionBar = ({
  undoLayout,
  redoLayout,
  saveLayout,
  importFile,
  deleteLayout,
  history,
  layout,
}) => {
  const [fileList, setFieldList] = useState([]);
  const handleChange = (info) => {
    let fileList = [...info.fileList];
    console.log(fileList, "fileList");
    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    const file = fileList[fileList.length - 1];
    if (!file) return setFieldList([]);
    // 2. Read from response and show file link

    if (file?.response) {
      // Component will show file.url as link
      file.url = file.response.url;
    }

    setFieldList([{ ...file, status: "done" }]);
  };
  const action = (file): Promise<any> => {
    const [name, extendType] = file.name.split(".");
    if (extendType === "json")
      return new Promise((resolve) => resolve(file.name));
  };
  return (
    <Box
      display="flex"
      width="100%"
      p={3}

      alignItems="center"
      backgroundColor="white"
      style={{
        borderBottom: "2px solid #23A0D3",
      }}
    >
      <Button
        disabled={(history?.past || []).length === 0}
        shape="circle"
        onClick={undoLayout}
        style={{ marginRight: 5 }}
      >
        <LeftOutlined />
      </Button>

      <Button
        disabled={(history?.future || []).length === 0}
        shape="circle"
        onClick={redoLayout}
      >
        <RightOutlined />
      </Button>
      <UploadContainer display="flex" alignItems="center" flex={1} px={2}>
        <Upload
          action={action}
          fileList={fileList}
          beforeUpload={importFile}
          onChange={handleChange}
          multiple={false}
        >
          <Button>
            <UploadOutlined /> Upload
          </Button>
        </Upload>
      </UploadContainer>
      <Button
        type="primary"
        ghost
        onClick={saveLayout}
        style={{ marginRight: 2 }}
      >
        Save
      </Button>
      <Button danger disabled={layout.length === 0} onClick={deleteLayout}>
        Delete All
      </Button>
    </Box>
  );
};
export default OptionBar;
