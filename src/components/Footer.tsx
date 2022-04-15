import NextLink from "next/link";
import { Divider, Link, SimpleGrid, VStack, Text } from "@chakra-ui/react";

const Footer = () => {
  var date = new Date();
  return (
    <VStack py={8} spacing={8} alignItems="flex-start">
      <Divider />
      <SimpleGrid columns={{ base: 2, md: 3 }} w="full">
        <NextLink href="/" passHref>
          <Link>Home</Link>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Link>Blog</Link>
        </NextLink>
        <NextLink href="/projects" passHref>
          <Link>Projects</Link>
        </NextLink>
        <NextLink href="/uses" passHref>
          <Link>Uses</Link>
        </NextLink>
        <NextLink href="/books" passHref>
          <Link>Books</Link>
        </NextLink>
        <NextLink href="/photography" passHref>
          <Link>Photography</Link>
        </NextLink>
      </SimpleGrid>
      <Text>© {date.getFullYear()} El Youbi Akram</Text>
    </VStack>
  );
};
export default Footer;
