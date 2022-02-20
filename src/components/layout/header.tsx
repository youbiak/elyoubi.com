import { HStack, Spacer, Box, Heading } from "@chakra-ui/react";

const Header = () => (
  <HStack bg="red.100" width="full" justifyContent={"space-between"}>
    <Heading>youbicode.</Heading>
    <HStack as="ul" listStyleType={"none"} spacing={10}>
      <li>Home</li>
      <li>Blog</li>
      <li>Projects</li>
      <li>About</li>
    </HStack>
  </HStack>
);

export default Header;
