import {
  extendTheme,
  theme as base,
  ThemeConfig,
  useColorModeValue,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `Poppins, ${base.fonts.heading}`,
    body: `Lato, ${base.fonts.body}`,
  },
  lineHeights: {
    base: 1.75,
  },

  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("#f0efeb", "#0a0c10")(props),
        letterSpacing: "1px",
      },
    }),
  },
});

export default theme;
