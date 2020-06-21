import "node_modules/react-grid-layout/css/styles.css";
import "node_modules/react-resizable/css/styles.css";
import "antd/dist/antd.css";

import AdminPage from "./Admin/AdminPage";
import ThemeProvider from "components/Themes/ThemeProvider";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Page Builder</title>
      </Head>

      <AdminPage />
    </>
  );
};
export default Home;
