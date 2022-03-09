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
  Stack,
} from "@chakra-ui/react";

const BlogList = () => {
  const hoverBg = useColorModeValue("gray.100", "gray.700");
  return (
    <VStack alignItems="stretch" mt="16">
      <Heading size={"lg"}>Recent blog posts</Heading>
      <Stack
        flexDirection={["column", "row"]}
        p={4}
        _hover={{
          bg: hoverBg,
          transform: "scale(1.025, 1.025)",
        }}
        transitionDuration="slow"
        transitionProperty="all"
        transitionTimingFunction="ease-out"
        borderRadius="md"
        spacing={0}
        justifyContent={"space-between"}
        alignItems="flex-start"
        cursor="pointer"
      >
        <Heading size="md">How I built my personal website</Heading>
        <Text as="time" dateTime="2021-11-11" mt={0}>
          Nov 11, 2021
        </Text>
      </Stack>
      <Stack
        flexDirection={["column", "row"]}
        p={4}
        _hover={{
          bg: hoverBg,
          transform: "scale(1.025, 1.025)",
        }}
        transitionDuration="slow"
        transitionProperty="all"
        transitionTimingFunction="ease-out"
        borderRadius="md"
        spacing={0}
        justifyContent={"space-between"}
        alignItems="flex-start"
        cursor="pointer"
      >
        <Heading size="md">How to build a GraphQL API using TypeScript</Heading>
        <Text as="time" dateTime="2021-11-11" mt={0}>
          Nov 11, 2021
        </Text>
      </Stack>
      <Stack
        flexDirection={["column", "row"]}
        p={4}
        _hover={{
          bg: hoverBg,
          transform: "scale(1.025, 1.025)",
        }}
        transitionDuration="slow"
        transitionProperty="all"
        transitionTimingFunction="ease-out"
        borderRadius="md"
        spacing={0}
        justifyContent={"space-between"}
        alignItems="flex-start"
        cursor="pointer"
      >
        <Heading size="md">How to handle autolayout in swift</Heading>
        <Text as="time" dateTime="2021-11-11" mt={0}>
          Nov 11, 2021
        </Text>
      </Stack>
    </VStack>
  );
};

export default BlogList;
