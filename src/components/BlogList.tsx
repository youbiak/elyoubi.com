import {
  Heading,
  Text,
  useColorModeValue,
  VStack,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {
  posts: {
    id: string;
    title: string;
    date: string;
  }[];
};

const BlogList = ({ posts }: Props) => {
  const hoverBg = useColorModeValue("gray.100", "gray.700");
  return (
    <VStack alignItems="space-between" w="full" mt="16">
      {posts.map(({ id, title, date }) => (
        <NextLink href={`/blog/${id}`} passHref key={id}>
          <Stack
            flexDirection={["column", "row"]}
            p={4}
            _hover={{
              bg: hoverBg,
              transform: "scale(1.025, 1.025)",
            }}
            transition={"all 0.2s ease-in-out"}
            borderRadius="md"
            spacing={0}
            justifyContent={"space-between"}
            alignItems="flex-start"
            cursor="pointer"
          >
            <Heading size="md">{title}</Heading>
            <Text as="time" dateTime={date} mt={0}>
              {date}
            </Text>
          </Stack>
        </NextLink>
      ))}
    </VStack>
  );
};

export default BlogList;
