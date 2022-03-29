import { extendTheme, theme as base, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `Poppins, ${base.fonts.heading}`,
    body: `Lato, ${base.fonts.body}`,
  },
});

export default theme;
