import AdminPage from "./Admin/AdminPage";
import Header from "./layouts/Header";
import { Box } from "@xstyled/styled-components";

const Home = () => {
  return (
    <Box backgroundColor='aliceblue' height='100%'>
      <Header />
      <AdminPage />
    </Box>
  );
};
export default Home;
