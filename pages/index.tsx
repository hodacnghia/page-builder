import { Box } from "@xstyled/styled-components";
import Header from "app/layouts/Header";
import AdminPage from "app/Admin/AdminPage";

const Home = () => {
  return (
    <Box backgroundColor="aliceblue" height="100%">
      <Header />
      <AdminPage />
    </Box>
  );
};
export default Home;
