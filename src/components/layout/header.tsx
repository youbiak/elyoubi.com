import {
  Stack,
  HStack,
  Heading,
  IconButton,
  useColorMode,
  Button,
  Link,
} from "@chakra-ui/react";
import { IoMoon, IoSunny } from "react-icons/io5";
import NextLink from "next/link";

const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  return (
    <Stack
      as="nav"
      width="full"
      justifyContent={"space-between"}
      alignItems="center"
      direction={["column", "row"]}
      py="3"
    >
      <NextLink href="/" passHref>
        <Heading as={Link} size="md">
          elyoubi.
        </Heading>
      </NextLink>
      <HStack alignItems="center">
        <NextLink href="blog" passHref>
          <Button as={Link} size="sm" variant="ghost">
            Blog
          </Button>
        </NextLink>
        <NextLink href="projects" passHref>
          <Button as={Link} size="sm" variant="ghost">
            Projects
          </Button>
        </NextLink>
        <NextLink href="about" passHref>
          <Button as={Link} size="sm" variant="ghost">
            About
          </Button>
        </NextLink>
        <IconButton
          size="sm"
          variant="ghost"
          aria-label="toggle theme"
          icon={isDarkMode ? <IoSunny /> : <IoMoon />}
          onClick={toggleColorMode}
        />
      </HStack>
    </Stack>
  );
};

export default Header;
