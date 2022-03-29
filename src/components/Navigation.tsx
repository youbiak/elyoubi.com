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
import { useRouter } from "next/router";

const LINKS = [
  "Blog",
  "Projects",
  "Uses",
  "Books",
  "Photography",
  // "Investing",
  // "Notes",
];

const Navigation = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const { asPath } = useRouter();
  console.log(asPath);
  return (
    <Stack
      as="nav"
      justifyContent={"space-between"}
      alignItems="center"
      direction={["column", "row"]}
      py="3"
      fontSize="md"
    >
      <NextLink href="/" passHref>
        <Heading as={Link} size="md">
          elyoubi.
        </Heading>
      </NextLink>
      <HStack alignItems="center" flexWrap={"wrap"} spacing={0}>
        {LINKS.map((page) => {
          const path = `/${page.toLowerCase()}`;
          return (
            <NextLink href={path} passHref key={page}>
              <Button
                as={Link}
                size="sm"
                variant={asPath === path ? "solid" : "ghost"}
                transition={"all 0.2s ease-in-out"}
                _hover={{
                  background: "gray.100",
                  color: "purple.700",
                  textDecoration: "none",
                }}
              >
                {page}
              </Button>
            </NextLink>
          );
        })}
      </HStack>
      <HStack>
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

export default Navigation;
