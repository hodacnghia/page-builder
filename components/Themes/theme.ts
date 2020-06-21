const breakpoints: any = ["0px", "576px", "768px", "992px", "1200px", "1600px"];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];

const mediaQueries = {
  xs: `@media screen and (min-width: ${breakpoints[0]})`,
  sm: `@media screen and (min-width: ${breakpoints[1]})`,
  md: `@media screen and (min-width: ${breakpoints[2]})`,
  lg: `@media screen and (min-width: ${breakpoints[3]})`,
  xl: `@media screen and (min-width: ${breakpoints[4]})`,
  xxl: `@media screen and (min-width: ${breakpoints[5]})`,
};

const defaultTheme = {
  breakpoints,
  mediaQueries,
  space: [
    "0px",
    "4px",
    "8px",
    "16px",
    "24px",
    "48px",
    "96px",
    "144px",
    "192px",
    "240px",
  ],
  fontSizes: [
    "0px",
    "10px",
    "12px",
    "14px",
    "16px",
    "20px",
    "24px",
    "32px",
    "36px",
    "64px",
    "72px",
  ],
  colors: {
    primary: "#16315A",
  },
};

export { defaultTheme };
