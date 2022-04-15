import {
  Stack,
  HStack,
  Heading,
  IconButton,
  useColorMode,
  Button,
  Link,
  useColorModeValue,
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
  const { toggleColorMode } = useColorMode();
  const ThemeIcon = useColorModeValue(IoMoon, IoSunny);
  const { asPath } = useRouter();
  const hoverBg = useColorModeValue("gray.200", "gray.900");
  return (
    <Stack
      as="nav"
      justifyContent={"space-between"}
      alignItems="center"
      direction={["column", "column", "row"]}
      py="3"
      letterSpacing={"normal"}
    >
      <NextLink href="/" passHref>
        <Heading as={Link} size="md">
          elyoubi.
        </Heading>
      </NextLink>
      <HStack alignItems="center" flexWrap={"wrap"} spacing={0}>
        {LINKS.map((page) => {
          const path = `/${page.toLowerCase()}`;
          const isActive = asPath.includes(path);
          return (
            <NextLink href={path} passHref key={page}>
              <Button
                as={Link}
                size="sm"
                colorScheme={isActive ? "brand" : "gray"}
                variant={isActive ? "solid" : "ghost"}
                transition={"all 0.2s ease-in-out"}
                _hover={{
                  background: !isActive ? hoverBg : "",
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
          icon={<ThemeIcon />}
          onClick={toggleColorMode}
        />
      </HStack>
    </Stack>
  );
};

export default Navigation;
