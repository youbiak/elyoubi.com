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
  colors: {
    brand: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
  },
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
