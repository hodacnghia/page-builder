import "node_modules/react-grid-layout/css/styles.css";
import "node_modules/react-resizable/css/styles.css";
import "antd/dist/antd.css";
import AdminPage from "./Admin/AdminPage";
import Header from "./layouts/Header";
import ThemeProvider from "components/Themes/ThemeProvider";

const Home = () => {
  return (
    <ThemeProvider>
      <Header />
      <AdminPage />
    </ThemeProvider>
  );
};
export default Home;
