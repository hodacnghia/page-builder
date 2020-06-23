import { Box } from "@xstyled/styled-components";
import Dropdown from "components/base/Dropdown";
import { Input, Checkbox } from "antd";

const renderPicker = (type, props) => {
  switch (type) {
    case "dropdown":
      return <Dropdown {...props} />;

    case "checkbox":
      return (
        <Checkbox
          checked={props.value}
          {...props}
          onChange={(event) => props.onChange(event.target.checked)}
        ></Checkbox>
      );
    case "input":
      return (
        <Input
          {...props}
          onChange={(event) => props.onChange(event.target.value)}
        />
      );
    default:
      break;
  }
};
const InformationRow = ({ title, type = "dropdown", ...props }: any) => {
  return (
    <Box display="flex" py={2} alignItems="center">
      <Box display="flex" pr={1} color="primary">
        {title}
      </Box>
      <Box display="flex" flexDirection="column" color="info">
        {renderPicker(type, props)}
      </Box>
    </Box>
  );
};

export default InformationRow;
