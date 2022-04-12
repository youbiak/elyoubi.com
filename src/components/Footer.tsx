import NextLink from "next/link";
import { Divider, Link, SimpleGrid, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <VStack py={8} spacing={8}>
      <Divider />
      <SimpleGrid columns={{ base: 1, md: 3 }} w="full">
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
    </VStack>
  );
};
export default Footer;
