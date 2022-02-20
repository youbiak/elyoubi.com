import { HStack, Heading, IconButton } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";

const Header = () => (
  <HStack bg="red.100" width="full" justifyContent={"space-between"}>
    <Heading>youbicode.</Heading>
    <HStack justifyContent={"center"} py="3">
      <Heading>Home</Heading>
      <Heading>Blog</Heading>
      <Heading>Projects</Heading>
      <Heading>About</Heading>
      <IconButton aria-label="toggle theme" icon={<IoMoon />} variant="ghost" />
    </HStack>
  </HStack>
);

export default Header;
