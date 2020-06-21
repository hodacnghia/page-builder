

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
