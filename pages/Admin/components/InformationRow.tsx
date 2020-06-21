import { Box } from "@xstyled/styled-components";
import Dropdown from "components/base/Dropdown";
import { Input } from "antd";

const renderPicker = (type, props) => {
  switch (type) {
    case "dropdown":
      return <Dropdown {...props} />;

    case "radio":
      break;
    case "input":
      return <Input {...props} />;
    default:
      break;
  }
};
const InformationRow = ({ title, type = "dropdown", ...props }: any) => {
  return (
    <Box display="flex" py={2}>
      <Box display="flex" pr={1}>
        {title}
      </Box>
      <Box display="flex" flexDirection="column" color="info">
        {renderPicker(type, props)}
      </Box>
    </Box>
  );
};

export default InformationRow;
