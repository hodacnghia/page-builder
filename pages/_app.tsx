import "node_modules/react-grid-layout/css/styles.css";
import "node_modules/react-resizable/css/styles.css";
import "antd/dist/antd.css";
import ThemeProvider from "components/Themes/ThemeProvider";
import { AppInitialProps } from "next/dist/next-server/lib/utils";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
App.getInitialProps = async ({
  Component,
  ctx,
}): Promise<AppInitialProps & { locale: string; messages: any }> => {
  if (ctx.isServer) {
  }

  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps } as any;
};
export default App;
