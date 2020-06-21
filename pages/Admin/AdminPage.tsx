import PageBuilder from "components/PageBuilder";
import ComponentMenu from "./components/ComponentMenu";
import { Box } from "@xstyled/styled-components";
import { useState, useEffect } from "react";

export default () => {
  const [loaded, setLoaded] = useState(false);
  console.log(loaded, "??????????");
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    <Box display={loaded ? "flex" : "block"} opacity={loaded ? 1 : 0}>
      <ComponentMenu />

      <Box px={10} opacity={loaded ? 1 : 0}>
        <PageBuilder loaded={loaded} />
      </Box>
    </Box>
  );
};
