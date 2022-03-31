import NextImage, { ImageProps as NextImageProps } from "next/image";
import { chakra, ImageProps as ChakraImageProps } from "@chakra-ui/react";

// related: https://github.com/chakra-ui/chakra-ui/discussions/2475#discussioncomment-229471

type Props = NextImageProps & Omit<ChakraImageProps, "src">;

const MagicImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "layout",
      "src",
      "alt",
      "placeholder",
      "width",
      "height",
      "priority",
    ].includes(prop),
});

export default MagicImage;
