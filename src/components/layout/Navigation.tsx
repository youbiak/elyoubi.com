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

type Link = {
  href: string;
  label: string;
};

const LINKS: Link[] = [
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/uses", label: "Uses" },
  { href: "/books", label: "Books" },
  { href: "/photography", label: "Photography" },
  { href: "/investing", label: "Investing" },
  { href: "/notes", label: "Notes" },
];

const Navigation = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  return (
    <Stack
      as="nav"
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
      <HStack alignItems="center" flexWrap={"wrap"}>
        {LINKS.map(({ href, label }) => (
          <NextLink href={href} passHref key={href}>
            <Button
              as={Link}
              size="sm"
              variant="ghost"
              _hover={{
                background: "white",
                color: "teal.500",
                textDecoration: "none",
              }}
            >
              {label}
            </Button>
          </NextLink>
        ))}
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
