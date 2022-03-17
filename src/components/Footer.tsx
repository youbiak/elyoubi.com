import { useRouter } from "next/router";
import NextLink from "next/link";
import { Divider, Link, SimpleGrid, VStack } from "@chakra-ui/react";

// TODO: array of links and map on them to select active page
const Footer = () => {
  const { asPath } = useRouter();
  return (
    <VStack pb={8} spacing={8}>
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
