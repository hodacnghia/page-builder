import React, { FunctionComponent } from "react";
import { ThemeProvider as SThemeProvider } from "@xstyled/styled-components";
import { rpxTransformers } from "@xstyled/system";

interface Props {
  theme?: object;
}

const ThemeProvider: FunctionComponent<Props> = ({ children, theme = {} }) => {
  const mergedTheme = Object.assign(
    {
      transformers: {
        ...rpxTransformers,
      },
    },

    theme
  );
  return <SThemeProvider theme={mergedTheme}>{children}</SThemeProvider>;
};

export default ThemeProvider;
