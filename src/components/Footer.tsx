import NextLink from "next/link";
import { Divider, Link, SimpleGrid, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <VStack py={8} spacing={8}>
      <Divider />
      <SimpleGrid columns={{ base: 1, md: 3 }} w="full">
        <VStack alignItems="flex-start">
          <NextLink href="/" passHref>
            <Link>Home</Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link>blog</Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link>projects</Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link>about</Link>
          </NextLink>
        </VStack>
      </SimpleGrid>
    </VStack>
  );
};
export default Footer;
