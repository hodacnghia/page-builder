import styled, { Box } from "@xstyled/styled-components";

const NavItem = styled(Box)`
  color: white;
  padding: 10px;
`;
const Header = () => {
  return (
    <Box
      display="flex"
      width={"100%"}
      justifyContent="flex-end"
      backgroundColor="primary"
    >
      <NavItem>Home</NavItem>
      <NavItem>About</NavItem>
    </Box>
  );
};
export default Header;
