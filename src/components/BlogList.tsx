import {
  Box,
  Heading,
  HStack,
  ListItem,
  OrderedList,
  UnorderedList,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const BlogList = () => {
  const hoverBg = useColorModeValue("gray.100", "gray.700");
  return (
    <VStack alignItems="stretch" mt="16">
      <Heading size={"lg"}>Recent blog posts</Heading>
      <HStack
        p={4}
        _hover={{
          bg: hoverBg,
          transform: "scale(1.025, 1.025)",
        }}
        transitionDuration="slow"
        transitionProperty="all"
        transitionTimingFunction="ease-out"
        borderRadius="md"
        justifyContent={"space-between"}
        cursor="pointer"
      >
        <Heading size="md">How I built my personal website</Heading>
        <time dateTime="2021-11-11">Nov 11, 2021</time>
      </HStack>
      <HStack
        p={4}
        _hover={{
          bg: hoverBg,
          transform: "scale(1.025, 1.025)",
        }}
        transitionDuration="slow"
        transitionProperty="all"
        transitionTimingFunction="ease-out"
        borderRadius="md"
        justifyContent={"space-between"}
        cursor="pointer"
      >
        <Heading size="md">How to build a GraphQL API using TypeScript</Heading>
        <time dateTime="2021-11-11">Nov 11, 2021</time>
      </HStack>
      <HStack
        p={4}
        _hover={{
          bg: hoverBg,
          transform: "scale(1.025, 1.025)",
        }}
        transitionDuration="slow"
        transitionProperty="all"
        transitionTimingFunction="ease-out"
        borderRadius="md"
        justifyContent={"space-between"}
        cursor="pointer"
      >
        <Heading size="md">How to handle autolayout in swift</Heading>
        <time dateTime="2021-11-11">Nov 11, 2021</time>
      </HStack>
    </VStack>
  );
};

export default BlogList;
